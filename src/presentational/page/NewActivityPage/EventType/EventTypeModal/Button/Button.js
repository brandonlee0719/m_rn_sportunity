import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRestrictionsModal } from 'sportunity/src/action/newActivityActions';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import style from './style';

const Button = ({ 
  onClose
}) => {
  
  return(
    <View style={style.container}>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={onClose}
      >
        <Text style={style.text}>
          {I18n.t('validate')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button;

I18n.fallbacks = true
I18n.translations = translations;
