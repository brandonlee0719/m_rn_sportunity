import { StyleSheet, Platform } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import { platformStyle } from '../../../lib/PlatformUtils/PlatformUtils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.background,
    //justifyContent: 'space-between'
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 350
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  markerOverlayContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
    marginVertical: metrics.baseMargin
  },
  content: {
    height: 80,
    flex: 1,
    flexDirection: 'row',
    borderWidth: metrics.borderWidthRow,
    borderRadius: metrics.borderRowRadius,
    borderColor: colors.lightGrey,
    padding: metrics.baseMargin,
    backgroundColor: colors.white,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3},
    shadowOpacity: 0.1,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  subText: {
    marginTop: metrics.baseMargin,
    color: colors.skyBlue,
    fontWeight: '500',
  },
  loadMoreContainer: {
    backgroundColor: colors.snow,
    marginTop: metrics.baseMargin,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.lightGrey,
},
loadMoreText: {
    color: colors.facebook,
    fontSize: fonts.size.h5,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.4,
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
    fontWeight: 'bold',
    paddingHorizontal: 5
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
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.skyBlue,
    alignItems: 'center',
    padding: 15,
    position: 'absolute'
  },
  searchBarInput: {
    padding: 5,
    flex: 1,
    borderWidth: 2,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    backgroundColor: colors.snow,
    fontSize: fonts.size.medium,
    height: 30,
    marginHorizontal: 30,
    maxHeight: 30,
    color: colors.skyBlue,
  },
  searchBarIcon: {
    tintColor: colors.lightGreen,
  },
  headerAndroid: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 0,
    zIndex: 10
  },
  headerIOS: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 64,
    paddingTop: 14,
    zIndex: 10
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollViewContainer: {
    paddingBottom: 35,
    paddingHorizontal: metrics.baseMargin,
    //paddingTop: metrics.baseMargin,
    paddingTop: 40,
    elevation: 1
  },
  askLocationContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  emptyCirclesContainer: {
    paddingHorizontal: metrics.baseMargin,
    paddingVertical: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    width: '98%',
    alignItems: 'center'
  },
  emptyCirclesImageContainer: {
    justifyContent: 'center',
    paddingVertical: 10,
  },
  emptyCirclesImage: {
    height: 30,
    width: 30,
    tintColor: colors.charcoal
  },
  emptyCirclesButton: {
    marginTop: 5,
    marginBottom: 0,
    marginHorizontal: metrics.baseMargin,
    width: '40%'
  },
  emptyCirclesLink: {
    color: colors.skyBlue,
    marginVertical: metrics.baseMargin,
  },
  emptyCirclesListTextHeader: {
    fontSize: fonts.size.h5,
    color: colors.charcoal,
    fontWeight: '500',
    marginBottom: 15,
  },
  emptyCirclesListTextSubHeader: {
    color: colors.charcoal,
    fontSize: fonts.size.normal,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 15,
    borderWidth: 0
  },
  emptyMySportunitiesListText: {
    color: colors.blue,
    fontSize: fonts.size.normal,
  },
});

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
