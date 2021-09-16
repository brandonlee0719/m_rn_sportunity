import { StyleSheet, Platform, Dimensions } from 'react-native';

import { colors, metrics, fonts } from 'sportunity/src/theme';
import { platformStyle } from '../../../lib/PlatformUtils/PlatformUtils'
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  upperHalfPage: {
    flex: 1,
    position: 'relative'
  },
  sportunityPageView: {
    flex: 1,
    backgroundColor: colors.background,
    marginTop: 0,
    position: 'relative'
  },
  tabView: {
    marginTop: metrics.navBarHeight,
  },
  loadingContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center'
    //marginTop: '50%'
  },
  floatingFilterContainer: {
    position: 'absolute',
    bottom: metrics.doubleBaseMargin, // metric to use.
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 15,
    backgroundColor: colors.snow,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: colors.charcoal,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    flexDirection: 'row'
  },
  floatingFilterTouchable: {
    flexDirection: 'row'
  },
  floatingFilterText: {
    color: colors.charcoal,
    ...fonts.style.small,
    fontWeight: 'bold'
  },
  activeDloatingFilterText: {
    color: colors.blue
  },
  floatingFilterIcon: {
    height: 15,
    width: 15,
    tintColor: colors.lightGrey,
    marginRight: 5
  },
  activeFloatingFilterIcon: {
    tintColor: colors.bloodOrange, 
  },
  overlay: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    zIndex: 30,
    elevation: 30,
  },
  tutorialContainer: {
    zIndex: 50,
    elevation: 50,
    position: 'absolute',
    //top: 120, 
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    width: width,
    height: height,
    paddingBottom: 200,
    paddingRight: 30,
    paddingLeft: 30
  },
  tutorialImage: {
    marginTop: 100,
    marginLeft: 100
  },
  tutorialTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tutorialImageCheck: {
    width: 50,
    height: 50,
    marginRight: metrics.doubleBaseMargin,
    tintColor: colors.green,
    flex: 1
  },
  tutorialImageCross: {
    width: 50,
    height: 50,
    marginLeft: metrics.doubleBaseMargin,
    tintColor: colors.red,
    flex: 1
  },
  tutorialText: {
    color: colors.white,
    ...fonts.style.normal,
    fontWeight: 'bold',
    flex: 5
  },
  tutorialButtonContainer: {
    alignSelf: 'center',
  },
  tutorialButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    ...fonts.style.normal,
  }
});

export const scrollableTabSpecificStyles = {
  tabBarActiveTextColor: colors.bloodOrange,
};

const containerBase = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: metrics.navBarHeight,
  backgroundColor: colors.blue,
  ...Platform.select({ios: {zIndex: 3},android: {elevation: 3, shadowOpacity: 0, shadowColor: 'transparent',shadowOffset: { width: 0, height: 0 },}})
};
const containerAndroid = {
  height: 50,
};
const containeriOS = {
  height: 70,
  paddingTop: 14,
};

export const DefaultHeaderStyle = StyleSheet.create({
  container: platformStyle(containerBase, containerAndroid, containeriOS),
  icon: {
    flex: 2,
    marginLeft: 10,
  },
  drawerIconBadgeContainer: {
    flex: 2,
    marginTop: 0,
    top: 0,
  },
  text: {
    flex: 20,
    color: colors.white,
    ...fonts.style.h5,
    textAlign: 'center',
  }
})
