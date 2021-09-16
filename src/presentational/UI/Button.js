import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import Text from 'react-native-text';
import { Circle } from 'react-native-progress';

import { colors, fonts, metrics } from '../../theme';

const Button = ({
  onPress,
  text,
  type,
  width = 70,
  height = 30,
  loading,
  fontSize,
  rounded,
  minWidth = 70,
  icon
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.flatten([type === 'secondary' ? styles.buttonSecondary : styles.button, { width, height, minWidth }, rounded ? styles.rounded : {}, icon ? { paddingHorizontal: 20 } : {}])}
    >
      {loading
        ? <Circle size={20} color={colors.snow} indeterminate={true} borderWidth={3} borderColor={colors.snow} />
        : <Text style={[type === 'secondary' ? styles.textSecondary : styles.text, fontSize ? { fontSize }: {}]}>{text}</Text>
      }
      { icon &&
        <View style={{ position: 'absolute', right: 8 }}>
          <Image source={icon} style={[{ width: 10, height: 10 }, { tintColor: type === 'secondary' ? colors.skyBlue : colors.snow }]} />
        </View>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.skyBlue,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin
  },
  buttonSecondary: {
    backgroundColor: colors.snow,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: colors.skyBlue,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.snow,
  },
  textSecondary: {
    color: colors.skyBlue,
  },
  rounded: {
    borderRadius: 30,
  },
});

export default Button;
