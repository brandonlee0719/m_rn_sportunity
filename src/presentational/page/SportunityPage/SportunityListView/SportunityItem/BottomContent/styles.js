/**
 * Created by BaeBae on 8/11/16.
 */
import { colors, fonts, metrics } from '../../../../../../../src/theme';

export const styles = {
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    alignItems: 'flex-end',
    height: 25,
    maxheight: 25,
    paddingBottom: 6,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right_column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  user_icon: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  avatar_icon: {
    width: 16,
    height: 16,
    marginHorizontal: 5,
    borderRadius: 8,
    borderColor: colors.blue,
    borderWidth: 1,
    resizeMode: 'cover',
  },
  right_icon: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    resizeMode: 'contain',
    tintColor: colors.blue,
  },
  info: [fonts.style.small],
  count: [fonts.style.small, { color: colors.charcoal }],
  against: [fonts.style.small, { color: colors.blue, marginLeft: 5 }],
};
