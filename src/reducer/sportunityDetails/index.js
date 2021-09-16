import {
  UPDATE_PARTICIPANT_STATUS,
  UPDATE_ORGANISED_STATUS,
  UPDATE_CHAT_ID,
  UPDATE_USER,
  UPDATE_SPORTUNITY,
  RESET_SPORTUNITY_DETAILS,
} from '../../action/actionNames';


const defaultState = {
  isParticipant : false,
  isOrganized: false,
  chatId: null,
  isUserLoggedIn: false,
  sportunityInfo: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_PARTICIPANT_STATUS:
      return {
        ...state,
        isParticipant: action.payload,
      };
    case UPDATE_ORGANISED_STATUS:
      return {
        ...state,
        isOrganized: action.payload,
      };
    case UPDATE_CHAT_ID:
      return {
        ...state,
        chatId: action.payload,
      };
    case UPDATE_USER:
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };
    case UPDATE_SPORTUNITY:
      return {
        ...state,
        sportunityInfo: action.payload,
      };
    case RESET_SPORTUNITY_DETAILS:
      return defaultState;
    default:
      return state;
  }
};
