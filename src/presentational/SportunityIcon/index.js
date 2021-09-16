import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

import styles from './style.js';


const SportunityIcon = ({ iconName, iconStyle }) => (
  <Image
    source={iconName}
    style={[styles.image, iconStyle || {}]}
  />
);

SportunityIcon.propTypes = {
  iconName: PropTypes.number.isRequired,
  iconStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default SportunityIcon;
