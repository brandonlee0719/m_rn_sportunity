import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { 
  View, 
  ScrollView, 
  ActivityIndicator,  
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  Dimensions, 
  AsyncStorage,
  Switch ,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ModalPicker from 'react-native-modal-selector';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import ImageResizer from 'react-native-image-resizer';
// import { isEmpty } from 'lodash';
import RNFetchBlob from 'react-native-fetch-blob';
import DatePicker from 'react-native-datepicker';
import { fonts, colors, metrics } from 'sportunity/src/theme';
import firebase from 'react-native-firebase';
import {cloneDeep} from 'lodash';

import {
  creatingProfile,
  creatingSubAccount,
  validateInputs,
  updateAvatar,
  updatePseudo,
  // updateName,
  updateEmail,
  updatePassword,
  updatePhone,
  resetInputs,
  // updateDescription,
  updateBirthday,
} from 'sportunity/src/action/createProfileActions';
import { updateStepsCompleted } from 'sportunity/src/action/profileActions';

import {
  createRefetchContainer,
  graphql,
  QueryRenderer,
} from 'react-relay';
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';

import OpacityButton from 'sportunity/src/presentational/OpacityButton';
import opacityButtonStyles from 'sportunity/src/presentational/OpacityButton/style';
import Icon from 'sportunity/src/presentational/Icon';
import iconStyles from 'sportunity/src/presentational/Icon/style';
import Input, { styles as inputStyles } from 'sportunity/src/presentational/Input';
import icons from 'sportunity/src/theme/images';
// These components are prepared for languages, sports, payments and payoffs//
// import SportItems from './SportItems.js';
// import PaymentMethods from './PaymentMethods.js';
// import PayoffMethods from './PayoffMethods.js';
import NewUserMutation from './NewUserMutation';
import Languages from './Languages.js';

import {backendUrl} from 'sportunity/src/createRelayEnvironment';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import { resetTutorialSteps } from '../../../action/profileActions';

const FBSDK = require('react-native-fbsdk');

const {
  LoginManager,
  AccessToken,
} = FBSDK;

/**
* Class
*/
class CreateProfilePage extends Component {

  state = {
    profileType: null,
    isCreatingSubAccount: false,
    options: {
      title: I18n.t('registerSelectAvatar'),
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    },
    superToken: null,
    isSameEmailSwitchActivated: false,
    subAccountsList: [],
    subAccountsListValidation: [true],
    pseudoExists: false,
    emailExists: false
  }
  inputRefs = {};

  async componentDidMount() {
    this.props.resetInputs(); 

    setTimeout(() => this.props.navigation && this.props.setTitle(this.props.isCreatingSubAccount 
    ? this.props.isCreatingSubAccount === 'PERSON'
      ? I18n.t('drawerAddChild')
      : I18n.t('drawerAddTeam')
    : I18n.t('register')), 100)

    if (this.props.isCreatingSubAccount) {
      this.setState({
        isCreatingSubAccount: true,
        profileType: this.props.isCreatingSubAccount,
      })
      this._updateIsSubAccountWithSameEmail(false)
    }

    let superToken = await AsyncStorage.getItem('superToken');
    
    this.setState({
      superToken
    })
    this._setupGoogleSignin();
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true, showPlayServicesUpdateDialog: true });
      await GoogleSignin.configure({
        webClientId: '73804823141-dno14cel60d36jeebn1rbn52stmhrtqd.apps.googleusercontent.com',
	      iosClientId: '73804823141-b1357s8hpetvk8t0ivcpshornan12em2.apps.googleusercontent.com',
        offlineAccess: true
      });

      const user = await GoogleSignin.currentUserAsync();
      
      // this.setState({user});
    }
    catch(err) {
      console.log("Play services error", err.code, err.message);
    }
  }

  _updateIsSubAccountWithSameEmail = (value) => {
    const {
      updateEmail,
      updatePassword,
      updatePhone
    } = this.props;

    this.setState({
      isSameEmailSwitchActivated: !value
    })
    if (!value) {
      updateEmail(this.props.viewer.me.email)
      updatePhone(0);
      updatePassword('')
    }
    else {
      updateEmail("")
      updatePhone(0);
      updatePassword('')
    }
  }

  submitPhone = (num) => {
    const phoneNumber = parseInt(num);
    this.props.updatePhone(phoneNumber);
  }

  // addBirthday = (date) => {
  //   const today = new Date();
  //   if(moment(date).isSameOrAfter(today, 'day')) {
  //     Toast.show(I18n.t('registerToastPastDate'));
  //     return false;
  //   } else if(moment(date).add(18, 'years').isAfter(moment(today))){
  //     this.datePicker.onPressCancel();
  //     Toast.show(I18n.t('registerToastUnder18'));
  //     this.datePicker.onPressCancel();
  //     return false;
  //   } else {
  //     this.props.updateBirthday(date);
  //   }
  // }

  resizeAvatar = (avatar, maxWidth, maxHeight, compressFormat, quality) => {
    ImageResizer.createResizedImage(avatar, maxWidth, maxHeight, compressFormat, quality)
      .then((avatar) => {
        this.readFile(avatar);
      }).catch((err) => {
        console.log(err);
        return Toast.show(I18n.t('registerToastResizeFailed'));

      });
  }

  readFile = (avatar) => {
    RNFetchBlob.fs.readFile(avatar, 'base64')
      .then((source) => {
        const avatarVar = `data:image/jpeg;base64,${source}`;
        console.log(avatarVar)
        this.props.updateAvatar(avatarVar);
      })
  }

  createUser = () => {
    let superTokenVar; 
    if (this.state.isCreatingSubAccount && this.state.superToken)
      superTokenVar = this.state.superToken;
      
    this.props.creatingProfile(true);
    this.props.validateInputs('');

    if(this.props.pseudo.length < 1) {
      Toast.show(I18n.t('registerToastPseudoLength'));
      this.props.creatingProfile(false);
      return false;
    }

    if (!this.state.isCreatingSubAccount || (this.state.isCreatingSubAccount && !this.state.isSameEmailSwitchActivated)) {
      if(this.props.password.length < 6) {
        Toast.show(I18n.t('registerToastPasswordLength'));
        this.props.creatingProfile(false);
        return false;
      }
    }

    let phoneNumberVar; 
    if (this.state.isCreatingSubAccount && this.state.superToken && this.state.isSameEmailSwitchActivated) {
      phoneNumberVar = this.props.viewer.me.phoneNumber;
    }
    else if (isNaN(this.props.phone) || Number(this.props.phone) >= Math.pow(2,31)) { // Cant be higher than 2 ^ 31 as it's a 32 bits integer
      Toast.show(I18n.t('registerToastWrongPhoneNumber'));
      this.props.creatingProfile(false);
      return false;
    }
    else 
      phoneNumberVar = this.props.phone;

    // missing some data
    // const firstNameVar = name;
    // const lastNameVar = name;
    const pseudoVar = this.props.pseudo;
    const emailVar = this.props.email.trim();
    const passwordVar = this.props.password;
    // const descriptionVar = description;
    const avatarVar = this.props.avatar && this.props.avatar || null;
    // const phonePrefixVar = 123;
    
    const birthdayVar =  this.props.birthday;
    // const languagesVar = languages;
    // const addressVar = address;
    const sexVar = 'MALE';
    const profileType = this.state.profileType;

    if(this.state.isCreatingSubAccount && this.state.isSameEmailSwitchActivated) {
      if (emailVar === '' || 
          pseudoVar === ''
      ){
        Toast.show(I18n.t('registerToastEnterAllFields'));
        this.props.creatingProfile(false);
        return ;
      } 
    }
    else if ((this.state.isCreatingSubAccount && !this.state.isSameEmailSwitchActivated) || !this.state.isCreatingSubAccount) {
      if (emailVar === '' || passwordVar === '' ||
          avatarVar === '' || phoneNumberVar === 0 ||
          pseudoVar === '' || !profileType
      ){
        Toast.show(I18n.t('registerToastEnterAllFields'));
        this.props.creatingProfile(false);
        return ;
      } 
    }

    if (!this.props.isCreatingSubAccount && this.state.subAccountsList.length > 0 && this.state.subAccountsList[0] !== "") {
      if (this.state.subAccountsListValidation.indexOf(false) >= 0) {
        Toast.show(I18n.t('registerSubAccount_userAlreadyExistsToast'));
        this.props.creatingProfile(false);
        return ;
      }
    }

    if (this.state.pseudoExists) {
      Toast.show(I18n.t('registerUser_PseudoAlreadyExistsToast'));
      this.props.creatingProfile(false);
      return ;
    }

    if (this.state.emailExists) {
      Toast.show(I18n.t('registerUser_EmailAlreadyExistsToast'));
      this.props.creatingProfile(false);
      return ;
    }

    const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!isEmail.test(this.props.email.trim())) {
      Toast.show(I18n.t('registerUser_EmailWrongToast'));
      this.props.creatingProfile(false);
      return ; 
    }
    
    NewUserMutation.commit({
      superUserToken: superTokenVar,
      user: {
        pseudo: pseudoVar,
        email: emailVar,
        password: passwordVar,
        avatar: avatarVar,
        phoneNumber: phoneNumberVar,
        birthday: birthdayVar,
        sex: sexVar,
        profileType: profileType,
        appLanguage: I18n.locale && I18n.locale.substring(0,2).toUpperCase(),
        appCurrency: this.props.userCurrency,
        subAccountsPseudoList: !this.props.isCreatingSubAccount && this.state.subAccountsList.length > 0 && this.state.subAccountsList[0] !== "" ? this.state.subAccountsList.filter(sub => sub !== "") : null, 
      },
    },
    () => {
      if (this.props.isCreatingSubAccount && this.state.isSameEmailSwitchActivated)
        Toast.show(I18n.t('registerToastValidateEmailChild'))
      else
        Toast.show(I18n.t('registerToastValidateEmail'));

      this.props.creatingProfile(false);
      this.props.validateInputs('');
      
      if (this.props.creatingFromCircle && this.props.closeChildCreationModal)
        this.props.closeChildCreationModal()
      /*else if (this.props.isCreatingSubAccount)
        this.props.navigation.navigate('settings');*/
      else 
        this.props.navigation.goBack()

      if (this.props.isCreatingSubAccount) {
        this.updateTutorialSteps();
      }
    },
    error => {
      if(error.getError().source.errors){
        let errors = error.getError().source.errors[0].message;
        this.props.validateInputs(errors);
        this.props.creatingProfile(false);
      } else {
        let errors = JSON.parse(error.getError().source);
        this.props.validateInputs(errors.errors[0].message);
        this.props.creatingProfile(false);
      }
    }
    );
  }

  updateTutorialSteps = () => {
    const { tutorialSteps, updateStepsCompleted } = this.props;
    let newTutorialSteps = cloneDeep(tutorialSteps);

    newTutorialSteps['createSubAccountStep'] = true;
    updateStepsCompleted(newTutorialSteps);
  }

  /**
  *  Auth Facebook user
  */
  authFacebook = async () => {

    let response;

    try {
      response = await LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      // Alert.alert(I18n.t('alert'), 'AUTH loginWithReadPermissions success!!!')
    } catch (err) {
      Alert.alert(I18n.t('alert'), `${err}`);
      response = null;
    }

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
      response = await fetch(backendUrl+'/auth/facebook', {
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
      this.props.navigation.actions.reset({
        key: null,
        index: 0,
        actions: [this.props.navigation.navigate('sportunityList')],
      });
    } else {
      let error = response.msg
      this.setState({
        errorMessage: error,
        isLoading: false,
      })
    }
  }

  authGoogle = async () => {
    let that = this; 
    GoogleSignin.signIn()
    .then((user) => {
      // this.setState({user: user});
      const accessToken = user.accessToken;
      
      that.loginGoogle(accessToken);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
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
        this.props.navigation.actions.reset({
          key: null,
          index: 0,
          actions: [this.props.navigation.navigate('sportunityList')],
        });
      } else {
        let error = response.msg
        this.setState({
          errorMessage: error,
          isLoading: false,
        })
      }
  }

  componentWillUnmount() {
    this.props.creatingSubAccount(false);
  }

  updateSubAccountPseudo = (index, text) => {
    let newList = cloneDeep(this.state.subAccountsList);
    newList[index] = text;
    this.setState({subAccountsList: newList});
    
    let newValidationList = cloneDeep(this.state.subAccountsListValidation);
    newValidationList[index] = true; 
    this.setState({subAccountsListValidation: newValidationList});

    if (text && text.length > 0) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        requestUserExists: true,
        pseudo: text
      });

      this.props.relay.refetch(
          refetchVariables,
          null,
          () => {
            setTimeout(() => {
              let newValidation = cloneDeep(this.state.subAccountsListValidation);
              newValidation[index] = !this.props.viewer.userExists;
              this.setState({subAccountsListValidation: newValidation});
            }, 100);
          },
          {force: false}
      );
    }
  }

  updatePseudo = (text) => {
    if (text && text.length > 0) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        requestUserExists: true,
        pseudo: text
      });

      this.props.relay.refetch(
          refetchVariables,
          null,
          () => this.setState({pseudoExists: this.props.viewer.userExists}),
          {force: false}
      );
    }

    this.props.updatePseudo(text)
  }

  updateEmail = text => {
    if (text && text.length > 0) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        requestUserExists: true,
        email: text
      });

      this.props.relay.refetch(
          refetchVariables,
          null,
          () => this.setState({emailExists: this.props.viewer.userExists}),
          {force: false}
      );
    }

    this.props.updateEmail(text);
  }

  addChild = () => {
    let newList = cloneDeep(this.state.subAccountsList);
    newList.push('')
    this.setState({subAccountsList: newList});

    let newValidationList = cloneDeep(this.state.subAccountsListValidation);
    newValidationList.push(true)
    this.setState({subAccountsListValidation: newValidationList})
  }

  render(){
   
    const {
      isCreatingProfile,
      isCreatingSubAccount,
      updatePseudo,
      updateEmail,
      updatePassword,
      avatar,
      birthday,
      errors,
      creatingFromCircle
    } = this.props;

    const profileTypeList = [
      {label: I18n.t('select'), key: null},
      {label: I18n.t('registerPerson'), key: "PERSON"},
      {label: I18n.t('registerBusiness'), key: "BUSINESS"},
      {label: I18n.t('registerOrganization'), key: "ORGANIZATION"},
      {label: I18n.t('registerSoletrader'), key: "SOLETRADER"}
    ]

    return(
      <View style={styles.mainContainer}>
        <KeyboardAwareScrollView
          contentContainerStyle={[styles.container,creatingFromCircle && {marginTop: 100}]}
          resetScrollToCoords={{x: 0 , y : 0}}
          scrollEnabled={true}
          >

            {!this.state.isCreatingSubAccount && 
              <View style={styles.row}>
                <Text style={[styles.label, {fontSize: 14}]} numberOfLines={2}>
                  {I18n.t('registerAccountype') + ': '}
                </Text>
                <ModalPicker
                  data={profileTypeList}
                  initValue={profileTypeList.find(item => item.key === this.state.profileType).label.slice(0, 25)}
                  onChange={(value) => this.setState({ profileType: value.key })}
                  cancelText={I18n.t('cancel')}
                />
              </View>
            }

            <Input
              styles={!!this.state.profileType ? inputStyles.input : inputStyles.disabled}
              inputIconStyles={inputStyles.icon}
              updateText={(text) => this.updatePseudo(text)}
              placeholder={this.state.isCreatingSubAccount ? this.props.isCreatingSubAccount === 'PERSON' ? I18n.t('registerPseudoChild') : I18n.t('registerPseudoTeam') : I18n.t('registerPseudo')}
              returnKeyType={'next'}
              onSubmitEditing={(e) => this.inputRefs.email.refs.email.focus()}
              editable={!!this.state.profileType}
              error={this.state.pseudoExists}
              errorMessageDisplayed={true}
            />
            {this.state.pseudoExists &&
              <Text style={styles.childAddError}>{I18n.t('registerSubAccount_userAlreadyExists')}</Text>
            } 
            <Input
              styles={inputStyles.input}
              inputIconStyles={inputStyles.icon}
              updateText={(text) => this.updateEmail(text)}
              value={this.props.email}
              placeholder={this.state.isCreatingSubAccount ? this.props.isCreatingSubAccount === 'PERSON' ? I18n.t('registerEmailChild') : I18n.t('registerEmailTeam') : I18n.t('registerEmail')}
              returnKeyType={this.state.isCreatingSubAccount && this.state.isSameEmailSwitchActivated ? 'done' : 'next'}
              ref={ref => this.inputRefs['email'] = ref}
              inputRef="email"
              onSubmitEditing={(e) => {(!this.state.isCreatingSubAccount || (this.state.isCreatingSubAccount && !this.state.isSameEmailSwitchActivated)) && this.inputRefs.password.refs.password.focus()}}
              editable={!!this.state.profileType}
              error={this.state.emailExists}
              errorMessageDisplayed={true}
            />
            {this.state.emailExists &&
              <Text style={styles.childAddError}>{I18n.t('registerSubAccount_emailAlreadyExists')}</Text>
            } 

            {this.state.isCreatingSubAccount &&
              <View style={styles.row}>
                <Text style={[styles.label, {flex:1, fontSize: 14, margintRight: 5}]} numberOfLines={2}>
                  {this.props.isCreatingSubAccount === 'PERSON' ? I18n.t('registerSubAccount_sameEmailChild') : I18n.t('registerSubAccount_sameEmailTeam')}
                </Text>
                <Switch
                  style={styles.repeatSwitch}
                  onTintColor={colors.skyBlue}
                  value={!this.state.isSameEmailSwitchActivated}
                  onValueChange={this._updateIsSubAccountWithSameEmail}
                />
              </View>
            }
            {(!this.state.isCreatingSubAccount || (this.state.isCreatingSubAccount && !this.state.isSameEmailSwitchActivated)) &&
              <Input
                styles={inputStyles.input}
                inputIconStyles={inputStyles.icon}
                updateText={(text) => updatePassword(text)}
                placeholder={I18n.t('registerPassword')}
                secureTextEntry
                returnKeyType={'next'}
                ref={ref => this.inputRefs['password'] = ref}
                inputRef="password"
                onSubmitEditing={(e) => this.inputRefs.phone.refs.phone.focus()}
                editable={!!this.state.profileType}
              />
            }
            {(!this.state.isCreatingSubAccount || (this.state.isCreatingSubAccount && !this.state.isSameEmailSwitchActivated)) &&
              <Input
                styles={[inputStyles.input, styles.button]}
                inputIconStyles={inputStyles.icon}
                updateText={(num) => this.submitPhone(num)}
                placeholder={I18n.t('registerPhone')}
                keyboardType="numeric"
                returnKeyType={'next'}
                ref={ref => this.inputRefs['phone'] = ref}
                inputRef="phone"
                editable={!!this.state.profileType}
                onSubmitEditing={(e) => this.inputRefs['child0'] && this.inputRefs['child0'].refs && this.inputRefs['child0'].refs.children && this.inputRefs['child0'].refs.children.focus()}
              />
            }
            {!this.state.isCreatingSubAccount && !!this.state.profileType && 
              <View>
                {this.state.subAccountsList.map((subAccountPseudo, index) => 
                  <View style={styles.childContainer}>
                    <View style={styles.childRow}>
                      <Input
                        styles={!!this.state.profileType ? inputStyles.input : inputStyles.disabled}
                        inputIconStyles={inputStyles.icon}
                        updateText={(text) => this.updateSubAccountPseudo(index, text)}
                        placeholder={this.state.profileType === 'PERSON' ? I18n.t('registerPseudoChild') + ' ' + (index + 1) : I18n.t('registerPseudoTeam') + ' ' + (index + 1) + ' (' + I18n.t('optional') + ')'}
                        returnKeyType={'next'}
                        onSubmitEditing={(e) => this.inputRefs.email.refs.email.focus()}
                        editable={!!this.state.profileType}
                        error={!this.state.subAccountsListValidation[index]}
                        errorMessageDisplayed={true}
                        ref={ref => this.inputRefs['child'+index] = ref}
                        inputRef="children"
                        onSubmitEditing={(e) => this.inputRefs['child'+(index+1)] && this.inputRefs['child'+(index+1)].refs && this.inputRefs['child'+(index+1)].refs.children && this.inputRefs['child'+(index+1)].refs.children.focus()}
                      />
                    </View>
                    {!this.state.subAccountsListValidation[index] &&
                      <Text style={styles.childAddError}>{I18n.t('registerSubAccount_userAlreadyExists')}</Text>
                    } 
                  </View>
                )}
                <TouchableOpacity style={styles.addChildRow} onPress={this.addChild}>
                  <Text style={styles.addChildText}>
                    {this.state.profileType === 'PERSON' ? I18n.t('registerAddChild') : I18n.t('registerAddTeam')}
                  </Text>
                  <View style={styles.childAddContainer}>
                    <Image source={icons.organize} style={styles.childAddIcon}/>
                  </View>
                </TouchableOpacity>
              </View>
            }

            {
              /*
                <DatePicker
                  style={styles.datePicker}
                  date={birthday}
                  mode="date"
                  placeholder={I18n.t('registerBirthdatDate')}
                  format="YYYY-MM-DD"
                  minDate="1900-01-01"
                  maxDate="2100-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  ref={(picker) => { this.datePicker = picker; }}
                  showIcon={false}
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      tintColor: colors.backgroundColor,
                      left: 0,
                      marginLeft: 0,
                      backgroundColor: '#ffffff',
                    },
                    dateInput: {
                      borderWidth: 2,
                      borderColor: colors.skyBlue,
                    },
                  }}
                  onDateChange={(date) => this.addBirthday(date)}
                />
              */
            }

            {
              errors ?
                <Text style={styles.errorText}>
                  {errors}
                </Text>
              :
                <View>
                  <Text style={styles.policyText}>
                    {I18n.t('registerPrivacyText')}
                  </Text>
                  <View style={styles.policyContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('termsOfUse')}>
                      <Text style={styles.policyTextBold}>{I18n.t('registerTermsOfUse')}</Text>
                    </TouchableOpacity>
                    <Text style={styles.policyText}> {I18n.t('registerAnd')} </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('privacyPolicy')}>
                      <Text style={styles.policyTextBold}>{I18n.t('registerPrivacyPolicy')}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
            }

            {
              isCreatingProfile ?
                <ActivityIndicator
                  animating={isCreatingProfile}
                  style={styles.ActivityIndicator}
                  size="large"
                  color={colors.blue}
                /> : null
            }

            <OpacityButton
              buttonStyles={[opacityButtonStyles.submitButton, styles.submit]}
              textStyles={opacityButtonStyles.submitText}
              text={I18n.t('registerSubmit')}
              handlePress={this.createUser}
            />
            {!this.state.isCreatingSubAccount && (!this.state.profileType || this.state.profileType === 'PERSON') && 
              <OpacityButton
                buttonStyles={opacityButtonStyles.facebookButton}
                textStyles={opacityButtonStyles.facebookText}
                text={I18n.t('loginFacebook')}
                handlePress={this.authFacebook}
              />
            }
            {!this.state.isCreatingSubAccount &&
              <OpacityButton
                buttonStyles={opacityButtonStyles.googleButton}
                textStyles={opacityButtonStyles.googleText}
                text={I18n.t('loginGoogle')}
                handlePress={this.authGoogle}
              />
            }

          </KeyboardAwareScrollView>
        </View>
    )
  }
}

CreateProfilePage.propTypes = {
  relay: PropTypes.object.isRequired,
  isCreatingProfile: PropTypes.bool.isRequired,
  creatingProfile: PropTypes.func.isRequired,
  isCreatingSubAccount: PropTypes.bool.isRequired,
  creatingProfile: PropTypes.func.isRequired,
  validateInputs: PropTypes.func.isRequired,
  updateAvatar: PropTypes.func.isRequired,
  updatePseudo: PropTypes.func.isRequired,
  // updateName: React.PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updatePhone: PropTypes.func.isRequired,
  // updateDescription: React.PropTypes.func.isRequired,
  updateBirthday: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  // name: React.PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  // description: React.PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  // languages: React.PropTypes.array.isRequired,
  // address: React.PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired,
  resetInputs: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  isCreatingProfile: state.sportunityCreateProfile.isCreatingProfile,
  isCreatingSubAccount: state.sportunityCreateProfile.isCreatingSubAccount,
  avatar: state.sportunityCreateProfile.avatar,
  pseudo: state.sportunityCreateProfile.pseudo,
  // name: state.sportunityCreateProfile.name,
  email: state.sportunityCreateProfile.email,
  password: state.sportunityCreateProfile.password,
  phone: state.sportunityCreateProfile.phone,
  // description: state.sportunityCreateProfile.description,
  birthday: state.sportunityCreateProfile.birthday,
  // languages: state.sportunityCreateProfile.languages,
  // address: state.sportunityCreateProfile.address,
  errors: state.sportunityCreateProfile.errors,
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency,
  tutorialSteps: state.sportunityProfile.tutorialSteps,
});

const dispatchToProps = (dispatch) => ({
  creatingProfile: bindActionCreators(creatingProfile, dispatch),
  creatingSubAccount: bindActionCreators(creatingSubAccount, dispatch),
  validateInputs: bindActionCreators(validateInputs, dispatch),
  updateAvatar: bindActionCreators(updateAvatar, dispatch),
  updatePseudo: bindActionCreators(updatePseudo, dispatch),
  // updateName: bindActionCreators(updateName, dispatch),
  updateEmail: bindActionCreators(updateEmail, dispatch),
  updatePassword: bindActionCreators(updatePassword, dispatch),
  updatePhone: bindActionCreators(updatePhone, dispatch),
  // updateDescription: bindActionCreators(updateDescription, dispatch),
  updateBirthday: bindActionCreators(updateBirthday, dispatch),
  resetInputs: bindActionCreators(resetInputs, dispatch),
  resetTutorialSteps: bindActionCreators(resetTutorialSteps, dispatch),
  updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
});

const CreateProfileReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(CreateProfilePage);

/**
*  RELAY CONTAINER (HOC)
*/
const CreateProfilePageTemp = createRefetchContainer(withNavigation(CreateProfileReduxContainer), {
  viewer: graphql`fragment CreateProfilePage_viewer on Viewer @argumentDefinitions(
    pseudo: {type: "String"},
    email: {type: "String"},
    requestUserExists: {type: "Boolean!", defaultValue: false}
  ) {
      id,
      userExists(pseudo: $pseudo, email: $email) @include(if: $requestUserExists)
      me {
        id
        pseudo
        email
        phoneNumber
      }
    }
  `}, 
  graphql`
    query CreateProfilePageRefetchQuery (
      $pseudo: String,
      $email: String,
      $requestUserExists: Boolean!
    ){
      viewer {
        ...CreateProfilePage_viewer @arguments (pseudo: $pseudo, email: $email, requestUserExists: $requestUserExists)
      }
    }
  `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', I18n.t('register'))
    };
  };
  
  setTitle = title => this.props.navigation && this.props.navigation.setParams({title})
  
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query CreateProfilePageQuery {
            viewer {
              ...CreateProfilePage_viewer 
            }
          }
        `}
        render={({error, props}) => {
          if (props) {
            return <CreateProfilePageTemp query={props} viewer={props.viewer} {...this.props} setTitle={this.setTitle}/>;
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

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center'
  },
  container: {
    justifyContent: 'center',
    // paddingBottom: metrics.navBarHeight*3,
    //paddingVertical: metrics.doubleBaseMargin,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 50
  },
  // leftText: {
  //   paddingHorizontal: 20,
  //   fontSize: fonts.size.small,
  //   color: colors.skyBlue,
  //   alignSelf: 'flex-start',
  //   marginVertical: metrics.baseMargin,
  // },
  picker: {
    width: window.width * 0.5,
    alignSelf: 'center',
    margin: metrics.doubleBaseMargin,
  },
  datePicker: {
    width: window.width * 0.5,
    alignSelf: 'center',
    margin: metrics.doubleBaseMargin + 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin: metrics.doubleBaseMargin,
  },
  label: {
    fontSize: fonts.size.regular,
    color: colors.blue,
  },
  errorText: {
    color: colors.red,
    alignSelf: 'center',
    marginVertical: metrics.baseMargin,
  },
  avatarPlaceHolder: {
    height: 100,
    width: 100,
    alignSelf: 'center',
  },
  avatar: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  policyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
  policyText: {
    fontSize: fonts.size.small,
    color: colors.blue,
    textAlign: 'center',
  },
  policyTextBold: {
    fontSize: fonts.size.medium,
    color: colors.green,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  submit: {
    marginBottom: 5,
  },
  childContainer: {
    flexDirection: 'column',
    //
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  childAddContainer: {
    //backgroundColor: colors.skyBlue,
    height: metrics.icons.medium,
    width: metrics.icons.medium,
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: metrics.icons.medium,
    flexDirection: 'row',
    //marginRight: metrics.baseMargin
  },
  childAddText: {
    color: colors.white,
    fontSize: fonts.style.h4.fontSize,
    fontFamily: fonts.style.h4.fontFamily,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent'
  },
  childAddIcon: {
    tintColor: colors.skyBlue, 
    height: metrics.icons.medium,
    width: metrics.icons.medium,
  },
  childAddError: {
    fontSize: fonts.size.small,
    color: colors.error,
    marginLeft: metrics.doubleBaseMargin * 2
  },
  addChildText: {
    color: colors.blue
  },
  addChildRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.doubleBaseMargin * 2,
    marginBottom: 15
  }
});

I18n.fallbacks = true

I18n.translations = translations;

// This should be inserted when sports, payment methods, payoff methods are ready

// <LanguageItems />
// <Text style={styles.leftText}>
//   Present your sport and level
// </Text>
// <SportItems />
// <Text style={styles.leftText}>
//   Payment
// </Text>
// <PaymentMethods />
// <Text style={styles.leftText}>
//   Payoff
// </Text>
// <PayoffMethods />
