import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: metrics.doubleBaseMargin,
    paddingTop: metrics.baseMargin,
    flex: 1,
    alignItems: 'flex-start',
  },
  switchContainer: {
    flexDirection: 'row',
    // marginBottom: metrics.baseMargin,
  },
  text: {
    fontSize: fonts.size.regular,
    // color: colors.skyBlue,
    fontWeight: '500',
    flex: 1,
  },
  exactlySwitch: {
    marginLeft: metrics.doubleBaseMargin,
    padding: 3,
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
    marginLeft: metrics.doubleBaseMargin,
  },
});

export default style;
