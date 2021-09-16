import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View } from 'react-native';

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import TopContent from './TopContent';
import BottomContent from './BottomContent';

import { styles } from './style';

class SlotItem extends PureComponent {

  constructor(props){
    super(props);
  }

  render(){

    const { slot, viewer, onPress } = this.props;

    return (
        <View style={styles.container}>
            <View style={styles.leftBar} />
            <View style={styles.content}>

                <TopContent
                    onPress={onPress}
                    slot={slot}
                    viewer={viewer}
                />
                <View style={styles.seperator} />
                    <BottomContent
                        style={styles.bottom}
                        slot={slot}
                    />
                </View>
            </View>
        );
  }
}

export default SlotItem

I18n.fallbacks = true
I18n.translations = translations;
