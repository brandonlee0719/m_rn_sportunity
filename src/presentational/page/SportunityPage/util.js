import { colors } from '../../../theme';

export const getActivityColor = (color) => {
  switch(color) {
    case 'RED':
      return colors.red;
    case 'YELLOW':
      return colors.bloodOrange;
    case 'GREY':
      return colors.green;
    case 'BLACK':
      return colors.darkGreen;
    case 'GREEN':
      return colors.darkGreen;
    case 'DARKBLUE':
      return colors.darkPastelBlue;
    case 'DANUBE':
      return colors.danube;
    case 'PINK':
      return colors.pink;
    default:
      return colors.green;
  }
};

export const getStatus = ({
  userId,
  sportunity,
  activityStatus,
  I18n,
  language,
}) => {
  let status = activityStatus;
  if (status === 'AVAILABLE_GREY' || status === 'AVAILABLE_BLACK'){
    status = I18n.t('sportunitiesStatusAvailable');  // this is for status shown on sportunity screen (trnslation)
  }
  if (status === 'WAITING_LIST_YELLOW' || status === 'WAITING_LIST_BOOKED_YELLOW') {
    status = I18n.t('sportunitiesStatusWaitingList');
  }
  if (status === 'BOOKED_GREY' || status === 'BOOKED_BLACK'){
    status = I18n.t('sportunitiesStatusBooked');
  }
  if (status === 'ORGANIZED_GREY' || status === 'ORGANIZED_BLACK' || status === 'ORGANIZED_RED' || status === 'ORGANIZED_YELLOW') {
    status = I18n.t('sportunitiesStatusOrganized');
  }
  if (status === 'WILLING_LIST_GREEN'){
    status = I18n.t('sportunitiesStatusAvailable');
  }
  if (status === 'PAST'){
    status = I18n.t('sportunitiesStatusPast');
  }
  if (status === 'CANCELLED') {
    status = I18n.t('sportunitiesStatusCancelled');
  }
  if (status === 'INVITED') {
    status = I18n.t('sportunitiesStatusInvited')
  }
  if (status === 'DECLINED') {
    status = I18n.t('sportunitiesStatusDeclined')
  }
  if (status === 'ASSISTANT_GREY' || status === 'ASSISTANT_BLACK' || status === 'ASSISTANT_RED' || status === 'ASSISTANT_YELLOW') {
    status = I18n.t('sportunitiesStatusAssistant') ;
    if (userId && sportunity.organizers && sportunity.organizers.length > 0) {
      sportunity.organizers.forEach(organizer => {
        if (organizer.organizer.id === userId && organizer.secondaryOrganizerType) {
          status = organizer.secondaryOrganizerType.name[language.toUpperCase()].toUpperCase()
        }
        else if (organizer.organizer.id === userId && organizer.customSecondaryOrganizerType) {
          status = organizer.customSecondaryOrganizerType.toUpperCase()
        }
      })
    }
  }
  if (status === 'LOOKING_FOR_AN_OPPONENT') {
    status = I18n.t('sportunitiesStatusLookingForAnOpponent')
  }
  if (status === 'ASKED_COORGANIZATION_GREY' || status === 'ASKED_COORGANIZATION_BLACK' || status === 'ASKED_COORGANIZATION_YELLOW' || status === 'ASKED_COORGANIZATION_RED') {
    status = I18n.t('sportunitiesStatusAskedAssistant') ;
  }
  if (status === 'FULL_RED')
    status = I18n.t('sportunitiesStatusFull')
  if (status === 'POLL_GREY') 
    status = I18n.t('sportunitiesStatusSurvey')

  return status;
};

export const getActivityStatusAndColor = ({ sportunity, user }) => {
  let status = 'AVAILABLE_GREY';
  let color = 'GREY';
  
  if (sportunity.status.indexOf('Available') >= 0 && sportunity.game_information && sportunity.game_information.opponent && 
    (sportunity.game_information.opponent.lookingForAnOpponent || 
      (sportunity.game_information.opponent.invitedOpponents && sportunity.game_information.opponent.invitedOpponents.edges && sportunity.game_information.opponent.invitedOpponents.edges.findIndex(edge => edge.node.members.findIndex(member => member.id === user.id) >= 0) >= 0) )
    ) {
    status = 'LOOKING_FOR_AN_OPPONENT';
    color = 'BLACK'
  } 
  else if(sportunity.status === 'Available-Black'){
    status = 'AVAILABLE_BLACK';
    color = 'BLACK'
  } 
  else if(sportunity.status === 'Waiting-List-Yellow'){
    status = 'WAITING_LIST_YELLOW';
    color = 'YELLOW'
  } 
  else if(sportunity.status === 'Full-Red') {
    status = 'FULL_RED';
    color = 'RED'
  }
  else if(sportunity.status === 'Booked-Grey'){
    status = 'BOOKED_GREY';
    color = 'GREY'
  }
  else if(sportunity.status === 'Booked-Black') {
    status = 'BOOKED_BLACK';
    color = 'BLACK'
  }
  else if (sportunity.status === 'Booked-Over') {
    status = 'BOOKED_BLACK';
    color = 'PINK'
  }
  else if(sportunity.status === 'Waiting-List-Booked-Yellow'){
    status = 'WAITING_LIST_BOOKED_YELLOW';
    color = 'YELLOW'
  }
  else if(sportunity.status === 'Organized-Grey'){
    status = 'ORGANIZED_GREY';
    color = 'GREY'
  }
  else if(sportunity.status === 'Organized-Black') {
    status = 'ORGANIZED_BLACK';
    color = 'BLACK'
  }
  else if(sportunity.status === 'Organized-Yellow'){
    status = 'ORGANIZED_YELLOW';
    color = 'YELLOW'
  }
  else if(sportunity.status === 'Organized-Red') {
    status = 'ORGANIZED_RED';
    color = 'RED'
  }
  else if (sportunity.status === 'Organized-Over') {
    status = 'ORGANIZED_BLACK';
    color = 'PINK'
  }
  else if(sportunity.status === 'Willing-List-Green') {
    status = 'WILLING_LIST_GREEN';
    color = 'GREEN'
  }
  else if(sportunity.status === 'Past') {
    status = 'PAST';
    color = 'BLACK'
  }
  else if(sportunity.status === 'Cancelled') {
    status = 'CANCELLED';
    color = 'BLACK'
  }
  else if(sportunity.status === 'Invited-Grey') {
    status = 'INVITED';
    color = 'DANUBE'
  }
  else if(sportunity.status === 'Invited-Black') {
    status = 'INVITED';
    color = 'DANUBE'
  }
  else if(sportunity.status === 'Invited-Yellow') {
    status = 'INVITED';
    color = 'YELLOW'
  }
  else if (sportunity.status === 'Invited-Over') {
    status = 'INVITED';
    color = 'PINK'
  }
  else if(sportunity.status === 'Declined-Grey') {
    status = 'DECLINED';
    color = 'DARKBLUE'
  }
  else if(sportunity.status === 'Declined-Black') {
    status = 'DECLINED';
    color = 'DARKBLUE'
  }
  else if(sportunity.status === 'Assistant-Grey'){
    status = 'ASSISTANT_GREY';
    color = 'GREY'
  }
  else if (sportunity.status === 'Assistant-Black') {
    status = 'ASSISTANT_BLACK';
    color = 'BLACK'
  }
  else if (sportunity.status === 'Assistant-Yellow'){
    status = 'ASSISTANT_YELLOW';
    color = 'YELLOW'
  }
  else if (sportunity.status === 'Assistant-Red') {
    status = 'ASSISTANT_RED';
    color = 'RED'
  }
  else if (sportunity.status === 'Assistant-Over') {
    status = 'ASSISTANT_GREY';
    color = 'PINK'
  }
  else if (sportunity.status === 'Asked-CoOrganization-Grey') {
    status = 'ASKED_COORGANIZATION_GREY';
    color = 'GREY'
  }
  else if (sportunity.status === 'Asked-CoOrganization-Black') {
    status = 'ASKED_COORGANIZATION_BLACK';
    color = 'BLACK'
  }
  else if (sportunity.status === 'Asked-CoOrganization-Yellow') {
    status = 'ASKED_COORGANIZATION_YELLOW';
    color = 'YELLOW'
  }
  else if (sportunity.status === 'Asked-CoOrganization-Red') {
    status = 'ASKED_COORGANIZATION_RED';
    color = 'RED'
  } 
  else if (sportunity.status === 'Asked-CoOrganization-Over') {
    status = 'ASKED_COORGANIZATION_GREY';
    color = 'PINK'
  } 
  if ((status.indexOf('ORGANIZED') >= 0 || status.indexOf('INVITED') >= 0) && sportunity.survey && !sportunity.survey.isSurveyTransformed && sportunity.survey.surveyDates.length > 1) {
    status = 'POLL_GREY';
    color = 'GREY';
  }

  return { status, color };
};
