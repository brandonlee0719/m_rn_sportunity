import { colors, metrics, fonts } from '../../../../../src/theme';

export const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: metrics.baseMargin,
    backgroundColor: colors.white,
    paddingLeft: metrics.baseMargin,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 3,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    paddingRight: 4
  },
  rowBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.darkBlue,
    borderWidth: 3,
    borderRadius: 100,
    marginRight: metrics.baseMargin,
  },
  detailContainer: {
    flex: 1,
    // marginLeft: 15,
    flexDirection: 'column',
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  smallImageContainer: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 64,
    marginRight: metrics.baseMargin,
  },
  smallThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    resizeMode: 'cover',
  },
  blackText: {
    color: colors.darkGrey,
  },
  title: [fonts.style.normal, {
    color: colors.charcoal,
    flex: 1,
  }],
  smallTitle: [fonts.style.description, {
    color: colors.charcoal,
    flex: 1,
  }],
  role: [fonts.style.normal, {
    color: colors.blue,
    flex: 1,
  }],
  level: [fonts.style.medium, {
    color: colors.blue,
    flex: 1,
    marginBottom: metrics.baseMargin/2,
  }],
  location: [fonts.style.small, {
    color: colors.charcoal,
    marginRight: metrics.baseMargin,
  }],
  iconDarkBlue:{
    tintColor: colors.darkBlue,
  },
  iconBlue:{
    tintColor: colors.blue,
  },
  iconGreen:{
    tintColor: colors.lightGreen,
  },
  iconOrange:{
    tintColor: colors.bloodOrange,
  },
  iconLightGrey:{
    tintColor: colors.lightGrey,
  },
  iconLocation: {
    width: fonts.size.medium,
    height:  fonts.size.medium,
    resizeMode: 'contain',
    marginRight: metrics.baseMargin,
  },
  w_seperator: {
    width: 30,
  },
  subtitleText: {
    marginLeft: metrics.baseMargin / 2,
    color: colors.charcoal
  },
  opponentHeading: {
    fontWeight: '500',
    fontSize: fonts.size.regular,
    marginBottom: 5,
  }
};
