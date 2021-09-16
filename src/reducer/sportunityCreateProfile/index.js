import * as types from '../../action/actionNames';

const defaultState = {
  isCreatingProfile: false,
  isCreatingSubAccount: false,
  avatar: '',
  pseudo: '',
  name: '',
  email: '',
  password: '',
  phone: 0,
  address: {},
  birthday: '',
  description: '',
  errors: '',
  languages: [],
};

/**
 * Reducer for handling Profile actions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.CREATING_PROFILE:
      return {
        ...state,
        isCreatingProfile: action.value,
      };
    case types.CREATING_SUB_ACCOUNT:
      return {
        ...state,
        isCreatingSubAccount: action.value
      }

    case types.UPDATE_AVATAR:
      return {
        ...state,
        avatar: action.uri,
      };
    case types.UPDATE_PSEUDO:
      return {
        ...state,
        pseudo: action.text,
      };

    case types.UPDATE_NAME:
      return {
        ...state,
        name: action.text,
      };

    case types.UPDATE_EMAIL:
      return {
        ...state,
        email: action.text,
      };
    case types.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.text,
      };

    case types.UPDATE_PHONE:
      return {
        ...state,
        phone: action.number,
      };

    case types.UPDATE_ADDRESS:
      return {
        ...state,
        address: action.item,
      };

    case types.UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.text,
      };
    case types.UPDATE_BIRTHDAY:
      return {
        ...state,
        birthday: action.date,
      };
    case types.UPDATE_LANGUAGES:
      return {
        ...state,
        languages: action.items,
      };
    case types.VALIDATE_CREATE_PROFILE_INPUTS:
      return {
        ...state,
        errors: action.errors,
      };
    case types.RESET_PROFILE_CREATION: 
      return {
        ...state,
        avatar: '',
        pseudo: '',
        name: '',
        email: '',
        password: '',
        phone: 0,
        address: {},
        birthday: '',
        description: '',
        errors: '',
        languages: [],
      }

    default: return state;
  }
}
