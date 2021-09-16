import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Alert, Text, Modal, TouchableOpacity, Image, StyleSheet, Switch, TextInput } from 'react-native';
import Toast from 'react-native-simple-toast';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { Header } from '../../../../Header';

import { colors, images } from 'sportunity/src/theme';
import Button from '../../../../Button/roundedButton';
import icons from 'sportunity/src/theme/images';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import SearchModule from '../../../SearchModule';

import styles from './style'

class AuthorizedUsersModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddUserModalVisible: false,
      authorized_managers: []
    };
  }

  componentDidMount = () => {
    if (this.props.user && this.props.user.authorized_managers && this.props.user.authorized_managers.length > 0) {
      this.setState({
        authorized_managers: this.props.user.authorized_managers.map(authorized_manager => (
          {
            user: {
              id: authorized_manager.user.id,
              pseudo: authorized_manager.user.pseudo,
              avatar: authorized_manager.user.avatar
            },
            authorization_level: authorized_manager.authorization_level
          }
        ))
      })
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.isModalVisible !== nextProps.isModalVisible) {
      this.setState({
        authorized_managers: nextProps.user.authorized_managers.map(authorized_manager => (
          {
            user: {
              id: authorized_manager.user.id,
              pseudo: authorized_manager.user.pseudo,
              avatar: authorized_manager.user.avatar
            },
            authorization_level: authorized_manager.authorization_level
          }
        ))
      })
    }
  }

  _handleOpen = () => {
    this.setState({
      isAddUserModalVisible: true
    })
  }

  _handleClose = () => {
    this.setState({
      isAddUserModalVisible: false
    })
  }

  _handleAddUser = (user) => {
    if (this.props.user && this.props.user.authorized_managers && this.props.user.authorized_managers.length > 0 && this.props.user.authorized_managers.findIndex(authorized_manager => authorized_manager.user.id === user.id) >= 0) {
      Toast.show(I18n.t('accountAuthorizedUsersAddUserAlreadyThere'))
      return ;
    }
    else {
      let authorized_managers = this.state.authorized_managers ;
      authorized_managers.push({
        user: {
          id: user.id,
          pseudo: user.pseudo,
          avatar: user.avatar
        },
        authorization_level: 'ADMIN'
      })
      this.setState({
        authorized_managers,
        isAddUserModalVisible: false
      })
      this.props.onChangeAnything();
    }    
  }

  _handleRemoveUser = (id) => {
    let authorized_managers = this.state.authorized_managers;
    let index = authorized_managers.findIndex(authorized_manager => {
      if (authorized_manager.user.id === id) 
        return true; 
      else
        return false ;
    })

    authorized_managers.splice(index, 1);
    this.setState({
      authorized_managers
    })
    this.props.onChangeAnything();
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.isModalVisible}
        onRequestClose={this.props.onCloseModal}
      >
        {this.state.isAddUserModalVisible &&
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.isAddUserModalVisible}
            onRequestClose={this._handleClose}
          >
            <SearchModule
              viewer={this.props.viewer}
              onClose={this._handleClose}
              openOnTab={"People"}
              hideTabs={["Activities"]}
              showMembersOnSelectCircle={true}
              //userType={circle.type === 'ADULTS' || circle.type === 'CHILDREN' ? 'PERSON' : circle.type === 'TEAMS' || circle.type === 'CLUBS' ? 'ORGANIZATION' : 'BUSINESS'}
              //types={circle.type === 'ADULTS' || circle.type === 'CHILDREN' ? ['ADULTS'] : circle.type === 'TEAMS' || circle.type === 'CLUBS' ? ['TEAMS', 'CLUBS'] : ['BUSINESS']}
              circleTypes={['MY_CIRCLES', 'CIRCLES_I_AM_IN', 'CHILDREN_CIRCLES']}
              queryOnOpen={true}
              selectUser={this._handleAddUser}
            />
          </Modal>
        }
        <View>
          <Header 
            onPressFunc={this.props.onCloseModal}
            imgSrc={icons.down_arrow}
            text={I18n.t('accountAuthorizedUsers')}
          />
          {/* <View style={styles.header}>
            <TouchableOpacity
              onPress={this.props.onCloseModal}
              style={styles.closeIcon}
            >
              <Image
                source={icons.down_arrow}
              />
            </TouchableOpacity>
            <Text style={styles.title}>
              {I18n.t('accountAuthorizedUsers')}
            </Text>
          </View> */}
          <ScrollView contentContainerStyle={styles.content}>
            <TouchableOpacity
              style={styles.container}
              onPress={this._handleOpen}
              >
              <View style={styles.subContainer}>
                <Text style={styles.text}>
                  {I18n.t('accountAuthorizedUsersAddUser')}
                </Text>
              </View>
              <Image
                style={styles.icon}
                source={icons.right_arrow_blue}
                />
            </TouchableOpacity>
            {this.state.authorized_managers.length > 0 &&
              this.state.authorized_managers.map((authorized_manager, index) => (
                <View key={index} style={styles.row}>
                  <View style={styles.rowLeft}>
                    <View style={styles.photoContainer}>
                        <Image source={{ uri: authorized_manager.user.avatar }} style={styles.thumbProfile} />
                    </View>
                    <Text style={styles.rowText}>
                      {authorized_manager.user.pseudo}
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.deleteItem} onPress={() => this._handleRemoveUser(authorized_manager.user.id)}>
                    <Image resizeMode="contain" style={styles.rightButton} source={images.close_x} />
                  </TouchableOpacity>
                </View>
              ))
            }
            <View style={{flex: 1, width: '100%'}}>
              <Button
                onPress={() => this.props.onSave(this.state.authorized_managers)}>
                {I18n.t('accountSaveButton')}
              </Button>
            </View>
          </ScrollView>  
        </View>
      </Modal>
    )
  }
}

export default createFragmentContainer(AuthorizedUsersModal, {
    viewer: graphql`
        fragment AuthorizedUsersModal_viewer on Viewer {
            id
            ...SearchModule_viewer
        }
    `,
    user: graphql`
        fragment AuthorizedUsersModal_user on User {
            id
            authorized_managers {
              user{
                id
                pseudo
                avatar
              }
              authorization_level
          }
        }
    `
});

I18n.fallbacks = true
I18n.translations = translations;
