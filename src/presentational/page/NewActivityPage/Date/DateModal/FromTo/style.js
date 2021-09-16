import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
    justifyContent: 'flex-start',
  },
  text: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '500',
    marginHorizontal: metrics.doubleBaseMargin,
  },
  hourContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    borderRadius: metrics.borderRadius,
    marginHorizontal: metrics.baseMargin,
  },
  input: {
    backgroundColor: colors.skyBlue,
    color: colors.snow,
    padding: 3,
    width: 40,
    height: 40,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    textAlign: 'center',
  },
  hourText: {
    color: colors.snow,
    fontSize: fonts.size.regular,
    fontWeight: '500',
  },
});

export default style;
