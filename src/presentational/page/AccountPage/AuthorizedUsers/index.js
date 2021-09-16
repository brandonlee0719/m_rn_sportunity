import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Alert, Text, Modal, TouchableOpacity, Image, StyleSheet, Switch, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay'
import cloneDeep from 'lodash/cloneDeep';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import Button from '../../../Button/roundedButton';

import icons from 'sportunity/src/theme/images';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import AuthorizedUsersModal from './AuthorizedUsersModal'
import UpdateUserMutation from './Mutations/UpdateUserManagersMutation'
import styles from './style'
import { updateStepsCompleted } from '../../../../action/profileActions';

class AuthorizedUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            isAnyChangedMade: false
        };
    }

    componentDidMount = () => {
      if (this.props.forceOpen) {
        this._handleOpen();
      }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.forceOpen !== this.props.forceOpen && this.props.forceOpen) {
            this._handleOpen();
        }
    }

    componentWillReceiveProps = (nextProps) => {
    }

    _handleOpen = () => {
        this.setState({
            isModalVisible: true
        })
    }

    _handleClose = () => {
        if (this.state.isAnyChangedMade) {
            Alert.alert(
                I18n.t('accountAuthorizedUsersLeave'),
                I18n.t('accountAuthorizedUsersLeaveWithoutSaving'),
                [
                    {text: I18n.t('accountAuthorizedUsersLeaveYes'), onPress: () => {
                        this.setState({
                            isModalVisible: false,
                            isAnyChangedMade: false
                        })
                    }},
                    {text: I18n.t('accountAuthorizedUsersLeaveNo'), onPress: () => {return;}}
                ]
            )
        }
        else 
            this.setState({
                isModalVisible: false,
                isAnyChangedMade: false
            })
    }

    _handleSaveAuthorizedUsers = (authorized_managers) => {
        let params = {
            userID: this.props.user.id,
            user: {
                authorized_managers: authorized_managers.map(authorized_manager => (
                    {
                        user: authorized_manager.user.id,
                        authorization_level: authorized_manager.authorization_level
                    }
                ))
            }
        } ;
        UpdateUserMutation.commit(params,
        () => {
            Toast.show(I18n.t('accountAuthorizedUsersSavedSuccessful'));
            this.setState({
                isModalVisible: false
            })
            this.updateTutorialSteps();
        },
        (error) => {
            Toast.show(I18n.t('accountAuthorizedUsersSavedFailed')); 
        })
    }

    _handleChangeAnything = () => {
        this.setState({
            isAnyChangedMade: true
        })
    }

    updateTutorialSteps = () => {
        const { tutorialSteps, updateStepsCompleted } = this.props;
        let newTutorialSteps = cloneDeep(tutorialSteps);
    
        newTutorialSteps['shareAccessStep'] = true;
        updateStepsCompleted(newTutorialSteps);
    }
    

    render() {

        return (
            <View>
                <AuthorizedUsersModal 
                    user={this.props.user}
                    viewer={this.props.viewer}
                    isModalVisible={this.state.isModalVisible}
                    onCloseModal={this._handleClose}
                    onChangeAnything={this._handleChangeAnything}
                    onSave={this._handleSaveAuthorizedUsers}
                    />
                <TouchableOpacity
                    style={styles.container}
                    onPress={this._handleOpen}
                    >
                    <View style={styles.subContainer}>
                        <Text style={styles.text}>
                            {I18n.t('accountAuthorizedUsers')}
                        </Text>
                        {this.props.user && this.props.user.authorized_managers && this.props.user.authorized_managers.length > 0
                            ? this.props.user.authorized_managers.length > 1 
                                ? <Text style={styles.select}>
                                    {this.props.user.authorized_managers.length + ' ' + I18n.t('accountAuthorizedUsersSelectedUsers')}
                                  </Text>
                                : <Text style={styles.select}>
                                    {I18n.t('accountAuthorizedUsersSelectedUser')}
                                  </Text>
                            : <Text style={styles.select}>
                                {I18n.t('accountAuthorizedUsersNoSelectedUser')}
                              </Text>
                        }
                    </View>
                    <Image
                        style={styles.icon}
                        source={icons.right_arrow_blue}
                        />
                </TouchableOpacity>
                
            </View>
        )
    }
}

const stateToProps = (state) => ({
    tutorialSteps: state.sportunityProfile.tutorialSteps,
});

const dispatchToProps = (dispatch) => ({
    updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
});

const ReduxContainer = connect(
    stateToProps,
    dispatchToProps,
)(AuthorizedUsers);

export default createFragmentContainer(ReduxContainer, {
    viewer: graphql`
        fragment AuthorizedUsers_viewer on Viewer {
            id
            ...AuthorizedUsersModal_viewer
        }
    `,
    user: graphql`
        fragment AuthorizedUsers_user on User {
            id
            authorized_managers {
                user {
                    id
                    pseudo
                    avatar
                }
                authorization_level
            }
            ...AuthorizedUsersModal_user
        }
    `
});

I18n.fallbacks = true
I18n.translations = translations;
