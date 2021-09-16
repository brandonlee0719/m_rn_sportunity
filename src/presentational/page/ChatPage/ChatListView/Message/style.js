import { colors, metrics, fonts } from '../../../../../theme';

export const styles = {
  markerOverlayContainer: {
    flexDirection: 'row',
    flex: 1,
    left: 0,
    right: 0,
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.smallMargin,
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
  },
  imageContainer: {
    width: metrics.images.large,
    height: metrics.images.large,
    borderRadius: metrics.images.largeRadius,
    borderColor: colors.blue,
    borderWidth: metrics.borderWidth,
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
  messageContainer: {
    flex: 2, 
    flexDirection: 'row'
  },
  col: {
    flex: 5,
    flexDirection: 'column',
  },
  detailContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: colors.blue,
  },
  title: [fonts.style.normal, {
    color: colors.blue,
  }],
  subtitle: [fonts.style.small, {
    color: colors.blue,
    flex: 1,
  }],
  unreadSubtitle: [fonts.style.small, {
    color: colors.blue,
    flex: 1,
    fontWeight: 'bold',
  }],
  message: [fonts.style.small,{
    color: colors.charcoal,
    flex: 1,
  }],
  unreadMessage: [fonts.style.small,{
    color: colors.charcoal,
    flex: 1,
    fontWeight: 'bold',
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
