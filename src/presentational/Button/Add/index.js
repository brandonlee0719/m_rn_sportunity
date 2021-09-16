import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import style from '../style';

const Add = ({ Action }) => (
  <TouchableHighlight
    onPress={Action}
    style={[style.style.circular, style.style.addition]}
    underlayColor={style.underlayColor}
  >
    <Text style={style.style.charSymbol}> + </Text>
  </TouchableHighlight>
);

export default Add;
