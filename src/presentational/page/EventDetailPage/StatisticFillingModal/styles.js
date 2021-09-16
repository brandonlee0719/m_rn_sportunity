import {
    metrics,
    colors,
    fonts,
 } from 'sportunity/src/theme';

 export const style = {
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingVertical: metrics.doubleBaseMargin,
        paddingHorizontal: metrics.baseMargin
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: metrics.doubleBaseMargin
    },
    rowContainer: {
        flexDirection: 'column',
        marginBottom: metrics.baseMargin,
        padding: metrics.baseMargin,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 3,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
    },
    rowTitle: {
        color: colors.darkBlue,
        fontWeight: '500'
    },
    eventName: {
        color: colors.darkGrey,
        fontWeight: '500',
        fontSize: fonts.size.h6
    },
    eventDates: {
        color: colors.darkGrey,
        fontSize: fonts.size.small
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: metrics.baseMargin
    },
    inputLabel: {
        color: colors.darkBlue,
        fontWeight: '500'
    },
    picker: {
        color: colors.skyBlue,
        flex: 3,
    },
    text: {

    },
    inputContainer: {
        flex: 1,
        padding: 3,
        maxWidth: 80,
        marginHorizontal: metrics.baseMargin,
        marginLeft: 10,
        backgroundColor: 'transparent',
    },
    input: {
        color: colors.darkGrey,
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: colors.skyBlue,
        fontSize: fonts.size.medium,
        height: 40,
        maxHeight: 40,
    },
    participantContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: metrics.baseMargin,
        padding: metrics.baseMargin,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: 3,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
    },
    participantPseudo: {
        fontWeight: '500',
        color: colors.skyBlue
    },
    photoContainer: {
    },
    thumbProfile: {
        width: metrics.images.medium,
        height: metrics.images.medium,
        borderRadius: metrics.images.mediumRadius,
    },
    icon: {
        resizeMode: 'contain',
        width: metrics.icons.small,
        height: metrics.icons.small,
        justifyContent: 'flex-end',
        tintColor: colors.skyBlue,
        marginTop: 2,
    },
    participantModalEventName: {
        color: colors.darkGrey,
        fontSize: fonts.size.normal,
        marginBottom: metrics.smallMargin
    },
    participantModalEventDates: {
        color: colors.darkGrey,
        fontSize: fonts.size.normal,
        marginBottom: metrics.smallMargin
    },
    participantModalPseudo: {
        marginBottom: metrics.smallMargin,
        fontSize: fonts.size.h5,
        color: colors.darkBlue
    },
    participantModalThumbProfile: {
        width: metrics.images.large,
        height: metrics.images.large,
        borderRadius: metrics.images.largeRadius,
        marginBottom: metrics.smallMargin,
    },
    participantModalInputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statName: {
        fontSize: fonts.size.h5,
        fontWeight: '500',
        color: colors.darkBlue
    },
    statButtonContainer: {
        width: 40,
        alignItems: 'center'
    },
    statButton: {
        color: colors.skyBlue,
        fontSize: fonts.size.h3,
        fontWeight: '500',
    },
    statValue: {
        fontSize: fonts.size.h3,
        fontWeight: '500',
        color: colors.darkBlue
    }

 }