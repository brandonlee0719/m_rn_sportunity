import React from 'react';
import { View, StyleSheet } from 'react-native';

import { colors, metrics } from 'sportunity/src/theme';

const Card = ({
  children,
  height = 'auto',
  width = '100%',
  margin = 0,
  padding = 0,
  style = {},
  ...props,
}) => {
  const propStyles = {
    height,
    width,
    margin,
    padding,
    ...style,
  }
  return (
    <View {...props} style={StyleSheet.flatten([styles.container, propStyles])}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.snow,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
  }
});

export default Card;
