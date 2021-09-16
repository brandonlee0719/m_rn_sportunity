import { StyleSheet, Platform } from 'react-native';

import { colors } from '../../../../../src/theme';

export default StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
    backgroundColor: colors.blue,
    ...Platform.select({ios: {zIndex: 3},android: {elevation: 3, shadowOpacity: 0, shadowColor: 'transparent', shadowOffset: { width: 0, height: 0 }}})
  },
});
