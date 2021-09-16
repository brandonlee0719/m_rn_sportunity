import * as types from './actionNames';

export const updateNewCircleName = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_NAME,
  payload,
});

export const updateNewCircleDescription = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_DESCRIPTION,
  payload,
});

export const updateNewCirclePlace = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_PLACE,
  payload,
});

export const updateNewCircleSport = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_SPORT,
  payload,
});

export const updateNewCircleLevels = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_SPORT_LEVEL,
  payload,
});

export const updateNewCircleType = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_TYPE,
  payload,
});

export const updateNewCirclePublic = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_PUBLIC,
  payload,
});

export const updateNewCircleAccessibleWithLink = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_ACCESSIBLE_WITH_LINK,
  payload,
});

export const updateNewCircleShared = (payload) => ({
  type: types.UPDATE_NEW_CIRCLE_SHARED,
  payload,
});

export const addCircleInPrivateMode = (payload) => ({
  type: types.ADD_CIRCLE_IN_PRIVATE_MODE,
  payload,
});

export const removeCircleInPrivateMode = (payload) => ({
  type: types.REMOVE_CIRCLE_IN_PRIVATE_MODE,
  payload,
});

export const resetNewCircleFields = (payload) => ({
  type: types.RESET_NEW_CIRCLE_FIELDS,
  payload,
});

export const showNewCircleErrors = (payload) => ({
  type: types.SHOW_NEW_CIRCLE_ERRORS,
  payload,
});
