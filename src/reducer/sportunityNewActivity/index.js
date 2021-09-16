import * as types from '../../action/actionNames';
import { cloneDeep } from 'lodash';

const defaultState = {
  fieldChanged: false,
  // MODALS
  isDateModalVisible: false,
  isLevelModalVisible: false,
  isPriceModalVisible: false,
  isNumberModalVisible: false,
  isPlaceModalVisible: false,
  isPlaceOrVenueModalVisible: false,
  isVenueModalVisible: false,
  isSportModalVisible: false,
  isDateUpdatable: true,
  // INPUTS
  activityTitle: '',
  activityDescription: '',
  // SPORT
  searchSportText: '',
  sportName: '',
  sportLevelNames: [],
  sportPositionNames: [],
  sportCertificateNames: [],
  sportIcon: '',
  sportunitySport: {},
  // LEVEL
  allLevels: [],
  allLevelsNumeric: [],
  allLevelsOption: false,
  beginnerLevelOption: false,
  intermediateLevelOption: false,
  advancedLevelOption: false,
  proLevelOption: false,
  isLevelSwitchOn: false,
  levelMinSliderValue: 1,
  levelMaxSliderValue: 4,
  // DATE
  newActivityDate: '',
  newActivityDateForServer: '',
  newActivityEndDate: '',
  newActivityEndDateForServer: '',
  fromHour: '',
  toHour: '',
  fromMinute: '',
  toMinute: '',
  isRepeatSwitchOn: false,
  repeatValue: '0',
  // PLACE
  isPlaceSwitchOn: false,
  searchPlaceText: '',
  placeName: '',
  placeId: '',
  addressName: '',
  addressCountry: '',
  addressCity: '',
  addressZip: '',
  placeIcon: '',
  // VENUE
  venue: null,
  infrastructure: null,
  slot: null,
  // NUMBER
  minimumNumber: 0,
  maximumNumber: 0,
  exactlyNumber: 0,
  isExactlySwitchOn: false,
  hideParticipantSwitchOn: false,
  isUserParticipant: false,
  notifyPeopleSwitch: false,
  // PRICE
  isFreeSwitchOn: true,
  organizerContribution: 0,
  venueCost: 0,
  pricePerParticipant: 0,
  minimumRevenue: 0,
  maximumRevenue: 0,
  // Private
  isActivityPrivate: true,
  autoSwitchActivityPrivacy: false,
  autoSwitchActivityPrivacyTime: 15,
  notificationPreferenceMode: 'Now',
  notificationAutoTime: 15,
  // Invitees
  invitees: [],
  invitedCircles: [],
  invitedCirclesAndPrices: [],
  // Co-Organizers
  coOrganizers: [],
  isCoOrganizerModalVisible: false,
  // Advanced settings
  sexRestriction: 'NONE',
  ageRestriction: {
    from: 0,
    to: 100
  },
  sportunityType: 'NONE',
  opponent: null,
  circleOfOpponents: null,
  isOpenMatch: false,
  unknownOpponent: false,
  // templates
  isSaveTemplateSwitchOn: true,
  selectedTemplate: null,
  // loading
  isNewActivityLoading: false,
  // errors
  areErrorsShown: false,
  isPriceUpdatable: true,
  isRestrictionsModalVisible: false,

  isSportsFormValid: false,
};


/**
 * Reducer for handling New Activity actions
 */
export default (state = defaultState, action) => {
  switch (action.type) {
    /**
     *  MODALS
     */
    case types.IS_DATE_MODAL_VISIBLE:
      return {
        ...state,
        isDateModalVisible: action.value,
      };
    case types.IS_LEVEL_MODAL_VISIBLE:
      return {
        ...state,
        isLevelModalVisible: action.value,
      };
    case types.IS_PRICE_MODAL_VISIBLE:
      return {
        ...state,
        isPriceModalVisible: action.value,
      };
    case types.IS_NUMBER_MODAL_VISIBLE:
      return {
        ...state,
        isNumberModalVisible: action.value,
      };
    case types.IS_SPORT_MODAL_VISIBLE:
      return {
        ...state,
        isSportModalVisible: action.value,
      };
    case types.IS_PLACE_MODAL_VISIBLE:
      return {
        ...state,
        isPlaceModalVisible: action.value,
      };
    case types.IS_PLACE_OR_VENUE_MODAL_VISIBLE:
      return {
        ...state,
        isPlaceOrVenueModalVisible: action.value
      }
    case types.IS_VENUE_MODAL_VISIBLE:
      return {
        ...state,
        isVenueModalVisible: action.value
      }
    case types.IS_CO_ORGANIZER_MODAL_VISIBLE: {
      return {
        ...state,
        isCoOrganizerModalVisible: action.value
      };
    }
    case types.IS_RESTRICTIONS_MODAL_VISIBLE:
      return {
        ...state,
        isRestrictionsModalVisible: action.value
      };

    /**
     *  SPORT
     */

    case types.UPDATE_SEARCH_SPORT_TEXT:
      return {
        ...state,
        searchSportText: action.text,
      };
    case types.UPDATE_ACTIVITY_SPORT:
      return {
        ...state,
        fieldChanged: true,
        sportName: action.sportName,
        sportLevelNames: action.sportLevelNames,
        sportunitySport: action.sportunitySport,
        sportPositionNames: action.sportPositionNames,
        sportCertificateNames: action.sportCertificateNames,
        sportunityType: 'NONE',
        opponent: null,
        circleOfOpponents: null,
        venue: null,
        infrastructure: null,
        slot: null,
        isOpenMatch: false,
        unknownOpponent: false,
      };
    case types.UPDATE_SPORTS_FORM_VALIDITY:
      return {
        ...state,
        isSportsFormValid: action.value,
      };

    /**
     *  TITLE & DESCRIPTION
     */

    case types.UPDATE_ACTIVITY_TITLE:
      return {
        ...state,
        activityTitle: action.text,
        fieldChanged: true,
      };
    case types.UPDATE_ACTIVITY_DESCRIPTION:
      return {
        ...state,
        activityDescription: action.text,
        fieldChanged: true,
      };

    /**
     *  LEVELS
     */

    case types.UPDATE_ALL_LEVELS:
      return {
        ...state,
        allLevelsOption: true,
        beginnerLevelOption: false,
        intermediateLevelOption: false,
        advancedLevelOption: false,
        proLevelOption: false,
        allLevels: ['Beginner', 'Intermediate', 'Advanced', 'Pro'],
        allLevelsNumeric: [1, 2, 3, 4, 5],
        fieldChanged: true,
      };
    case types.UPDATE_BEGINNER_LEVEL:
      return {
        ...state,
        allLevelsOption: false,
        beginnerLevelOption: true,
        intermediateLevelOption: false,
        advancedLevelOption: false,
        proLevelOption: false,
        allLevels: ['Beginner'],
        allLevelsNumeric: [1],
        fieldChanged: true,
      };
    case types.UPDATE_INTERMEDIATE_LEVEL:
      return {
        ...state,
        allLevelsOption: false,
        beginnerLevelOption: false,
        intermediateLevelOption: true,
        advancedLevelOption: false,
        proLevelOption: false,
        allLevels: ['Intermediate'],
        allLevelsNumeric: [2],
        fieldChanged: true,
      };
    case types.UPDATE_ADVANCED_LEVEL:
      return {
        ...state,
        allLevelsOption: false,
        beginnerLevelOption: false,
        intermediateLevelOption: false,
        advancedLevelOption: true,
        proLevelOption: false,
        allLevels: ['Advanced'],
        allLevelsNumeric: [3],
        fieldChanged: true,
      };
    case types.UPDATE_PRO_LEVEL:
      return {
        ...state,
        allLevelsOption: false,
        beginnerLevelOption: false,
        intermediateLevelOption: false,
        advancedLevelOption: false,
        proLevelOption: true,
        allLevels: ['Pro'],
        allLevelsNumeric: [4],
        fieldChanged: true,
      };
    case types.UPDATE_LEVEL_RANGE:
      return {
        ...state,
        isLevelSwitchOn: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_LEVEL_MIN_SLIDER:
      return {
        ...state,
        levelMinSliderValue: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_LEVEL_MAX_SLIDER:
      return {
        ...state,
        levelMaxSliderValue: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_MULTIPLE_LEVELS:
      return {
        ...state,
        allLevels: action.finalLevelValues,
        fieldChanged: true,
      };

    /**
     *  DATE
     */

    case types.UPDATE_NEW_ACTIVITY_DATE:
      return {
        ...state,
        newActivityDate: action.finalDate,
        newActivityDateForServer: action.dateForServer,
        fieldChanged: true,
      };
    case types.UPDATE_NEW_ACTIVITY_END_DATE:
      return {
        ...state,
        newActivityEndDate: action.finalDate,
        newActivityEndDateForServer: action.dateForServer,
        fieldChanged: true,
      };
    case types.UPDATE_FROM_HOUR:
      return {
        ...state,
        fromHour: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_FROM_MINUTE:
      return {
        ...state,
        fromMinute: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_TO_HOUR:
      return {
        ...state,
        toHour: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_TO_MINUTE:
      return {
        ...state,
        toMinute: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_REPEAT_VALUE:
      return {
        ...state,
        repeatValue: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_REPEAT_SWITCH:
      return {
        ...state,
        isRepeatSwitchOn: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_IS_DATE_UPDATABLE:
      return {
        ...state,
        isDateUpdatable: action.value,
        fieldChanged: true,
      };
    case types.RESET_DATE:
      return {
        ...state,
        newActivityDate: '',
        newActivityDateForServer: '',
        newActivityEndDate: '',
        newActivityEndDateForServer: '',
        fromHour: '0',
        toHour: '0',
        fromMinute: '00',
        toMinute: '00',
        isRepeatSwitchOn: false,
        repeatValue: '0',
      }
    /**
     *  ADVANCED SETTINGS
     */
    case types.UPDATE_AGE_RESTRICTION:
      return {
        ...state,
        ageRestriction: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_SEX_RESTRICTION:
      return {
        ...state,
        sexRestriction: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_SPORTUNITY_TYPE:
      return {
        ...state,
        sportunityType: action.value,
        opponent: null,
        circleOfOpponents: null,
        isOpenMatch: false,
        unknownOpponent: false,
        fieldChanged: true,
      };
    case types.UPDATE_SPORTUNITY_TYPE_STRING:
      return {
        ...state,
        sportunityTypeString: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_SPORTUNITY_OPPONENT:
      return {
        ...state,
        opponent: action.value,
        circleOfOpponents: null,
        isOpenMatch: false,
        unknownOpponent: false,
        fieldChanged: true,
      }
    case types.UPDATE_SPORTUNITY_CIRCLE_OF_OPPONENTS:
      return {
        ...state,
        circleOfOpponents: action.value,
        isOpenMatch: false,
        unknownOpponent: false,
        fieldChanged: true,
      }
    case types.UPDATE_SPORTUNITY_OPEN_MATCH:
      return {
        ...state,
        isOpenMatch: action.value,
        opponent: null,
        circleOfOpponents: null,
        unknownOpponent: false,
        fieldChanged: true,
      }
    case types.UPDATE_SPORTUNITY_UNKNWON_OPPONENT:
      return {
        ...state,
        unknownOpponent: action.value,
        opponent: null,
        circleOfOpponents: null,
        isOpenMatch: false,
        fieldChanged: true,
      }
    /**
     *  PLACE
     */
    case types.UPDATE_PLACE_SWITCH:
      return {
        ...state,
        isPlaceSwitchOn: action.value,
        isDateUpdatable: true
      };
    case types.UPDATE_SEARCH_PLACE_TEXT:
      return {
        ...state,
        searchPlaceText: action.text,
        isDateUpdatable: true
      };
    case types.UPDATE_ACTIVITY_PLACE:
      return {
        ...state,
        placeName: action.placeItem.node.name,
        placeId: action.placeItem.node.id,
        addressName: action.placeItem.node.address.address,
        addressCountry: action.placeItem.node.address.country,
        addressCity: action.placeItem.node.address.city,
        addressZip: action.placeItem.node.address.zip,
        isDateUpdatable: true,
        fieldChanged: true,
      };
    case types.UPDATE_ACTIVITY_ADDRESS:
      return {
        ...state,
        addressName: action.item.address,
        addressCountry: action.item.country,
        addressCity: action.item.city,
        addressZip: action.item.zip,
        placeName: `${action.item.address}, ${action.item.city}, ${action.item.country}`,
        isDateUpdatable: true,
        fieldChanged: true,
      };

    /**
     * VENUE
     */
    case types.UPDATE_ACTIVITY_SLOT:
      return {
        ...state,
        slot: action.item,
        fieldChanged: true,
      }
    case types.UPDATE_ACTIVITY_INFRASTRUCTURE:
      return {
        ...state,
        infrastructure: action.item,
        fieldChanged: true,
      }
    case types.UPDATE_ACTIVITY_VENUE:
      return {
        ...state,
        venue: action.item,
        fieldChanged: true,
      }

    /**
     *  NUMBER
     */

    case types.UPDATE_MINIMUM_NUMBER:
      return {
        ...state,
        minimumNumber: action.value,
        minimumRevenue: (action.perParticipant * action.value * (1 - (action.fee/100)) + action.organizer) - action.venueCost,
        fieldChanged: true,
      };
    case types.UPDATE_MAXIMUM_NUMBER:
      return {
        ...state,
        maximumNumber: action.value,
        maximumRevenue: (action.perParticipant * action.value * (1 - (action.fee/100)) + action.organizer) - action.venueCost,
        fieldChanged: true,
      };
    case types.UPDATE_EXACTLY_NUMBER:
      return {
        ...state,
        exactlyNumber: action.value,
        minimumNumber: action.value,
        maximumNumber: action.value,
        minimumRevenue: (action.perParticipant * action.value * (1 - (action.fee/100)) + action.organizer) - action.venueCost,
        maximumRevenue: (action.perParticipant * action.value * (1 - (action.fee/100)) + action.organizer) - action.venueCost,
        fieldChanged: true,
      };
    case types.UPDATE_EXACTLY_SWITCH:
      return {
        ...state,
        isExactlySwitchOn: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_HIDE_PARTICIPANT_SWITCH:
      return {
        ...state,
        hideParticipantSwitchOn: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_NOTIFY_PROPLE_SWITCH:
      return {
        ...state,
        notifyPeopleSwitch: action.value,
        fieldChanged: true,
      };
    case types.ADD_USER_AS_PARTICIPANT:
      return {
        ...state,
        isUserParticipant: action.value,
        fieldChanged: true,
      };

    /**
     *  PRICE
     */

    case types.UPDATE_FREE_SWITCH:
      return {
        ...state,
        isFreeSwitchOn: action.value,
        minimumRevenue: 0,
        maximumRevenue: 0,
        pricePerParticipant: 0,
        isUserParticipant: false,
        venueCost: 0,
        organizerContribution: 0,
        fieldChanged: true,
      };
    case types.UPDATE_ORGANIZER_CONTRIBUTION:
      return {
        ...state,
        organizerContribution: action.value,
        minimumRevenue: (action.perParticipant * action.min * (1 - (action.fee/100)) + action.value) - action.venueCost,
        maximumRevenue: (action.perParticipant * action.max * (1 - (action.fee/100)) + action.value) - action.venueCost,
        fieldChanged: true,
      };
    case types.UPDATE_VENUE_COST:
      return {
        ...state,
        venueCost: action.value,
        minimumRevenue: (action.perParticipant * action.min * (1 - (action.fee/100)) + action.organizer) - action.value,
        maximumRevenue: (action.perParticipant * action.max * (1 - (action.fee/100)) + action.organizer) - action.value,
        fieldChanged: true,
      };
    case types.UPDATE_PRICE_PER_PARTICIPANT:
      return {
        ...state,
        pricePerParticipant: action.value,
        isUserParticipant: false,
        minimumRevenue: (action.value * action.min * (1 - (action.fee/100)) + action.organizer) - action.venueCost,
        maximumRevenue: (action.value * action.max * (1 - (action.fee/100)) + action.organizer) - action.venueCost,
        fieldChanged: true,
      };

    /**
     *  PRIVATE
     */

    case types.UPDATE_PRIVATE_ACTIVITY:
      return {
        ...state,
        isActivityPrivate: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_AUTO_SWITCH_PRIVACY:
      return {
        ...state,
        autoSwitchActivityPrivacy: action.value,
        fieldChanged: true,
      };
    case types.UPDATE_TIME_AUTO_SWITCH_PRIVACY:
      return {
        ...state,
        autoSwitchActivityPrivacyTime: action.value,
        fieldChanged: true,
      }

    /**
     * INVITEES
     */

    case types.UPDATE_INVITEES:
      return {
        ...state,
        invitees: action.value,
      };

    case types.UPDATE_INVITED_CIRCLES: {
      let newState = cloneDeep(state);
      newState.invitedCircles[action.value.index] = action.value.value ;

      return newState;
    }

    case types.UPDATE_INVITED_CIRCLES_AND_PRICES: {
      let newState = cloneDeep(state);
      newState.invitedCirclesAndPrices[action.value.index] = action.value.value ;

      return newState;
    }
    case types.NEW_INVITED_CIRCLE:
      return {
        ...state,
        invitedCircles: [
          ...state.invitedCircles,
          action.value
        ]
      }
    case types.REMOVE_INVITED_CIRCLE: {
      let newState = cloneDeep(state);

      newState.invitedCircles.splice(action.value, 1);

      return newState
    }
    case types.NEW_INVITED_CIRCLE_AND_PRICE:
      return {
        ...state,
        invitedCirclesAndPrices: [
          ...state.invitedCirclesAndPrices,
          action.value
        ]
      }
    case types.REMOVE_INVITED_CIRCLE_AND_PRICE: {
      let newState = cloneDeep(state);

      newState.invitedCirclesAndPrices.splice(action.value, 1);

      return newState
    }
    case types.CLEAR_INVITED_CIRCLES: {
      let newState = cloneDeep(state);

      return {
        ...state,
        invitedCircles: [],
        invitedCirclesAndPrices: []
      }
    }
    case types.UDPATE_NOTIFICATION_PREFERENCE_MODE:
      return {
        ...state,
        notificationPreferenceMode: action.value
      };


    case types.UPDATE_AUTO_NOTIFICATION_TIME:
      return {
        ...state,
        notificationAutoTime: action.value
      };

      /**
       * main organizer
       */
    case types.ADD_MAIN_ORGANIZER:
      return {
        ...state,
        mainOrganizer: action.value,
      }

      /**
     * Co-Organizers
     */
    case types.ADD_CO_ORGANIZER:
      return {
        ...state,
        coOrganizers: [...state.coOrganizers, action.value],
        fieldChanged: true,
      }

    case types.REMOVE_CO_ORGANIZER: {
      let newState = cloneDeep(state);

      newState.coOrganizers.splice(action.value, 1);

      return newState
    }
    case types.RESET_CO_ORGANIZERS: {
      return {
        ...state,
        coOrganizers: []
      }
    }

    /**
     * Templates
     */
    case types.UPDATE_SAVE_TEMPLATE_SWITCH:
      return {
        ...state,
        isSaveTemplateSwitchOn: action.value
      }
    case types.UPDATE_SELECTED_TEMPLATE: {
      return {
        ...state,
        selectedTemplate: action.value
      }
    }

    /**
     *  Loading
     */

    case types.CHANGE_LOADING_STATUS:
      return {
        ...state,
        isNewActivityLoading: action.value,
      };

    /**
     *  Reset fields
     */

    case types.RESET_NEW_ACTIVITY_FIELDS:
      return {
        ...state,
        activityTitle: '',
        activityDescription: '',
        sportName: '',
        sportLevelNames: [],
        sportPositionNames: [],
        sportCertificateNames: [],
        sportunitySport: {},
        sportIcon: '',
        levelMinSliderValue: 1,
        levelMaxSliderValue: 4,
        allLevels: [],
        placeName: '',
        venue: null,
        infrastructure: null,
        slot: null,
        newActivityDate: '',
        newActivityEndDate: '',
        newActivityDateForServer: '',
        newActivityEndDateForServer: '',
        minimumNumber: 0,
        maximumNumber: 0,
        pricePerParticipant: 0,
        exactlyNumber: 0,
        areErrorsShown: false,
        isActivityPrivate: true,
        autoSwitchActivityPrivacy: false,
        autoSwitchActivityPrivacyTime: 15,
        notificationPreferenceMode: 'Now',
        notificationAutoTime: 15,
        invitees: [],
        coOrganizers: [],
        isCoOrganizerModalVisible: false,
        isDateUpdatable: true,
        invitedCircles: [],
        invitedCirclesAndPrices: [],
        sexRestriction: 'NONE',
        ageRestriction: {
          from: 0,
          to: 100
        },
        sportunityType: 'NONE',
        opponent: null,
        circleOfOpponents: null,
        isOpenMatch: false,
        unknownOpponent: false,
        repeatValue: '0',
        hideParticipantSwitchOn: false,
        isSaveTemplateSwitchOn: false,
        selectedTemplate: null,
        fieldChanged: false,
        isSportsFormValid: false,
      };

    /**
     *  Errors
     */

    case types.SHOW_NEW_ACTIVITY_ERRORS:
      return {
        ...state,
        areErrorsShown: action.value,
      };
    case types.IS_PRICE_UPDATABLE:
      return {
        ...state,
        isPriceUpdatable: action.value,
      };

    default: return state;
  }
};
