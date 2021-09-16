import { colors, metrics, fonts } from '../../../../../theme';

export const styles = {
  markerOverlayContainer: {
    flexDirection: 'row',
    flex: 1,
    left: 0,
    right: 0,
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
  },
  container:{
    flex: 1,
  },
  content: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
    borderWidth: metrics.borderWidthRow,
    borderRadius: metrics.borderRowRadius,
    borderColor: colors.lightGrey,
    padding: metrics.baseMargin,
    backgroundColor: colors.white,
    shadowColor: colors.darkGrey,
    shadowOpacity: 0.6,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
    },
  },
  imageContainer: {
    width: metrics.images.large,
    height: metrics.images.large,
    borderRadius: metrics.images.large/2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: metrics.baseMargin,
  },
  datetimeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: metrics.smallMargin,
  },
  datetime: [fonts.style.tiny],
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  col: {
    flex: 5,
    flexDirection: 'column',
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  icon: {
    width: metrics.images.large,
    height: metrics.images.large,
    borderRadius: metrics.images.large/2,
    resizeMode: 'contain',
  },
  title: [fonts.style.normal, {
    color: colors.blue,
  }],
  subtitle: [fonts.style.small, {
    color: colors.blue,
    flex: 1,
  }],
  message: [fonts.style.small,{
    color: colors.charcoal,
    flex: 1,
  }],
  ellipseContainer: {
    justifyContent: 'center',
  },
  ellipseBar: {
    width: 6,
    height: 18,
    resizeMode: 'contain',
  },
};
