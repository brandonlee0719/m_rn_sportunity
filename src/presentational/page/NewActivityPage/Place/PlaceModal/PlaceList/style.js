import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 160,
  },
  itemContainer: {
    marginHorizontal: metrics.doubleBaseMargin,
    paddingVertical: metrics.doubleBaseMargin,
    borderBottomWidth: 1,
    borderBottomColor: colors.skyBlue,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    paddingHorizontal: metrics.doubleBaseMargin,
    paddingVertical: 5,
    fontSize: fonts.size.regular,
    fontWeight: '400',
    color: colors.skyBlue,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: metrics.doubleBaseMargin,
  },
  placeSwitch: {
    marginLeft: metrics.doubleBaseMargin,
  },
  switchText: {
    fontSize: fonts.size.regular,
    color: colors.skyBlue,
    fontWeight: '500',
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
});

export const googleSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: colors.silver,
  },
  textInput: {
    margin: metrics.doubleBaseMargin,
    borderWidth: 1,
    borderColor: colors.steel,
    fontSize: fonts.size.medium,
  },
  listView: {
    marginHorizontal: metrics.doubleBaseMargin,
  },
  description: {
    fontSize: fonts.size.medium,
    fontWeight: '400',
    color: colors.skyBlue,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
})
