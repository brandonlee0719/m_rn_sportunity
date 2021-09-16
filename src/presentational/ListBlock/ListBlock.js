// @flow
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import { images } from 'sportunity/src/theme';

type ListBlock$Props = {
  title: string,
  header?: boolean,
  children: any
};

const ListBlock = (props: ListBlock$Props) => {
  const {title, header=!!title, onPress, isClosed} = props;
  return (
    <View style={styles.mainContainer}>
      { header &&
        <TouchableOpacity style={styles.headerContainer} onPress={onPress}>
          <Text style={styles.headerText}>
            {title}
          </Text>
          {typeof onPress !== 'undefined' &&
            <Image
              style={isClosed ? styles.headerIcon : {...styles.headerIcon, transform: [{ rotate: '90deg'}]}}
              source={images.right_arrow_blue}
            />
          }
        </TouchableOpacity>
      }
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 5,
  },
  headerContainer: {
    flexDirection: 'row',
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
  headerText: {
    marginLeft: metrics.baseMargin,
    flex: 1,
    color: colors.skyBlue,
    fontSize: fonts.size.medium,
    fontWeight: 'bold'
  },
  headerIcon: {
    alignSelf: 'flex-end',
    marginRight: 6,
    marginTop: 1,
    tintColor: colors.blue,
  }
});

export default ListBlock
