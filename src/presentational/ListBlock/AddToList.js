import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from 'react-native-text';

import { metrics, colors, fonts } from 'sportunity/src/theme';

const AddToList = (props) => (
  <TouchableOpacity
    style={styles.addContainer}
    onPress={props.onPress}
  >
    <Text style={styles.addText}>
      {props.children || 'ADD/UPDATE'}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  addContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    padding: 5,
    backgroundColor: colors.snow,
    borderWidth: 1,
    borderColor: colors.steel,
    borderRadius: metrics.buttonRadius,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  addText: {
    marginLeft: metrics.baseMargin,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
  },
});

export default AddToList
