import { StyleSheet } from 'react-native';
import { colors, metrics, fonts, images } from 'sportunity/src/theme';
import Input, {inputStyles} from 'sportunity/src/presentational/Input';

const styles = StyleSheet.create({
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
    searchIcon: {
      tintColor: colors.lightGreen,
    },
    headerAndroid: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.skyBlue,
      height: 50,
      paddingTop: 0,
    },
    headerIOS: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.skyBlue,
      height: 64,
      paddingTop: 14,
    },
    title: {
      flex: 1,
      textAlign: 'center',
      marginRight: metrics.doubleBaseMargin,
      color: colors.snow,
      fontSize: fonts.size.h6,
    },
    picker: StyleSheet.flatten([inputStyles.inputContainer, {
      color: colors.skyBlue
    }]),
    icon: {
      marginLeft: metrics.baseMargin,
      height: metrics.images.medium,
      width: metrics.images.medium,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loaderContainer: {
        marginTop: 50
    },

    listContainer: {
        flex: 1,
        paddingHorizontal: metrics.baseMargin,
        paddingTop: metrics.baseMargin,
    },
    listContainerContent: {
        paddingBottom: 10
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

export default styles; 