import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.skyBlue,
    alignItems: 'center',
    padding: 15,
  },
  input: {
    padding: 5,
    flex: 1,
    borderWidth: 2,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    backgroundColor: colors.snow,
    fontSize: fonts.size.medium,
    height: 30,
    marginHorizontal: 30,
    maxHeight: 30,
    color: colors.skyBlue,
  },
  searchIcon: {
    tintColor: colors.lightGreen,
  },

});
