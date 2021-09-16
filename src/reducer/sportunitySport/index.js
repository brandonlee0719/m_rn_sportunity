import * as types from '../../action/actionNames';

const defaultState = {
  searchText: '',
};

/**
 * Reducer for handling Sport actions
 */
export default function (state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_SEARCHTEXT:
      return {
        ...state,
        searchText: action.text,
      };
    default: return state;
  }
}
