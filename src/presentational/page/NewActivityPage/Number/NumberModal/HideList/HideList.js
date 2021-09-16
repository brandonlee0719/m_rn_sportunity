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
import { updateHideParticipantsSwitch } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const Exactly = ({
  updateHideParticipantsSwitch,
  hideParticipantSwitchOn,
  viewer,
}) => {
  const onOffHideParticipantSwitch = () => {
    if (hideParticipantSwitchOn) {
      updateHideParticipantsSwitch(false);
    } else {
      updateHideParticipantsSwitch(true);
    }
  }

  return(
    <View style={style.container}>

      <View style={style.switchContainer}>
        <Text style={style.text}>
          {I18n.t('hideParticipant')}
        </Text>

        <Switch
          style={style.exactlySwitch}
          onTintColor={colors.skyBlue}
          value={hideParticipantSwitchOn}
          onValueChange={onOffHideParticipantSwitch}
          />
      </View>
    </View>
  )
}

Exactly.propTypes = {
  updateHideParticipantsSwitch: PropTypes.func.isRequired,
  hideParticipantSwitchOn: PropTypes.bool.isRequired,
  viewer: PropTypes.object.isRequired,
};


const stateToProps = (state) => ({
  hideParticipantSwitchOn: state.sportunityNewActivity.hideParticipantSwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateHideParticipantsSwitch: bindActionCreators(updateHideParticipantsSwitch, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Exactly);

I18n.fallbacks = true
I18n.translations = translations;
