import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import Text from 'react-native-text';
import { StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

const Button = ({onPress, children, disabled, error, redButton, style: userStyle={}}) => {
  const text = <Text style={style.text}>{children}</Text>;

  if(disabled || error) {
    const modifier = error ? style.error : style.disabled;
    return (
      <View style={[style.button, modifier]}>
        {text}
      </View>
    )
  } else
    return (
      <TouchableOpacity style={[style.button, redButton ? style.redButton :null, userStyle]} onPress={onPress}>
        {text}
      </TouchableOpacity>
    )
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool
};

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.skyBlue,
    padding: metrics.baseMargin,
    marginTop: metrics.doubleBaseMargin,
    marginBottom: metrics.doubleBaseMargin,
    marginHorizontal: metrics.doubleBaseMargin,
    borderRadius: 50,
    width: '88%'
  },
  disabled: {
    backgroundColor: colors.darkGrey,
  },
  error: {
    backgroundColor: colors.error,
  },
  redButton: {
    backgroundColor: colors.red,
  },
  text: {
    fontSize: fonts.size.regular,
    color: colors.snow,
    textAlign: 'center',
  },
});

export default Button;
