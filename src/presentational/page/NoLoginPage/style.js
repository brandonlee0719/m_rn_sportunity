import { StyleSheet } from 'react-native';

import { metrics , colors } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
  },
  footer: {
    justifyContent: 'flex-end',
  },
  buttonAddFooter: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 6,
  },
});
