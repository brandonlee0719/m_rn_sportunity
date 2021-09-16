import PropTypes from 'prop-types';
import React from 'react';

import {
  View,
  TouchableOpacity,
} from 'react-native';
import Text from 'react-native-text';

// All styles are passed as props. (Check Settings (Login) Page)
const TouchableText = ({ handlePress, textStyles, text }) => (
  <View>
    <TouchableOpacity style={{paddingVertical: 5, width: '50%', alignSelf: 'flex-end', marginBottom: 5}} onPress={handlePress}>
      <Text style={textStyles}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);

export default TouchableText;

TouchableText.propTypes = {
  text: PropTypes.string.isRequired,
  textStyles: PropTypes.number.isRequired,
  handlePress: PropTypes.func.isRequired,
};
