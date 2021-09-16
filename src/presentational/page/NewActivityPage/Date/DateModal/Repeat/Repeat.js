import PropTypes from 'prop-types';
import React from 'react';
import { View, Switch, TextInput } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateRepeatSwitch, updateRepeatValue } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';
import I18n from 'react-native-i18n';
import moment from 'moment';
import translations from 'sportunity/src/translations.js';

const Repeat = ({ isRepeatSwitchOn, updateRepeatSwitch, updateRepeatValue, repeatValue, newActivityDate }) => {

  const controlRepeatSwitch = (value) => {
    updateRepeatSwitch(value);
  }
  const controlRepeatValue = (value) => {
    updateRepeatValue(value);
  }

  return(
    <View>
      <View style={style.switchContainer}>
        <Text style={style.text}>
          {I18n.t('repeat')}
        </Text>

        <Switch
          style={style.repeatSwitch}
          onTintColor={colors.skyBlue}
          value={isRepeatSwitchOn}
          onValueChange={controlRepeatSwitch}
        />
      </View>
      {
        isRepeatSwitchOn ?
        <View>
          <View style={style.repeatValuesContainer}>
            <TextInput
              style={style.input}
              autoCorrect={false}
              placeholderTextColor="silver"
              placeholder="0"
              autoCapitalize="none"
              selectionColor="#ffffff"
              keyboardType="numeric"
              underlineColorAndroid={colors.skyBlue}
              value={`${repeatValue || ''}`}
              onChangeText={controlRepeatValue}
            />
            <Text style={style.repetitionText}>
              {I18n.t('repeatWeekly')}
            </Text>
          </View> 
          {repeatValue > 0 &&
            <Text style={style.repetitionText}>
              {I18n.t('repeatLastDate') + ' : ' + moment(newActivityDate, 'MMMM DD YYYY').add(repeatValue * 7, 'days').format('MMMM DD YYYY')}
            </Text>
          }
        </View>
        : null
      }

    </View>
  )
}

Repeat.propTypes = {
  isRepeatSwitchOn: PropTypes.bool.isRequired,
  updateRepeatSwitch: PropTypes.func.isRequired,
  updateRepeatValue: PropTypes.func.isRequired,
  newActivityDate: PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  newActivityDate: state.sportunityNewActivity.newActivityDate,
  isRepeatSwitchOn: state.sportunityNewActivity.isRepeatSwitchOn,
  repeatValue: state.sportunityNewActivity.repeatValue,
});

const dispatchToProps = (dispatch) => ({
  updateRepeatSwitch: bindActionCreators(updateRepeatSwitch, dispatch),
  updateRepeatValue: bindActionCreators(updateRepeatValue, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Repeat);

I18n.fallbacks = true
I18n.translations = translations;
