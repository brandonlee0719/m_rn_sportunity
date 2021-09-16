import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.skyBlue,
        height: 50,
        paddingTop: 11,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        marginRight: metrics.doubleBaseMargin,
        color: colors.snow,
        fontSize: fonts.size.h6,
    },
    icon: {
        marginLeft: metrics.baseMargin,
        height: metrics.images.medium,
        width: metrics.images.medium,
        justifyContent: 'center',
        alignItems: 'center'
    },
});