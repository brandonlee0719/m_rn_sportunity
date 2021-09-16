// @flow
import PropTypes from 'prop-types';

import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';

import icons from 'sportunity/src/theme/images';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import { updateNotificationPreferenceMode, updateAutoNotificationTime } from 'sportunity/src/action/newActivityActions';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import FormListItem from '../../../../UI/FormListItem';

import NotificationPreferencesModal from './NotificationPreferencesModal/NotificationPreferencesModal'

import style from './style';


class NotificationPreferences extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false
    }
  }

  openCloseModal = () => {
     const { 
      notificationPreferenceMode, 
      notificationAutoTime
    } = this.props;

    if (this.state.isModalVisible) {
      if (notificationPreferenceMode === "Automatically" && (isNaN(notificationAutoTime) || notificationAutoTime < 1)) {
        Toast.show(I18n.t('automaticallySwitchPrivacyNumberOfDaysError'));
        return; 
      }
      this.setState({isModalVisible: false})
    } else {
      this.setState({isModalVisible: true})
    }
  }

  updateAutoNotificationTime = (value) => {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < value.length; i++) {
        if ( numbers.indexOf(value[i]) > -1 ) {
            newText = newText + value[i];
        }
    }  
    this.props.updateAutoNotificationTime(parseInt(newText));
  }

  

  render() {

    const { 
      notificationPreferenceMode, 
      notificationAutoTime, 
      updateNotificationPreferenceMode
    } = this.props;


    const labels = [
      {value: "Now", label: I18n.t('notificationPreferenceImmediate')},
      {value: "Manually", label: I18n.t('notificationPreferenceManually')},
      {value: "Automatically", label: notificationAutoTime > 1 
          ? I18n.t('notificationPreferenceAutomatically').replace('{0}', notificationAutoTime)
          : I18n.t('notificationPreferenceAutomaticallyAday')
      }
    ]

    return (
      <View>
        <FormListItem
          onPress={this.openCloseModal}
          title={I18n.t('notificationPreference')}
          subtitle={labels.find(label => label.value === notificationPreferenceMode).label}
          rightIcon={icons.right_arrow_blue}
        />
       <NotificationPreferencesModal 
          isVisible={this.state.isModalVisible} 
          closeModal={this.openCloseModal}    
          notificationPreferenceMode={notificationPreferenceMode}
          notificationAutoTime={notificationAutoTime}
          updateNotificationPreferenceMode={updateNotificationPreferenceMode}
          updateAutoNotificationTime={this.updateAutoNotificationTime}           
       />
      </View>
    );
  }
}

NotificationPreferences.propTypes = {
  updateNotificationPreferenceMode: PropTypes.func.isRequired,
  updateAutoNotificationTime: PropTypes.func.isRequired,
  notificationPreferenceMode: PropTypes.string.isRequired,
  notificationAutoTime: PropTypes.number.isRequired,
};

const stateToProps = (state) => ({
  notificationPreferenceMode: state.sportunityNewActivity.notificationPreferenceMode,
  notificationAutoTime: state.sportunityNewActivity.notificationAutoTime
});

const dispatchToProps = {
  updateNotificationPreferenceMode,
  updateAutoNotificationTime
};

export default connect(
  stateToProps,
  dispatchToProps
)(NotificationPreferences);

I18n.fallbacks = true
I18n.translations = translations;
