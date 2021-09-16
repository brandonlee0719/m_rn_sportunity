import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: metrics.doubleBaseMargin,
    width: '100%'
  },
  button: {
    backgroundColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    flex: 1,
    borderRadius: 50,
    shadowColor: colors.lightGrey,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
    },
  },
  text: {
    fontSize: fonts.size.h3,
    color: colors.snow,
    textAlign: 'center',
  },
});

export default style;
