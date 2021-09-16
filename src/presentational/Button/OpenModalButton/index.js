import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Image } from 'react-native';
import Text from 'react-native-text';
import { StyleSheet } from 'react-native';

import icons from 'sportunity/src/theme/images';
import { metrics, colors } from 'sportunity/src/theme';

export default TouchableButton = ({onPress, disabled, label, select}) => (
    <TouchableOpacity
        style={disabled ? style.disabledContainer : style.container}
        onPress={onPress}
        disabled={disabled}
    >
        <View style={style.subContainer}>
            <Text style={disabled ? style.disabledText : style.text}>
                {label}
            </Text>
            {select && 
              <Text style={disabled ? style.disabledSelect : style.select}>
                {select}
              </Text>
            }
        </View>
        <Image
            style={disabled ? style.disabledIcon : style.icon}
            source={icons.right_arrow_blue}
        />
    </TouchableOpacity>
)


const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
    fontSize: 16
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
    marginTop: 3
  },
  disabledContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.silver,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  disabledText: {
    color: colors.darkGrey,
    marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  disabledSelect: {
    color: colors.grey,
    fontWeight: '500',
    marginTop: metrics.baseMargin,
  },
  disabledIcon: {
    tintColor: colors.grey,
  }
});