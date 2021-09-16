import { StyleSheet } from 'react-native';

import {
  metrics,
  colors,
  fonts,
} from 'sportunity/src/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: metrics.doubleBaseMargin,
    paddingHorizontal: 10,
  },
  leftText: {
    paddingHorizontal: 20,
    fontSize: fonts.size.small,
    color: colors.skyBlue,
    alignSelf: 'flex-start',
    marginVertical: metrics.baseMargin,
  },
  descriptionText: {
    fontSize: fonts.size.medium,
    marginVertical: metrics.baseMargin,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  errorText: {
    fontSize: fonts.size.regular,
    alignSelf: 'center',
    color: colors.error,
    marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
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
  datePicker: {
    width: 200,
    marginHorizontal: metrics.doubleBaseMargin + metrics.baseMargin,
  },
});

export const calendarStyle = StyleSheet.create({
  calendarContainer: {
    backgroundColor: '#ffffff',
    margin: metrics.doubleBaseMargin,
  },
  title: {
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
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
