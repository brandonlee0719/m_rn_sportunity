import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../../theme';

export const styles =  StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    flex: 1
  },
  restriction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.baseMargin 
  },
  picker: {
    color: colors.skyBlue,
  },
  input: {
    backgroundColor: colors.skyBlue,
    color: colors.snow,
    padding: 3,
    width: 80,
    height: 40,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10
  },
});
