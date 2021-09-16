import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMinimumNumber } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const Minimum = ({ viewer, minimumNumber, updateMinimumNumber, venueCost, pricePerParticipant, maximumNumber, organizerContribution }) => {

  const addMinimum = (value) => {
    const fee = viewer.me && viewer.me.fees || 20;
    const finalValue = parseInt(value, 10);
    updateMinimumNumber(finalValue, venueCost, pricePerParticipant, maximumNumber, organizerContribution, fee);
  }

  return(
    <View style={style.container}>

      <Text style={style.text}>
        {I18n.t('minimum')}
      </Text>

      <TextInput
        style={style.input}
        autoCorrect={false}
        placeholderTextColor="silver"
        placeholder="0"
        value={`${minimumNumber || ''}`}
        autoCapitalize="none"
        selectionColor="#ffffff"
        keyboardType="numeric"
        underlineColorAndroid={colors.skyBlue}
        onChangeText={addMinimum}
      />

    </View>
  )
}

Minimum.propTypes = {
  updateMinimumNumber: PropTypes.func.isRequired,
  venueCost: PropTypes.number.isRequired,
  pricePerParticipant: PropTypes.number.isRequired,
  minimumNumber: PropTypes.number.isRequired,
  maximumNumber: PropTypes.number.isRequired,
  organizerContribution: PropTypes.number.isRequired,
  viewer: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  venueCost: state.sportunityNewActivity.venueCost,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  organizerContribution: state.sportunityNewActivity.organizerContribution,
});

const dispatchToProps = (dispatch) => ({
  updateMinimumNumber: bindActionCreators(updateMinimumNumber, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Minimum);

I18n.fallbacks = true
I18n.translations = translations;
