import { StyleSheet } from 'react-native';
import { colors } from 'sportunity/src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  leftBar: {
    width: 5,
    alignSelf: 'stretch',
    backgroundColor: colors.green
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  seperator: {
    height: 2,
  },
});
