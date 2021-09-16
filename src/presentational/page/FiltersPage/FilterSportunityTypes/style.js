import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
  },
  addText: {
    marginLeft: metrics.baseMargin,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
  },
  container: {
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.baseMargin,
  },
  levelsPositionsContainer: {
    marginLeft: 15,
  },
  sportIcon: {
    width: 15,
    height: 15,
  },
  name: {
    marginLeft: metrics.doubleBaseMargin,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
  },
  filterName: {
    marginLeft: metrics.doubleBaseMargin,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
    fontWeight: '500',
  },
  level: {
    color: colors.skyBlue,
    alignSelf: 'flex-end',
    fontSize: fonts.size.medium,
  },
  closeIcon: {
    width: 15,
    height: 15,
    tintColor: colors.lightGreen,
    alignSelf: 'flex-end',
  },
});