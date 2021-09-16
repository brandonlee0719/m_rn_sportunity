import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  navBarContainerAndroid: {
    height: 50, 
    backgroundColor: colors.skyBlue, 
    flexDirection: 'row',
    // alignItems: 'center',
    alignItems: 'center',
  },
  navBarContainerIOS: {
    height: 64, 
    backgroundColor: colors.skyBlue, 
    flexDirection: 'row',
    // alignItems: 'center',
    alignItems: 'center',
    paddingTop: 14
  },
  navBarTitle: {
    flex: 1,
    color: colors.snow,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: fonts.size.h6,
  },
  navOptionsButton: {
    color: colors.snow,
    fontSize: 25,
    fontWeight: 'bold',
    height: 50,
    paddingTop: 7
  },
  navBarReturnButton: {
    marginLeft: 10,
    width: 30
  },
  navBarReturnButtonIcon: {
    aspectRatio: 0.5,
    resizeMode: 'contain',
    transform:[ {scaleX: -1}],
    tintColor: colors.white,
  },
  container: {
    // marginTop: metrics.navBarHeight,
    backgroundColor: colors.snow,
    paddingBottom: 300,
    marginBottom: 5,
  },
  loadingContainer: {
    flex: 1,
    marginTop: '50%'
  },
  divider: {
    height: 1,
    backgroundColor: colors.frost,
    width: '100%'
  },
});
