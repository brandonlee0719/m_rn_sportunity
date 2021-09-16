import * as types from 'sportunity/src/action/actionNames';

const defaultState = {
  language: 'en',
  userCountry: 'CH',
  userCurrency: 'CHF',
  userLocation: null
};

/**
 * Reducer for handling Profile ctions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_LOCALE:
      return {
        ...state,
        language: action.value,
      };
    case types.UPDATE_USER_COUNTRY:
      return {
        ...state,
        userCountry: action.value,
      };
    case types.UPDATE_USER_CURRENCY:
      return {
        ...state,
        userCurrency: action.value,
      };
    case types.UPDATE_USER_LOCATION:
      return {
        ...state,
        userLocation: action.value,
      };
    default: return state;
  }
}
