import { includes } from 'lodash';

import {
  changeSportunityFilterKind,
  createActivity,
  COUNT_SPOTUNITIES,
} from '../../action/actionNames';


import displayKinds from '../../enums/sportunityFilterKinds';


const defaultState = {
  selectedKind: displayKinds.organized,
  count: 10,
};

export default (store = defaultState, action) => {
  switch (action.type) {
    case changeSportunityFilterKind: {
      const { kind } = action;

      // check this is a valid kind
      if (includes(Object.values(displayKinds), kind)) {
        return {
          ...store,
          selectedKind: kind,
        };
      } else if (typeof __DEV__ !== 'undefined') {
        throw new Error(` expecting a sportunityFilter but got ${kind}`);
      }

      return store; // otherwise return the state unchanged
    }

    // Add the new activity to the sportunities list
    case createActivity: {
      const { activity } = action;
      // TODO: check it is an propper shapped SportunitySummary.
      // if not ignore and if in __DEV__, throw an expection.

      return {
        ...store,
        sportunities: [...store.sportunities, activity],
      };
    }

    case COUNT_SPOTUNITIES:
      return {
        ...store,
        count: action.count,
      };

    default:
      return store;
  }
};
