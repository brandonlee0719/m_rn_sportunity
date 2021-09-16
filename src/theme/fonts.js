import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const type = {
  base: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic',
};

const size = {
  h1: width < 360 ? 30 : 38,
  h2: width < 360 ? 28 : 34,
  h3: width < 360 ? 26 : 30,
  h4: width < 360 ? 22 : 26,
  h5: width < 360 ? 18 : 20,
  h6: width < 360 ? 17 : 19,
  input: width < 360 ? 16 : 18,
  regular: width < 360 ? 15 : 17,
  medium: width < 360 ? 13 : 14,
  small: width < 360 ? 11 : 12,
  tiny: width < 360 ? 8.5 : 8.5,
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  tiny: {
    fontFamily: type.base,
    fontSize: size.tiny,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  tabItem: {
    fontWeight: 'bold',
  },
};

export default {
  type,
  size,
  style,
};

