import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 67,
    paddingTop: 11,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h5,
    fontWeight: '500',
  },
  icon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.whiteSmoke,
    marginTop: metrics.baseMargin,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.baseMargin
  },
  validationButtonContainer: {
    flexDirection: 'row',
    backgroundColor: colors.skyBlue,
    height: 67,
    alignItems: 'center'
  },
  validationButton: {
    flex: 1,
    fontSize: fonts.size.h5,
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
  }
});


export default style;
