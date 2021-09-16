import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Text from 'react-native-text';
import { colors } from 'sportunity/src/theme'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';

import { styles } from './styles';
// import icons from '../../../../src/theme/images';
import { withNavigation } from 'react-navigation';
const Status = ({ organizers, userId, sportunity:{  status, participantRange, kind }, potentialSecondaryOrganizer, language }) => {

  let statusText = I18n.t('sportunityStatusMinimumNotReached1') + participantRange.from + I18n.t('sportunityStatusMinimumNotReached2');
  let color = colors.green;

  if (status === 'Available-Black'){
    statusText = I18n.t('sportunityStatusMinimumReached');
    color = colors.darkGreen;
  } 
  else if (status === 'Waiting-List-Yellow'){
    statusText = I18n.t('sportunityStatusBook');
    color = colors.bloodOrange;
  } 
  else if (status === 'Full-Red') {
    statusText = I18n.t('sportunityStatusFull');
    color = colors.red;
  } 
  else if (status === 'Booked-Grey'){
    statusText = I18n.t('sportunityStatusBooked');
    color = colors.green;
  } 
  else if (status === 'Booked-Black') {
    statusText = I18n.t('sportunityStatusBookedFull');
    color = colors.darkGreen;
  } 
  else if (status === 'Booked-Over') {
    statusText = I18n.t('sportunityStatusBooked');
    color = colors.pink;
  }
  else if (status === 'Waiting-List-Booked-Yellow'){
    statusText = I18n.t('sportunityStatusWaitingList');
    color = colors.bloodOrange;
  } 
  else if (status === 'Organized-Grey'){
    statusText = I18n.t('sportunityStatusOrganized');
    color = colors.lightGreen;
  } 
  else if (status === 'Organized-Black') {
    statusText = I18n.t('sportunityStatusOrganizedReached');
    color = colors.darkGreen;
  } 
  else if (status === 'Organized-Yellow'){
    statusText = I18n.t('sportunityStatusOrganizedWaiting');
    color = colors.bloodOrange;
  } 
  else if (status === 'Organized-Red') {
    statusText = I18n.t('sportunityStatusOrganizedFull');
    color = colors.bloodOrange;
  } 
  else if (status === 'Organized-Over') {
    statusText = I18n.t('sportunityStatusOrganized');
    color = colors.pink;
  }
  else if (status === 'Willing-List-Green') {
    statusText = I18n.t('sportunityStatusWillingList');
    color = colors.darkGreen;
  }
  else if (status === 'Invited-Grey') {
    statusText = I18n.t('sportunityStatusInvited') + I18n.t('sportunityStatusMinimumNotReached1') + participantRange.from + I18n.t('sportunityStatusMinimumNotReached2');
    color = colors.danube; 
  }
  else if (status === 'Invited-Black') {
    statusText = I18n.t('sportunityStatusInvited') + I18n.t('sportunityStatusMinimumReached');
    color = colors.danube; 
  }
  else if (status === 'Invited-Yellow') {
    statusText = I18n.t('sportunityStatusInvited') + I18n.t('sportunityStatusBook');
    color = colors.bloodOrange; 
  }
  else if (status === 'Invited-Over') {
    statusText = I18n.t('sportunityStatusInvited');
    color = colors.pink;
  }
  else if (status === 'Declined-Grey') {
    statusText = I18n.t('sportunityStatusDeclined') + I18n.t('sportunityStatusMinimumNotReached1') + participantRange.from + I18n.t('sportunityStatusMinimumNotReached2');
    color = colors.darkPastelBlue;
  }
  else if (status === 'Declined-Black') {
    statusText = I18n.t('sportunityStatusDeclined') + I18n.t('sportunityStatusMinimumReached');
    color = colors.darkPastelBlue;
  }
  else if (status === 'Past') {
    statusText = I18n.t('sportunitiesStatusPast');
    color = colors.darkPastelBlue;
  }
  else if (status === 'Cancelled') {
    statusText = I18n.t('sportunitiesStatusCancelled');
    color = colors.darkPastelBlue;
  }
  else if(status === 'Assistant-Grey') {
    statusText = I18n.t('sportunitiesStatusAssistant') ;
    color = colors.darkGreen;
  } 
  else if (status === 'Assistant-Black') {
    statusText = I18n.t('sportunitiesStatusAssistant') ;
    color = colors.darkGreen;
  } 
  else if (status === 'Assistant-Yellow') {
    statusText = I18n.t('sportunitiesStatusAssistant') ;
    color = colors.bloodOrange;
  } 
  else if (status === 'Assistant-Red') {
    statusText = I18n.t('sportunitiesStatusAssistant') ;
    color = colors.bloodOrange;
  } 
  else if (status === 'Assistant-Over') {
    statusText = I18n.t('sportunitiesStatusAssistant');
    color = colors.pink;
  }
  else if (status === 'Asked-CoOrganization-Grey') {
    statusText = I18n.t('sportunitiesStatusAskedAssistant') ;
    color = colors.darkGreen;
  } 
  else if (status === 'Asked-CoOrganization-Black') {
    statusText = I18n.t('sportunitiesStatusAskedAssistant') ;
    color = colors.darkGreen;
  } 
  else if (status === 'Asked-CoOrganization-Yellow') {
    statusText = I18n.t('sportunitiesStatusAskedAssistant') ;
    color = colors.bloodOrange;
  } 
  else if (status === 'Asked-CoOrganization-Red') {
    statusText = I18n.t('sportunitiesStatusAskedAssistant') ;
    color = colors.bloodOrange;
  }
  else if (status === 'Asked-CoOrganization-Over') {
    statusText = I18n.t('sportunitiesStatusAskedAssistant');
    color = colors.pink;
  }
  if (statusText === I18n.t('sportunitiesStatusAssistant')) {
    if (userId && organizers && organizers.length > 0) {
      organizers.forEach(organizer => {
        if (organizer.organizer.id === userId && organizer.secondaryOrganizerType) {
          statusText = organizer.secondaryOrganizerType.name[language.toUpperCase()].toUpperCase()
        }
        else if (organizer.organizer.id === userId && organizer.customSecondaryOrganizerType) {
          statusText = organizer.customSecondaryOrganizerType.toUpperCase()
        }
      })
    }
  }
  if (statusText === I18n.t('sportunitiesStatusAskedAssistant') && potentialSecondaryOrganizer) {
    statusText = statusText + '\n' + I18n.t('sportunityAskedCoOrganizer') + ': ' + potentialSecondaryOrganizer.name ;
  }

  return (
  <View >
    <View>
      { /* <Text style={[styles.status, { color: color }]}>{kind}</Text> */}
      <Text style={[styles.participant, { color: color }]}>
        {statusText}
      </Text>

      {
        /*
        <View style={styles.right_column}>
          <Text style={[styles.numberParticipant, { color: color }]}>
            {participantRange && participantRange.from}
          </Text>
        </View>
        <Image style={[styles.icon, { tintColor: color }]} source={icons.red_user} />
        */
      }

    </View>
  </View>
);
}

Status.propTypes = {
  status: PropTypes.object.isRequired,
  sportunity: PropTypes.object.isRequired,
};

export default  createFragmentContainer(Status, {
  sportunity: graphql`
    fragment StatusView_sportunity on Sportunity{
      status,
      kind,
      participantRange{
        from
      }
    }`,
});

I18n.fallbacks = true
I18n.translations = translations;
