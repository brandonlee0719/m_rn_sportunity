import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pure } from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';

import styles from './style';

const FiltersListItem = pure((props) => {
  const { caption, captionStyle, image, imageStyle, itemStyle, onPress } = props;

  let leftImage;
  if (image) {
    leftImage = (<Image style={[styles.itemImage, imageStyle]} source={image} />);
  }

  let item = (
    <View style={[styles.itemContainer, itemStyle]}>
      <Text style={[styles.itemCaption, captionStyle]} >{caption}</Text>
      {leftImage}
    </View>
  );

  if (onPress) {
    item = (
      <TouchableOpacity onPress={onPress} >
        {item}
      </TouchableOpacity>
    );
  }

  return item;
});

FiltersListItem.propTypes = {
  /*itemStyle: PropTypes.number,
  caption: PropTypes.string.isRequired,
  captionStyle: PropTypes.number,
  image: PropTypes.number,
  imageStyle: PropTypes.number,*/
};

export default FiltersListItem;
