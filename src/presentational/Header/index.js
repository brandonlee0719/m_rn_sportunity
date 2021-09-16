import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { colors, metrics, fonts } from 'sportunity/src/theme';


export const Header = ({ onPressFunc, imgSrc, text }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={onPressFunc}
        style={styles.closeIcon}
      >
        <Image
          source={imgSrc}
        />
      </TouchableOpacity>
      <Text style={styles.title}>
        { text }
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 67,
    paddingTop: 11,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h5,
    fontWeight: '500',
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
  closeIcon: {
    marginLeft: metrics.baseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
});