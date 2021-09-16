import { colors, fonts, metrics } from 'sportunity/src/theme';

export default {
  emptyListTextContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  emptyListText: {
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
}