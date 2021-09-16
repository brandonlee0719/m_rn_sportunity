import { StyleSheet } from 'react-native';
import { colors, metrics } from 'sportunity/src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: metrics.screenWidth,
    flexDirection: 'row',
  },
  bordered: {
    borderRadius: 2,
    borderWidth: 0.8,
    borderColor: colors.lightGrey,
  },
  shadowed: {
    shadowColor: colors.lightGrey,
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  leftBar: {
    width: 4,
    alignSelf: 'stretch',
  },
  leftBarFull: {
    backgroundColor: colors.bloodOrange,
  },
  leftBarWaiting: {
    backgroundColor: colors.orange,
  },
  leftBarAvailable: {
    backgroundColor: colors.darkGrey,
  },
  leftBarOrganized: {
    backgroundColor: colors.darkBlue,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
  },
  rightbar: {
    width: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
