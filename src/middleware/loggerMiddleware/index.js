import createLogger from 'redux-logger';

// log actions in development mode
export default createLogger({
  collapsed: true,
  duration: true,
  // Only log in development mode
  // __DEV__ variable is added by React-Native at run time
  /* eslint no-undef: 0 */
  predicate: () => __DEV__,
});
