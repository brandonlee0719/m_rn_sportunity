import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: metrics.baseMargin, 
    backgroundColor: colors.silver,
    flexDirection: 'column',
    //justifyContent: 'space-between'
  },
  topContent: {
    flex: 6
  },
  titleContainer: {
    marginVertical: metrics.doubleBaseMargin,
  },
  title: {
    fontSize: fonts.size.regular,
    color: colors.darkBlue
  },
  textContainer: {
    marginBottom: metrics.doubleBaseMargin,
  },
  text: {
    fontSize: fonts.size.medium,
    textAlign: 'justify'
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: metrics.baseMargin /2,
    marginTop: 10
  },
  labelText: {
    color: colors.darkBlue,
    fontWeight: '500',
    fontSize: 13, 
    flex: 4
  },
  switchButton: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
    /*marginTop: 5,
    marginBottom: 5,*/
  },
  button: {
    backgroundColor: colors.skyBlue,
    padding: metrics.baseMargin,
    //marginTop: 20,
    marginHorizontal: metrics.baseMargin,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: fonts.size.regular,
    color: colors.snow,
    textAlign: 'center',
  },
  termContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: metrics.baseMargin,
    borderRadius: 5,
    marginVertical: metrics.baseMargin
  },
  termTitle: {
    fontSize: 15,
    color: colors.charcoal,
    textDecorationLine: 'underline'
  },
  linkContainer: {
    marginTop: metrics.smallMargin
  },
  termLink: {
    fontSize: 13,
    color: colors.darkBlue,
  },
  contentContainer: {
    marginTop: metrics.smallMargin
  },
  termContent: {
    fontSize: 13,
    color: colors.charcoal,
    textAlign: 'justify'
  },
  webViewContainer: {
    marginTop: metrics.baseMargin,
  }
});
