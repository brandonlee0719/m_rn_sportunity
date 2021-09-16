import PropTypes from 'prop-types';
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
  updateRestrictionsModal,
  ageRestriction
}) => {
  
  const validate = () => {
    if (ageRestriction.from < 0)
      Alert.alert(I18n.t('alert'), I18n.t('minNumberAlert'))
    else if (ageRestriction.from >= ageRestriction.to)
      Alert.alert(I18n.t('alert'), I18n.t('yearMaxLowerThanMin'))
    else 
      updateRestrictionsModal(false)
  }

  return(
    <View style={style.container}>
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={validate}
      >
        <Text style={style.text}>
          {I18n.t('validate')}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

Button.propTypes = {
  updateRestrictionsModal: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  ageRestriction: state.sportunityNewActivity.ageRestriction,
});

const dispatchToProps = (dispatch) => ({
  updateRestrictionsModal: bindActionCreators(updateRestrictionsModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Button);

I18n.fallbacks = true
I18n.translations = translations;
