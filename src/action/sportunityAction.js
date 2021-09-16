import * as types from './actionNames';
/**
 * Action for update status sportunity( FULL, WAITING, AVAILABLE)
 */
export const updateStatusSportunity = (label,color) => ({
  type: types.STATUS_SPORTUNITY,
  status: { label, color },
});


/**
 * Action for opening/closing participants modal
 */
export const updateParticipantsModal = (value) => ({
  type: types.IS_PARTICIPANTS_MODAL_VISIBLE,
  value,
});

export const updateCount = (count) => ({
  type: types.COUNT_SPOTUNITIES,
  count,
})

export const updateLoadingStatus = (value) => ({
  type: types.IS_EVENT_LOADING,
  value
})
