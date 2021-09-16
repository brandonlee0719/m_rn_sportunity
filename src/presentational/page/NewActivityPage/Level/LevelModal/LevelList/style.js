import { StyleSheet } from 'react-native';
import { metrics, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  container: {
    padding: metrics.doubleBaseMargin,
    flex: 1,
  },
  levelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: metrics.doubleBaseMargin,
  },
  text: {
    fontSize: fonts.size.h5,
    fontWeight: '500',
  },
});

export default style;
