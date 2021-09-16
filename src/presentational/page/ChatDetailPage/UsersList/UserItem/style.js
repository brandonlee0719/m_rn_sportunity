import { StyleSheet } from 'react-native';

import { metrics, colors } from 'sportunity/src/theme';

export default StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: metrics.marginHorizontal,
    marginVertical: metrics.marginVertical,
  },
  thumbProfile: {
    borderColor: colors.darkBlue,
    borderWidth: metrics.borderWidth,
    width: metrics.images.medium,
    height: metrics.images.medium,
    borderRadius: metrics.images.mediumRadius,
    resizeMode: 'cover',
  },
  activeProfile:{
    borderColor: colors.bloodOrange,
  },
  nameProfile:{
    // flex: 1,
    // height: 20,
  },
  name: {
    backgroundColor: 'red',
  }
});
