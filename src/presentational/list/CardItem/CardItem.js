import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';

const CardItem = ({ title, subtitle, onPress, disabled }) =>
<TouchableOpacity
  style={styles.container}
  onPress={onPress}
>
  <View style={styles.subContainer}>
    <Text style={disabled ? styles.disabledText : styles.text}>
      {title}
    </Text>
    {subtitle && !disabled && <Text style={styles.subtitle}>
      {subtitle}
    </Text>}
  </View>
  <Image
    style={disabled ? styles.disabledIcon : styles.icon}
    source={icons.right_arrow_blue}
  />
</TouchableOpacity>

export default CardItem

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
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
  disabledText: {
    color: colors.darkGrey,
    fontWeight: '500'
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  subtitle: {
    color: colors.skyBlue,
    marginTop: metrics.baseMargin,
    fontWeight: '500',
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
  disabledIcon: {
    marginLeft: metrics.baseMargin,
    tintColor: colors.grey,
  }
})
