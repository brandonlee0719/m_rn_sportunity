import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../../../../../src/theme';

const iconBases = {
  width: 20,
  height: 20,
}
const styles = {
  container: {
    marginTop: 1,
    marginHorizontal: metrics.smallMargin,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    minHeight: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: metrics.baseMargin,
    flex: 1,
  },
  photoContainer: {
/*alignItems: 'center',
    justifyContent: 'center',
    flex: 1,*/
  },
  thumbProfile: {
    //marginTop: 5,
    borderColor: colors.darkGreen,
    borderWidth: 3,
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius,
  },
  colContainer:{
    flex: 5,
  },
  name: [fonts.style.normal, {
    color: colors.blue,
    marginLeft: 5
  }],
  remove: {
    tintColor: colors.charcoal,
  },
  removeContainer: {
    height: metrics.images.medium,
    width: metrics.images.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallIconGreen: {
    ...iconBases,
    tintColor: colors.darkGreen
  },
  smallIconBlue: {
    ...iconBases,
    tintColor: colors.skyBlue
  },
  smallIconDisable: {
    ...iconBases,
    tintColor: colors.black,
  },

};

export default styles;
