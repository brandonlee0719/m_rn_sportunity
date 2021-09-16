// @flow
import React from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';

import icons from 'sportunity/src/theme/images';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import { updatePrivateActivity, updateAutoSwitchPrivacy, updateTimeAutoSwitchPrivacy } from 'sportunity/src/action/newActivityActions';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import PrivateModal from './PrivateModal/PrivateModal'

import FormListItem from '../../../UI/FormListItem';


type Private$Props = {
  updatePrivateActivity: (kind: boolean) => void,
  isActivityPrivate: boolean,
  updateInvitees: (invites: Array<string>) => void,
};

class Private extends React.Component {
  props: Private$Props;

  constructor() {
    super();
    this.state = {
      isPrivateModalVisible: false
    }
  }

  openClosePrivateModal = () => {
    const { 
      isActivityPrivate, 
      autoSwitchActivityPrivacy, 
      autoSwitchActivityPrivacyTime
    } = this.props;
 
    if (this.state.isPrivateModalVisible) {
      if (isActivityPrivate && autoSwitchActivityPrivacy && (isNaN(autoSwitchActivityPrivacyTime) || autoSwitchActivityPrivacyTime < 1)) {
        Toast.show(I18n.t('automaticallySwitchPrivacyNumberOfDaysError'));
        return; 
      }
      this.setState({isPrivateModalVisible: false})
    } else {
      this.setState({isPrivateModalVisible: true})
    }
  }

  updateAutoPrivacySwitchingTime = (value) => {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < value.length; i++) {
        if ( numbers.indexOf(value[i]) > -1 ) {
            newText = newText + value[i];
        }
    }   
    this.props.updateTimeAutoSwitchPrivacy(parseInt(newText));
  }

  

  render() {

    const { 
      isActivityPrivate, 
      updatePrivateActivity, 
      updateAutoSwitchPrivacy,
      updateTimeAutoSwitchPrivacy,
      autoSwitchActivityPrivacy, 
      autoSwitchActivityPrivacyTime 
    } = this.props;

    return (
      <View>
        <PrivateModal 
          isVisible={this.state.isPrivateModalVisible} 
          closeModal={this.openClosePrivateModal}
          isActivityPrivate={isActivityPrivate}
          autoSwitchActivityPrivacy={autoSwitchActivityPrivacy}
          autoSwitchActivityPrivacyTime={autoSwitchActivityPrivacyTime}
          updatePrivateActivity={updatePrivateActivity}
          updateAutoSwitchPrivacy={updateAutoSwitchPrivacy}
          updateAutoPrivacySwitchingTime={this.updateAutoPrivacySwitchingTime}
        />
        <FormListItem
          onPress={this.openClosePrivateModal}
          title={I18n.t('privacySportunity')}
          subtitle={isActivityPrivate ? I18n.t('privateSportunity') : I18n.t('publicSportunity')}
        />
      </View>
    );
  }
}

Private.propTypes = {
  updatePrivateActivity: PropTypes.func.isRequired,
  updateAutoSwitchPrivacy: PropTypes.func.isRequired, 
  updateTimeAutoSwitchPrivacy: PropTypes.func.isRequired,
  isActivityPrivate: PropTypes.bool.isRequired,
  autoSwitchActivityPrivacy: PropTypes.bool.isRequired
};

const stateToProps = (state) => ({
  isActivityPrivate: state.sportunityNewActivity.isActivityPrivate,
  autoSwitchActivityPrivacy: state.sportunityNewActivity.autoSwitchActivityPrivacy,
  autoSwitchActivityPrivacyTime: state.sportunityNewActivity.autoSwitchActivityPrivacyTime
});

const dispatchToProps = {
  updatePrivateActivity,
  updateAutoSwitchPrivacy, 
  updateTimeAutoSwitchPrivacy
};

export default connect(
  stateToProps,
  dispatchToProps
)(Private);

I18n.fallbacks = true
I18n.translations = translations;
