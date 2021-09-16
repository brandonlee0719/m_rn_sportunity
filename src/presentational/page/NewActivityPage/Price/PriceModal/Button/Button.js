import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';

import style from './style';
import translations from 'sportunity/src/translations.js';

const Button = ({ isPriceModalVisible, updatePriceModal, minimumRevenue, maximumRevenue, isFreeSwitchOn, pricePerParticipant, userCurrency, sportunityCreation, validation }) => {

  const openClosePriceModal = () => {

    var regex = new RegExp(/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/);

    if (sportunityCreation && !regex.test(pricePerParticipant)) {
      Alert.alert(I18n.t('alert'), I18n.t('priceWrongFormat'))
    }
    else if(sportunityCreation && minimumRevenue < 0 && isFreeSwitchOn === false) {
      Alert.alert(I18n.t('alert'), I18n.t('youCanLose') + ' ' + minimumRevenue + ' ' + userCurrency + I18n.t('youCanLose2'))
    } 
    else {
      updatePriceModal(!isPriceModalVisible)
      if (!sportunityCreation && typeof validation !== 'undefined') {
        validation()
      }
    }
  }

  return(
    <View style={style.container}>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={openClosePriceModal}
      >
        <Text style={style.text}>
          {I18n.t('setPrice')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Button.propTypes = {
  updatePriceModal: PropTypes.func.isRequired,
  isPriceModalVisible: PropTypes.bool.isRequired,
  minimumRevenue: PropTypes.number.isRequired,
  maximumRevenue: PropTypes.number.isRequired,
  isFreeSwitchOn: PropTypes.bool.isRequired,
  pricePerParticipant: PropTypes.number.isRequired,
};

export default Button;

I18n.fallbacks = true
I18n.translations = translations;
