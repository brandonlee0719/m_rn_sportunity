import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 67,
    paddingTop: 11,
  },
  title: {
    //flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h5,
    fontWeight: '500',
  },
  icon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    padding: metrics.baseMargin
  },
  noCoOrganizerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: metrics.doubleBaseMargin,
    paddingHorizontal: metrics.baseMargin
  },
  noCoOrganizerImage: {
    marginVertical: metrics.doubleBaseMargin
  },
  noCoOrganizerText: {
    color: colors.charcoal,
    ...fonts.style.h5,
    textAlign: 'center'
  },
  row: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '100%',
    marginTop: metrics.baseMargin
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  labelContainer: {
    //flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: metrics.baseMargin
  },
  label: {
    color: colors.charcoal,
    ...fonts.style.h5
  },
  note: {
    color: colors.charcoal,
    ...fonts.style.regular,
    fontStyle: 'italic',
  },
  inputContainer: {
    marginBottom: metrics.doubleBaseMargin,
  },
  removeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteIcon: {
    fontSize: fonts.size.h5,
    color: colors.skyBlue,
  },
  image: {
    width: metrics.images.large,
    height: metrics.images.large,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.doubleBaseMargin
  },
  members: {
    fontSize: fonts.size.h6,
    color: colors.grey,
    fontWeight: 'bold',
    marginTop: 10
  },
});

export default style;
