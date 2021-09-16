import PropTypes from 'prop-types';
import React from 'react';

import {
  View,
  TextInput,
  Image,
} from 'react-native';

import { images } from '../../theme';
import textAreaStyles from './style';

const TextAreaInput = (props) => (
  <View style={textAreaStyles.textAreaContainer}>
    <TextInput
      style={props.textAreaStyles}
      multiline
      autoCorrect={false}
      numberOfLines={props.numberOfLines}
      maxLength={10000}
      placeholderTextColor="#2a7267"
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      autoCapitalize="none"
      secureText={props.secureText}
      onChangeText={props.updateText}
    />
    <Image
      style={props.textAreaIconStyles}
      source={images.pen}
    />
  </View>
);

export default TextAreaInput;

TextAreaInput.propTypes = {
  updateText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  textAreaStyles: PropTypes.any.isRequired,
  numberOfLines: PropTypes.number,
  defaultValue: PropTypes.string || '',
  secureText: PropTypes.bool,
  textAreaIconStyles: PropTypes.any.isRequired,
};
