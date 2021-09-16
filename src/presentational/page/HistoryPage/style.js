import {
  StyleSheet,
} from 'react-native';

import {
  metrics, colors, fonts
} from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    marginTop: metrics.navBarHeight,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  navOptionsButton: {
    color: colors.snow,
    fontSize: 25,
    fontWeight: 'bold',
    height: 50,
    paddingTop: 7
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
  loadingContainer: {
    marginTop: 40
},
});
