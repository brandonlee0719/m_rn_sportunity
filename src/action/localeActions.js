import * as types from './actionNames';

/**
 * Triggered when report form text changes
 */
export function updateLocale(value) {
  return {
    type: types.UPDATE_LOCALE,
    value,
  };
}
export function updateUserCountry(value) {
  return {
    type: types.UPDATE_USER_COUNTRY,
    value,
  };
}
export function updateUserCurrency(value) {
  return {
    type: types.UPDATE_USER_CURRENCY,
    value,
  };
}
export function updateUserLocation(value) {
  return {
    type: types.UPDATE_USER_LOCATION,
    value,
  };
}