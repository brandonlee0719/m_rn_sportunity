import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  sportunitiesBottomTabItemPadding: 8,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  buttonDefaultHeight: 35,
  borderWidth: 3,
  borderRowRadius: 2,
  borderWidthRow: 1,
  rowHeitgh: 150,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60,
  },
  images: {
    small: 20,
    smallRadius: 10, 
    medium: 40,
    mediumRadius: 20,
    large: 60,
    largeRadius: 30,
    big: 80,
    bigRadius: 40,
    xl: 100,
    xlRadius: 50,
    logo: 300,
  },
};

export default metrics;
