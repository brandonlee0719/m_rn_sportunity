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
  },
  select: {
    color: colors.charcoal,
    fontSize: fonts.size.small,
  },
  input: {
    backgroundColor: colors.skyBlue,
    color: colors.snow,
    padding: 3,
    marginRight: 5, 
    width: 80,
    height: 40,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    textAlign: 'center',
  },
  text: {
    fontSize: fonts.size.regular,
    fontWeight: '500',
    color: colors.charcoal,
    marginLeft: metrics.baseMargin,
    marginBottom: metrics.doubleBaseMargin,
    marginTop: metrics.baseMargin,
  },
});

export default style;
