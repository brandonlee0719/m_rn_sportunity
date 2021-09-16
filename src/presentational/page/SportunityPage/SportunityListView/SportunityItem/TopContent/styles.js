/**
 * Created by BaeBae on 8/11/16.
 */
import { colors, fonts, metrics } from '../../../../../../../src/theme';

// TODO: use measure from Theme.
export const styles = {
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    height: 125,
    maxHeight: 125,
  },
  col1: { flex: 1, alignItems: 'center' },
  col2: { flex: 2, marginLeft: 5 },
  col3: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  status: {
    color: colors.bloodOrange
  },
  day: [fonts.style.small],
  date: [fonts.style.normal],
  time: [fonts.style.small],
  row: {
    flexDirection: 'row',
    marginTop: 8
  },
  imageContainer: {
    height: 70,
    overflow: 'hidden',
  },
  imageWrapper: {
    flex: 1,
    height: '90%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
  },
  scoreContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5
  },
  scoreText: [
    fonts.style.small,
    {
      color: colors.blue
    }
  ],
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    tintColor: colors.blue
  },
  title: [
    fonts.style.normal,
    {
      color: colors.skyBlue,
      fontWeight: 'bold',
      marginTop: -2
    }
  ],
  level: [
    fonts.style.small,
    {
      color: colors.blue,
      marginRight: 2
    }
  ],
  to: [
    fonts.style.small,
    {
      color: colors.darkGrey,
      marginRight: 2
    }
  ],
  price: {
    color: colors.blue
  },
  book: [
    fonts.style.small,
    {
      color: colors.white
    }
  ],
  cancel: [
    fonts.style.small,
    {
      color: colors.white
    }
  ],
  locationContainer: {
    flex: 4,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  location: [
    fonts.style.small,
    {
      color: colors.charcoal,
      flex: 1
    }
  ],
  iconLocation: {
    width: 10,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.blue,
    marginRight: 5
  },
  ellipseContainer: {
    position: 'absolute',
    right: 0,
    width: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  },
  ellipseBar: {
    width: 6,
    height: 18,
    resizeMode: 'contain'
  }
};
