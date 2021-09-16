import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer';

/**
 * Passing reducers, initial state and middleware to store.
 */
function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
    ),
  );
}

const store = configureStore();

export default store;

