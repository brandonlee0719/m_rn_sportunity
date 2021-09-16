import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../../theme';

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headingCell: {
    width: 100,
    fontWeight: '500',
  },
  cellText: {
    width: 100,
    textAlign: 'center',
    color: colors.charcoal,
  },
  separator: {
    height: 1,
    backgroundColor: colors.lightGrey,
  },
  border: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  teamAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: metrics.baseMargin,
  }
});

export default styles;
