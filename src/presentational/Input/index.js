import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

import { fonts, images, colors, metrics } from 'sportunity/src/theme';

class Input extends Component {

  render() {
    const {props} = this; 
    const containerStyle = props.error
            ? [styles.error, props.errorMessageDisplayed ? {marginBottom: metrics.smallMargin,} : {marginBottom: metrics.doubleBaseMargin,}]
            : typeof props.editable !== 'undefined' && !props.editable
              ? styles.disabled
              : styles.inputContainer;

    return (
      <View style={containerStyle}>
        <TextInput
          style={typeof props.editable !== 'undefined' && !props.editable ? styles.disabledInput : styles.input}
          autoCorrect={false}
          numberOfLines={props.numberOfLines}
          placeholderTextColor={typeof props.editable !== 'undefined' && !props.editable ? colors.lightGrey : colors.skyBlue}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          maxLength={props.maxLength}
          autoCapitalize="none"
          secureText={props.secureText}
          onChangeText={props.updateText}
          underlineColorAndroid="transparent"
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          onFocus={(event) => props.onFocus && props.onFocus(event)}
          onBlur={(event) => props.onBlur && props.onBlur(event)}
          value={props.value}
          returnKeyType={props.returnKeyType}
          onSubmitEditing={event => props.onSubmitEditing && props.onSubmitEditing(event)}
          ref={props.inputRef}
          editable={typeof props.editable !== 'undefined' ? props.editable : true}
        />
        { !props.noicon &&
          <Image
            style={typeof props.editable !== 'undefined' && !props.editable ? styles.disabledIcon : props.inputIconStyles}
            source={images.pen}
          />
        }
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    maxHeight: 40,
    minHeight: 40,
    backgroundColor: 'transparent',
    marginBottom: metrics.doubleBaseMargin,
    borderBottomWidth: 2,
    borderBottomColor: colors.skyBlue,
    marginHorizontal: 40,
  },
  error: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    maxHeight: 40,
    minHeight: 40,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: colors.error,
    marginHorizontal: 40,
  },
  input: {
    flex: 1,
    fontSize: fonts.size.medium,
    height: 42,
    maxHeight: 42,
  },
  icon: {
    position: 'absolute',
    right: metrics.baseMargin,
    height: 15,
    width: 15,
    bottom: 12,
  },
  disabled: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    maxHeight: 40,
    minHeight: 40,
    backgroundColor: 'transparent',
    marginBottom: metrics.doubleBaseMargin,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    marginHorizontal: 40,
  },
  disabledInput: {
    flex: 1,
    fontSize: fonts.size.medium,
    height: 42,
    maxHeight: 42,
    //color: colors.lightGrey
  },
  disabledIcon: {
    position: 'absolute',
    right: metrics.baseMargin,
    height: 15,
    width: 15,
    bottom: 12,
    tintColor: colors.lightGrey
  },
});


export { styles as inputStyles };

export default Input;

Input.propTypes = {
  updateText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  numberOfLines: PropTypes.number,
  defaultValue: PropTypes.string || '',
  secureText: PropTypes.bool,
  inputIconStyles: PropTypes.number,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  noicon: PropTypes.bool,
};
