import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../../theme';

export default StyleSheet.create({
  container: {
    // marginTop: metrics.navBarHeight,
    // paddingTop: metrics.marginHorizontal,
    // paddingBottom: metrics.doubleBaseMargin,
    flex: 1,
    backgroundColor: colors.snow,
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
    justifyContent: 'space-between'
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
    tintColor: colors.charcoal
  },
  buttonicon: {
    marginRight: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    tintColor: colors.grey
  },
  settingsIcon: {
    width: 5,
    height: 5,
  },
  avataricon: {
    marginRight: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftIcon: {
    width: '100%',
    height: '100%',
    aspectRatio: 0.5,
    resizeMode: 'contain',
    transform:[ {scaleX: -1}],
    tintColor: colors.white,
  },
  hamburgerIcon: {
    // marginRight: metrics.baseMargin/2,
  },
  margin:{
  // 	marginVertical: metrics.marginVertical,
     marginHorizontal: metrics.smallMargin,
  },
  buttonContainer: {
    padding: metrics.baseMargin,
    marginHorizontal: -metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
  },
  text: {
    color: colors.charcoal,
    // marginBottom: metrics.baseMargin,
    fontSize: 14,
    fontWeight: '500',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    width: '100%',
  },
  switchLabel: {
    fontSize: fonts.size.medium,
    color: colors.skyBlue,
    flex: 3
  },
  switchButton: {
    flex: 1,
    marginHorizontal: metrics.doubleBaseMargin
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
    marginVertical: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
  },
  touchableButtonContainer: {
    marginHorizontal: metrics.doubleBaseMargin
  },
  detailContainer: {
    alignItems: 'center',
    padding: metrics.doubleBaseMargin,
  },
  detailItemContainer: {
    paddingVertical: metrics.baseMargin,
  },
  detailItemText: {
    color: colors.charcoal,
  },
  sportImage: {
    width: fonts.size.regular,
    height:  fonts.size.regular,
    resizeMode: 'contain',
    marginRight: metrics.baseMargin,
    tintColor: colors.darkBlue,
    marginTop: 3,
  },
  iconLocation: {
    width: fonts.size.medium,
    height:  fonts.size.medium,
    resizeMode: 'contain',
    marginRight: 5,
    tintColor: colors.charcoal,
  },
  textareaContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    marginBottom: metrics.doubleBaseMargin,
    height: 90,
  },
  textarea: {
    flex: 3,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 70,
    marginLeft: metrics.baseMargin
  },

  descriptionContainer: {
    marginBottom: metrics.doubleBaseMargin * 1.5,
  },
  boldText: {
    fontWeight: '600',
    color: colors.black,
    opacity: 0.9,
  }
});
