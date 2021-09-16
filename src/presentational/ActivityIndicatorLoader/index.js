import PropTypes from 'prop-types';
import React from 'react';
import { colors } from 'sportunity/src/theme/';

import {
  ActivityIndicator,
  View
} from 'react-native';

import styles from './style';

// Needs to be updated
// isAnimating prop is used to show/hide indicator
const ActivityIndicatorLoader = ({ isAnimating }) => (
  <View style={styles.container}>
    <ActivityIndicator
      animating={isAnimating}
      color={colors.blue}
      style={styles.ActivityIndicator}
      size="large"
    />
  </View>
);

export default ActivityIndicatorLoader;

ActivityIndicatorLoader.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
};
