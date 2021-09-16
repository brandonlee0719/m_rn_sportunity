import * as types from './actionNames';
/**
 *  MODALS
 */
/**
 * Action for opening/closing date modal
 */
export const updateDateModal = (value) => ({
  type: types.IS_DATE_MODAL_VISIBLE,
  value,
});
/**
 * Action for opening/closing level modal
 */
export const updateLevelModal = (value) => ({
  type: types.IS_LEVEL_MODAL_VISIBLE,
  value,
});
/**
 * Action for opening/closing price modal
 */
export const updatePriceModal = (value) => ({
  type: types.IS_PRICE_MODAL_VISIBLE,
  value,
});
/**
 * Action for opening/closing sport modal
 */
export const updateSportModal = (value) => ({
  type: types.IS_SPORT_MODAL_VISIBLE,
  value,
});
/**
 * Action for opening/closing place modal
 */
export const updatePlaceModal = (value) => ({
  type: types.IS_PLACE_MODAL_VISIBLE,
  value,
});
export const updatePlaceOrVenueModal = (value) => ({
  type: types.IS_PLACE_OR_VENUE_MODAL_VISIBLE,
  value
});
export const updateVenueModal = (value) => ({
  type: types.IS_VENUE_MODAL_VISIBLE,
  value
})
/**
 * Action for opening/closing co-organizers modal
 */
export const updateCoOrganizerModal = (value) => ({
  type: types.IS_CO_ORGANIZER_MODAL_VISIBLE,
  value
})
/**
 * Action for opening/closing restrictions modal
 */
export const updateRestrictionsModal = (value) => ({
  type: types.IS_RESTRICTIONS_MODAL_VISIBLE,
  value
})
/**
 * Action for opening/closing number modal
 */
export const updateNumberModal = (value) => ({
  type: types.IS_NUMBER_MODAL_VISIBLE,
  value,
});
/**
 *  TITLE & DESCRIPTION
 */
/**
 * Action for adding title
 */
export const updateTitle = (text) => ({
  type: types.UPDATE_ACTIVITY_TITLE,
  text,
});
/**
 * Action for adding description
 */
export const updateDescription = (text) => ({
  type: types.UPDATE_ACTIVITY_DESCRIPTION,
  text,
});
/**
 *  SPORTS
 */
/**
* Action for updating searchSporttext
*/
export const updateSearchSportText = (text) => ({
  type: types.UPDATE_SEARCH_SPORT_TEXT,
  text,
});
/**
 * Action for adding sport
 */
export const updateSport = (sportName, sportLevelNames, sportPositionNames, sportCertificateNames, sportunitySport) => ({
  type: types.UPDATE_ACTIVITY_SPORT,
  sportName,
  sportLevelNames,
  sportunitySport,
  sportPositionNames,
  sportCertificateNames,
});
/**
 *  LEVELS
 */
/**
 * Action for updating all levels
 */
export const setAllLevels = () => ({
  type: types.UPDATE_ALL_LEVELS,
});
/**
 * Action for updating beginner level
 */
export const setBeginnerLevel = () => ({
  type: types.UPDATE_BEGINNER_LEVEL,
});
/**
* Action for updating Intermediate level
 */
export const setIntermediateLevel = () => ({
  type: types.UPDATE_INTERMEDIATE_LEVEL,
});
/**
* Action for updating advanced level
 */
export const setAdvancedLevel = () => ({
  type: types.UPDATE_ADVANCED_LEVEL,
});
/**
* Action for updating pro level
 */
export const setProLevel = () => ({
  type: types.UPDATE_PRO_LEVEL,
});
/**
* Action for updating on/off range
 */
export const updateLevelRange = (value) => ({
  type: types.UPDATE_LEVEL_RANGE,
  value,
});
/**
* Action for updating min slider value
 */
export const updateLevelMinSlider = (value) => ({
  type: types.UPDATE_LEVEL_MIN_SLIDER,
  value,
});
/**
* Action for updating max slider value
*/
export const updateLevelMaxSlider = (value) => ({
  type: types.UPDATE_LEVEL_MAX_SLIDER,
  value,
});
/**
* Action for updating Level if from/to is choosen...
*/
export const updateMultipleLevels = (finalLevelValues) => ({
  type: types.UPDATE_MULTIPLE_LEVELS,
  finalLevelValues,
});
/**
* Action creator for calculating final level values if from/to is choosen...
*/
export const calculateMultipleLevels = (minValue, maxValue, isLevelSwitchOn) => (
  (dispatch) => {
    let finalLevelValues;
    if (isLevelSwitchOn && minValue === 1 && maxValue === 2) {
      finalLevelValues = ['Beginner', 'Intermediate'];
    } else if (isLevelSwitchOn && minValue === 1 && maxValue === 3) {
      finalLevelValues = ['Beginner', 'Intermediate', 'Advanced'];
    } else if (isLevelSwitchOn && minValue === 1 && maxValue === 4) {
      finalLevelValues = ['Beginner', 'Intermediate', 'Advanced', 'Pro'];
    } else if (isLevelSwitchOn && minValue === 2 && maxValue === 3) {
      finalLevelValues = ['Intermediate', 'Advanced'];
    } else if (isLevelSwitchOn && minValue === 2 && maxValue === 4) {
      finalLevelValues = ['Intermediate', 'Advanced', 'Pro'];
    } else if (isLevelSwitchOn && minValue === 3 && maxValue === 4) {
      finalLevelValues = ['Advanced', 'Pro'];
    }
    dispatch(updateMultipleLevels(finalLevelValues));
  }
);
/**
 *  DATE
 */
/**
 * Action for updating starting date
 */
export const updateNewActivityDate = (finalDate, dateForServer) => ({
  type: types.UPDATE_NEW_ACTIVITY_DATE,
  finalDate,
  dateForServer,
});
/**
 * Action for updating ending date
 */
export const updateNewActivityEndDate = (finalDate, dateForServer) => ({
  type: types.UPDATE_NEW_ACTIVITY_END_DATE,
  finalDate,
  dateForServer,
});
/**
 * Action for updating from hour
 */
export const updateFromHour = (value) => ({
  type: types.UPDATE_FROM_HOUR,
  value,
});
/**
 * Action for updating from minute
 */
export const updateFromMinute = (value) => ({
  type: types.UPDATE_FROM_MINUTE,
  value,
});
/**
 * Action for updating to hour
 */
export const updateToHour = (value) => ({
  type: types.UPDATE_TO_HOUR,
  value,
});
/**
 * Action for updating to minute
 */
export const updateToMinute = (value) => ({
  type: types.UPDATE_TO_MINUTE,
  value,
});
/**
 * Action for updating repeat switch
 */
export const updateRepeatSwitch = (value) => ({
  type: types.UPDATE_REPEAT_SWITCH,
  value,
});
/**
 * Action for updating repeat value
 */
export const updateRepeatValue = (value) => ({
  type: types.UPDATE_REPEAT_VALUE,
  value,
});
/**
 * Action for blocking date modification
 */
export const updateIsDateUpdatable = (value) => ({
  type: types.UPDATE_IS_DATE_UPDATABLE,
  value
})
/**
 * Action to reset date fields
 */
export const resetDate = () => ({
  type: types.RESET_DATE
})
/**
 * ADVANCED SETTINGS
 */
export const updateSexRestriction = (value) => ({
  type: types.UPDATE_SEX_RESTRICTION,
  value
});
export const updateAgeRestriction = (value) => ({
  type: types.UPDATE_AGE_RESTRICTION,
  value
});
/**
 * SPORTUNITY TYPE AND MATCH INFORMATION
 */
export const updateSportunityType = (value) => ({
  type: types.UPDATE_SPORTUNITY_TYPE,
  value
})
export const updateSportunityOpponent = (value) => ({
  type: types.UPDATE_SPORTUNITY_OPPONENT,
  value
})
export const updateSportunityCircleOfOpponents = (value) => ({
  type: types.UPDATE_SPORTUNITY_CIRCLE_OF_OPPONENTS,
  value
})
export const updateSportunityOpenMatch = (value) => ({
  type: types.UPDATE_SPORTUNITY_OPEN_MATCH,
  value
})
export const updateSportunityUnknownOpponent = (value) => ({
  type: types.UPDATE_SPORTUNITY_UNKNWON_OPPONENT,
  value
})
export const updateSportunityTypeString = (value) => ({
  type: types.UPDATE_SPORTUNITY_TYPE_STRING,
  value
})
/**
 *  PLACES
 */
 /**
 * Action for on/off place switch
 */
 export const updatePlaceSwitch = (value) => ({
   type: types.UPDATE_PLACE_SWITCH,
   value,
 });
/**
* Action for updating searchSporttext
*/
export const updateSearchPlaceText = (text) => ({
  type: types.UPDATE_SEARCH_PLACE_TEXT,
  text,
});
/**
 * Action for adding place
 */
export const updatePlace = (placeItem) => ({
  type: types.UPDATE_ACTIVITY_PLACE,
  placeItem,
});
/**
 * Action for adding address
 */
export const updateAddress = (item) => ({
  type: types.UPDATE_ACTIVITY_ADDRESS,
  item,
});
/**
 * Action for selecting a slot
 */
export const updateVenue = item => ({
  type: types.UPDATE_ACTIVITY_VENUE,
  item
})
export const updateInfrastructure = item => ({
  type: types.UPDATE_ACTIVITY_INFRASTRUCTURE,
  item
})
export const updateSlot = (item) => ({
  type: types.UPDATE_ACTIVITY_SLOT,
  item
})
/**
 *  NUMBER
 */
/**
 * Action for adding minimum nuber
 */
export const updateMinimumNumber = (value, venueCost, perParticipant, max, organizer, fee) => ({
  type: types.UPDATE_MINIMUM_NUMBER,
  value,
  venueCost,
  perParticipant,
  max,
  organizer,
  fee,
});
/**
 * Action for adding maximum number
 */
export const updateMaximumNumber = (value, venueCost, perParticipant, min, organizer, fee) => ({
  type: types.UPDATE_MAXIMUM_NUMBER,
  value,
  venueCost,
  perParticipant,
  min,
  organizer,
  fee,
});
/**
 * Action for adding exactly number
 */
export const updateExactlyNumber = (value, venueCost, perParticipant, organizer, fee) => ({
  type: types.UPDATE_EXACTLY_NUMBER,
  value,
  venueCost,
  perParticipant,
  organizer,
  fee,
});
/**
 * Action for updating exactly switch
 */
export const updateExactlySwitch = (value) => ({
  type: types.UPDATE_EXACTLY_SWITCH,
  value,
});
/**
 * Action for updating hide participant list switch
 */
export const updateHideParticipantsSwitch = (value) => ({
  type: types.UPDATE_HIDE_PARTICIPANT_SWITCH,
  value
})
/**
 * Action for updating notify people switch
 */
export const updateNotifyPeopleSwitch = (value) => ({
  type: types.UPDATE_NOTIFY_PROPLE_SWITCH,
  value
})
/**
 * Action for adding user as a participant
 */
export const addUserAsParticipant = (value) => ({
  type: types.ADD_USER_AS_PARTICIPANT,
  value,
});
/**
 *  PRICE
 */
/**
 * Action for updating free switch
 */
export const updateFreeSwitch = (value) => ({
  type: types.UPDATE_FREE_SWITCH,
  value,
});
/**
 * Action for updating forganizer contribution
 */
export const updateOrganizerContribution = (value, venueCost, perParticipant, min, max, fee) => ({
  type: types.UPDATE_ORGANIZER_CONTRIBUTION,
  value,
  venueCost,
  perParticipant,
  min,
  max,
  fee,
});

/**
 * Action for updating venue cost
 */
export const updateVenueCost = (value, perParticipant, min, max, organizer, fee) => ({
  type: types.UPDATE_VENUE_COST,
  value,
  perParticipant,
  min,
  max,
  organizer,
  fee,
});
/**
 * Action for updating price per participant
 */
export const updatePricePerParticipant = (value, venueCost, min, max, organizer, fee) => ({
  type: types.UPDATE_PRICE_PER_PARTICIPANT,
  value,
  venueCost,
  min,
  max,
  organizer,
  fee,
});
/**
 * Action for allowing price update
 */
export const allowUpdatingPrice = (value) => ({
  type: types.IS_PRICE_UPDATABLE,
  value,
});
/**
 *  PRIVATE
 */
/**
 * Action for updating private/public
 */
export const updatePrivateActivity = (value) => ({
  type: types.UPDATE_PRIVATE_ACTIVITY,
  value,
});
/**
 * Action for updating auto switch from private to public
 */
export const updateAutoSwitchPrivacy = (value) => ({
  type: types.UPDATE_AUTO_SWITCH_PRIVACY,
  value,
});
/**
 * Action for updating number of days before beginning to auto switch from private to public
 */
export const updateTimeAutoSwitchPrivacy = (value) => ({
  type: types.UPDATE_TIME_AUTO_SWITCH_PRIVACY,
  value,
});
/**
 * INVITEES
 */
/**
 * Action for updating invitations to private activity
 */
export const updateInvitees = (value) => ({
  type: types.UPDATE_INVITEES,
  value,
});
export const updateInvitedCircles = (value) => ({
  type: types.UPDATE_INVITED_CIRCLES,
  value
});
export const updateInvitedCirclesAndPrices = (value) => ({
  type: types.UPDATE_INVITED_CIRCLES_AND_PRICES,
  value
})
export const newInvitedCircle = (value) => ({
  type: types.NEW_INVITED_CIRCLE,
  value
});
export const removeInvitedCircle = (value) => ({
  type: types.REMOVE_INVITED_CIRCLE,
  value
});
export const newInvitedCircleAndPrice = (value) => ({
  type: types.NEW_INVITED_CIRCLE_AND_PRICE,
  value
});
export const removeInvitedCircleAndPrice = (value) => ({
  type: types.REMOVE_INVITED_CIRCLE_AND_PRICE,
  value
})
export const clearInvitedCircles = () => ({
  type: types.CLEAR_INVITED_CIRCLES
})
export const updateNotificationPreferenceMode = (value) => ({
  type: types.UDPATE_NOTIFICATION_PREFERENCE_MODE,
  value
});
export const updateAutoNotificationTime = (value) => ({
  type: types.UPDATE_AUTO_NOTIFICATION_TIME,
  value
});
/**
 * MAIN-ORGANIZER
 */
export const addMainOrganizer = (value) => ({
  type: types.ADD_MAIN_ORGANIZER,
  value
});
/**
 * CO-ORGANIZERS
 */
export const addCoOrganizer = (value) => ({
  type: types.ADD_CO_ORGANIZER,
  value
});
export const removeCoOrganizer = (value) => ({
  type: types.REMOVE_CO_ORGANIZER,
  value
});
export const resetCoOrganizers = () => ({
  type: types.RESET_CO_ORGANIZERS
})

/**
 * Template actions
 */
export const updateSaveTemplateSwitch = (value) => ({
  type: types.UPDATE_SAVE_TEMPLATE_SWITCH,
  value
})

export const updateSelectedTemplate = (value) => ({
  type: types.UPDATE_SELECTED_TEMPLATE,
  value
})

/**
 * Action for activity indicator and validate button
 */
export const changeLoadingStatus = (value) => ({
  type: types.CHANGE_LOADING_STATUS,
  value,
});

/**
 * Action for activity indicator and validate button
 */
export const showErrors = (value) => ({
  type: types.SHOW_NEW_ACTIVITY_ERRORS,
  value,
});

/**
 * Action for reseting fields
 */
export const resetAllFields = () => ({
  type: types.RESET_NEW_ACTIVITY_FIELDS,
});

export const updateSportsFormValidity = (value) => ({
  type: types.UPDATE_SPORTS_FORM_VALIDITY,
  value,
});
