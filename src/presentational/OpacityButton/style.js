import {
  StyleSheet,
} from 'react-native';

import {
  fonts,
  colors,
} from 'sportunity/src/theme';

// To reuse with different styles:
// Add new field (submitButton, SubmitText is example) with your own styles
// import touchableOpacityButtonStyles from this file
// pass your styles as a prop
// Check Setting (Login) for example
const OpacityButtonStyles = StyleSheet.create({
  submitButton: {
    backgroundColor: colors.skyBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 50,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: colors.steel,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    borderColor: colors.steel,
  },
  submitText: {
    fontSize: fonts.size.regular,
    fontFamily: fonts.style.description.fontFamily,
    color: colors.white,
    fontWeight: '500',
  },
  facebookButton: {
    backgroundColor: colors.facebook,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 50,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: colors.steel,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  facebookText: {
    fontSize: fonts.size.regular,
    fontFamily: fonts.style.description.fontFamily,
    color: colors.snow,
  },
  googleButton: {
    backgroundColor: colors.snow,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 50,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: colors.steel,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    marginVertical: 5
  },
  googleText: {
    fontSize: fonts.size.regular,
    fontFamily: fonts.style.description.fontFamily,
    color: colors.drawer,
  },
});

export default OpacityButtonStyles;
