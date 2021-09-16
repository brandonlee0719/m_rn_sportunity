import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Alert, Text, Modal, TouchableOpacity, Image, StyleSheet, Switch, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import {
    createRefetchContainer,
  graphql,
} from 'react-relay'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import ModalPicker from 'react-native-modal-selector';

import CreateProfilePage from 'sportunity/src/presentational/page/CreateProfilePage/CreateProfilePage.js';
import Button from '../../Button/roundedButton';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';
import translations from 'sportunity/src/translations.js';
import { Header } from '../../Header';
import DeleteUserMutation from './DeleteUserMutation'
import { creatingSubAccount } from 'sportunity/src/action/createProfileActions';
import { resetTutorialSteps } from 'sportunity/src/action/profileActions';

class SubaccountsManagment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
            newSubAccountClicked: false
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

    _handleOpen = () => {
        this.setState({isModalVisible: true})        
    }

    _handleClose = () => {
        if (this.state.newSubAccountClicked) {
            this.setState({newSubAccountClicked: false})
        }
        else {
            this.setState({isModalVisible: false})
        }
    }

    switchToSubAccountCreation = () => {
        this.props.creatingSubAccount(this.props.user.profileType)
        this.setState({ newSubAccountClicked: true })
        this.setState({createChild: true, selectedOption: 0})
    }
    
    closeChildCreationModal = () => {
        this.setState({ newSubAccountClicked: false })
        this.props.relay.refetch()
    }

    handleDeleteUser = (user) => {
        let params = {
            userId: user.id,
          } 

        DeleteUserMutation.commit(params,
        () => {
            Toast.show(I18n.t('updateSuccess'));
        },
        (error) => {
            Toast.show(I18n.t('updateFailed'));
        })
    }


    render() {
        const {user} = this.props
        return <TouchableOpacity
            style={styles.container}
            onPress={this._handleOpen}
        >
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={this.state.isModalVisible}
                onRequestClose={this._handleClose}
            >
                <View style={styles.modalContainer}>
                    <Header 
                        onPressFunc={this._handleClose}
                        imgSrc={icons.down_arrow}
                        text={I18n.t('accountMySubAccountsManagement')}
                    />
                    {this.state.newSubAccountClicked 
                    ?   <CreateProfilePage 
                            viewer={this.props.viewer}
                            creatingFromCircle={true}
                            closeChildCreationModal={this.closeChildCreationModal}
                        />
                    :   <ScrollView contentContainerStyle={styles.content}>
                            {user.subAccounts && user.subAccounts.length > 0 && 
                                <View>
                                    {user.subAccounts.map((subaccount, index) => (
                                        <View key={index} style={styles.row}>
                                            <View style={styles.rowLeft}>
                                                <View style={styles.photoContainer}>
                                                    <Image source={{ uri: subaccount.avatar }} style={styles.thumbProfile} />
                                                </View>
                                                <Text style={styles.rowText}>
                                                    {subaccount.pseudo}
                                                </Text>
                                            </View>
                                            <TouchableOpacity style={styles.deleteItem} onPress={() => this.handleDeleteUser(subaccount)}>
                                                <Image resizeMode="contain" style={styles.rightButton} source={icons.close_x} />
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </View>
                            }

                            <View style={{width: '100%'}}>
                                <Button onPress={this.switchToSubAccountCreation}>
                                    {user.profileType === 'PERSON'
                                        ? I18n.t('drawerAddChild')
                                        : I18n.t('drawerAddTeam')
                                    }
                                </Button>
                            </View>
                        </ScrollView>
                    }
                </View>
            </Modal>

            <View style={styles.subContainer}>
                <Text style={styles.text}>
                    {user.profileType === 'PERSON'
                    ? I18n.t('accountMySubAccountsChildren')
                    : I18n.t('accountMySubAccountsTeams')
                    }
                </Text>
                <Text style={styles.select}>
                    {user.subAccounts && user.subAccounts.length > 0
                    ?   user.subAccounts.length > 1
                        ?   user.subAccounts.length + I18n.t('accountMySubAccountsCreateds')
                        :   user.subAccounts.length + I18n.t('accountMySubAccountsCreated')
                    :   I18n.t('accountMySubAccountsNone')
                    }
                </Text>
            </View>
            <Image
                style={styles.icon}
                source={icons.right_arrow_blue}
            />

        </TouchableOpacity>
    }
}


const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
    creatingSubAccount: bindActionCreators(creatingSubAccount, dispatch),
    resetTutorialSteps: bindActionCreators(resetTutorialSteps, dispatch),
});

const ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(SubaccountsManagment);


export default createRefetchContainer(ReduxContainer, {
    viewer: graphql`
        fragment SubaccountsManagment_viewer on Viewer {
            id 
            ...CreateProfilePage_viewer
        }
    `,
    user: graphql`
      fragment SubaccountsManagment_user on User {
          id
          subAccounts {
              id
              pseudo
              avatar
          }
          profileType
      }
    `
}, graphql`
    query SubaccountsManagmentRefetchQuery {
        viewer {
            ...SubaccountsManagment_viewer
            me {
                ...SubaccountsManagment_user
            }
        }
    }
`);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
    marginTop: 3
  },
  modalContainer: {
    flex: 1,
    position: 'relative'
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
  inputRow: {
    flexDirection: 'column',
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    marginBottom: metrics.baseMargin
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.baseMargin /2
  },
  subTitleText: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  labelText: {
    color: colors.darkBlue,
    fontWeight: '500',
    flex: 4
  },
  switchButton: {
    flex: 1
  },
  explanationText: {
    fontSize: fonts.size.small,
    marginTop: metrics.baseMargin,
    fontStyle: 'italic'
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: metrics.doubleBaseMargin,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
  formInputLabel: {
    color: colors.darkBlue,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
    marginLeft: 10,
    backgroundColor: 'transparent',
  },
  input: {
    color: colors.darkGrey,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 40,
    maxHeight: 40,
  },
  content: {
    flexDirection: 'column',
    padding: metrics.baseMargin,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    photoContainer: {
        shadowRadius: 20,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        marginRight: metrics.baseMargin
    },
    thumbProfile: {
        width: metrics.images.medium,
        height: metrics.images.medium,
        borderRadius: metrics.images.mediumRadius,
    },
    rowText: {
        color: colors.skyBlue,
        fontWeight: '500'
    },
    deleteItem: {
        marginLeft: metrics.baseMargin,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightButton: {
        
}
});

I18n.fallbacks = true
I18n.translations = translations;
