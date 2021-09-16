import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../../theme';

export const styles =  StyleSheet.create({
  container: {
    paddingVertical: metrics.baseMargin,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
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
  buttonContainer: {
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
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
  checkboxImage: {
    tintColor: colors.lightGrey,
    height: 15,
    width: 15
  },  
});
