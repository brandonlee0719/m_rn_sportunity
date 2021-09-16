import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
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
    select: {
        color: colors.charcoal,
        fontWeight: '500',
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: metrics.doubleBaseMargin,
        paddingHorizontal: metrics.baseMargin
    },
    labelText: {
        color: colors.darkBlue,
        fontWeight: '500',
        fontSize: 13, 
        flex: 4
    },
    switchButton: {
        flex: 1
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
    closeIcon: {
        marginLeft: metrics.baseMargin,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        paddingHorizontal: metrics.baseMargin,
        paddingVertical: metrics.baseMargin,
        marginVertical: 10
    },
    buttonContainer: {
        marginBottom: metrics.baseMargin,
        padding: metrics.baseMargin,
        backgroundColor: colors.snow,
        borderWidth: 1,
        borderColor: colors.steel,
        borderRadius: metrics.buttonRadius,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: metrics.baseMargin,
      },
    templateName: {
        marginLeft: metrics.baseMargin,
        flex: 1,
        color: colors.skyBlue,
        fontSize: fonts.size.medium,
        fontWeight: 'bold',
    },
    removeIcon: {
        width: 15,
        height: 15,
        tintColor: colors.lightGreen,
        alignSelf: 'flex-end',
    },
});


export default style;
