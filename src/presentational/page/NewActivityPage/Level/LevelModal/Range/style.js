import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: metrics.doubleBaseMargin,
  },
  text: {
    fontSize: fonts.size.h6,
    color: colors.skyBlue,
    fontWeight: '500',
    marginRight: metrics.baseMargin,
  },
});

export default style;
