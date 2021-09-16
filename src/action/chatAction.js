import * as types from './actionNames';

/**
 * Action for opening/closing chat modal
 */
export const updateChatModal = (value) => ({
  type: types.IS_CHAT_MODAL_VISIBLE,
  value,
});

export const updateCountLastChat = (currentCount) => ({
  type: types.COUNT_LAST_CHAT,
  currentCount,
})