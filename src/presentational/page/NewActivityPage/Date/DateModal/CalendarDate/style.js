import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export const calendarStyle = StyleSheet.create({
  title: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '500',
    margin: metrics.doubleBaseMargin,
  },
  currentDayCircle: {
    backgroundColor: colors.skyBlue,
  },
  currentDayText: {
    color: colors.skyBlue,
  },
});

export const style = StyleSheet.create({
  container: {
    // marginHorizontal: metrics.baseMargin,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: metrics.doubleBaseMargin,
    marginTop: metrics.baseMargin
  },
  title: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '500',
    marginHorizontal: metrics.doubleBaseMargin,
    marginVertical: metrics.baseMargin
  },
});
