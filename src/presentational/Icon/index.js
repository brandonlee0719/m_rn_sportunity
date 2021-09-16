import PropTypes from 'prop-types';
import React from 'react';

import {
  Image,
} from 'react-native';

const PhotoIcon = ({ iconStyle, iconSource }) => (
  <Image
    resizeMode="contain"
    style={iconStyle}
    source={iconSource}
  />
);

export default PhotoIcon;

PhotoIcon.propTypes = {
  iconStyle: PropTypes.any.isRequired,
  iconSource: PropTypes.number.isRequired,
};
