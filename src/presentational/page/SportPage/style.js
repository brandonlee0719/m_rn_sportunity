import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: metrics.doubleBaseMargin,
    height: 80,
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 40,
    maxHeight: 40,
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
    marginTop: metrics.baseMargin,
  },
  button: {
    backgroundColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginTop: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    marginBottom: 60,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: fonts.size.h3,
    color: colors.snow,
    textAlign: 'center',
  },
});
