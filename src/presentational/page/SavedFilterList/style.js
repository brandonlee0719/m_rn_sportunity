import { StyleSheet } from 'react-native';

import { colors } from 'sportunity/src/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 5
    //height: 30
  },
  itemContainer: {
    backgroundColor: colors.blue,
    paddingVertical: 5,
    marginVertical: 3, 
    paddingHorizontal: 5,
    borderRadius: 8, 
    marginHorizontal: 3,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25
  },
  appliedItemContainer: {
    backgroundColor: colors.bloodOrange,
    paddingVertical: 5,
    marginVertical: 3, 
    paddingHorizontal: 5,
    borderRadius: 8, 
    marginHorizontal: 3,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 25
},
  itemName: {
      fontSize: 10,
      color: colors.white
  },
  filterIcon: {
    height: 22,
    width: 22,
    tintColor: colors.lightGrey,
    marginVertical: 3,
    marginHorizontal: 5
    //marginRight: 5
  }
});
