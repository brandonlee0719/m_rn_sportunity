import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AsyncStorage, Platform, Linking } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'react-native-side-menu'
import { withNavigation } from 'react-navigation';

import { images } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import firebase from 'react-native-firebase';

import NavigationService from '../../NavigationService'

import DrawerContent from './DrawerContent';
import {backendUrl} from 'sportunity/src/createRelayEnvironment';
import * as globals from '../../lib/globalsjs/globals'
import { setAppBadgeNumber } from '../../PushController';

import { updateUserLocation } from 'sportunity/src/action/localeActions.js';
import { resetTutorialSteps } from '../../action/profileActions';

import styles from './style';

class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    }
  }

  async componentDidMount() {
    globals.register({ name: 'openDrawer', data: {openDrawer: this.openDrawer}});
  }

  openDrawer = () => {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  onClose = isOpen => {
    if (!isOpen) {
      this.setState({drawerOpen: false})
    }
  }

  componentWillUnMount = () => {
    //Linking.removeEventListener('url', this.handleOpenURL);
    globals.unregister({ name: 'openDrawer' })
  }

  handleOpenURL = (event) => {
    this.navigate(event.url);
  }

  navigate = (url) => {
    const { navigate } = NavigationService;
    if (url) {
      let splitted = url.split("/");
      let type = splitted[splitted.length - 2];
      let id = splitted[splitted.length - 1];
      if (type === "sportunity")
        navigate('eventdetail', { id: id});
      else if (type === "chat")
        navigate('chatdetail', {id :id});
      else if (type === "profile")
        navigate('profile', {userId: id});
      else if (type === "circle")
        navigate('circledetail', { circleId: id, hideNavBar:true });
    }
  } 

  switchScene = (target, params) => {
    const { navigate } = NavigationService;
    this.setState({drawerOpen: false})
    navigate(target, params)
    //NavigationActions[target]({ type: 'push' });
  }

  logoutUser = async () => {
    let userToken = await AsyncStorage.getItem('token');
    let neverShowSwipeTutorialAgain = await AsyncStorage.getItem('neverShowSwipeTutorialAgain');

    try {
      let response;
      firebase.messaging().getToken().then(tokenFirebase => {
        console.log('TOKEN', tokenFirebase);
        this.removeDeviceToken(tokenFirebase, userToken)
      });
    } catch (err) {
      Alert.alert(I18n.t('alert'), err);
      response = null;
    }

    this.props.updateUserLocation()

    let token = '';
    this.props.updateToken(token);
    this.props.updateSuperToken(token);
    this.props.updateUserToken(token);
    this.props.resetTutorialSteps();
    
    if (neverShowSwipeTutorialAgain) {
      AsyncStorage.setItem('neverShowSwipeTutorialAgain', JSON.stringify(true));
    }

    this.setState({drawerOpen: false})


    NavigationService.actions.reset({
      key: null,
      index: 0,
      actions: [NavigationService.replace('LoggedInPage')],
    });
    
    setAppBadgeNumber(0);
  }

  removeDeviceToken = async (tokenFirebase, token) => {
    if(token) {
      if (token && tokenFirebase) {
        response = await fetch(backendUrl + "/auth/removeDeviceToken", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            devicetoken: tokenFirebase,
          }),
        })
        .then((response) => {console.log("response",response);return response.json()})
      }
    } else {
      console.log('no FIR token')
    }
  }

  render() {
    
    return (
      <Drawer
        menuPosition="right"
        isOpen={this.state.drawerOpen}
        onChange={this.onClose}
        menu={
          <DrawerContent
            switchScene={this.switchScene}
            logoutUser={this.logoutUser}
            isLoggedIn={this.props.isLoggedIn}
            isDrawerOpen={this.state.drawerOpen}
            updateToken={this.props.updateToken}
            updateSuperToken={this.props.updateSuperToken}
            onCloseDrawer={this.onClose}
            token={this.props.token}
            updateLanguage={this.props.updateLanguage}
          />
        }
        styles={[styles, this.state.drawerOpen ? {opacity: 0} : {}]}
        onOpen={() => this.setState({drawerOpen: true})}
        onClose={() => this.setState({drawerOpen: false})}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        acceptPan={false}
        captureGestures
        tweenHandler={ratio => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        {this.props.children}
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = {
  updateToken: PropTypes.func.isRequired,
  updateSuperToken: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
  updateUserLocation: bindActionCreators(updateUserLocation, dispatch),
  resetTutorialSteps: bindActionCreators(resetTutorialSteps, dispatch),
});

export default connect(stateToProps, dispatchToProps)(NavigationDrawer); //withNavigation(NavigationDrawer);
