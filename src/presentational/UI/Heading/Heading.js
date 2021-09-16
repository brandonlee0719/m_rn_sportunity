import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from 'react-native-text';

import { colors, fonts, metrics } from 'sportunity/src/theme';

const Heading = ({
  text,
  containerStyle,
}) => (
  <View style={StyleSheet.flatten([styles.container, containerStyle])}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: metrics.doubleBaseMargin,
    marginLeft: metrics.baseMargin,
  },
  text: {
    fontSize: fonts.size.h6,
    fontWeight: '600',
    color: colors.charcoal,
  }
});

export default Heading;
