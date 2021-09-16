import { StyleSheet } from 'react-native';

import { metrics } from 'sportunity/src/theme';

export default StyleSheet.create({
  content: {
    position: 'absolute',
    right: metrics.doubleBaseMargin, // not sure if it is the propper
    bottom: metrics.doubleBaseMargin, // metric to use.
    alignItems: 'center',
    elevation: 3
  },
});
