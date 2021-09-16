import { StyleSheet, Dimensions } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';
const SCREEN_WIDTH = Dimensions.get('window').width;

const style = StyleSheet.create({
  navBarContainerAndroid: {
    height: 50, 
    backgroundColor: colors.skyBlue, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarContainerIOS: {
    height: 64, 
    backgroundColor: colors.skyBlue, 
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14
  },
  navBarTitle: {
    flex: 1,
    color: colors.snow,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: fonts.size.regular,
    marginLeft: metrics.baseMargin,
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
  navBarNextButtonContainer: {
    width: SCREEN_WIDTH * 0.2,
    alignItems: 'flex-end'
  },
});

export default style;
