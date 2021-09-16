
import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
floatingFilterContainer: {
    position: 'absolute',
    bottom: 70,
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 15,
    backgroundColor: colors.snow,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: colors.charcoal,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    flexDirection: 'row'
  },
  floatingFilterTouchable: {
    flexDirection: 'row'
  },
  floatingFilterText: {
    color: colors.charcoal,
    ...fonts.style.small,
    fontWeight: 'bold',
    paddingHorizontal: 5
  },
  activeDloatingFilterText: {
    color: colors.blue
  },
  floatingFilterIcon: {
    height: 15,
    width: 15,
    tintColor: colors.lightGrey,
    marginRight: 5
  },
  activeFloatingFilterIcon: {
    tintColor: colors.bloodOrange, 
  },
});
