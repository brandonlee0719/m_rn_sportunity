import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 15,
    alignItems: 'center'
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 50,
    backgroundColor: colors.skyBlue,
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: metrics.baseMargin
  },
  text: {
    color: colors.snow,
    fontSize: fonts.size.h5,
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default style;
