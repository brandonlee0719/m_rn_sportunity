import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
  overlayContainer: {
    height: 150,
    backgroundColor: colors.black,
    opacity: 0.2,
  },
  loaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.skyBlue,
    marginTop: 20
  },
});

export default styles;
