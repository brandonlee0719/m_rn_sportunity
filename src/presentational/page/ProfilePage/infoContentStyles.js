import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
  },
  text: {
    color: colors.darkGrey,
    fontSize: fonts.size.medium,
    marginTop: metrics.baseMargin,
  },
  capitalWord: {
    flex: 1,
    fontSize: fonts.size.medium,
    fontWeight: 'bold',
    color: colors.charcoal,
    paddingRight: metrics.baseMargin,
  },
  textareaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.snow,
    marginTop: metrics.baseMargin,
    paddingLeft: 5,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    minWidth: '80%',
    color: colors.darkGrey,
  },
  textarea: {
    padding: 5,
    fontSize: fonts.size.medium,
    minWidth: '50%',
    maxWidth: '80%',
  },
  addContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: colors.snow,
  },
});

export default styles;
