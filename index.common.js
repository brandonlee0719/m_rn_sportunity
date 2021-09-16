import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { AppRegistry, AsyncStorage , View, NetInfo, Platform, Text, StyleSheet } from 'react-native';
import codePush from "react-native-code-push";  
import * as firebase from 'firebase';
import SplashScreen from 'react-native-splash-screen';

import {backendUrl} from 'sportunity/src/createRelayEnvironment';
import NetworkLayer from './src/NetworkLayer';
import RelayStore from './src/RelayStore'
import App from './src/App'
import PushController from './src/PushController';
import store from './src/store';
import NavigationService from 'sportunity/src/NavigationService';
import {initNetworkLayer} from 'sportunity/src/createRelayEnvironment';
import UpdatePage from 'sportunity/src/presentational/Update'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA_Sru-k3COblApmEQGMnpxqx2kOFB8nFk',
    authDomain: 'sportunity-151910.firebaseapp.com',
    databaseURL: 'https://sportunity-151910.firebaseio.com',
    storageBucket: 'sportunity-151910.appspot.com',
  });
}

class Sportunity extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      token: '',
      tokenFirebase: '',
      hasOpenInitialURL: false,
      language: 'en',
      isUpdating: false,
      updateProgress: 0,
      updateStatus: null,
    };
    //Text.defaultProps.allowFontScaling=false;
  }

  componentDidMount() {
    //AsyncStorage.removeItem('neverShowAppIntroAgain')
    console.disableYellowBox = true;
    SplashScreen.hide();
    this.getToken();
    
    NetInfo.addEventListener(
      'change',
      this.handleConnectionInfoChange
    );
  }

  updateHasOpenInitialURL = (value) => this.setState({hasOpenInitialURL: value})

  componentWillUnmount() {
    NetInfo.removeEventListener(
      'change',
      this.handleConnectionInfoChange
    );
  }

  handleConnectionInfoChange = (connectionInfo) => {
    connectionInfo === 'none' && alert('Your internet connection is offline! Please fix your internet connection and restart the app.');
  };

  codePushStatusDidChange(status) {
    switch(status) {
      case codePush.SyncStatus.CHECKING_FOR_UPDATE:
          console.log("Checking for updates.");
          break;
          case codePush.SyncStatus.DOWNLOADING_PACKAGE:
          console.log("Downloading package.");
          this.setState({isUpdating: true, updateStatus: 'DOWNLOADING_PACKAGE'})
          break;
      case codePush.SyncStatus.INSTALLING_UPDATE:
          console.log("Installing update.");
          this.setState({updateStatus: 'INSTALLING_UPDATE'})
          break;
      case codePush.SyncStatus.UP_TO_DATE:
          console.log("Up-to-date.");
          // this.setState({isUpdating: false, updateStatus: 'UP_TO_DATE'})
          // setTimeout(() => this.shouldDisplayAppIntro(), 500);
          break;
      case codePush.SyncStatus.UPDATE_INSTALLED:
          break;
    }
  }

  codePushDownloadDidProgress(progress) {
    this.setState({updateProgress: progress.receivedBytes / progress.totalBytes})
  }

  shouldDisplayAppIntro = async () => {
    let neverShowAppIntroAgain = false ;
    try {
      neverShowAppIntroAgain = await AsyncStorage.getItem('neverShowAppIntroAgain');
    }
    catch (err) {
      console.log(err);
    }
    if (typeof neverShowAppIntroAgain !== 'undefined' && neverShowAppIntroAgain !== null) {
    }
    else {
      if ((Platform.OS === 'android' && Platform.Version > 22) || Platform.OS !== 'android')
        setTimeout(() => NavigationService.navigate('appIntro'), 2000);
    }
  }

  getToken = async () => {

    let token;
    try {
      token = await AsyncStorage.getItem('token');
    } catch (err) {
      token = '';
    }

    if (token && token.length > 0) {
      initNetworkLayer(token)
    } else {
      initNetworkLayer()
    }

    this.setState({
      isLoading: false,
      token,
    });
  };

  updateSuperToken = (token) => {
    AsyncStorage.setItem('superToken', token);
  }
  
  updateUserToken = (token) => {
    AsyncStorage.setItem('userToken', token);
  }

  updateToken = (token, avoidLoggedIn) => {
    let firstLogin = !!this.state.token ;

    AsyncStorage.setItem('token', token);

    if (token === '' || token === null) {
      initNetworkLayer()

      AsyncStorage.clear();

    } else {
      initNetworkLayer(token)
    }
    this.setState({token: null})
    setTimeout(() => 
      this.setState({
        token,
      })
    , 200);
    
    if (token !== null && token !== '' && !avoidLoggedIn) {
      setTimeout(() => {
        NavigationService.reset('sportunityList')
      }, 500)
    }
        
  };

  updateFirebaseToken = async (token, tokenFirebase) => {
    let response;

    try {
      if (token && tokenFirebase) {
        response = await fetch(backendUrl + '/auth/devicetoken', {
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
        .then((response) => {console.log("response TOKEN",response);return response.json()})
      }
    } catch (err) {
      alert(err);
      response = null;
    }

    if (response) {
      console.log(response)
    }
  }


  render(){
    const { isLoading, isUpdating, updateProgress, updateStatus } = this.state;
    //this.updateFirebaseToken()

    if (isLoading) return null;
    return (
      <Provider store={store}>
          {isUpdating 
          ? <UpdatePage 
              progress={updateProgress} 
              updateStatus={updateStatus}
              language={this.state.language}
            />
          : <View style={styles.container} >
            <PushController
              onChangeToken={token => this.setState({ tokenFirebase: token || '' })}
              token={this.state.token}
              updateFirebaseToken={this.updateFirebaseToken}
              updateSuperToken={this.updateSuperToken}
              updateToken={this.updateToken}
              hasOpenInitialURL={this.state.hasOpenInitialURL}
              updateHasOpenInitialURL={this.updateHasOpenInitialURL}
            />
            <App
              screenProps={{
                isLoggedIn:this.state.token !== null && this.state.token !== '',
                updateToken:this.updateToken,
                updateSuperToken:this.updateSuperToken,
                updateUserToken:this.updateUserToken,
                token:this.state.token,
                updateFirebaseToken:this.updateFirebaseToken,
                onChangeToken:token => this.setState({ tokenFirebase: token || '' }),
                updateLanguage: lang => this.setState({language: lang}),
                language: this.state.language
              }}
              language={this.state.language}
            />
          </View>}
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_START, installMode: codePush.InstallMode.ON_NEXT_RESTART };

AppRegistry.registerComponent('sportunity', () => codePush(codePushOptions)(Sportunity));
