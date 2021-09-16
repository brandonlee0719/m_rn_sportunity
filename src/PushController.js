import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {createRefetchContainer, graphql, QueryRenderer} from 'react-relay';

import environment from 'sportunity/src/createRelayEnvironment';
import NavigationService from 'sportunity/src/NavigationService';

import {
  Modal,
  Text,
  Platform,
  Linking,
  AsyncStorage,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';

import firebase, { Notification, NotificationOpen } from 'react-native-firebase';

import I18n from 'react-native-i18n';

const {height, width} = Dimensions.get('window');

import {metrics, colors, fonts} from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';

import RelayStore from './RelayStore';
import PlatformUtils from './lib/PlatformUtils/PlatformUtils';

import ReadNotificationMutation from './presentational/page/NotificationsPage/ReadNotificationMutation'
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

export const setAppBadgeNumber = (number) => {
  PlatformUtils.setAppBadge(parseInt(number));
  AsyncStorage.setItem('appBadgeNumber', number.toString());
}


class PushController extends Component {
  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      displayAuthorizedAccountsPicker: false,
      authorizedAccounts: [],
      registredId: null,
    }
  }

  _increaseAppBadgeNumber = async () => {
    const numberTotal = parseInt(await AsyncStorage.getItem('appBadgeNumber') || 0);
    const newBadgeNumber = numberTotal + 1;
    setAppBadgeNumber(newBadgeNumber);
  }

  async componentDidMount() {
    let superToken = await AsyncStorage.getItem('superToken');
    let userToken = await AsyncStorage.getItem('userToken');
    let currentToken = await AsyncStorage.getItem('token')

    Linking.getInitialURL().then((url) => {
      if (url && !this.props.hasOpenInitialURL) {
        this.props.updateHasOpenInitialURL(true)
        this._handleOpenURL({url},superToken, userToken)
      }
    }).catch(err => console.error('An error occurred', err))

    Linking.addEventListener('url', (e) => this._handleOpenURL(e, superToken, userToken));
    
    const enabled = await firebase.messaging().hasPermission();
    if (!enabled) {
      try {
        await firebase.messaging().requestPermission();
      } catch (error) {
        console.log("error", error);
      }
    }

    firebase.messaging().getToken().then(token => {      
      if(token) {
        console.log('TOKEN', token);
        this.props.onChangeToken(token);
        this.props.updateFirebaseToken(userToken, token);
      } else {
        console.log('no FIR token')
      }
    });

    let previousOpenedNotif = await AsyncStorage.getItem('lastNotif');

    firebase.notifications().getInitialNotification().then((notificationOpen: NotificationOpen) => {
      if (notificationOpen) {
        console.log("notificationOpen", notificationOpen);
        const notif = notificationOpen.notification.data ;
        if (!notif || !notif.type) {
          return ;
        }
        else {
          //if (!previousOpenedNotif || (previousOpenedNotif && previousOpenedNotif !== JSON.stringify(notif))) {
            this._handleOpenNotificationLink(notif, superToken, userToken);
            //AsyncStorage.setItem('lastNotif', JSON.stringify(notif))
          //}
        }
      }
    })

    this.notificationListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
      const notif = notificationOpen.notification.data;
      if (!notif.type) {
        return ;
      }
      if (notif.type){
        console.log('Notification pressed from tray: !!!!!! ', notif)
        this._handleOpenNotificationLink(notif, superToken, userToken);
      }

      this._increaseAppBadgeNumber().catch(
        (e) => console.log('error on updating application badge number', e),
      );
    });
    
    this.onTokenRefreshListener = firebase.messaging().onTokenRefresh(devicetoken => {
      if(devicetoken) {
        this.props.onChangeToken(devicetoken);
        this.props.updateFirebaseToken(userToken, devicetoken);
      } else {
        console.log('token FIR not refreshed')
      }
    })

    // if (this.context.relay.variables.superToken!=superToken) {
    //   const refetchVariables = fragmentVariables => ({
    //     ...fragmentVariables,
    //     superToken,
    //     userToken,
    //     query: true,
    //   });

    //   this.props.relay.refetch(
    //       refetchVariables,
    //       null,
    //       null,
    //       {force: false}
    //   );
    // }
  }

  _handleOpenNotificationLink = (notif, superToken, userToken) => {
    if (this.props.viewer && this.props.viewer.me) {
      if (notif.receivingUserId !== this.props.viewer.me.id) {
        if (superToken || userToken) {
          const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            superToken: superToken ? superToken : null,
            userToken: userToken ? userToken : null,
            query: true
          });

          this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
          );
          this.waitForDataNotification(notif, superToken, userToken)
          return ;
        }
      }
      else {
        if (notif.notificationId) 
          this._readNotification(notif.notificationId)

        if (notif.type === "sportunity" || notif.type === "sportunity-carpooling")
          NavigationService.navigate('eventdetail', {id: notif.id });
        else if (notif.type === "chat")
          NavigationService.navigate('chatdetail', {id: notif.id, hideNavBar:false});
        else if (notif.type === "circleAskedInfo")
          NavigationService.navigate('sharedInformation');
        else if (notif.type === "circleFees")
          NavigationService.navigate('circleMembershipFees'); 
        else if (notif.type === "circle")
          NavigationService.navigate('circledetail', {circleId: notif.id});
      }
    }    
  }

  waitForDataNotification = (notif, superToken, userToken) => {
    let receiver;
    if (this.props.viewer.superMe && this.props.viewer.superMe.id) {
      if (this.props.viewer.superMe.id === notif.receivingUserId) {
        receiver = this.props.viewer.superMe;
        receiver.token = userToken;
      }
      if (!receiver && this.props.viewer.superMe.subAccounts && this.props.viewer.superMe.subAccounts.length > 0) {
        receiver = this.props.viewer.superMe.subAccounts.find(subAccount => subAccount.id === notif.receivingUserId) ;
      }
      if (receiver) {
        if (userToken !== superToken)
          this.props.updateSuperToken(userToken)

        if (receiver.token)
          this.props.updateToken(receiver.token, true)
        else 
          this.props.updateToken(userToken, true)
        
        if (notif.id) 
          this._readNotification(notif.notificationId)
        
        setTimeout(() => {
          if (notif.type === "sportunity" || notif.type === "sportunity-carpooling")
            NavigationService.navigate('eventdetail', {id: notif.id });
          else if (notif.type === "chat")
            NavigationService.navigate('chatdetail', {id: notif.id, hideNavBar:false});
          else if (notif.type === "circleAskedInfo")
            NavigationService.navigate('sharedInformation');
          else if (notif.type === "circleFees")
            NavigationService.navigate('circleMembershipFees'); 
          else if (notif.type === "circle")
            NavigationService.navigate('circledetail', {circleId: notif.id});
        }, 500)
      }
    }
    if (!receiver && this.props.viewer.authorizedAccounts && this.props.viewer.authorizedAccounts.id) {
      let authorizedUserReceiver ;
      if (this.props.viewer.authorizedAccounts.accounts && this.props.viewer.authorizedAccounts.accounts.length > 0) {
        receiver = this.props.viewer.authorizedAccounts.accounts.find(account => account.id === notif.receivingUserId)
        if (receiver) 
          authorizedUserReceiver = receiver;
      }

      if (!receiver) {
        this.props.viewer.authorizedAccounts.accounts.forEach(account => {
          if (account.subAccounts && account.subAccounts.length > 0) {
            account.subAccounts.forEach(subAccount => {
              if (subAccount.id === notif.receivingUserId) {
                authorizedUserReceiver = account;
                receiver = subAccount;
              }
            })
          }
        })
      }

      if (authorizedUserReceiver) {
        this.props.updateSuperToken(authorizedUserReceiver.token)
      }
      
      if (receiver) {
        this.props.updateToken(receiver.token, true)

        setTimeout(() => {
          if (notif.id && notif.type !== "chat") 
            this._readNotification(notif.notificationId)          
          if (notif.type === "sportunity" || notif.type === "sportunity-carpooling")
            NavigationService.navigate('eventdetail', {id: notif.id });
          else if (notif.type === "chat")
            NavigationService.navigate('chatdetail', {id: notif.id, hideNavBar:false});
          else if (notif.type === "circleAskedInfo")
            NavigationService.navigate('sharedInformation' );
          else if (notif.type === "circleFees")
            NavigationService.navigate('circleMembershipFees'); 
          else if (notif.type === "circle")
            NavigationService.navigate('circledetail', {circleId: notif.id});
        }, 500) ;
      }
    }
    else if (!receiver) {
      setTimeout(() => this.waitForDataNotification(notif, superToken, userToken), 100)
    }
  }

  _readNotification = (notifId) => {
    if (notifId) {
      ReadNotificationMutation.commit({
        user: this.props.viewer.me, 
        notificationIdVar: notifId
      },
      () => {
        console.log('Notifications read')
      },
      error => {
        console.error("Error reading notification: ",JSON.parse(error.getError().source));
      }
      );
    }
  }


  _handleOpenURL = (event, superToken, userToken) => {
    if (event && event.url) {
      let splitted = event.url.split("/");
      let type = splitted[splitted.length - 2];
      let id = splitted[splitted.length - 1];


      if (this.props.viewer && this.props.viewer.me && type !== "login" ) {
        if (superToken) {
          const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            superToken: superToken,
            userToken: userToken,
            query: true
          });

          this.props.relay.refetch(
              refetchVariables,
              null,
              null,
              {force: false}
          );
          this.waitForDataOpenUrl(event.url, superToken, userToken)
          return ;
        }
      }
      
        this.navigate(event.url)
    }
  }

  registerUser = (token) => {
    //RelayStore.addUser(token);
  }

  getAccounts = (props, superToken, userToken) => {
    let accounts = []

    if (props.viewer.superMe.subAccounts && props.viewer.superMe.subAccounts.length > 0)
      props.viewer.superMe.subAccounts.forEach(subAccount => {
        accounts.push(subAccount)
      })

    if (props.viewer.authorizedAccounts.accounts && props.viewer.authorizedAccounts.accounts.length > 0)
      props.viewer.authorizedAccounts.accounts.forEach(account => {
        if (accounts.findIndex(item => item.id === account.id) < 0)
          accounts.push(account)
      })

    if (accounts.findIndex(item => item.id === props.viewer.superMe.id) < 0)
      accounts.push({
        id: props.viewer.superMe.id,
        pseudo: props.viewer.superMe.pseudo,
        avatar: props.viewer.superMe.avatar,
        token:  superToken
      })

    if (accounts.findIndex(item => item.id === props.viewer.authorizedAccounts.id) < 0)
      accounts.push({
        id: props.viewer.authorizedAccounts.id,
        pseudo: props.viewer.authorizedAccounts.pseudo,
        avatar: props.viewer.authorizedAccounts.avatar,
        token:  userToken
      })

    return accounts;
  }

  waitForDataOpenUrl = (url, superToken, userToken) => {
    if (this.props.viewer.superMe && this.props.viewer.superMe.id && this.props.viewer.authorizedAccounts && this.props.viewer.authorizedAccounts.id) {
      const accounts = this.getAccounts(this.props, superToken, userToken)
      
      if (accounts.length > 1) {
        this.setState({
          displayAuthorizedAccountsPicker: true,
          authorizedAccounts: accounts,
          urlToOpen: url
        })
      }
      else
        this.navigate(url)
    }
    else {
      setTimeout(() => this.waitForDataOpenUrl(url, superToken, userToken), 100)
    }
  }

  navigate = (url) => {
    if (url) {
      let splitted = url.split("/");
      let type = splitted[splitted.length - 2];
      let id = splitted[splitted.length - 1];
      if (type === "sportunity" || type === "sportunity-carpooling")
        NavigationService.navigate('eventdetail', { id: id, notificationUserId: "VXNlcjo1OGYxMDkzZTc4ODM4ZTAwMDEzMjVmMWQ="});
      else if (type === "chat")
        NavigationService.navigate('chatdetail', {id :id, hideNavBar:false});
      else if (type === "profile")
        NavigationService.navigate('profile', {userId: id});
      else if (type === "circle")
        NavigationService.navigate('circledetail', { circleId: id, hideNavBar:true });
      else if (type === "circleAskedInfo")
        NavigationService.navigate('sharedInformation');
      else if (type === "circleFees")
        NavigationService.navigate('circleMembershipFees'); 
      else if (type === "login")
        NavigationService.navigate('settings', {token: id});
    }
  }

  _handleSwitchAccountAndOpenUrl = (token, url) => {
    if (token) {
      this.setState({displayAuthorizedAccountsPicker: false});
      this.props.updateToken(token, true);
      this.props.updateSuperToken(token);
    }
    setTimeout(() => {
      this.navigate(this.state.urlToOpen)
    }, 600)
  }

  registerAccounts = (accounts) => {
    accounts.map(({ token }) => token)
      .filter((it) => it)
      .map(this.registerUser)
  }

  componentWillUnmount() {
    this.notificationListener()
    this.onTokenRefreshListener()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.viewer.superMe ||
        !this.props.viewer.superMe.id ||
        (nextProps.viewer.superMe && this.state.registredId != nextProps.viewer.superMe.id)
      ) {
      if (nextProps.viewer.superMe &&
        nextProps.viewer.superMe.id &&
        nextProps.viewer.authorizedAccounts &&
        nextProps.viewer.authorizedAccounts.id
      ) {
        const { superToken, userToken } = this.context.relay.variables
        this.registerAccounts(this.getAccounts(nextProps, superToken, userToken))
        this.setState({
          registredId: nextProps.viewer.superMe.id,
        })
      }
    }
  }



  render() {
    
    if (this.state.displayAuthorizedAccountsPicker && this.state.authorizedAccounts.length > 0)
      return (
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={this.state.displayAuthorizedAccountsPicker}
          onRequestClose={() => this.setState({displayAuthorizedAccountsPicker: false})}
        >
          <View style={styles.overlay}>
            <View style={[styles.optionContainer]}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {I18n.t('chooseAccountOnOpenApp')}
                </Text>
              </View>
              <ScrollView keyboardShouldPersistTaps={"always"}>
                <View style={{paddingHorizontal:10}}>
                  {this.state.authorizedAccounts.map((authorizedAccount, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.optionStyle}
                      onPress={() => this._handleSwitchAccountAndOpenUrl(authorizedAccount.token, this.state.urlToOpen)}>
                      <View style={styles.photoContainer}>
                        <Image style={styles.avatar} source={{ uri: authorizedAccount.avatar }}/>
                      </View>
                      <Text>
                        {authorizedAccount.pseudo}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )
    else
      return null;
  }
}

const PushControllerContainer =  createRefetchContainer(PushController,  
    { viewer: graphql`fragment PushController_viewer on Viewer  @argumentDefinitions(
      query: {type: "Boolean!", defaultValue: false},
      userToken: {type: "String"},
      superToken: {type: "String"}
    ) {
      me {
          id
      }
      authorizedAccounts(userToken: $userToken) @include(if: $query) {
        id
        avatar
        pseudo
        accounts {
          id,
          avatar
          token,
          pseudo
          subAccounts {
            id,
            avatar,
            pseudo,
            token
          }
        }
      }
      superMe (superToken: $userToken) @include(if:$query) {
        id,
        pseudo
        avatar
        subAccounts{
            id,
            avatar
            pseudo
            token
        }
      }
     }`
  },
  graphql`
    query PushControllerRefetchQuery ($superToken: String, $userToken: String, $query: Boolean!){
      viewer {
        ...PushController_viewer @arguments (superToken: $superToken, userToken: $userToken, query: $query)
      }
    }
  `
);

export default class extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PushControllerQuery ($superToken: String, $userToken: String, $query: Boolean!)
          {
            viewer {
              ...PushController_viewer @arguments (superToken: $superToken, userToken: $userToken, query: $query)
            }
          }
        `}
        variables={{query: false}}
        render={({error, props}) => {
          if (props) {
            return <PushControllerContainer query={props} viewer={props.viewer} {...this.props}/>;
          } else {
            return (
              <View/>
            )
          }
        }}
      />
    )
  }
}

I18n.fallbacks = true
I18n.translations = translations;


const styles = StyleSheet.create({
  overlay: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontWeight: '500'
  },
  optionContainer: {
    borderRadius:5,
    width:width*0.8,
    backgroundColor:'rgba(255,255,255,0.8)'
  },
  optionStyle: {
    padding: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center'
  },
  photoContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: metrics.images.mediumRadius,
    resizeMode: 'cover',
  },
})