import { StyleSheet } from 'react-native';
import { fonts, metrics, colors } from 'sportunity/src/theme';

const style = StyleSheet.create({
  select: {
    fontSize: fonts.size.small,
    color: colors.charcoal,
  },
  selectBlue: {
    fontSize: fonts.size.small,
    color: colors.skyBlue,
  },
  black: {
    color: colors.darkGrey,
  },
});

export default style;
