import React from 'react';
import { View, StyleSheet } from 'react-native';

import { metrics, colors, fonts } from 'sportunity/src/theme';

type ListBlockItem$Props = {
  style: StyleSheet,
  selected?: boolean,
  children: any
};

const ListBlockItem = (props) => (
  <View
    style={StyleSheet.flatten([
              styles.row,
              props.selected ? styles.selected : {},
              props.style])
           }>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 5,
    padding: metrics.baseMargin,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin
  },
  selected: {
    backgroundColor: colors.lightGreen,
  }
});

export default ListBlockItem;
