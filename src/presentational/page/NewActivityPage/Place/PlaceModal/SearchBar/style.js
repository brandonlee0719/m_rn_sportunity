import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.silver,
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: colors.steel,
  },
  input: {
    padding: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    backgroundColor: colors.snow,
    fontSize: fonts.size.medium,
    height: 30,
    marginHorizontal: metrics.baseMargin,
    maxHeight: 30,
    color: colors.darkGreen,
  },
});
