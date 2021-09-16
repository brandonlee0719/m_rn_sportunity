import React from 'react';
import { Modal, TouchableOpacity, View, Image, Picker, TextInput } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateNumberModal } from 'sportunity/src/action/newActivityActions';

import Button from './Button/Button.js';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';

import style from './style';
// import Button from './Button/Button.js';

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const NotificationPreferencesModal = ({
    isVisible,
    closeModal,
    notificationPreferenceMode,
    notificationAutoTime,
    updateAutoNotificationTime,
    updateNotificationPreferenceMode
}) => {


  return(
    <View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isVisible}
        onRequestClose={closeModal}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={closeModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            {I18n.t('notificationPreference')}
          </Text>
        </View>
        <View style={style.content}>
            <View style={style.row}>
                <Text style={style.label}>
                    {I18n.t('notificationPreferenceLabel')}
                </Text>
                <Picker 
                    style={style.picker}
                    selectedValue={notificationPreferenceMode}
                    onValueChange={value=>updateNotificationPreferenceMode(value)}
                    mode="dialog" >
                    <Picker.Item key="1" label={I18n.t('notificationPreferenceImmediateShort')} value='Now'/>
                    <Picker.Item key="2" label={I18n.t('notificationPreferenceManuallyShort')} value='Manually'/>
                    <Picker.Item key="3" label={I18n.t('notificationPreferenceAutomaticallyShort')} value='Automatically'/>
                </Picker>
            </View>
            {notificationPreferenceMode === "Automatically" &&
              <View style={style.row}>
                  <Text style={style.label}>
                      {I18n.t('notificationPreferenceAutomaticallyNumberOfDays')}
                  </Text>
                  <TextInput
                      style={style.input}
                      autoCorrect={false}
                      placeholderTextColor="silver"
                      placeholder="0"
                      value={`${notificationAutoTime || ''}`}
                      maxLength={3}
                      autoCapitalize="none"
                      selectionColor="#ffffff"
                      keyboardType="numeric"
                      underlineColorAndroid={colors.skyBlue}
                      onChangeText={updateAutoNotificationTime}
                  />
              </View> 
            }
            
        </View>
        <Button validate={closeModal} />
      </Modal>

    </View>
  )
}

NotificationPreferencesModal.propTypes = {
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
});

export default connect(
  stateToProps,
  dispatchToProps
)(NotificationPreferencesModal);

I18n.fallbacks = true
I18n.translations = translations;
