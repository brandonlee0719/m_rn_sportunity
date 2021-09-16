import React, { Component } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import Share from 'react-native-share';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { styles } from './styles';
import icons from '../../../../theme/images';

class ShareButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableOpacity style={styles.shareContainer} onPress={() => Share.open(this.props.shareOptions)}>  
            <Text style={styles.share}>{I18n.t('sportunityShare')}</Text>
        </TouchableOpacity>
    );
  }
}

export default ShareButton ;

I18n.fallbacks = true
I18n.translations = translations;
