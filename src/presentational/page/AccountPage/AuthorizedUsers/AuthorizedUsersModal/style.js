import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
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
    icon: {
        marginLeft: metrics.baseMargin,
    },
    closeIcon: {
        marginLeft: metrics.baseMargin,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flexDirection: 'column',
        padding: metrics.baseMargin,
    },
    container: {
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
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: metrics.borderRadius,
        padding: metrics.baseMargin,
        marginTop: metrics.baseMargin,
        backgroundColor: colors.snow,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
    },
    rowLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    photoContainer: {
        shadowRadius: 20,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        marginRight: metrics.baseMargin
    },
    thumbProfile: {
        width: metrics.images.medium,
        height: metrics.images.medium,
        borderRadius: metrics.images.mediumRadius,
    },
    rowText: {
        color: colors.skyBlue,
        fontWeight: '500'
    },
    deleteItem: {
        marginLeft: metrics.baseMargin,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightButton: {
        
    }
});

export default style;
