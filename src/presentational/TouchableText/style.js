import {
  StyleSheet,
} from 'react-native';

import {
  fonts,
  colors,
} from '../../theme';

// To reuse with different styles:
// Add new field (rightUnderlinedText are examples) with your own styles
// import touchableTextStyles from this file
// pass your styles as a prop
// Check Setting (Login) for example
const touchableTextStyles = StyleSheet.create({
  rightUnderlinedText: {
    fontSize: fonts.style.description.fontSize,
    fontFamily: fonts.style.description.fontFamily,
    color: colors.skyBlue,
    alignSelf: 'flex-end',
    marginRight: 30,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default touchableTextStyles;
