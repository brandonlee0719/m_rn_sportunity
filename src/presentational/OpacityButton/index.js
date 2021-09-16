import PropTypes from 'prop-types';
import React from 'react';

import {
  TouchableOpacity,
} from 'react-native';

import Text from 'react-native-text';

// All styles are passed as props. (Check Settings (Login) Page)
const OpacityButton = ({ handlePress, buttonStyles, textStyles, text }) => (
  <TouchableOpacity
    onPress={handlePress}
    style={buttonStyles}
  >
    <Text style={textStyles}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default OpacityButton;

OpacityButton.propTypes = {
  buttonStyles: PropTypes.number.isRequired,
  textStyles: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
};
