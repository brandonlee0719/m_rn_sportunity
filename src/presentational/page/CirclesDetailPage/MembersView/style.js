import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from '../../../../../src/theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.smallMargin,
    marginTop: metrics.doubleBaseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    paddingTop: metrics.smallMargin,
    paddingBottom: metrics.smallMargin,

  },
  headerText: {
    marginLeft: metrics.baseMargin,
    flex: 1,
    color: colors.darkBlue,
    fontSize: fonts.size.medium,
  },
  headerIcon: {
    alignSelf: 'flex-end',
    marginRight: metrics.baseMargin,
    tintColor: colors.blue,
    height: fonts.size.medium,
  },
  noMemberContainer: {
    marginTop: 1,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    minHeight: 50,
  },
  noMemberTitle: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    marginBottom: 10
  },
  noMemberText: {
    color: colors.charcoal,
    textAlign: 'justify',
    lineHeight: 18
  },
  blueText: {
    color: colors.skyBlue
  },
  heading: {
    fontSize: fonts.size.regular,
    padding: metrics.baseMargin,
    fontWeight: '500',
    color: colors.green,
  },
});
