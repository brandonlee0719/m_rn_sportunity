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
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
      padding: metrics.baseMargin
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  buttonSubContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContentContainer: {
  },
  markerOverlayContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    left: 0,
    right: 0,
    padding: 5,
  },
});

export default style;
