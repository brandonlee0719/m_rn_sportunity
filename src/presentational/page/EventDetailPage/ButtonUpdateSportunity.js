import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import { withNavigation } from 'react-navigation';
import {
  updateTitle,
  updateDescription,
  updateSport,
  updateNewActivityDate,
  updateNewActivityEndDate,
  updateFromHour,
  updateFromMinute,
  updateToHour,
  updateToMinute,
  updatePlace,
  updateAddress,
  updateMinimumNumber,
  updateMaximumNumber,
  addUserAsParticipant,
  updatePrivateActivity,
  updatePricePerParticipant,
  updateInvitees,
  newInvitedCircle,
  newInvitedCircleAndPrice,
  allowUpdatingPrice,
  updateSexRestriction,
  updateAgeRestriction,
  updateSportunityType,
  updateSportunityOpponent,
  updateFreeSwitch,
  updateHideParticipantsSwitch,
  updateNotificationPreferenceMode,
  updateAutoNotificationTime,
  updateAutoSwitchPrivacy,
  updateTimeAutoSwitchPrivacy,
  updateSportunityCircleOfOpponents,
  updateSportunityOpenMatch,
  updateSportunityUnknownOpponent,
  addMainOrganizer,
  addCoOrganizer,
  resetCoOrganizers,
  updateVenue,
  updateInfrastructure,
  updateSlot,
  updateIsDateUpdatable,
} from 'sportunity/src/action/newActivityActions';

import Button from '../../Button/roundedButton';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

class ButtonUpdateSportunity extends Component{
  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
  }

  componentWillUnmount() {
    this.props.onRef && this.props.onRef(undefined)
  }

  goToUpdate = () => {
    const {
      sportunity,
      updateTitle,
      updateDescription,
      updateSport,
      updateNewActivityDate,
      updateNewActivityEndDate,
      updateFromHour,
      updateFromMinute,
      updateToHour,
      updateToMinute,
      // updatePlace,
      updateAddress,
      updateMinimumNumber,
      updateMaximumNumber,
      addUserAsParticipant,
      updatePrivateActivity,
      updatePricePerParticipant,
      updateInvitees,
      newInvitedCircle,
      newInvitedCircleAndPrice,
      allowUpdatingPrice,
      updateSexRestriction,
      updateAgeRestriction,
      updateSportunityType,
      updateSportunityOpponent,
      updateSportunityCircleOfOpponents,
      updateSportunityOpenMatch,
      updateSportunityUnknownOpponent,
      updateFreeSwitch,
      updateHideParticipantsSwitch,
      updateNotificationPreferenceMode,
      updateAutoNotificationTime,
      updateAutoSwitchPrivacy,
      updateTimeAutoSwitchPrivacy,
      addMainOrganizer,
      addCoOrganizer,
      resetCoOrganizers,
      updateVenue,
      updateInfrastructure,
      updateSlot,
      updateIsDateUpdatable,
      language
    } = this.props;

    //
    // Set initial values (update s)
    //

    updateTitle(sportunity.title);

    updateDescription(sportunity.description);

    updateSport(
      sportunity.sport.sport.name.EN,
      this.getSportLevels(),
      this.getSportPositions(),
      this.getSportCertificates(),
      {
        sport: sportunity.sport.sport.id,
        levels: this.getSportLevelIds(),
        positions: this.getSportPositionIds(),
        certificates: this.getSportCertificateIds(),
      },
    );

    updateNewActivityDate(
      moment(sportunity.beginning_date).format('MMMM DD YYYY HH:mm'),
      moment(sportunity.beginning_date).format()
    );

    updateFromHour(moment(sportunity.beginning_date).format('HH'))
    updateFromMinute(moment(sportunity.beginning_date).format('mm'))

    updateNewActivityEndDate(
      moment(sportunity.ending_date).format('MMMM DD YYYY HH:mm'),
      moment(sportunity.ending_date).format()
    );

    updateToHour(moment(sportunity.ending_date).format('HH'))
    updateToMinute(moment(sportunity.ending_date).format('mm'))

    updateAddress({
      address: sportunity.address.address,
      country: sportunity.address.country,
      city: sportunity.address.city,
      zip: sportunity.address.zip,
    });

    updateMinimumNumber(
      sportunity.participantRange.from,
      0,
      sportunity.price.cents,
      sportunity.participantRange.to,
      sportunity.organizers[0].price && Math.abs(sportunity.organizers[0].price.cents) || 0,
      sportunity.fees,
    );

    updateMaximumNumber(
      sportunity.participantRange.to,
      0,
      sportunity.price.cents,
      sportunity.participantRange.from,
      sportunity.organizers[0].price && Math.abs(sportunity.organizers[0].price.cents) || 0,
      sportunity.fees,
    );

    updateSexRestriction(sportunity.sexRestriction);

    updateAgeRestriction({
      from: sportunity.ageRestriction ? sportunity.ageRestriction.from : 0,
      to: sportunity.ageRestriction ? sportunity.ageRestriction.to : 100
    })

    if (sportunity.sportunityType && sportunity.sportunityType.id)
      updateSportunityType(sportunity.sportunityType.id)

    if (sportunity.game_information && sportunity.game_information.opponent && sportunity.game_information.opponent.organizer)
      updateSportunityOpponent(sportunity.game_information.opponent.organizer)

    if (sportunity.game_information && sportunity.game_information.opponent && sportunity.game_information.opponent.organizerPseudo)
      updateSportunityOpponent({pseudo: sportunity.game_information.opponent.organizerPseudo})

    if (sportunity.game_information && sportunity.game_information.opponent && typeof sportunity.game_information.opponent.lookingForAnOpponent !== 'undefined')
      updateSportunityOpenMatch(sportunity.game_information.opponent.lookingForAnOpponent)

    if (sportunity.game_information && sportunity.game_information.opponent && typeof sportunity.game_information.opponent.unknownOpponent !== 'undefined')
      updateSportunityUnknownOpponent(sportunity.game_information.opponent.unknownOpponent);

    if (sportunity.game_information && sportunity.game_information.opponent && sportunity.game_information.opponent.invitedOpponents && sportunity.game_information.opponent.invitedOpponents.edges && sportunity.game_information.opponent.invitedOpponents.edges.length > 0)
      updateSportunityCircleOfOpponents(sportunity.game_information.opponent.invitedOpponents.edges.map(edge => edge.node)[0])

    updatePrivateActivity(this.checkIfSportunityIsPrivate());

    if (sportunity.notification_preference && sportunity.notification_preference.notification_type) {
      updateNotificationPreferenceMode(sportunity.notification_preference.notification_type);
      if (sportunity.notification_preference.notification_type === "Automatically" && sportunity.notification_preference.send_notification_x_days_before)
        updateAutoNotificationTime(sportunity.notification_preference.send_notification_x_days_before);
    }

    if (sportunity.privacy_switch_preference && sportunity.privacy_switch_preference.privacy_switch_type) {
      updateAutoSwitchPrivacy(sportunity.privacy_switch_preference.privacy_switch_type === "Automatically");
      if (sportunity.privacy_switch_preference.privacy_switch_type === "Automatically" && sportunity.privacy_switch_preference.switch_privacy_x_days_before)
        updateTimeAutoSwitchPrivacy(sportunity.privacy_switch_preference.switch_privacy_x_days_before);
    }


    if (sportunity.price.cents > 0)
    updateFreeSwitch(false);
    else
    updateFreeSwitch(true);

    updatePricePerParticipant(
      sportunity.price.cents / 100,
      0,
      sportunity.participantRange.from,
      sportunity.participantRange.to,
      sportunity.organizers[0].price && Math.abs(sportunity.organizers[0].price.cents) || 0,
      sportunity.fees,
    );

    updateInvitees(this.getInvitees());

    if (sportunity.invited_circles && sportunity.invited_circles.edges && sportunity.invited_circles.edges.length > 0) {
      sportunity.invited_circles.edges.forEach(edge => newInvitedCircle(edge.node))
    }

    if (sportunity.price_for_circle && sportunity.invited_circles && sportunity.invited_circles.edges && sportunity.invited_circles.edges.length > 0) {
      sportunity.invited_circles.edges.forEach(edge => {
        let circlePriceIndex = sportunity.price_for_circle.findIndex(item => item.circle.id === edge.node.id) ;
        if (circlePriceIndex >= 0)
          newInvitedCircleAndPrice({
            circle: edge.node,
            price: {
              cents: sportunity.price_for_circle[circlePriceIndex].price.cents / 100,
              currency: sportunity.price_for_circle[circlePriceIndex].price.currency
            },
            participantByDefault: sportunity.price_for_circle[circlePriceIndex].participantByDefault
          })
        else
          newInvitedCircleAndPrice({
            circle: edge.node,
            price: {
              cents: sportunity.price.cents / 100,
              currency: sportunity.price.currency,
            },
            participantByDefault: false
          })
      })
    }

    if (sportunity.price.cents > 0)
      addUserAsParticipant(this.checkIfUserIsParticipant());

    resetCoOrganizers();
    if (sportunity.organizers && sportunity.organizers.length > 1) {
      sportunity.organizers.filter(organizer => organizer.isAdmin).forEach(( organizer => {
        addMainOrganizer({
          organizer: organizer.organizer,
          price: {
            cents: organizer.price.cents / 100,
            currency: organizer.price.currency
          },
          secondaryOrganizerType: organizer.secondaryOrganizerType
              ? {key: organizer.secondaryOrganizerType.id, label: organizer.secondaryOrganizerType.name[language.toUpperCase()]}
              : null,
          customSecondaryOrganizerType: organizer.customSecondaryOrganizerType,
          permissions: organizer.permissions,
        })
      }))
    }
    if (sportunity.organizers && sportunity.organizers.length > 1) {
      sportunity.organizers.filter(organizer => !organizer.isAdmin).forEach(organizer => {
        addCoOrganizer({
          organizer: organizer.organizer,
          price: {
            cents: organizer.price.cents / 100,
            currency: organizer.price.currency
          },
          secondaryOrganizerType: organizer.secondaryOrganizerType
          ? {key: organizer.secondaryOrganizerType.id, label: organizer.secondaryOrganizerType.name[language.toUpperCase()]}
          : null,
          customSecondaryOrganizerType: organizer.customSecondaryOrganizerType,
          permissions: organizer.permissions,
        })
      })
    }

    if (sportunity.pendingOrganizers && sportunity.pendingOrganizers.length > 0) {
      sportunity.pendingOrganizers.forEach(org => {
        addCoOrganizer({
          id: org.id,
          circles: org.circles.edges.map(edge => edge.node),
          price: {cents: org.price.cents / 100, currency: org.price.currency},
          secondaryOrganizerType: org.secondaryOrganizerType
            ? {key: org.secondaryOrganizerType.id, label: org.secondaryOrganizerType.name[language.toUpperCase()]}
            : null,
          customSecondaryOrganizerType: org.customSecondaryOrganizerType,
          permissions: org.permissions,
        })
      })
    }

    if (sportunity.venue && sportunity.infrastructure && sportunity.slot) {
      updateSlot(sportunity.slot);
      updateInfrastructure(sportunity.infrastructure);
      updateVenue(sportunity.venue);
      updateAddress({
          address: sportunity.venue.address.address,
          country: sportunity.venue.address.country,
          city: sportunity.venue.address.city,
          zip: sportunity.venue.address.zip
      });
      updateIsDateUpdatable(false);
    }

    updateHideParticipantsSwitch(sportunity.hide_participant_list)

    // allow price update
    allowUpdatingPrice(true);
  }

  goToUpdateSerie = () => {
    const {sportunity} = this.props
    if (this.props.serieOccurencesNumber > 1) {
      Alert.alert(
        I18n.t('sportunityUpdateSportunity'),
        I18n.t('sportunityAlertUpdateSerieOrOccurence').replace('{0}', this.props.serieOccurencesNumber),
        [
          { text: I18n.t('yes'), onPress: () => {
              this.goToUpdate() ;
              this.props.navigation.navigate('new_activity',{ sportunityId: sportunity.id, updateSerie: true })
            }
          },
          { text: I18n.t('no'), onPress: () => {}},
        ]
      )
    }
  }

  goToUpdateSingle = () => {
    const {sportunity} = this.props
    this.goToUpdate() ;
    this.props.navigation.navigate('new_activity', { sportunityId: sportunity.id, updateSerie: false });
  }
  //
  // Helper methods
  //

  getInvitees() {
    const { sportunity } = this.props;
    let invitedList = sportunity.invited.length > 0
    ? sportunity.invited
        .filter(invited => {
          let isInACircle = false ;
          if (sportunity.invited_circles && sportunity.invited_circles.edges && sportunity.invited_circles.edges.length > 0) {
            sportunity.invited_circles.edges.forEach(edge => {
              if (edge.node.members && edge.node.members.length > 0) {
                if (edge.node.members.findIndex(member => member.id === invited.user.id) >= 0)
                  isInACircle = true
              }
            })
          }

          return !isInACircle ;
        })
        .map(invited => invited.user)
    : [] ;

    return invitedList ;
  }

  getSportLevels() {
    const result = [];
    const { sportunity } = this.props;
    sportunity.sport.levels.forEach(level => result.push(level.EN.name));
    return result;
  }

  getSportPositions() {
    const result = [];
    const { sportunity } = this.props;
    sportunity.sport.positions.forEach(position => result.push(position.EN));
    return result;
  }

  getSportCertificates() {
    const result = [];
    const { sportunity } = this.props;
    sportunity.sport.certificates.forEach(certificate => result.push(certificate.name.EN));
    return result;
  }

  getSportLevelIds() {
    const result = [];
    const { sportunity } = this.props;
    sportunity.sport.levels.forEach(level => result.push(level.id));
    return result;
  }

  getSportPositionIds() {
    const result = [];
    const { sportunity } = this.props;
    sportunity.sport.positions.forEach(position => result.push(position.id));
    return result;
  }

  getSportCertificateIds() {
    const result = [];
    const { sportunity } = this.props;
    sportunity.sport.certificates.forEach(certificate => result.push(certificate.id));
    return result;
  }

  checkIfUserIsParticipant() {
    const { sportunity, user } = this.props
    let result = false;
    sportunity.participants && sportunity.participants.forEach(participant => {
      if(participant.id === user.id){
        return result = true;
      }
    })
    return result;
  }

  checkIfSportunityIsPrivate() {
    const { sportunity } = this.props
    if(sportunity.kind === 'PRIVATE'){
      return true;
    } else if (sportunity.kind === 'PUBLIC'){
      return false;
    }
  }


  render() {
    const { isLoggedIn, isOrganized, display } = this.props;

    return (
      isLoggedIn && isOrganized && display &&
        <Button onPress={this.goToUpdate}>
          {I18n.t('update')}
        </Button>
    )
  }
}

ButtonUpdateSportunity.propTypes = {
  sportunity: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isOrganized: PropTypes.bool.isRequired,
  updateTitle: PropTypes.func.isRequired,
  updateDescription: PropTypes.func.isRequired,
  updateSport: PropTypes.func.isRequired,
  updateNewActivityDate: PropTypes.func.isRequired,
  updateNewActivityEndDate: PropTypes.func.isRequired,
  updatePlace: PropTypes.func.isRequired,
  updateAddress: PropTypes.func.isRequired,
  updateMinimumNumber: PropTypes.func.isRequired,
  updateMaximumNumber: PropTypes.func.isRequired,
  addUserAsParticipant: PropTypes.func.isRequired,
  updatePrivateActivity: PropTypes.func.isRequired,
  updatePricePerParticipant: PropTypes.func.isRequired,
  updateSexRestriction: PropTypes.func.isRequired,
  updateAgeRestriction: PropTypes.func.isRequired,
  updateSportunityType: PropTypes.func.isRequired,
  updateSportunityOpponent: PropTypes.func.isRequired,
  updateFreeSwitch: PropTypes.func.isRequired,
  updateHideParticipantsSwitch: PropTypes.func.isRequired,
  updateNotificationPreferenceMode: PropTypes.func.isRequired,
  updateAutoNotificationTime: PropTypes.func.isRequired,
  updateAutoSwitchPrivacy: PropTypes.func.isRequired,
  updateTimeAutoSwitchPrivacy: PropTypes.func.isRequired,
  updateSportunityCircleOfOpponents: PropTypes.func.isRequired,
  updateSportunityOpenMatch: PropTypes.func.isRequired,
  updateSportunityUnknownOpponent: PropTypes.func.isRequired,
  addMainOrganizer: PropTypes.func.isRequired,
  addCoOrganizer: PropTypes.func.isRequired,
  resetCoOrganizers: PropTypes.func.isRequired,
  updateVenue: PropTypes.func.isRequired,
  updateInfrastructure: PropTypes.func.isRequired,
  updateSlot: PropTypes.func.isRequired,
  updateIsDateUpdatable: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
  updateTitle: bindActionCreators(updateTitle, dispatch ),
  updateDescription: bindActionCreators(updateDescription, dispatch ),
  updateSport: bindActionCreators(updateSport, dispatch),
  updateNewActivityDate: bindActionCreators(updateNewActivityDate, dispatch),
  updateNewActivityEndDate: bindActionCreators(updateNewActivityEndDate, dispatch),
  updateFromHour: bindActionCreators(updateFromHour, dispatch),
  updateFromMinute: bindActionCreators(updateFromMinute, dispatch),
  updateToHour: bindActionCreators(updateToHour, dispatch),
  updateToMinute: bindActionCreators(updateToMinute, dispatch),
  updatePlace: bindActionCreators(updatePlace, dispatch),
  updateAddress: bindActionCreators(updateAddress, dispatch),
  updateMinimumNumber: bindActionCreators(updateMinimumNumber, dispatch),
  updateMaximumNumber: bindActionCreators(updateMaximumNumber, dispatch),
  addUserAsParticipant: bindActionCreators(addUserAsParticipant, dispatch),
  updatePrivateActivity: bindActionCreators(updatePrivateActivity, dispatch),
  updatePricePerParticipant: bindActionCreators(updatePricePerParticipant, dispatch),
  updateInvitees: bindActionCreators(updateInvitees, dispatch),
  newInvitedCircle: bindActionCreators(newInvitedCircle, dispatch),
  newInvitedCircleAndPrice: bindActionCreators(newInvitedCircleAndPrice, dispatch),
  allowUpdatingPrice: bindActionCreators(allowUpdatingPrice, dispatch),
  updateSexRestriction: bindActionCreators(updateSexRestriction, dispatch),
  updateAgeRestriction: bindActionCreators(updateAgeRestriction, dispatch),
  updateSportunityType: bindActionCreators(updateSportunityType, dispatch),
  updateSportunityOpponent: bindActionCreators(updateSportunityOpponent, dispatch),
  updateFreeSwitch: bindActionCreators(updateFreeSwitch, dispatch),
  updateHideParticipantsSwitch: bindActionCreators(updateHideParticipantsSwitch, dispatch),
  updateNotificationPreferenceMode: bindActionCreators(updateNotificationPreferenceMode, dispatch),
  updateAutoNotificationTime: bindActionCreators(updateAutoNotificationTime, dispatch),
  updateAutoSwitchPrivacy: bindActionCreators(updateAutoSwitchPrivacy, dispatch),
  updateTimeAutoSwitchPrivacy: bindActionCreators(updateTimeAutoSwitchPrivacy, dispatch),
  updateSportunityCircleOfOpponents: bindActionCreators(updateSportunityCircleOfOpponents, dispatch),
  updateSportunityOpenMatch: bindActionCreators(updateSportunityOpenMatch, dispatch),
  updateSportunityUnknownOpponent: bindActionCreators(updateSportunityUnknownOpponent, dispatch),
  addMainOrganizer: bindActionCreators(addMainOrganizer, dispatch),
  addCoOrganizer: bindActionCreators(addCoOrganizer, dispatch),
  resetCoOrganizers: bindActionCreators(resetCoOrganizers, dispatch),
  updateVenue: bindActionCreators(updateVenue, dispatch),
  updateInfrastructure: bindActionCreators(updateInfrastructure, dispatch),
  updateSlot: bindActionCreators(updateSlot, dispatch),
  updateIsDateUpdatable: bindActionCreators(updateIsDateUpdatable, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps,
)(ButtonUpdateSportunity)

I18n.fallbacks = true
I18n.translations = translations;
