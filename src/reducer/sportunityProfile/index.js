import * as types from 'sportunity/src/action/actionNames';

const nullDef = (value, vdefault) =>
  value === null || value === undefined? vdefault : value

const defaultState = {
  reportText: '',
  from: '',
  popupCompleteProfileIsDiplayed: false,
  counts: {
    unreadChats: 0,
    unreadNotifications: 0,
    unreadAllChats: 0,
    unreadAllNotifications: 0,
    unreadTotal: 0,
    unreadAllTotal: 0,
  },
  tutorialSteps: {
    createFormStep: false,
    setupMembersSubscriptionStep: false,
    fulfilProfileStep: false,
    addOfficialDocumentsStep: false,
    createSubAccountStep: false,
    shareAccessStep: false,
    createCircleStep: false,
    organizeStep: false,
    setupStatisticsStep: false,
    joinAPrivateCircleStep: false,
    joinAPublicCircleStep: false,
    giveAvailabilitiesStep: false,
    bookSportunityStep: false
  },
  stepsPercentage: 0,
  nextStepToDo: '',
  showProgressBar: true,
  permissionToHideProgress: false,
};

/**
 * Reducer for handling Profile ctions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_REPORT_TEXT:
      return {
        ...state,
        reportText: action.text,
      };
    case types.UPDATE_FROM:
      return {
        ...state,
        from: action.value,
      };
    case types.UPDATE_POPUP_COMPLETE_PROFILE_IS_DISPLAYED:
      return {
        ...state,
        popupCompleteProfileIsDiplayed: action.value
      }
    case types.PROFILE_NOTIFICATIONS_COUNTS: {
      const {
        unreadChats,
        unreadNotifications,
        unreadAllChats,
        unreadAllNotifications,
      } = action.value;
      const { counts: c } = state;
      const counts = {
        unreadChats: nullDef(unreadChats, c.unreadChats),
        unreadAllChats: nullDef(unreadAllChats, c.unreadAllChats),
        unreadNotifications: nullDef(unreadNotifications, c.unreadNotifications),
        unreadAllNotifications: nullDef(unreadAllNotifications, c.unreadAllNotifications),
      };
      counts.unreadTotal = counts.unreadChats + counts.unreadNotifications;
      counts.unreadAllTotal = counts.unreadAllChats + counts.unreadAllNotifications;

      return {
        ...state,
        counts,
      };
    }
    case types.UPDATE_STEPS_COMPLETED: {
      return {
        ...state,
        tutorialSteps: action.tutorialSteps,
      };
    }
    case types.UPDATE_STEPS_PERCENTAGE: {
      return {
        ...state,
        stepsPercentage: action.stepsPercentage || 0,
      };
    }
    case types.UPDATE_NEXT_STEP_TO_DO: {
      return {
        ...state,
        nextStepToDo: action.nextStepToDo || '',
      };
    }
    case types.RESET_TUTORIAL_STEPS: {
      return {
        ...state,
        tutorialSteps: defaultState.tutorialSteps,
      };
    }
    case types.TOGGLE_PROGRESS_BAR_DISPLAY: {
      return {
        ...state,
        showProgressBar: action.showProgressBar,
      };
    }
    case types.GIVE_PERMISSION_TO_HIDE_PROGRESS: {
      return {
        ...state,
        permissionToHideProgress: action.permission,
      };
    }

    default: return state;
  }
}
