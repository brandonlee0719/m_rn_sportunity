import { StyleSheet } from 'react-native';

import { fonts, colors, metrics } from 'sportunity/src/theme';

const styles = StyleSheet.create({
  input: {
    fontSize: fonts.size.medium,
    height: 40,
    maxHeight: 40,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
  },
  textArea: {
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 80,
    maxHeight: 80,
  },
  labelText: {
    color: colors.darkBlue,
    fontWeight: '500',
    marginTop: metrics.baseMargin,
  },
});

export default styles;
