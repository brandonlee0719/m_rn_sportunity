import { StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const { width } = Dimensions.get('window');


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  fromToContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  keyText: {
    fontSize: fonts.size.h6,
    fontWeight: '500',
    marginLeft: metrics.baseMargin,
    marginVertical: metrics.baseMargin,
    width: width / 4,
  },
  valueText: {
    fontSize: fonts.size.h6,
    fontWeight: '500',
    color: colors.skyBlue,
  },
  slidersContainer: {
    marginTop: metrics.doubleBaseMargin,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.size.regular,
    fontWeight: '600',
    color: colors.skyBlue,
  },
  slider1: {
    width: width / 1.1,
  },
  slider2: {
    width: width / 1.1,
  },
});

export default style;
