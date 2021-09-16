import * as types from '../../action/actionNames';
import { cloneDeep } from 'lodash';

const defaultState = {
  fieldChanged: false,
  name: '',
  description: '',
  isCirclePublic: false,
  isCircleAccessibleWithLink: true, 
  isCircleShared: true,
  address: null, 
  sport: null, 
  circleType: 0,
  isLoading: false,
  circlesInPrivateMode: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_NEW_CIRCLE_NAME:
      return {
        ...state,
        name: action.payload,
        fieldChanged: true,
      };

    case types.UPDATE_NEW_CIRCLE_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
        fieldChanged: true,
      };

    case types.UPDATE_NEW_CIRCLE_PLACE:
      return {
        ...state,
        address: action.payload,
        fieldChanged: true,
      };

    case types.UPDATE_NEW_CIRCLE_SPORT:
      return {
        ...state,
        sport: action.payload,
        fieldChanged: true,
      };

    case types.UPDATE_NEW_CIRCLE_SPORT_LEVEL:
      return {
        ...state,
        levels: action.payload,
        fieldChanged: true,
      };

    case types.UPDATE_NEW_CIRCLE_TYPE:
      return {
        ...state,
        circleType: action.payload,
        fieldChanged: true,
      };

    case types.UPDATE_NEW_CIRCLE_PUBLIC:
      return {
        ...state,
        isCirclePublic: action.payload,
        fieldChanged: true,
      };

    case types.UPDATE_NEW_CIRCLE_ACCESSIBLE_WITH_LINK:
      return {
        ...state,
        isCircleAccessibleWithLink: action.payload,
        fieldChanged: true,
      };

    case types.UPDATE_NEW_CIRCLE_SHARED:
      return {
        ...state,
        isCircleShared: action.payload,
        fieldChanged: true,
      };
    
    case types.ADD_CIRCLE_IN_PRIVATE_MODE:
      return {
        ...state,
        circlesInPrivateMode: [
          ...state.circlesInPrivateMode,
          action.payload,
        ],
        fieldChanged: true,
      }

    case types.REMOVE_CIRCLE_IN_PRIVATE_MODE:
      return {
        ...state,
        circlesInPrivateMode: state.circlesInPrivateMode.filter(circle => circle.id !== action.payload),
        fieldChanged: true,
      }

    /**
     * Loading
     */

    case types.CHANGE_LOADING_STATUS:
      return {
        ...state,
        isNewActivityLoading: action.value,
      };

    /**
     *  Reset fields
     */

    case types.RESET_NEW_CIRCLE_FIELDS:
      return {
        ...state,
        ...defaultState,
      };

    /**
     *  Errors
     */

    case types.SHOW_NEW_CIRCLE_ERRORS:
      return {
        ...state,
        areErrorsShown: action.payload,
      };

    default: return state;
  }
};
