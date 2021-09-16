import { colors, metrics, fonts } from '../../../../../src/theme';

export const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: metrics.baseMargin,
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
  imageContainer: {
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },
  detailContainer: {
    flex: 1,
    // marginLeft: 15,
    flexDirection: 'column',
  },
  thumb: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
  title: [fonts.style.normal, {
    color: colors.charcoal,
    flex: 1,
  }],
  modalContainer: {
    padding: metrics.baseMargin,
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
    //alignItems: 'center'
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  },
  labelText: {
    fontSize: fonts.size.regular
  },
  fieldContainer: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fieldImageContainer: {
    marginBottom: metrics.baseMargin,
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    zIndex: 10, 
    height: 30,
    width: 30, 
    borderRadius: 15, 
    position: 'absolute',
  }
};
