import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import style from './style';

const ValidateButton = ({
  isActivityPrivate,
  autoSwitchActivityPrivacy,
  autoSwitchActivityPrivacyTime,
  validate,
}) => {

  const openCloseNumberModal = () => {
    validate()
  }

  return(
    <TouchableOpacity
      style={style.container}
      onPress={openCloseNumberModal}
    >
      <Text style={style.text}>
        {I18n.t('ok')}
      </Text>
    </TouchableOpacity>
  )
}

ValidateButton.propTypes = {
  isActivityPrivate: PropTypes.bool.isRequired,
  autoSwitchActivityPrivacy: PropTypes.bool.isRequired,
  autoSwitchActivityPrivacyTime: PropTypes.number.isRequired,
  validate: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate,
  autoSwitchActivityPrivacy: state.sportunityNewActivity.autoSwitchActivityPrivacy,
  autoSwitchActivityPrivacyTime: state.sportunityNewActivity.autoSwitchActivityPrivacyTime,

});

const dispatchToProps = (dispatch) => ({
});

export default connect(
  stateToProps,
  dispatchToProps
)(ValidateButton);

I18n.fallbacks = true
I18n.translations = translations;
