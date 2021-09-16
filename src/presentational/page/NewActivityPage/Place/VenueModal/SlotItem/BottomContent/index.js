import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image } from 'react-native';
import Text from 'react-native-text';

import icons from 'sportunity/src/theme/images';
import { colors } from 'sportunity/src/theme';
import { styles } from './style';

class BottomContent extends PureComponent {

  constructor(props){
    super(props);
  }

  render(){
    const { slot } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.right_column}>
          <Image style={[styles.user_icon,{ tintColor: colors.blue }]} source={icons.red_user} />
          <Text style={styles.count}>
            {slot.venue.owner.pseudo}
          </Text>
        </View>
      </View>
    )
  }
}

export default BottomContent