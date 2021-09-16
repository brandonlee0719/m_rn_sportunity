import { StyleSheet } from 'react-native';
import { fonts, colors, metrics } from 'sportunity/src/theme';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: metrics.baseMargin,
    height: 70,
  },
  textareaContainer: {
    backgroundColor: 'transparent',
    marginHorizontal: metrics.baseMargin,
    height: 120,
  },
});

export default styles;
