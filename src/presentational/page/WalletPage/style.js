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
        justifyContent: 'center',
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
        paddingVertical: metrics.baseMargin
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: metrics.baseMargin,
    },
    rowText: {
        color: colors.darkBlue,
        fontWeight: '500'
    },
    text: {
        color: colors.black,
        flexGrow: 1,
        width: 0,
        flex: 1,
        textAlign: 'right'
    },
    buttonText: {
        color: colors.skyBlue,
        fontWeight: '500'
    },
    noteText: {
        color: colors.red,
        textAlign: 'justify'
    },
    explainationText: {
        fontStyle: 'italic',
        textAlign: 'justify'
    }
});

export default style;
