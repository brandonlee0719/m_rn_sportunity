import * as types from 'sportunity/src/action/actionNames';

const defaultState = {
  circleTabState: 'CircleDetailsInfo'
};

/**
 * Reducer for handling Profile ctions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_CIRCLE_TAB_STATE:
      return {
        ...state,
        circleTabState: action.payload,
      };
    default: return state;
  }
}