import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: metrics.doubleBaseMargin,
    paddingTop: 0,
  },
  text: {
    fontSize: fonts.size.regular,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.skyBlue,
    color: colors.snow,
    padding: 3,
    width: 80,
    height: 40,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    textAlign: 'center',
  },
});

export default style;
