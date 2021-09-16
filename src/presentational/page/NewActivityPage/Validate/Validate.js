import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity, AsyncStorage, Alert, ActivityIndicator } from 'react-native';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { bindActionCreators } from 'redux';
import cloneDeep from 'lodash/cloneDeep';

import { changeLoadingStatus, showErrors, resetAllFields } from 'sportunity/src/action/newActivityActions';
import change from 'sportunity/src/action/changeSportunityFilterKind';
import { updateStepsCompleted } from 'sportunity/src/action/profileActions';
import SportunityPage from '../../SportunityPage/SportunityPage.js';
import NewSportunityMutation from './NewSportunityMutation';
import UpdateSportunityMutation from './NewUpdateSportunityMutation';
import NewSportunityTemplateMutation from './NewSportunityTemplateMutation';
import UpdateSportunityTemplateMutation from './UpdateSportunityTemplateMutation';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { metrics } from 'sportunity/src/theme';
import Button from '../../../UI/Button';

import * as globals from '../../../../lib/globalsjs/globals';

import RelayStore from '../../../../RelayStore';

const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class Validate extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    if (this.props.sportunityId) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        sportunityID: this.props.sportunityId,
        query: true
      });

      this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
      );
    }
  }

  checkIfEventShouldBeModerated = () => {
    if (!this.props.isActivityPrivate && (!this.props.invitees || this.props.invitees.length === 0) && (!this.props.invitedCircles || this.props.invitedCircles.length === 0 || this.props.invitedCircles.findIndex(invitedCircle => invitedCircle.memberCount > 0) < 0)) {
      Alert.alert(
        I18n.t('sportunityAlertNoCommunityTitle'),
        I18n.t('sportunityAlertNoCommunityText'),
        [
          { text: 'OK', onPress: this.validate },
        ]
      )
    }
    else
      this.validate();
  }

  validate = () => {
    const {
      isLoggedIn,
      activityTitle,
      activityDescription,
      sportName,
      sportunitySport,
      pricePerParticipant,
      minimumNumber,
      maximumNumber,
      isUserParticipant,
      organizerContribution,
      levelMinSliderValue,
      levelMaxSliderValue,
      newActivityDateForServer,
      newActivityEndDateForServer,
      viewer,
      isActivityPrivate,
      hideParticipantSwitchOn,
      notificationPreferenceMode,
      notificationAutoTime,
      autoSwitchActivityPrivacy,
      autoSwitchActivityPrivacyTime,
      invitees,
      invitedCircles,
      invitedCirclesAndPrices,
      isNewActivityLoading,
      changeLoadingStatus,
      showErrors,
      resetAllFields,
      placeName,
      placeId,
      isPlaceSwitchOn,
      addressName,
      addressCountry,
      addressCity,
      addressZip,
      venue,
      infrastructure,
      slot,
      sexRestriction,
      ageRestriction,
      sportunityType,
      mainOrganizer,
      coOrganizers,
      isOpenMatch,
      opponent,
      circleOfOpponents,
      unknownOpponent,
      sportunityId,
      repeatValue,
      updateSerie,
      notifyPeople,
      sportunity
    } = this.props;

    changeLoadingStatus(true);
    showErrors(true);

    const title = activityTitle;
    const description = activityDescription;
    const address = {
      address: addressName,
      country: addressCountry,
      city: addressCity,
      zip: addressZip,
    };

    let organizers = [];
    if (mainOrganizer && mainOrganizer.organizer && mainOrganizer.organizer.id) {
      organizers.push({
        organizer: mainOrganizer.organizer.id,
        isAdmin: true,
        role: 'COACH',
        price: {
          cents: 0,
          currency: this.props.userCurrency
        }
      })
    } else {
      organizers.push({
        organizer: viewer.me.id,
        isAdmin: true,
        role: 'COACH',
        price: {
          cents: 0,
          currency: this.props.userCurrency
        }
      })
    }

    let pendingOrganizers = [];

    coOrganizers.forEach(organizer => {
      if (organizer.circles && organizer.circles.length > 0) {
        pendingOrganizers.push({
          id: organizer.id ? organizer.id : null,
          circles: organizer.circles.map(circle => circle.id),
          isAdmin: false,
          role: 'COACH',
          price: {
            cents: organizer.price.cents * 100,
            currency: organizer.price.currency
          },
          secondaryOrganizerType: organizer.secondaryOrganizerType ? organizer.secondaryOrganizerType.key : null,
          customSecondaryOrganizerType: organizer.customSecondaryOrganizerType !== '' ? organizer.customSecondaryOrganizerType : null,
          permissions: organizer.permissions,
        })
      }
      else {
        organizers.push({
          organizer: organizer.organizer.id,
          isAdmin: false,
          role: 'COACH',
          price: {
            cents: organizer.price.cents * 100,
            currency: organizer.price.currency
          },
          secondaryOrganizerType: organizer.secondaryOrganizerType ? organizer.secondaryOrganizerType.key : null,
          customSecondaryOrganizerType: organizer.customSecondaryOrganizerType !== '' ? organizer.customSecondaryOrganizerType : null,
          permissions: organizer.permissions,
        })
      }
      //totalCost = totalCost + organizer.price.cents
    })

    const sport = sportunitySport;
    const price = {
      currency: this.props.userCurrency,
      cents: pricePerParticipant * 100,
    };
    const participantRange = {
      from: minimumNumber,
      to: maximumNumber,
    };
    let participants = null;
    if(isUserParticipant) {
      participants = viewer.me.id;
    }
    const mode = 'RANDOM';
    // const levelRestriction = {
    //   from: levelMinSliderValue,
    //   to: levelMaxSliderValue,
    // };
    const beginningDate = newActivityDateForServer;
    const endingDate = newActivityEndDateForServer;
    let kind = 'PUBLIC';

    if(isActivityPrivate) {
      kind = 'PRIVATE';
    }
    else {
      kind = 'PUBLIC';
    }
    const paymentMethod = viewer.me && viewer.me.paymentMethods && viewer.me.paymentMethods.length && viewer.me.paymentMethods[0].id || null;
    // const paymentMethod = 'UGF5bWVudE1ldGhvZDo1ODg2MDc5NTgzNzlkZjAwMDEwMGYwOWY=' //  working payment method for pseudo:  max   pass: max

    const organizerPays = {
      currency: this.props.userCurrency,
      cents: 0,
      // cents: organizerContribution,
    }

    /*let allParticipants = []
    if (invitedCirclesAndPrices && invitedCirclesAndPrices.length > 0) {
      invitedCirclesAndPrices.forEach(item => {
        if (item.participantByDefault) {
          item.circle.members.forEach(member => {
            if (allParticipants.findIndex(participant => participant === member.id) < 0)
              allParticipants.push(member.id)
          })
        }
      })

      if (sportunity && sportunity.participants && sportunity.participants.length > 0) {
        sportunity.participants.forEach(item => {
          if (allParticipants.findIndex(participant => participant === item) < 0)
            allParticipants.push(item)
        })
      }
    }*/

    const hasBankAccount = !!viewer.me.bankAccount;
    const hasPaymentMethod = viewer.me.paymentMethods && viewer.me.paymentMethods.length;
    if (!viewer.me) {
      changeLoadingStatus(false);
      Toast.show(I18n.t('sportunityToastLogin'));
     this.props.navigation.navigate('settings')
    }
    else if (
      activityTitle === '' || activityDescription === '' || sportName === '' ||
      placeName === '' || newActivityDateForServer === '' || newActivityEndDateForServer === '' ||
      maximumNumber === 0 || moment(newActivityEndDateForServer).isBefore(newActivityDateForServer)
    ) {
      Toast.show(I18n.t('needToAddAllFields'));
      changeLoadingStatus(false);
      return false;
    }
    else if (isLoggedIn && !hasBankAccount && (pricePerParticipant>0 || (invitedCirclesAndPrices && invitedCirclesAndPrices.findIndex(circle => circle.price.cents > 0) >= 0))) {
      if (viewer.me.isProfileComplete) {
        Toast.show(I18n.t('setupBank'));
        changeLoadingStatus(false);
        this.props.navigation.navigate('myBankAccount');
      }
      else {
        Toast.show(I18n.t('sportunityToastCompleteProfile'));
        changeLoadingStatus(false);

        this.props.navigation.navigate('paymentInformation', {
          fromSportunityPage: I18n.t('create').toLowerCase(),
          hideNavBar:false,
          onSaveAccount: () => {
            this.props.navigation.goBack()
            this.props.navigation.navigate('myAccount',{
              paymentMethodOptional: !isUserParticipant,
              bankAccountOptional: false,
              fromSportunityPage: I18n.t('create').toLowerCase()
            });
          }
        });
      }
    }
    else if (isLoggedIn && pricePerParticipant>0 && isUserParticipant && !hasPaymentMethod) {
      Toast.show(I18n.t('accountToastAddPayment'));
      changeLoadingStatus(false);
      this.props.navigation.navigate('myAccount', {
        paymentMethodOptional: false,
        bankAccountOptional: false,
        fromSportunityPage: I18n.t('create').toLowerCase()
      });
    }
    else if (notificationPreferenceMode === "Automatically" && new Date(new Date(newActivityDateForServer) - notificationAutoTime * 24 * 3600 * 1000) < new Date()) {
      Toast.show(I18n.t('notificationPreferenceAutomaticallyNumberOfDaysError'));
      changeLoadingStatus(false);
      return false;
    }
    else if (isActivityPrivate && autoSwitchActivityPrivacy && new Date(new Date(newActivityDateForServer) - autoSwitchActivityPrivacyTime * 24 * 3600 * 1000) < new Date()) {
      Toast.show(I18n.t('automaticallySwitchPrivacyNumberOfDaysError2'));
      changeLoadingStatus(false);
      return false;
    }
    /*else if (maximumNumber < allParticipants.length) {
      Toast.show(I18n.t('automaticallyInvitedToParticipantsError'));
      changeLoadingStatus(false);
      return ;
    }*/
    else {

      // const paymentMethod = viewer.me && viewer.me.paymentMethodId;

      if (this.props.isSaveTemplateSwitchOn) {
        this.saveTemplate({paymentMethod, kind, mode, participantRange, price, sport, organizers, pendingOrganizers, address, description, title, organizerPays})
      }

      if(isLoggedIn && sportunityId){
        if (repeatValue && repeatValue >= 1 && updateSerie) {
          Toast.show(I18n.t('sportunitySerieUpdateSuccess'));
          this.props.navigation.navigate('sportunityList')
        }
        UpdateSportunityMutation.commit({
          sportunityID: sportunityId,
          sportunity: {
            title,
            description,
            address,
            venue : venue && venue.id ? venue.id : null,
            infrastructure: infrastructure && infrastructure.id ? infrastructure.id : null,
            slot: slot && slot.id ? slot.id : null,
            organizers,
            pendingOrganizers,
            sport,
            participants,
            price,
            participantRange,
            mode,
            ageRestriction,
            sexRestriction,
            sportunityType: sportunityType === 'NONE' ? null : sportunityType,
            game_information: {
              opponent: {
                organizer: opponent ? opponent.id : null,
                organizerEmail: opponent && opponent.pseudo && isEmail.test(opponent.pseudo) && !opponent.id ? opponent.pseudo : null,
                organizerPseudo: opponent && opponent.pseudo && !isEmail.test(opponent.pseudo) && !opponent.id ? opponent.pseudo : null,
                lookingForAnOpponent: isOpenMatch,
                invitedOpponents: circleOfOpponents ? [circleOfOpponents.id] : null,
                unknownOpponent: unknownOpponent
              }
            },
            beginning_date: beginningDate,
            ending_date: endingDate,
            kind,
            paymentMethodId: paymentMethod,
            hide_participant_list: hideParticipantSwitchOn,
            //organizerPays,
            invited: invitees.map(pseudo=>({ pseudo, answer:'WAITING' })),
            invited_circles: invitedCircles.map(circle => circle.id),
            price_for_circle: invitedCirclesAndPrices.map(item => {
              return {
                circle: item.circle.id,
                price: {
                  cents: item.price.cents * 100,
                  currency: item.price.currency
                },
                participantByDefault: item.participantByDefault
              }
            }),
            notification_preference: {
              notification_type: notificationPreferenceMode,
              send_notification_x_days_before: (notificationPreferenceMode === "Automatically" ? notificationAutoTime : null)
            },
            privacy_switch_preference: {
              privacy_switch_type: (autoSwitchActivityPrivacy ? "Automatically" : "Manually") ,
              switch_privacy_x_days_before: (autoSwitchActivityPrivacy ? autoSwitchActivityPrivacyTime : null)
            },
           // repeat: repeatValue ? parseInt(repeatValue) : null,
            modifyRepeatedSportunities: updateSerie,
          },
          notify_people: notifyPeople,
        },
        (response) => {
          console.log(response);
          changeLoadingStatus(false);
          resetAllFields();
          Toast.show(I18n.t('sportunityUpdateSuccess'));
          if (!repeatValue || repeatValue < 1) {
            this.props.navigation.navigate('sportunityList')
          }
          setTimeout(() => globals.object('refetchEvents').call('refetchEvents'), 2000);
          this.props.changeKind("Organized");

        },
        (transaction) => {
          changeLoadingStatus(false);
          console.log('error: ', transaction, transaction.getError(), transaction.getError());
        });
      } else if (isLoggedIn && !sportunityId) {
        NewSportunityMutation.commit({
          viewer: this.props.viewer,
          sportunity: {
            title,
            description,
            address,
            venue : venue && venue.id ? venue.id : null,
            infrastructure: infrastructure && infrastructure.id ? infrastructure.id : null,
            slot: slot && slot.id ? slot.id : null,
            organizers,
            pendingOrganizers,
            sport,
            participants,
            price,
            participantRange,
            mode,
            ageRestriction,
            sexRestriction,
            sportunityType: sportunityType === 'NONE' ? null : sportunityType,
            game_information: {
              opponent: {
                organizer: opponent && opponent.id ? opponent.id : null,
                organizerEmail: opponent && opponent.pseudo && isEmail.test(opponent.pseudo) && !opponent.id ? opponent.pseudo : null,
                organizerPseudo: opponent && opponent.pseudo && !isEmail.test(opponent.pseudo) && !opponent.id ? opponent.pseudo : null,
                lookingForAnOpponent: isOpenMatch,
                invitedOpponents: circleOfOpponents ? [circleOfOpponents.id] : null,
                unknownOpponent: unknownOpponent
              }
            },
            beginning_date: beginningDate,
            ending_date: endingDate,
            kind,
            paymentMethodId: paymentMethod,
            //organizerPays,
            invited: invitees.map(pseudo=>({ pseudo, answer:'WAITING' })),
            invited_circles: invitedCircles.map(circle => circle.id),
            price_for_circle: invitedCirclesAndPrices.map(item => {
              return {
                circle: item.circle.id,
                price: {
                  cents: item.price.cents * 100,
                  currency: item.price.currency
                },
                participantByDefault: item.participantByDefault
              }
            }),
            hide_participant_list: hideParticipantSwitchOn,
            notification_preference: {
              notification_type: notificationPreferenceMode,
              send_notification_x_days_before: (notificationPreferenceMode === "Automatically" ? notificationAutoTime : null)
            },
            privacy_switch_preference: {
              privacy_switch_type: (autoSwitchActivityPrivacy ? "Automatically" : "Manually") ,
              switch_privacy_x_days_before: (autoSwitchActivityPrivacy ? autoSwitchActivityPrivacyTime : null)
            },
            repeat: repeatValue ? parseInt(repeatValue) : null,
          }
        },
        (response) => {
          changeLoadingStatus(false);
          resetAllFields();
          if (repeatValue && repeatValue >= 1) {
            Toast.show(I18n.t('sportunitySerieCreationSuccess'));
          }
          else {
            Toast.show(I18n.t('sportunityCreationSuccess'));
          }
          this.props.navigation.navigate('sportunityList')
          this.props.changeKind("Organized");
          setTimeout(() => globals.object('refetchEvents').call('refetchEvents'), 2000);
          this.updateTutorialSteps();
        },
        (transaction) => {
          changeLoadingStatus(false);
          console.log('error: ', transaction, transaction.getError(), transaction.getError());
        }
        );
      } else {
        changeLoadingStatus(false);
        Toast.show(I18n.t('sportunityToastLogin'));
        this.props.navigation.navigate('settings')
      }
    }
  }

  updateTutorialSteps = () => {
    const { tutorialSteps, updateStepsCompleted } = this.props;
    let newTutorialSteps = cloneDeep(tutorialSteps);

    newTutorialSteps['organizeStep'] = true;
    updateStepsCompleted(newTutorialSteps);
  }


  saveTemplate = (properties) => {
    const {
      isLoggedIn,
      activityTitle,
      activityDescription,
      sportName,
      sportunitySport,
      pricePerParticipant,
      minimumNumber,
      maximumNumber,
      isUserParticipant,
      organizerContribution,
      levelMinSliderValue,
      levelMaxSliderValue,
      newActivityDateForServer,
      newActivityEndDateForServer,
      viewer,
      isActivityPrivate,
      hideParticipantSwitchOn,
      notificationPreferenceMode,
      notificationAutoTime,
      autoSwitchActivityPrivacy,
      autoSwitchActivityPrivacyTime,
      invitees,
      invitedCircles,
      invitedCirclesAndPrices,
      isNewActivityLoading,
      changeLoadingStatus,
      showErrors,
      resetAllFields,
      placeName,
      placeId,
      isPlaceSwitchOn,
      addressName,
      addressCountry,
      addressCity,
      addressZip,
      venue,
      infrastructure,
      slot,
      sexRestriction,
      ageRestriction,
      sportunityType,
      mainOrganizer,
      coOrganizers,
      isOpenMatch,
      opponent,
      circleOfOpponents,
      unknownOpponent,
      sportunityId,
      repeatValue,
      updateSerie,
      notifyPeople,
      sportunity
    } = this.props;

    const {paymentMethod, kind, mode, participantRange, price, sport, organizers, pendingOrganizers, address, description, title, organizerPays} = properties;

    let params = {
      sportunityTemplate: {
        title,
        description,
        address,
        organizers,
        pendingOrganizers,
        sport,
        price,
        participantRange,
        mode,
        ageRestriction,
        sexRestriction,
        sportunityType: sportunityType === 'NONE' ? null : sportunityType,
        game_information: {
          opponent: {
            organizer: opponent && opponent.id ? opponent.id : null,
            organizerEmail: opponent && opponent.pseudo && isEmail.test(opponent.pseudo) && !opponent.id ? opponent.pseudo : null,
            organizerPseudo: opponent && opponent.pseudo && !isEmail.test(opponent.pseudo) && !opponent.id ? opponent.pseudo : null,

            lookingForAnOpponent: isOpenMatch,
            invitedOpponents: circleOfOpponents ? [circleOfOpponents.id] : null,
            unknownOpponent: unknownOpponent
          }
        },
        kind,
        //organizerPays,
        invited: invitees.map(pseudo=>({ pseudo, answer:'WAITING' })),
        invited_circles: invitedCircles.map(circle => circle.id),
        price_for_circle: invitedCirclesAndPrices.map(item => {
          return {
            circle: item.circle.id,
            price: {
              cents: item.price.cents * 100,
              currency: item.price.currency
            },
            participantByDefault: item.participantByDefault
          }
        }),
        hide_participant_list: hideParticipantSwitchOn,
        notification_preference: {
          notification_type: notificationPreferenceMode,
          send_notification_x_days_before: (notificationPreferenceMode === "Automatically" ? notificationAutoTime : null)
        },
        privacy_switch_preference: {
          privacy_switch_type: (autoSwitchActivityPrivacy ? "Automatically" : "Manually") ,
          switch_privacy_x_days_before: (autoSwitchActivityPrivacy ? autoSwitchActivityPrivacyTime : null)
        },
      }
    }
    if (this.props.selectedTemplate) {
      params.sportunityTemplateId = this.props.selectedTemplate.id;

      UpdateSportunityTemplateMutation.commit(params,
        (response) => {
          //Toast.show(I18n.t('updateTemplateSuccess'));
        },
        (transaction) => {
          console.log('error: ', transaction, transaction.getError(), transaction.getError());
          Toast.show(I18n.t('sportunityAlertnewOpponentFailed'))
        });
    }
    else {
      NewSportunityTemplateMutation.commit(params,
        (response) => {
          Toast.show(I18n.t('createTemplateSuccess'));
        },
        (transaction) => {
          console.log('error: ', transaction, transaction.getError(), transaction.getError());
          Toast.show(I18n.t('sportunityAlertnewOpponentFailed'))
        }
      );
    }
  }

  render() {
    const {
      isNewActivityLoading,
      sportunityId
    } = this.props;

    return(
      <View style={{ flex: 1, marginVertical: metrics.doubleBaseMargin, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          text={sportunityId ? I18n.t('update') : I18n.t('create')}
          loading={isNewActivityLoading}
          onPress={this.checkIfEventShouldBeModerated}
          type={'primary'}
          rounded={true}
          width={'20%'}
          height={40}
        />
      </View>
    )
  }
}

Validate.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  activityTitle: PropTypes.string.isRequired,
  activityDescription: PropTypes.string.isRequired,
  sportName: PropTypes.string.isRequired,
  sportunitySport: PropTypes.object.isRequired,
  pricePerParticipant: PropTypes.number.isRequired,
  minimumNumber: PropTypes.number.isRequired,
  maximumNumber: PropTypes.number.isRequired,
  isUserParticipant: PropTypes.bool.isRequired,
  hideParticipantSwitchOn: PropTypes.bool.isRequired,
  levelMinSliderValue: PropTypes.number.isRequired,
  levelMaxSliderValue: PropTypes.number.isRequired,
  newActivityDateForServer: PropTypes.string.isRequired,
  newActivityEndDateForServer: PropTypes.string.isRequired,
  isActivityPrivate: PropTypes.bool.isRequired,
  notificationPreferenceMode: PropTypes.string.isRequired,
  notificationAutoTime: PropTypes.number,
  autoSwitchActivityPrivacy: PropTypes.bool,
  autoSwitchActivityPrivacyTime: PropTypes.number,
  viewer: PropTypes.object.isRequired,
  isNewActivityLoading: PropTypes.bool.isRequired,
  changeLoadingStatus: PropTypes.func.isRequired,
  resetAllFields: PropTypes.func.isRequired,
  showErrors: PropTypes.func.isRequired,
  isPlaceSwitchOn: PropTypes.bool.isRequired,
  organizerContribution: PropTypes.number.isRequired,
  placeName: PropTypes.string.isRequired,
  placeId: PropTypes.string.isRequired,
  addressName: PropTypes.string.isRequired,
  addressCountry: PropTypes.string.isRequired,
  addressCity: PropTypes.string.isRequired,
  addressZip: PropTypes.string.isRequired,
  invitees: PropTypes.array.isRequired,
  sexRestriction: PropTypes.string.isRequired,
  ageRestriction: PropTypes.object.isRequired,
  repeatValue: PropTypes.string,
};

const stateToProps = (state) => ({
  activityTitle: state.sportunityNewActivity.activityTitle,
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate,
  notificationPreferenceMode: state.sportunityNewActivity.notificationPreferenceMode,
  notificationAutoTime: state.sportunityNewActivity.notificationAutoTime,
  autoSwitchActivityPrivacy: state.sportunityNewActivity.autoSwitchActivityPrivacy,
  autoSwitchActivityPrivacyTime: state.sportunityNewActivity.autoSwitchActivityPrivacyTime,
  activityDescription: state.sportunityNewActivity.activityDescription,
  sportName: state.sportunityNewActivity.sportName,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  isUserParticipant: state.sportunityNewActivity.isUserParticipant,
  hideParticipantSwitchOn: state.sportunityNewActivity.hideParticipantSwitchOn,
  levelMinSliderValue: state.sportunityNewActivity.levelMinSliderValue,
  levelMaxSliderValue: state.sportunityNewActivity.levelMaxSliderValue,
  newActivityDateForServer: state.sportunityNewActivity.newActivityDateForServer,
  newActivityEndDateForServer: state.sportunityNewActivity.newActivityEndDateForServer,
  isNewActivityLoading: state.sportunityNewActivity.isNewActivityLoading,
  isPlaceSwitchOn: state.sportunityNewActivity.isPlaceSwitchOn,
  organizerContribution: state.sportunityNewActivity.organizerContribution,
  placeName: state.sportunityNewActivity.placeName,
  placeId: state.sportunityNewActivity.placeId,
  addressName: state.sportunityNewActivity.addressName,
  addressCountry: state.sportunityNewActivity.addressCountry,
  addressCity: state.sportunityNewActivity.addressCity,
  addressZip: state.sportunityNewActivity.addressZip,
  invitees: state.sportunityNewActivity.invitees,
  invitedCircles: state.sportunityNewActivity.invitedCircles,
  invitedCirclesAndPrices: state.sportunityNewActivity.invitedCirclesAndPrices,
  sexRestriction: state.sportunityNewActivity.sexRestriction,
  ageRestriction: state.sportunityNewActivity.ageRestriction,
  sportunityType: state.sportunityNewActivity.sportunityType,
  isOpenMatch: state.sportunityNewActivity.isOpenMatch,
  opponent: state.sportunityNewActivity.opponent,
  circleOfOpponents: state.sportunityNewActivity.circleOfOpponents,
  unknownOpponent: state.sportunityNewActivity.unknownOpponent,
  repeatValue: state.sportunityNewActivity.repeatValue,
  mainOrganizer: state.sportunityNewActivity.mainOrganizer,
  coOrganizers: state.sportunityNewActivity.coOrganizers,
  venue: state.sportunityNewActivity.venue,
  infrastructure: state.sportunityNewActivity.infrastructure,
  slot: state.sportunityNewActivity.slot,
  isSaveTemplateSwitchOn: state.sportunityNewActivity.isSaveTemplateSwitchOn,
  selectedTemplate: state.sportunityNewActivity.selectedTemplate,
  userCurrency: state.sportunityLocale.userCurrency,
  userCountry: state.sportunityLocale.userCountry,
  tutorialSteps: state.sportunityProfile.tutorialSteps,
});

const dispatchToProps = (dispatch) => ({
  changeLoadingStatus: bindActionCreators(changeLoadingStatus, dispatch),
  resetAllFields: bindActionCreators(resetAllFields, dispatch),
  showErrors: bindActionCreators(showErrors, dispatch),
  changeKind: (kind) => dispatch(change(kind)),
  updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
});

const ReduxContainer =  connect(
  stateToProps,
  dispatchToProps
)(Validate);

export default createRefetchContainer(ReduxContainer, {
  viewer: graphql`
    fragment Validate_viewer on Viewer @argumentDefinitions(
      query: {type: "Boolean!", defaultValue: false},
      sportunityID: {type: "ID"}
    ) {
        id,
        me {
          id,
          isProfileComplete
          bankAccount {
            id
          },
          paymentMethods {
            id
            cardType
            cardMask
            expirationDate
          }
        }
        sportunity (id: $sportunityID) @include(if: $query) {
          participants {
            id
          }
        }
      }
    `,
  },
  graphql`
    query ValidateRefetchQuery ($query: Boolean!, $sportunityID: ID) {
      viewer {
        ...Validate_viewer @arguments(query: $query, sportunityID: $sportunityID)
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;
