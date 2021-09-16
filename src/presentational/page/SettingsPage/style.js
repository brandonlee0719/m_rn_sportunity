import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import { metrics, fonts, colors } from 'sportunity/src/theme';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: metrics.doubleBaseMargin,
    paddingBottom: metrics.doubleBaseMargin,
    minHeight: height - metrics.navBarHeight,
    backgroundColor: colors.white
  },
  inputsContainer: {
    height: 100,
  },
  centerText: {
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    alignSelf: 'center',
    marginVertical: metrics.doubleBaseMargin,
  },
  errorText: {
    fontSize: fonts.size.small,
    color: colors.red,
    alignSelf: 'center',
    marginVertical: metrics.doubleBaseMargin,
  },
  activityIndicator: {
    position: 'absolute',
  },
});
