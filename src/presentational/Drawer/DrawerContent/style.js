import { Dimensions } from 'react-native';
import { fonts, colors, metrics } from 'sportunity/src/theme';

const { height } = Dimensions.get('window');

export default {
  scrollView: {
    backgroundColor: colors.snow,
    //paddingVertical: 10, 
  },
  container: {
    //flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.snow
  },
  topContent: {
    // flex: 1,
  },
  bottomContent: {
    paddingHorizontal: 10,
  },
  version: {
    ...fonts.style.large,
    color: colors.charcoal,
  },
  centeredContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: metrics.baseMargin,
    marginTop: metrics.doubleBaseMargin * 2,
    marginBottom: metrics.doubleBaseMargin * 2 
  },
  logo: {
    alignSelf: 'center',
    width: 60,
    height: 60,
    //flex: 1
  },
  totalBadgeContainer: {
    //position: 'absolute',
    width: 18,
    height: 18,
    //right: 3,
    //bottom: -13,
    backgroundColor: colors.red,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    flex: 1
  },
  badge: {
    color: 'white',
    ...fonts.style.h5,
    fontSize: 10,
  },
};
