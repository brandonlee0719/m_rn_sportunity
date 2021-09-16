import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMaximumNumber } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const Maximum = ({ viewer, maximumNumber, updateMaximumNumber, pricePerParticipant, venueCost, minimumNumber, organizerContribution }) => {

  const addMaximum = (value) => {
    const fee = viewer.me && viewer.me.fees || 20;
    const finalValue = parseInt(value, 10);
    updateMaximumNumber(finalValue, venueCost, pricePerParticipant, minimumNumber, organizerContribution, fee);
  }

  return(
    <View style={style.container}>

      <Text style={style.text}>
        {I18n.t('maximum')}
      </Text>

      <TextInput
        style={style.input}
        autoCorrect={false}
        placeholderTextColor="silver"
        placeholder="0"
        value={`${maximumNumber || ''}`}
        autoCapitalize="none"
        selectionColor="#ffffff"
        keyboardType="numeric"
        underlineColorAndroid={colors.skyBlue}
        onChangeText={addMaximum}
      />

    </View>
  )
}

Maximum.propTypes = {
  updateMaximumNumber: PropTypes.func.isRequired,
  venueCost: PropTypes.number.isRequired,
  pricePerParticipant: PropTypes.number.isRequired,
  maximumNumber: PropTypes.number.isRequired,
  minimumNumber: PropTypes.number.isRequired,
  organizerContribution: PropTypes.number.isRequired,
  viewer: PropTypes.object.isRequired,

};

const stateToProps = (state) => ({
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  venueCost: state.sportunityNewActivity.venueCost,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  organizerContribution: state.sportunityNewActivity.organizerContribution,
});

const dispatchToProps = (dispatch) => ({
  updateMaximumNumber: bindActionCreators(updateMaximumNumber, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Maximum);

I18n.fallbacks = true
I18n.translations = translations;
