import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import style from './style';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const Address = ({ searchPlaceText, addAddress }) => (

  <TouchableOpacity
    style={style.container}
    onPress={() => addAddress(searchPlaceText)}
  >
    <View style={style.blueLine}>
      <Text style={style.whitetext}>
        {I18n.t('address')}
      </Text>
    </View>
    <Text style={style.text}>
      {searchPlaceText}
    </Text>
  </TouchableOpacity>

);

Address.propTypes = {
  searchPlaceText: PropTypes.string.isRequired,
  addAddress: PropTypes.func.isRequired,
};

export default Address;

I18n.fallbacks = true
I18n.translations = translations;
