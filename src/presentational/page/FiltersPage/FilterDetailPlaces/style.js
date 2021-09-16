import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../../theme';

export const styles =  StyleSheet.create({
  placeContextView: {
    flex: 1,
  },
  placeContextClose: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  discloser: {
    height: 15,
    width: 15,
  },
  locationContext: {
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 160,
  },
  aroundContext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 20
  },
  aroundBtn: {
    width: 40,
    height: 40,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 5,
    borderTopColor: colors.silver,
    borderLeftColor: colors.lightIvory,
    borderRightColor: colors.lightIvory,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusMinusBtn: {
    color: colors.lightSeaGreen,
  },
  aroundLabel: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aroundLabelText: {
    fontSize: 16,
    color: colors.darkSlateGray,
  },
  aroundValueText: {
    fontSize: 24,
    color: colors.darkOrange,
  },
  aroundValue: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aroundUnit: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    height: 60,
    backgroundColor: '#ffffff',
    borderWidth:0
  },
});

export const googleSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: colors.silver,
    borderColor: 'transparent',
  },
  textInput: {
    margin: metrics.doubleBaseMargin,
    borderColor: colors.steel,
    borderWidth: 0,
    fontSize: fonts.size.medium,
  },
  listView: {
    marginHorizontal: metrics.doubleBaseMargin,
  },
  description: {
    fontSize: fonts.size.medium,
    fontWeight: '400',
    color: colors.skyBlue,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
})
