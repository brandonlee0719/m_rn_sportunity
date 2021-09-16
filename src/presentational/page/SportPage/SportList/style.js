import { StyleSheet, Dimensions } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const  { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    height: height / 2,
    marginBottom: metrics.baseMargin,
  },
  itemContainer: {
    marginHorizontal: metrics.baseMargin,
    padding: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    marginVertical: 3,
    backgroundColor: colors.white
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: colors.skyBlue,
  },
  name: {
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: 5,
    fontSize: fonts.size.medium,
    fontWeight: '400',
    color: colors.darkGrey,
  },
  loadMore: {
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: 5,
    fontSize: fonts.size.regular,
    fontWeight: '400',
    color: colors.skyBlue,
    alignSelf: 'center',
    margin: metrics.baseMargin,
  },
  subHeaderContainer: {
    margin: metrics.doubleBaseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '600',
  },
  lowerLevelText: {
    color: colors.darkGreen,
    fontSize: fonts.size.regular,
    fontWeight: '600'
  },
  higherLevelText: {
    color: colors.bloodOrange,
    fontSize: fonts.size.regular,
    fontWeight: '600'
  },
  buttonContainer: {
    backgroundColor: colors.skyBlue,
    marginLeft: metrics.baseMargin,
    padding: metrics.baseMargin,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.snow,
  },
  bottomContainer: {
    marginTop: metrics.baseMargin,
    // flex: 1,
    height: height / 2,
    flexDirection: 'row',
    // marginHorizontal: metrics.baseMargin,
  },
  bottomSubtitle: {
    color: colors.skyBlue,
    fontSize: fonts.size.h6,
    fontWeight: '600',
    marginVertical: metrics.baseMargin,
    alignSelf: 'center',
  },
  bottomText: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '600',
    marginVertical: metrics.baseMargin,
  },
  bottomColumn: {
    flex: 1,
    alignItems: 'center',
  },
  nameContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 3,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    marginVertical: 3,
  },
  addSportButtonContainer: {
    backgroundColor: colors.skyBlue,
    margin: metrics.baseMargin,
    padding: metrics.baseMargin,
    borderRadius: 50,
    alignItems: 'center',
  },
  addSportButtonText: {
    fontSize: fonts.size.h6,
    color: colors.snow,
    textAlign: 'center',
  },
});
