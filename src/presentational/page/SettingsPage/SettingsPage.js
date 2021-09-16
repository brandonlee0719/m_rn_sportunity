import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { View, ScrollView, ActivityIndicator, Alert } from 'react-native';
import Text from 'react-native-text';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFrom } from 'sportunity/src/action/profileActions';
import change from 'sportunity/src/action/changeSportunityFilterKind';
import firebase from 'react-native-firebase';

import {
  createRefetchContainer,
  graphql,
  QueryRenderer,
} from 'react-relay'; 
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import MailValidationMutation from './MailValidationMutation.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Toast from 'react-native-simple-toast';
// These styles are imported from reusable components
import OpacityButton from 'sportunity/src/presentational/OpacityButton';
import opacityButtonStyles from 'sportunity/src/presentational/OpacityButton/style';
import Icon from 'sportunity/src/presentational/Icon';
import iconStyles from 'sportunity/src/presentational/Icon/style';
import Input, { styles as inputStyles } from 'sportunity/src/presentational/Input';
import TouchableText from 'sportunity/src/presentational/TouchableText';
import touchableTextStyles from 'sportunity/src/presentational/TouchableText/style.js';
import icons from 'sportunity/src/theme/images';
import styles from './style';
import { colors } from 'sportunity/src/theme';
import {backendUrl} from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import {GoogleSignin} from 'react-native-google-signin';
import { resetTutorialSteps } from '../../../action/profileActions.js';

const FBSDK = require('react-native-fbsdk');

const {
  LoginManager,
  AccessToken,
} = FBSDK;

/**
* Login
*/
class SettingsPage extends Component {

  state = {
    isLoading: false,
    errorMessage: '',
    pseudo: '',
    pass: '',
  }

  inputRefs = {}

  // If user is logged in, redirect to profile screen
  componentDidMount = () => {
    if (!this.props.from || this.props.from === "")
      this.props.updateFrom('login');

    this._setupGoogleSignin();

    if (this.props.token)
      this.autoLogin(this.props.token)
  }
  componentDidUpdate = () => {
    /*if (this.props.viewer.me !== null) {
      Actions.sportunities({ type: 'reset' });
    }*/
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true, showPlayServicesUpdateDialog: true });
      await GoogleSignin.configure({
        webClientId: '73804823141-f6hkv5c4d3uka8ob929ps4kt2nhllhse.apps.googleusercontent.com',
	      iosClientId: '73804823141-b1357s8hpetvk8t0ivcpshornan12em2.apps.googleusercontent.com',
        offlineAccess: true
      });
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  // handling pseudo and password
  updateEmail = (text) => {
    this.setState({
      pseudo: text,
    })
  }
  updatePassword = (text) => {
    this.setState({
      pass: text,
    })
  }

  autoLogin = async (token) => {
    this.setState({
      isLoading: true,
    });

    this.props.screenProps.updateToken(token);
    this.props.screenProps.updateSuperToken(token);
    this.props.screenProps.updateUserToken(token);
    this.props.resetTutorialSteps();
    
    firebase.messaging().getToken().then(devicetoken => {      
      console.log('TOKEN', devicetoken);
      if(devicetoken) {
        this.props.screenProps.onChangeToken(devicetoken);
        this.props.screenProps.updateFirebaseToken(token, devicetoken);
      } else {
        console.log('no FIR token')
      }
    });

    this.setState({
      isLoading: false,
    });

    this.onQueryMe() ;
  }

  /**
  * Login Email/Password
  */
  login = async () => {

    this.setState({
      isLoading: true,
    });

    let response;
    try {
      response = await fetch(backendUrl + '/auth', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pseudo: this.state.pseudo.trim(),
          password: this.state.pass,
        }),
      })
      .then((response) => response.json())
    } catch (err) {
      Alert.alert(I18n.t('alert'), err);
      response = null;
    }

    if (response && response.success) {
      let token = response.token
      this.props.screenProps.updateToken(token);
      this.props.screenProps.updateSuperToken(token);
      this.props.screenProps.updateUserToken(token);
      this.props.resetTutorialSteps();
      
      firebase.messaging().getToken().then(devicetoken => {      
        //console.log('TOKEN', devicetoken);
        try {
          if(devicetoken) {
            this.props.screenProps.onChangeToken(devicetoken);
            this.props.screenProps.updateFirebaseToken(token, devicetoken);
          } else {
            console.log('no FIR token')
          }
        }
        catch(e) { console.log(e);}
      });

      this.setState({
        isLoading: false,
      });

      this.onQueryMe() ;
      
    } else {
      let error = response.msg
      this.setState({
        errorMessage: error,
        isLoading: false,
      })
    }
  }

  /**
  *  Auth Facebook user
  */
  authFacebook = async () => {

    let response;

    try {
      response = await LoginManager.logInWithReadPermissions(['public_profile','email'])
      // Alert.alert(I18n.t('alert'), 'AUTH loginWithReadPermissions success!!!')
    } catch (err) {
      Alert.alert(I18n.t('alert'), `${err}`);
      response = null;
    }
    console.log(response)

    if (response.isCancelled) {
      Alert.alert(I18n.t('alert'), I18n.t('loginAlertCanceled'));
    } else {
      AccessToken.getCurrentAccessToken().then(
        (data) => {
          const facebookToken = data.accessToken;
          this.loginFacebook(facebookToken);
        }
      )
    }
  }

  /**
  *  Login Facebook user
  */
  loginFacebook = async (facebookToken) => {

    this.setState({
      isLoading: true,
    })
    let response;
    
    try {
      response = await fetch(backendUrl + '/auth/facebook', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: facebookToken,
          language: I18n.locale && I18n.locale.substring(0,2).toUpperCase()
        }),
      })
      .then((response) => response.json())
    } catch (err) {
      Alert.alert(I18n.t('alert'), err);
      response = null;
    }

    if (response && response.success) {
      let token = response.token
      this.props.screenProps.updateToken(token);
      this.props.screenProps.updateSuperToken(token);
      this.props.screenProps.updateUserToken(token);
      this.props.resetTutorialSteps();

      firebase.messaging().getToken().then(devicetoken => {      
        console.log('TOKEN', devicetoken);
        if(devicetoken) {
          this.props.screenProps.onChangeToken(devicetoken);
          this.props.screenProps.updateFirebaseToken(token, devicetoken);
        } else {
          console.log('no FIR token')
        }
      });

      this.setState({
        isLoading: false,
      });
      //Actions.sportunities({ type: 'reset' });
      this.props.navigation.goBack();
    } else {
      let error = response.msg
      this.setState({
        errorMessage: error,
        isLoading: false,
      })
    }
  }

  authGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const user = await GoogleSignin.signIn()
      
      console.log("Connected as",user);
      // this.setState({user: user});
      const accessToken = user.accessToken;
        
      this.loginGoogle(accessToken);
    }
    catch(err) {
      console.log('WRONG SIGNIN', err);
    }
  }

  loginGoogle = async (accessToken) => {
    this.setState({
        isLoading: true,
      })
      let response;

      try {
        response = await fetch(backendUrl + '/auth/google', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: accessToken,
            language: I18n.locale && I18n.locale.substring(0,2).toUpperCase()
          }),
        })
        .then((response) => response.json())
      } catch (err) {
        Alert.alert(I18n.t('alert'), err);
        response = null;
      }

      if (response && response.success) {
        let token = response.token
        this.props.screenProps.updateToken(token);
        this.props.screenProps.updateSuperToken(token);
        this.props.screenProps.updateUserToken(token);
        this.props.resetTutorialSteps();

        firebase.messaging().getToken().then(devicetoken => {      
          console.log('TOKEN', devicetoken);
          if(devicetoken) {
            this.props.screenProps.onChangeToken(devicetoken);
            this.props.screenProps.updateFirebaseToken(token, devicetoken);
          } else {
            console.log('no FIR token')
          }
        });
        
        this.setState({
          isLoading: false,
        });
        //Actions.sportunities({ type: 'reset' });
        this.props.navigation.goBack();
      } else {
        let error = response.msg
        this.setState({
          errorMessage: error,
          isLoading: false,
        })
      }
  }

  getValidationEmail = (pseudo, viewer) => {
    const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.setState({
      isLoading: true,
    });
    
    MailValidationMutation.commit({
      pseudo: !isEmail.test(pseudo) ? pseudo : null,
      email: isEmail.test(pseudo) ? pseudo : null,
    },
    () => {
      Toast.show(I18n.t('loginEmailValidationSuccess'));
      this.setState({
        isLoading: false,
      });
    },
    () => {
      Toast.show(I18n.t('loginEmailValidationError'))
      this.setState({
        isLoading: false,
      });
    },
    );
  }

  onQueryMe = () => {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      queryMe: true,
    });
    
    this.props.relay.refetch(
      refetchVariables,
      null,
      () => {
        setTimeout(() => {// Needed to wait for Relay to re-fetch data in this.props.query.viewer
          const {viewer} = this.props.query
            if (viewer.me && viewer.me.homePagePreference === 'ORGANIZED') {
              this.props.changeKind('Organized')
              //navigate('sportunityList');
              this.props.navigation.actions.reset({
                key: null,
                index: 0,
                actions: [this.props.navigation.navigate('sportunityList')],
              });
            }
            else if (!viewer.me || !viewer.me.homePagePreference) {
              this.props.changeKind('Organized')
              //navigate('sportunityList');
              this.props.navigation.actions.reset({
                key: null,
                index: 0,
                actions: [this.props.navigation.navigate('sportunityList')],
              });
            }
            else {
              this.props.changeKind('Organized')
              //navigate('sportunityList');
              this.props.navigation.actions.reset({
                key: null,
                index: 0,
                actions: [this.props.navigation.navigate('sportunityList')],
              });
            }
          }
      , 100);
      },
      {force: false}
    );
  }

  render() {
    const {
      isLoading,
      errorMessage,
    } = this.state;
    const {navigate} = this.props.navigation; 

    return (
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="never">
        <Icon
          iconSource={icons.key}
          iconStyle={[iconStyles.centerIcon, iconStyles.keyIcon]}
        />
        <View style={styles.inputsContainer}>
          <Input
            styles={inputStyles.input}
            inputIconStyles={inputStyles.icon}
            updateText={(text) => this.updateEmail(text)}
            placeholder={I18n.t('loginPseudoOrEmail')}
            onBlur={this.hideKeyboard}
            returnKeyType={'next'}
            ref={ref => this.inputRefs['pseudo'] = ref}
            inputRef="pseudo"
            onSubmitEditing={(e) => this.inputRefs.password.refs.password.focus()}
          />
          <Input
            styles={inputStyles.input}
            inputIconStyles={inputStyles.icon}
            updateText={(text) => this.updatePassword(text)}
            placeholder={I18n.t('loginPassword')}
            secureTextEntry
            returnKeyType={'done'}
            ref={ref => this.inputRefs['password'] = ref}
            inputRef="password"
            onSubmitEditing={this.login}
          />
        </View>
        <View>
          <TouchableText
            textStyles={touchableTextStyles.rightUnderlinedText}
            text={I18n.t('loginForgotPassword')}
            handlePress={() => navigate('forgotPassword')}
          />
          <TouchableText
            textStyles={touchableTextStyles.rightUnderlinedText}
            handlePress={() => navigate('createProfile')}
            text={I18n.t('loginCreateAccount')}
          />
        </View>
        {isLoading 
        ? <ActivityIndicator
            animating={isLoading}
            size="large"
            color={colors.blue}
          /> 
        : null
        }
        {errorMessage 
        ? <Text style={styles.errorText}>
            {errorMessage}
          </Text>
        : null
        }
        {errorMessage === 'Your email is not validated' 
        ? Alert.alert(
            I18n.t('alert'), 
            I18n.t('loginPopupEmailValidation'),
            I18n.t('loginPopupNewEmail'),
            [
              { text: I18n.t('loginPopupYes'), onPress: () => { this.setState({ errorMessage: '' }); this.getValidationEmail(this.state.pseudo, this.props.viewer)} },
              { text: I18n.t('loginPopupNo'), onPress: () => { this.setState({ errorMessage: '' })} },
            ]
          )
          && false
        : null
        }
        <OpacityButton
          buttonStyles={opacityButtonStyles.submitButton}
          textStyles={opacityButtonStyles.submitText}
          text={I18n.t('login')}
          handlePress={() => this.login()}
        />
        <View>
          <OpacityButton
            buttonStyles={opacityButtonStyles.facebookButton}
            textStyles={opacityButtonStyles.facebookText}
            text={I18n.t('loginFacebook')}
            handlePress={this.authFacebook}
          />
          <OpacityButton
            buttonStyles={opacityButtonStyles.googleButton}
            textStyles={opacityButtonStyles.googleText}
            text={I18n.t('loginGoogle')}
            handlePress={this.authGoogle}
          />
        </View>
    </ScrollView>
    );
  }
}

SettingsPage.propTypes = {
  updateToken: PropTypes.func.isRequired,
  viewer: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
  from: state.sportunityProfile.from,
});

const dispatchToProps = (dispatch) => ({
  updateFrom: bindActionCreators(updateFrom, dispatch),
  changeKind: (kind) => dispatch(change(kind)),
  resetTutorialSteps: bindActionCreators(resetTutorialSteps, dispatch),
});

const reduxContainer = connect(
  stateToProps,
  dispatchToProps
)(SettingsPage);

const SettingsPageTemp = createRefetchContainer(withNavigation(reduxContainer), 
  graphql`
    fragment SettingsPage_query on Query @argumentDefinitions(
      queryMe: {type: "Boolean!", defaultValue: false}
    ){
      viewer {
        me @include(if: $queryMe){
          id,
          pseudo,
          homePagePreference
        }
      }
    }
    `,
    graphql`
      query SettingsPageRefetchQuery ($queryMe: Boolean!) {
        ...SettingsPage_query @arguments(queryMe: $queryMe)
      }
    `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('login')
    }
  }
  render() {
    const {navigation} = this.props

    let token = navigation.getParam('token', null)

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query SettingsPageQuery($queryMe: Boolean!){
            ...SettingsPage_query @arguments(queryMe: $queryMe)
          }
        `}
        variables={{queryMe: true}}
        render={({error, props}) => {
          if (props) {
            return <SettingsPageTemp token={token} query={props} {...this.props}/>;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          }
        }}
      />
    )
  }
}

I18n.fallbacks = true

I18n.translations = translations;
