import {
  StyleSheet,
} from 'react-native';

import {
  fonts,
  colors,
  metrics,
} from '../../theme';


const textAreaStyles = StyleSheet.create({
  textAreaContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 90,
    maxHeight: 90,
    backgroundColor: 'transparent',
    marginBottom: metrics.doubleBaseMargin,
  },
  textAreaInput: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    fontSize: fonts.size.medium,
    height: 90,
    marginHorizontal: 30,
    maxHeight: 90,
  },
  textAreaIcon: {
    position: 'absolute',
    right: 50,
    height: 15,
    width: 15,
    marginTop: 5,
  },
});

export default textAreaStyles;
