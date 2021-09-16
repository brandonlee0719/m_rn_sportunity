import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Text from 'react-native-text';

import { colors, fonts, metrics } from 'sportunity/src/theme';

const getTitleStyle = (type) => {
  switch (type) {
    case 'secondary':
      return styles.titleSecondary;
    case 'tertiary':
      return styles.titleTertiary;
    default:
      return styles.title;
  }
}

const renderIcon = (icon, iconContainerStyle, iconStyle) => {
  if (typeof icon === 'function') {
    return icon();
  }

  if (!!icon) {
    return (
      <View style={iconContainerStyle}>
        <Image source={icon} style={iconStyle} />
      </View>
    );
  }

  return null;
}

renderLeftIcon = (leftIcon) => renderIcon(leftIcon, styles.leftIconContainer, styles.leftIcon);

renderRightIcon = (rightIcon, style) => renderIcon(rightIcon, styles.rightIconContainer, style);

const FormListItem = ({
  title,
  subtitle,
  leftIcon,
  rightIcon,
  onPress,
  type,
  containerStyle,
  centerTitle,
  rightField,
}) => {
  const titleStyle = getTitleStyle(type);
  const rightIconStyle = [styles.rightIcon, type ? { tintColor: colors.charcoal } : {}];
  return (
    <TouchableOpacity style={StyleSheet.flatten([styles.container, containerStyle])} onPress={onPress}>
      {renderLeftIcon(leftIcon)}

      <View style={[styles.infoContainer, !rightIcon ? { flex: 1, alignItems: centerTitle ? 'center' : 'flex-start' } : {marginRight: 15, flex: 3}]}>
        {typeof title === 'function' 
        ? title({ titleStyle: styles.title }) 
        : typeof title === 'string' 
          ? <Text style={[titleStyle, {textAlign: centerTitle ? 'center' : 'left'}]}>{title}</Text> 
          : title
        }
        {typeof subtitle === 'function' 
        ? subtitle({ subtitleStyle: styles.subtitle }) 
        : typeof subtitle === 'string' 
          ? <Text style={styles.subtitle}>{subtitle}</Text> 
          : subtitle
        }
      </View>

      {!!rightIcon && (
        <View style={styles.rightIconContainer}>
          {renderRightIcon(rightIcon, rightIconStyle)}
        </View>
      )}
      {!rightIcon && !!rightField && 
        <View style={styles.rightIconContainer}>
          {rightField()}
        </View>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    elevation: 2,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
  },
  leftIconContainer: {
    width: metrics.rowHeitgh / 4,
    height: metrics.rowHeitgh / 4,
    justifyContent: 'center',
  },
  leftIcon: {
    width: '100%',
    height: '100%',
    borderRadius: metrics.rowHeitgh / 8,
  },
  infoContainer: {
    paddingHorizontal: metrics.baseMargin,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: fonts.size.regular,
    fontWeight: '600',
    color: colors.skyBlue,
    marginBottom: 6,
  },
  titleSecondary: {
    fontWeight: '600',
    color: colors.charcoal,
    marginBottom: 6,
  },
  titleTertiary: {
    color: colors.charcoal,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: fonts.size.small,
    color: colors.charcoal,
  },
  rightIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default FormListItem;
