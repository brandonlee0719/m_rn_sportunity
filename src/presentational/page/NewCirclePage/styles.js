import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navOptionsButton: {
    color: colors.snow,
    fontSize: 25,
    fontWeight: 'bold',
    height: 50,
    paddingTop: 7
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    //marginBottom: metrics.navBarHeight,
  },
  headerAndroid: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 0,
  },
  headerIOS: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 64,
    paddingTop: 14,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  subTitle: {
    marginTop: 5, 
    color: colors.darkGrey
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hamburgerIcon: {
  },
  inputsContainer: {
    flexDirection: 'column', 
    width: '100%', 
    flex: 5, 
    justifyContent: 'center'
  },
  margin:{
      //marginHorizontal: metrics.smallMargin,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginBottom: metrics.doubleBaseMargin * 2,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    marginHorizontal: metrics.baseMargin,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: '100%',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.doubleBaseMargin,
    flex: 1
  },
  switchLabel: {
    fontSize: fonts.size.medium,
    color: colors.skyBlue,
    flex: 4,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //width: '100%',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin,
  },
  typeLabel: {
    color: colors.charcoal,
    borderWidth: 1,
    padding: metrics.baseMargin / 2,
    borderRadius: 2,
    borderColor: colors.charcoal,
  },
  pickerLabel: {
    fontSize: fonts.size.medium,
    color: colors.skyBlue,
    flex: 1,
    fontWeight: 'bold'
  },
  switchButton: {
    flex: 1,
    marginLeft: metrics.doubleBaseMargin
  },
  button: {
    backgroundColor: colors.white,
    borderColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginTop: metrics.doubleBaseMargin,
    marginBottom: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 12,
    marginHorizontal: metrics.doubleBaseMargin,
  },
  touchableButtonContainer: {
    marginHorizontal: metrics.doubleBaseMargin
  },
  successCard: {
    backgroundColor: colors.skyBlue,
    borderRadius: 10,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    borderColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 120,
  },
  successCardText: {
    fontSize: fonts.size.h4,
    fontWeight: '600',
    color: colors.snow,
  },
  successCardCode: {
    fontSize: fonts.size.h6,
    marginTop: metrics.baseMargin,
    opacity: 0.9,
  },
  italicSubtitle: {
    color: colors.charcoal,
    fontFamily: fonts.type.emphasis,
  },
  successCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
