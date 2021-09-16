import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.baseMargin,
    backgroundColor: colors.silver
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: metrics.baseMargin / 2,
    elevation: 100,
    zIndex: 1000,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -metrics.doubleBaseMargin
  },
  logo: {
    height: 35,
    width: 35,
    tintColor: colors.skyBlue,
    marginRight: 5,
    marginTop: 3,
  },
  headingText: {
    fontSize: fonts.size.h5,
    color: colors.skyBlue,
    //marginTop: 5,
    fontWeight: 'bold'
  },
  configureText: {
    fontSize: fonts.size.small,
    alignSelf: 'center',
    marginVertical: 8,
  },
  profileTypeSelectText: {
    fontSize: fonts.size.small,
    alignSelf: 'center',
    marginTop: metrics.baseMargin,
  },
  profileType: {
    width: 200,
    alignSelf: 'center',
  },
  profileTypeDisabled: {
    borderBottomWidth: 2,
    borderColor: colors.skyBlue,
    color: colors.charcoal,
    fontSize: fonts.size.h5,
    alignSelf: 'center',
    padding: 5,
    opacity: 0.7
  },
  pickerBorder: {
    width: 180,
    alignSelf: 'center',
    height: 2,
    backgroundColor: colors.skyBlue,
    marginTop: -metrics.baseMargin,
    marginLeft: -metrics.baseMargin,
  }
});

export default styles;
