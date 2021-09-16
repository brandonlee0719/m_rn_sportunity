import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

export const styles = StyleSheet.create({
  headerViewStyle: {
    height: 25,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  headerCaptionStyle: {
    fontSize: fonts.size.small,
    marginLeft: 10,
  },
  headerText: {
    marginLeft: metrics.baseMargin,
    flex: 1,
    color: colors.darkBlue,
    fontSize: fonts.size.medium,
  },
  headerImageStyle: {
    marginRight: 20,
  },
  savedFilterStyle: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  savedFilterCaptionStyle: {
    fontSize: fonts.size.small,
    color: colors.bloodOrange,
    marginLeft: 10,
  },
  savedFilterImageStyle: {
    marginRight: 5,
  },
  footerViewStyle: {
    height: 25,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  footerCaptionStyle: {
    fontSize: fonts.size.small,
    marginLeft: 10,
  },
  filterStyle: {
    height: 60,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 4,
  },
  filterCaptionStyle: {
    fontSize: fonts.size.regular,
    marginLeft: 20,
  },
  filterImageStyle: {
    marginRight: 15,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  saveFilterButtonsContainer: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: metrics.doubleBaseMargin, // metric to use.
    alignItems: 'center',
    alignSelf: 'center',   
    backgroundColor: 'transparent'
  },
  buttonStyle: {
    marginRight: 10,
  },
  button: {
    backgroundColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginTop: 20,
    marginHorizontal: metrics.baseMargin,
    borderRadius: 50,
  },
  redButton: {
    backgroundColor: colors.red,
    padding: metrics.baseMargin,
    marginTop: 20,
    marginHorizontal: metrics.baseMargin,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 14,
    color: colors.snow,
    textAlign: 'center',
  },
  subtitleText: {
    marginTop: metrics.doubleBaseMargin,
    marginBottom: metrics.doubleBaseMargin,
    marginLeft: metrics.baseMargin,
    fontSize: fonts.size.regular,
    fontWeight: '500',
    color: colors.blue,
  },
  scrollViewContainer: {
    paddingBottom: 65,
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
    paddingTop: 38
  }
});

export const buttonStyle = StyleSheet.create({
  headerContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: -1
  },
  headerCol: {
    flex: 1
  },
  headerText: {
    fontSize: fonts.size.medium,
    color: colors.darkBlue,
    fontWeight: '500',
    marginBottom: 5
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
  footerViewStyle: {
    //height: 25,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  footerCaptionStyle: {
    fontSize: fonts.size.small,
    marginLeft: 10,
  }
})