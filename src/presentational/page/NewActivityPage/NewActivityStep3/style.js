import { StyleSheet } from 'react-native';
import { fonts, colors, metrics } from 'sportunity/src/theme';

const styles = StyleSheet.create({
  floatingBtnItem: {
    backgroundColor: colors.snow,
    padding:2,
    borderRadius:2,
    elevation: 5,
    shadowOffset: {
    height: 5,
  }},
  floatingBtnTxt:{
    color: colors.textGrey
  }
});

export default styles;
