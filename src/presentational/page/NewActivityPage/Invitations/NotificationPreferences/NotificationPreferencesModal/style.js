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
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: '',
        padding: metrics.baseMargin,
    },
    label: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    picker: {
        color: colors.skyBlue,
        flex: 1,
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
        marginLeft: metrics.doubleBaseMargin,
    },
});

export default style;
