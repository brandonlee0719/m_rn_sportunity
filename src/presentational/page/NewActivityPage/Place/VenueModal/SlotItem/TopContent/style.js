import { colors, fonts } from 'sportunity/src/theme';

export const styles = {
  container: {
    flex: 4,
    flexDirection: 'column',
    padding: 10,
    backgroundColor: colors.white,
  },
  status: [{ color: colors.green }],
  datetime: [fonts.style.small],
  datetimeContainer: {
  //  flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 5,
  },
  row: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  row2:{
    flex: 2,
  },
  imageContainer: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    flex: 8,
    marginLeft: 15,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  priceContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.blue,
  },
  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  title: [fonts.style.description, {
    color: colors.charcoal,
    //flex: 3,
  }],
  price: [fonts.style.tiny, {
    color: colors.blue,
  }],
  location: [fonts.style.description, {
    color: colors.charcoal,
    //flex: 1,
  }],
  iconLocation: {
    width: 10,
    height: 20,
    resizeMode: 'contain',
    tintColor: colors.blue,
    marginRight: 5,
  },
  ellipseContainer: {
    position: 'absolute',
    right: 0,
    width: 8,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  ellipseBar: {
    width: 6,
    height: 18,
    resizeMode: 'contain',
  },
};
