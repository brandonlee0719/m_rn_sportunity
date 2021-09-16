import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  blueLine: {
    backgroundColor: colors.skyBlue,
    padding: 3,
    paddingLeft: metrics.baseMargin,
  },
  whitetext: {
    fontSize: fonts.size.regular,
    color: colors.snow,
  },
  text: {
    fontSize: fonts.size.regular,
    fontWeight: '500',
    padding: metrics.doubleBaseMargin,
  },

});

export default style;
