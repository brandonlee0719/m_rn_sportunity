import { bindActionCreators } from 'redux';

export const dispatchToActions = (actions) => (dispatch) =>
  Object.keys(actions).reduce((mem, actionName) => ({
    ...mem,
    [actionName]: bindActionCreators(actions[actionName], dispatch)
  }), {})
