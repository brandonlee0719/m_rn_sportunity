import { StyleSheet } from 'react-native';
import {  metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyListText: {
    margin: metrics.baseMargin,
    color: colors.skyBlue,
    fontSize: fonts.size.h3,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.4,
  },
  readAllContainer: {
    flex: 1, 
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: 'white',
    borderRadius:4,
    elevation: 2, // android shadow
    shadowColor: 'black', // iOS
    shadowOffset: { width: 1, height: 3}, // iOS
    shadowOpacity: 0.1, // iOS
    padding: metrics.baseMargin,
  },
  readAllText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: colors.skyBlue,
    fontWeight: 'bold'
  }
});
