import { Navigator } from 'react-native-deprecated-custom-components';

const transitions = {
  default: {
    ...Navigator.SceneConfigs.HorizontalSwipeJump,
    gestures: null,
  },
  modal: {
    ...Navigator.SceneConfigs.FloatFromBottom,
  },
};

export default transitions;
