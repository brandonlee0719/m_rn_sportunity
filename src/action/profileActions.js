import * as types from './actionNames';
import { AsyncStorage } from 'react-native';
import PlatformUtils from '../lib/PlatformUtils/PlatformUtils';

/**
 * Triggered when report form text changes
 */
export function updateReportText(text) {
  return {
    type: types.UPDATE_REPORT_TEXT,
    text,
  };
}

/**
 * Triggered if user comes from login page
 */
export function updateFrom(value) {
  return {
    type: types.UPDATE_FROM,
    value,
  };
}

/**
 * Triggered once if profile isn't completed
 */
export function updatePopupCompleteProfileIsDiplayed(value) {
  return {
    type: types.UPDATE_POPUP_COMPLETE_PROFILE_IS_DISPLAYED,
    value
  }
}

/**
 * Triggered when report unread chat and notifications numbers
 */
export function updateProfileCounter({
  unreadChats = null,
  unreadNotifications = null,
  unreadAllChats,
  unreadAllNotifications,
}) {
  return async function (dispatch, getState){
    dispatch({
      type: types.PROFILE_NOTIFICATIONS_COUNTS,
      value: {
        unreadChats,
        unreadNotifications,
        unreadAllChats,
        unreadAllNotifications,
      },
    });
    
    const { sportunityProfile: { counts: { unreadAllTotal } } } = getState();
    const appBadgeNumber = parseInt(await AsyncStorage.getItem('appBadgeNumber') || 0);

    if (appBadgeNumber != unreadAllTotal + unreadChats + unreadNotifications) {
      AsyncStorage.setItem('appBadgeNumber', (unreadAllTotal + unreadChats + unreadNotifications).toString())
    }

    PlatformUtils.setAppBadge(unreadAllTotal + unreadChats + unreadNotifications);
  }
}

export const updateStepsCompleted = (steps) => ({
  type: types.UPDATE_STEPS_COMPLETED,
  tutorialSteps: steps,
});

export const updateStepsPercentage = (percentage) => ({
  type: types.UPDATE_STEPS_PERCENTAGE,
  stepsPercentage: percentage,
});

export const updateNextStepToDo = (nextStepToDo) => ({
  type: types.UPDATE_NEXT_STEP_TO_DO,
  nextStepToDo,
});

export const resetTutorialSteps = () => ({
  type: types.RESET_TUTORIAL_STEPS,
});

export const toggleProgressBarDisplay = (showProgressBar) => ({
  type: types.TOGGLE_PROGRESS_BAR_DISPLAY,
  showProgressBar,
});

export const givePermissionToHideProgress = (permission) => ({
  type: types.GIVE_PERMISSION_TO_HIDE_PROGRESS,
  permission,
});
