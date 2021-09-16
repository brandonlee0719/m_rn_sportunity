
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import styles from './style';

import { withNavigation } from 'react-navigation';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

const SportunityButton = ({ stacked, buttonStyle, ...otherProps }) => (
  <TouchableOpacity
    {...otherProps}
    style={[
      stacked ? styles.column : styles.row,
      styles.container,
      buttonStyle,
    ]}
  />
);

SportunityButton.propTypes = {
  stacked: PropTypes.bool,
  buttonStyle: PropTypes.any,
  ...TouchableOpacity.propTypes,
};

export default SportunityButton;
