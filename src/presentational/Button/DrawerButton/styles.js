import { metrics, colors, fonts } from 'sportunity/src/theme';

export default {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
    marginVertical: metrics.baseMargin,
    width: '100%'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 6,
    marginRight: 4
  },
  text: {
    ...fonts.style.h6,
    color: colors.charcoal,
    marginLeft: metrics.baseMargin,
    marginRight: 5,
    flex: 9
  },
  icon: {
    flex: 1, 
    height: metrics.icons.small,
    width: metrics.icons.small,
    tintColor: colors.charcoal
  }
};
