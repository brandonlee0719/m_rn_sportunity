import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateNumberModal, updateMinimumNumber, updateMaximumNumber } from 'sportunity/src/action/newActivityActions';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import style from './style';

const ValidateButton = ({
  isNumberModalVisible,
  updateNumberModal,
  minimumNumber,
  maximumNumber,
  updateMinimumNumber,
  updateMaximumNumber,
  minimumRevenue,
  maximumRevenue,
  isFreeSwitchOn,
}) => {

  const openCloseNumberModal = () => {

    if (minimumNumber === 0) {
      Alert.alert(I18n.t('alert'), I18n.t('minNumberAlert'))
      updateMinimumNumber(0);
      updateMaximumNumber(0);
    } else if (maximumNumber < minimumNumber) {
      Alert.alert(I18n.t('alert'), I18n.t('maxNumberAlert'))
      updateMinimumNumber(0);
      updateMaximumNumber(0);
    } else if(minimumRevenue > 0 && isFreeSwitchOn === false) {
      Alert.alert(
        I18n.t('info'),
        minimumRevenue === maximumRevenue ?
          I18n.t('youWillEarn') + maximumRevenue + '.'
        : I18n.t('youWillEarnFrom') + minimumRevenue + ' ' + I18n.t('to') + ' ' + maximumRevenue + I18n.t('dependingOnNumber') ,
        [
          {text: I18n.t('cancel'), onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: I18n.t('ok'), onPress: () =>  updateNumberModal(false)},
        ],
        { cancelable: false }
      )
    } else {
      if (isNumberModalVisible) {
        updateNumberModal(false);
      } else {
        updateNumberModal(true);
      }
    }
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
  updateNumberModal: PropTypes.func.isRequired,
  isNumberModalVisible: PropTypes.bool.isRequired,
  minimumNumber: PropTypes.number.isRequired,
  maximumNumber: PropTypes.number.isRequired,
  minimumRevenue: PropTypes.number.isRequired,
  maximumRevenue: PropTypes.number.isRequired,
  isFreeSwitchOn: PropTypes.bool.isRequired,

};

const stateToProps = (state) => ({
  isNumberModalVisible: state.sportunityNewActivity.isNumberModalVisible,
  minimumNumber: state.sportunityNewActivity.minimumNumber,
  maximumNumber: state.sportunityNewActivity.maximumNumber,
  minimumRevenue: state.sportunityNewActivity.minimumRevenue,
  maximumRevenue: state.sportunityNewActivity.maximumRevenue,
  isFreeSwitchOn: state.sportunityNewActivity.isFreeSwitchOn,

});

const dispatchToProps = (dispatch) => ({
  updateNumberModal: bindActionCreators(updateNumberModal, dispatch),
  updateMinimumNumber: bindActionCreators(updateMinimumNumber, dispatch),
  updateMaximumNumber: bindActionCreators(updateMaximumNumber, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(ValidateButton);

I18n.fallbacks = true
I18n.translations = translations;
