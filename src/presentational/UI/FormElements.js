import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Text from 'react-native-text';

import { colors } from 'sportunity/src/theme';
import styles from './style';

const InputField = React.forwardRef(({
  value,
  placeholder,
  placeholderColor = colors.darkPastelBlue,
  containerStyles = {},
  onChangeText = () => {},
  ...props,
}, ref) => (
  <View style={containerStyles}>
    <TextInput
      autoCorrect={false}
      placeholderTextColor={placeholderColor}
      placeholder={placeholder}
      autoCapitalize="none"
      onChangeText={onChangeText}
      underlineColorAndroid={colors.silver}
      value={value}
      returnKeyType={'next'}
      {...props}
      ref={ref}
    />
  </View>
));


export const Input = React.forwardRef((props, ref) => (
  <InputField {...props} style={StyleSheet.flatten([styles.input, props.style])} ref={ref} />
));


export const TextArea = React.forwardRef((props, ref) => (
  <InputField {...props} style={StyleSheet.flatten([styles.textArea, props.style])} ref={ref} />
));

export const Label = ({ children }) => (
  <Text style={styles.labelText}>
    {children}
  </Text>
)

export default InputField;
