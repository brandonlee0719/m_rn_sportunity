import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../../../../../src/theme';

const styles = {
  container: {
    marginTop: 1,
    marginHorizontal: metrics.smallMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: metrics.baseMargin,
    flex: 1,
  },
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 10
  },
  thumbProfile: {
    borderColor: colors.darkGreen,
    borderWidth: 3,
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius,
    // resizeMode: 'contain',
  },
  colContainer:{
    flex: 3,
  },
  iconContainer:{
    flex: 3,
    height: metrics.images.medium,
    width: metrics.images.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconDarkBlue:{
    tintColor: colors.darkBlue,
  },
  iconBlue:{
    tintColor: colors.blue,
  },
  iconLightGrey:{
    tintColor: colors.lightGrey,
  },
  iconLocation: {
    width: metrics.icons.tiny,
    height: metrics.icons.tiny,
    resizeMode: 'contain',
    marginRight: metrics.smallMargin,
    marginLeft: metrics.baseMargin,
  },
  name: [fonts.style.normal, {
    color: colors.blue,
  }],
  answer: [fonts.style.small, {
    // color: colors.blue,
  }],
  remove: [fonts.style.normal, {
    color: colors.blue,
  }],
  buttonConfirm: {
    width: metrics.icons.xl,
    height: metrics.icons.medium,
    backgroundColor: colors.skyBlue,
    borderRadius: metrics.icons.xl /2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.size.small,
    fontFamily: fonts.style.h2.fontFamily,
    fontWeight: 'bold',
  }
};

export default styles;
