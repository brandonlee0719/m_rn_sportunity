import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  TextInput,
  Switch,
} from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateExactlyNumber, updateExactlySwitch, addUserAsParticipant } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const Exactly = ({
  updateExactlyNumber,
  isExactlySwitchOn,
  updateExactlySwitch,
  venueCost,
  pricePerParticipant,
  exactlyNumber,
  isUserParticipant,
  addUserAsParticipant,
  organizerContribution,
  isPriceUpdatable,
  isUpdating,
  viewer,
}) => {

  const addExactly = (value) => {
    const fee = viewer.me && viewer.me.fees || 20;
    const finalValue = parseInt(value, 10);
    updateExactlyNumber(finalValue, venueCost, pricePerParticipant, organizerContribution, fee);
  }

  const onOffExactlySwitch = () => {
    if (isExactlySwitchOn) {
      updateExactlySwitch(false);
    } else {
      updateExactlySwitch(true);
    }
  }

  const onOffParticipantSwitch = () => {
    if(isUserParticipant){
      addUserAsParticipant(false);
    } else {
      addUserAsParticipant(true);
    }
  }

  return(
    <View style={style.container}>

      <View style={style.switchContainer}>
        <Text style={style.text}>
          {I18n.t('needExactNumber')}
        </Text>

        <Switch
          style={style.exactlySwitch}
          onTintColor={colors.skyBlue}
          value={isExactlySwitchOn}
          onValueChange={onOffExactlySwitch}
          />
        {
          isExactlySwitchOn ?
            <TextInput
              style={style.input}
              autoCorrect={false}
              placeholderTextColor="silver"
              placeholder="0"
              value={`${exactlyNumber || ''}`}
              autoCapitalize="none"
              selectionColor="#ffffff"
              keyboardType="numeric"
              underlineColorAndroid={colors.skyBlue}
              onChangeText={addExactly}
            /> :
              null
        }
      </View>
      { 
        isPriceUpdatable && pricePerParticipant === 0 && viewer && viewer.me && viewer.me.profileType === 'PERSON' && !isUpdating && 
          <View style={style.switchContainer}>

            <Text style={style.text}>
              {I18n.t('organizerParticipates')}
            </Text>

            <Switch
              style={style.exactlySwitch}
              onTintColor={colors.skyBlue}
              value={isUserParticipant}
              onValueChange={onOffParticipantSwitch}
              disabled={isUpdating}
              />
          </View>
        
      }

    </View>
  )
}

Exactly.propTypes = {
  updateExactlyNumber: PropTypes.func.isRequired,
  isExactlySwitchOn: PropTypes.bool.isRequired,
  updateExactlySwitch: PropTypes.func.isRequired,
  venueCost: PropTypes.number.isRequired,
  pricePerParticipant: PropTypes.number.isRequired,
  exactlyNumber: PropTypes.number.isRequired,
  isUserParticipant: PropTypes.bool.isRequired,
  addUserAsParticipant: PropTypes.func.isRequired,
  organizerContribution: PropTypes.number.isRequired,
  isPriceUpdatable: PropTypes.bool.isRequired,
  viewer: PropTypes.object.isRequired,

};


const stateToProps = (state) => ({
  isExactlySwitchOn: state.sportunityNewActivity.isExactlySwitchOn,
  venueCost: state.sportunityNewActivity.venueCost,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  exactlyNumber: state.sportunityNewActivity.exactlyNumber,
  isUserParticipant: state.sportunityNewActivity.isUserParticipant,
  organizerContribution: state.sportunityNewActivity.organizerContribution,
  isPriceUpdatable: state.sportunityNewActivity.isPriceUpdatable,
});

const dispatchToProps = (dispatch) => ({
  updateExactlyNumber: bindActionCreators(updateExactlyNumber, dispatch),
  updateExactlySwitch: bindActionCreators(updateExactlySwitch, dispatch),
  addUserAsParticipant: bindActionCreators(addUserAsParticipant, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Exactly);

I18n.fallbacks = true
I18n.translations = translations;
