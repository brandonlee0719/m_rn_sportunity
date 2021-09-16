import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  navBarContainerAndroid: {
    height: 50, 
    backgroundColor: colors.skyBlue, 
    flexDirection: 'row',
    // alignItems: 'center',
    alignItems: 'center',
  },
  navBarContainerIOS: {
    height: 64, 
    backgroundColor: colors.skyBlue, 
    flexDirection: 'row',
    // alignItems: 'center',
    alignItems: 'center',
    paddingTop: 14
  },
  navBarTitle: {
    flex: 1,
    color: colors.snow,
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: fonts.size.h6,
    marginRight: 40
  },
  navBarReturnButton: {
    marginLeft: 10,
    width: 30
  },
  navBarReturnButtonIcon: {
    aspectRatio: 0.5,
    resizeMode: 'contain',
    transform:[ {scaleX: -1}],
    tintColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.snow,
  },
  errorText: {
    marginLeft: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    fontSize: fonts.size.medium,
    color: colors.error,
  },
  inputRow: {
   flexDirection: 'column',
   marginTop: metrics.baseMargin,
   marginLeft: metrics.baseMargin,
   marginRight: metrics.baseMargin,
   marginBottom: metrics.baseMargin
 },
 textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.baseMargin /2
  },
  labelText: {
    color: colors.darkBlue,
    fontWeight: '500',
    flex: 4
  },
  switchButton: {
    flex: 1
  },
  explanationText: {
    fontSize: fonts.size.small,
    marginTop: metrics.baseMargin,
    fontStyle: 'italic'
  },
});

export default style;
