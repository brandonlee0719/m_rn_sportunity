import { colors, fonts, metrics } from 'sportunity/src/theme';
import {StyleSheet } from 'react-native';

export const styles =  StyleSheet.create({
  container: {
    flex: 11,
    elevation: 1
  },
  markerOverlayContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    padding: 5,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingTop: 38,
    elevation: 1
  },
  emptyListTextContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%'
  },
  emptyListTextHeader: {
    color: colors.charcoal,
    fontSize: fonts.size.h6,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 15
  },
  emptyListText: {
    color: colors.skyBlue,
    fontSize: fonts.size.normal,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.8,
    marginBottom: 10
  },
  emptyMySportunitiesContainer: {
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
  emptyMySportunitiesImageContainer: {
    justifyContent: 'center',
    paddingBottom: 10,
  },
  emptyMySportunitiesImage: {
    height: 24,
    width: 24,
  },
  emptyMySportunitiesButton: {
    marginTop: 5,
    marginBottom: 0,
    marginHorizontal: metrics.baseMargin,
    width: '40%'
  },
  emptyMySportunitiesLink: {
    color: colors.skyBlue,
    marginVertical: metrics.baseMargin,
  },
  emptyMySportunitiesListTextHeader: {
    fontSize: fonts.size.normal,
    marginBottom: 15,
  },
  emptyMySportunitiesListTextSubHeader: {
    color: colors.charcoal,
    fontSize: fonts.size.normal,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 15,
    borderWidth: 0
  },
  emptyMySportunitiesListText: {
    color: colors.charcoal,
    fontSize: fonts.size.normal,
  },
  loadMoreContainer: {
    backgroundColor: colors.snow,
    margin: metrics.baseMargin,
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
  askAddressContainer: {
    flex: 1,
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
  },
  askAddressImage: {
    width: 30,
    height: 30,
    marginBottom: metrics.baseMargin,
  },
  askAddressTitle: {
    marginBottom: metrics.doubleBaseMargin,
  },
  askAddressAdd: {
    color: colors.charcoal,
    marginBottom: metrics.baseMargin,
    fontSize: fonts.size.normal,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.9,
    borderWidth: 0
  },
  askAddressCurrentLocation: {
    color: colors.skyBlue,
    marginVertical: metrics.baseMargin,
  },
  sportunityListContainer: {
    flexDirection: 'row',
    height: '100%'
  },
  sportunityListBackgroundLeft: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    flexDirection: 'row',
    padding: 10
  },
  sportunityListBackgroundRight: {
    height: '100%',
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.red,
    flexDirection: 'row',
    padding: 10
  },
  sportunityListBackgroundText: {
    fontSize: fonts.size.h6,
    color: colors.white,
    paddingHorizontal: 5,
  },
  sportunityListBackgroundIcon: {
    width: 30,
    height: 30,
  },
  loadingContainer: {
    //flex: 11,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center'
    //marginTop: '50%'
  },
});

export const googleSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 20,
    borderWidth: 0,
  },
  textInputContainer: {
    backgroundColor: colors.snow,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    margin: metrics.doubleBaseMargin,
    fontSize: fonts.size.medium,
    borderWidth: 0.5,
    borderColor: colors.steel
  },
  listView: {
    marginHorizontal: metrics.doubleBaseMargin,
    backgroundColor: colors.snow,
    zIndex: 20,
  },
  description: {
    fontSize: fonts.size.medium,
    fontWeight: '400',
    color: colors.skyBlue,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
});