import * as types from './actionNames';

/**
 * Triggered when sport remove button is pressed
 */
export const updateSearchText = (text) => {
  return({
    type: types.UPDATE_SEARCHTEXT,
    text,
  })
};
