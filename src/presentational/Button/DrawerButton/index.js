import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, View } from 'react-native';
import Text from 'react-native-text';

import { colors } from 'sportunity/src/theme';
import styles from './styles';

const DrawerButton = ({ onPress, text, overlay, icon = null }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {icon && <Image resizeMode="contain" source={icon} style={styles.icon} />}
    <View style={styles.subContainer}>
      <Text style={styles.text}>{text}</Text>
      {overlay}
    </View>
  </TouchableOpacity>
);


DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  overlay: PropTypes.node,
};

export default DrawerButton;
