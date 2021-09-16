import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: metrics.navBarHeight,
    paddingTop: 11,
  },
  titleContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 2,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h5,
    fontWeight: '500',
  },
  image: {
    width: metrics.images.small,
    height: metrics.images.small,
    tintColor: colors.darkBlue,
  },
  icon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default style;
