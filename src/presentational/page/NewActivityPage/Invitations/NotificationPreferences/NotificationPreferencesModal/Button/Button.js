import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import style from './style';

const ValidateButton = ({
  validate
}) => {


  return(
    <TouchableOpacity
      style={style.container}
      onPress={validate}
    >
      <Text style={style.text}>
        {I18n.t('ok')}
      </Text>
    </TouchableOpacity>
  )
}

ValidateButton.propTypes = {
  validate: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
});

export default connect(
  stateToProps,
  dispatchToProps
)(ValidateButton);

I18n.fallbacks = true
I18n.translations = translations;
