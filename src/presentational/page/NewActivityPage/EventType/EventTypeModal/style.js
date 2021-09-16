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
  switchesContainer: {
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: metrics.baseMargin,
  },
  icon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.baseMargin
  },
  label: {
    fontSize: fonts.size.regular,
    fontWeight: '500',
    flex: 1
  },
  switchContainer: {
    marginVertical: metrics.baseMargin,
    paddingHorizontal: metrics.baseMargin
  },
  explanationContainer: {
    marginTop: metrics.doubleBaseMargin
  },  
  explanation: {
    fontStyle: 'italic',
    fontSize: fonts.size.medium,
    textAlign: 'justify'
  },
  error: {
    fontStyle: 'italic',
    fontSize: fonts.size.medium,
    color: colors.red,
    textAlign: 'justify'
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderColor: colors.lightGrey,
    padding: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusIcon: {
    height: metrics.icons.small,
    width: metrics.icons.small,
    marginRight: metrics.baseMargin,
  },
  text: {
    color: colors.blue,
    //marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  thumbProfile: {
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius,
    resizeMode: 'cover',
  }
});

export default style;
