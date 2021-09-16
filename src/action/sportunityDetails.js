import * as types from './actionNames';

export const updateParticipantStatus = payload => ({
  type: types.UPDATE_PARTICIPANT_STATUS,
  payload,
});

export const updateOrganizedStatus = payload => ({
  type: types.UPDATE_ORGANISED_STATUS,
  payload,
});

export const updateChatId = payload => ({
  type: types.UPDATE_CHAT_ID,
  payload,
});

export const updateUser = payload => ({
  type: types.UPDATE_USER,
  payload,
});

export const updateSportunity = payload => ({
  type: types.UPDATE_SPORTUNITY,
  payload,
});

export const resetSportunityDetails = () => ({
  type: types.RESET_SPORTUNITY_DETAILS,
});
