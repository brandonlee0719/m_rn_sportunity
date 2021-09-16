import {Platform} from 'react-native';
import merge from 'lodash/merge';

export const platformStyle = (base, android, ios) =>
  merge({}, base || {}, Platform.OS === 'android' ? android : ios)

const PlatformUtils = Platform.select({
  ios: () => require('./PlatformUtilsiOS.js').default,
  android: () => require('./PlatformUtilsAndroid.js').default,
})();

export default PlatformUtils;
