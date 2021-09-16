import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import { Circle } from 'react-native-progress';

import styles from './style';
import { colors } from '../../theme';

const SpinnerOverlay = ({ children, subtitle }) => (
  <View style={{ height: 150 }}>
    <View style={styles.loaderContainer}>
      <Circle size={30} color={colors.skyBlue} indeterminate={true} borderWidth={3} borderColor={colors.skyBlue} />
      { !!subtitle && <Text style={styles.subtitle}>{subtitle}</Text> }
    </View>
    <View style={styles.overlayContainer}>
      {children}
    </View>
  </View>
);

SpinnerOverlay.propTypes = {
  subtitle: PropTypes.string,
};

SpinnerOverlay.defaultProps = {
  subtitle: '',
};

export default SpinnerOverlay;
