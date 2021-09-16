import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
    container: {
      padding: 5,
    },
    searchBarContainer: {
      flexDirection: 'row',
      backgroundColor: colors.skyBlue,
      alignItems: 'center',
      padding: 15,
    },
    input: {
      padding: 5,
      flex: 1,
      borderWidth: 2,
      borderColor: colors.steel,
      borderRadius: metrics.buttonRadius,
      backgroundColor: colors.snow,
      fontSize: fonts.size.medium,
      height: 30,
      marginHorizontal: 30,
      maxHeight: 30,
      color: colors.skyBlue,
    },
    buttonContainer: {
      borderWidth: 1,
      borderColor: colors.lightGrey,
      borderRadius: metrics.borderRadius,
      padding: metrics.baseMargin,
      marginTop: metrics.baseMargin,
      backgroundColor: colors.snow,
      flexDirection: 'row',
      alignItems: 'center',
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 3 },
      shadowOpacity: 0.1,
    },
    subContainer: {
      flex: 1,
    },
    text: {
      color: colors.darkBlue,
      marginBottom: metrics.baseMargin,
      fontWeight: '500',
    },
    select: {
      color: colors.skyBlue,
      fontWeight: '500',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.skyBlue,
      height: 67,
      paddingTop: 11,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      marginRight: metrics.doubleBaseMargin,
      color: colors.snow,
      fontSize: fonts.size.h5,
      fontWeight: '500',
    },
    listContainer: {
      paddingHorizontal: metrics.baseMargin,
      paddingTop: metrics.baseMargin,
      marginBottom: 62
    },
    icon: {
      marginLeft: metrics.baseMargin,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    },
    labelRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: metrics.baseMargin,
      marginTop: metrics.doubleBaseMargin
    },
    switchLabel: {
      fontSize: fonts.size.regular,
      color: colors.skyBlue,
    },
    switchButton: {
    },
    itemContainer: {
      marginTop: 1,
      padding: metrics.baseMargin,
      backgroundColor: colors.snow,
      borderWidth: 1,
      borderColor: colors.steel,
      borderRadius: metrics.buttonRadius,
      minHeight: 60,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: metrics.baseMargin,
    },
    colContainer:{
      flex: 5,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    name: {
      fontSize: fonts.size.normal, 
      color: colors.blue,
      marginLeft: 5,
      //flex: 4
    },
    boldName: {
      fontSize: fonts.size.normal, 
      color: colors.blue,
      marginLeft: 5,
      fontWeight: 'bold',
      //flex: 4
    },
    checkboxImage: {
      tintColor: colors.lightGrey,
      height: 20,
      width: 20
    },  
    imageContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: metrics.baseMargin,
    },
    image: {
      width: metrics.images.large,
      height: metrics.images.medium,
      resizeMode: 'contain',
      alignItems: 'center',
      justifyContent: 'center',
    },
    members: {
      fontSize: fonts.size.normal,
      color: colors.blue,
      fontWeight: 'bold',
      marginLeft: 14,
    },
    ownerContainer: {
      flex: 1, 
      flexDirection: 'row',
      alignItems: 'center',
    },
    ownerName: [
     // fonts.style.small, 
    ],
    avatar: {
      width: 20,
      height: 20,
      marginRight: 5,
      borderRadius: 10
    },
    bigAvatar: {
      width: 40,
      height: 40,
      marginRight: 5,
      borderRadius: 20
    }
});
