import { colors, fonts } from 'sportunity/src/theme';

export const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: colors.white,
    borderTopColor: '#ddd',
    borderTopWidth: 2,
    justifyContent: 'flex-end'
  },
  column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right_column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  count: [fonts.style.small, { color: colors.charcoal }],
};
