import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import {
  underlayColor,
  selectedStyle,
  nonSelectedStyle,
  badgeStyle
} from './style';
import {
  colors,
} from '../../../../../../src/theme';

const maxBadgeNumberStr = '99+'

const SportunityFilterKindTabItem = ({ description, selected, action, iconUrl, customStyle, badgeNumber = 0 }) => {
  const style = selected ? selectedStyle : nonSelectedStyle;
  const imageStyle = customStyle || style.tabIcon;
  imageStyle.tintColor = selected ? colors.bloodOrange : colors.white
  return (
    <TouchableOpacity
      onPress={() => action()}
      underlayColor='transparent'
      style={style.container}
    >
        <Image source={iconUrl} style={imageStyle}/>
        {badgeNumber > 0 || badgeNumber==maxBadgeNumberStr
        ?
          <View style={badgeStyle.badgeContainer}>
            <Text style={badgeStyle.badge}>{badgeNumber}</Text>
          </View>
        :
        null
      }
        <Text style={style.text}>
          {description}
        </Text>
    </TouchableOpacity>
  );
};

SportunityFilterKindTabItem.propTypes = {
  /**
   * Content to be displayed within the tab
   */
  description: PropTypes.string.isRequired,
  /**
   * Whether this tab is currently selected
   */
  selected: PropTypes.bool.isRequired,
  /**
   * Function called when pressed
   */
  action: PropTypes.func.isRequired,
};

export default SportunityFilterKindTabItem;
