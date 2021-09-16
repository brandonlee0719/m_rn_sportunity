/**
 * Created by BaeBae on 8/11/16.
 */
import { metrics } from '../../../../../src/theme';

export default {
  container: {
    flex: 1,
  },
  map: {
    height: metrics.screenWidth / 2, // same height as width.
    // flex: 1
  },
  mapFrame: {
    flex: 1,
  },
  gpsOverlayContainer: {
    position: 'absolute',
    bottom: metrics.doubleBaseMargin,
    right: 0,
    width: 80,
    height: 80,
  },
  iconGPS: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
};
