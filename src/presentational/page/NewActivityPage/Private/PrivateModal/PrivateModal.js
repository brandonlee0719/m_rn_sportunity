import React from 'react';
import { Modal, TouchableOpacity, View, Image, Switch, TextInput } from 'react-native';
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

const PrivateModal = ({
    isVisible,
    closeModal,
    isActivityPrivate,
    autoSwitchActivityPrivacy,
    autoSwitchActivityPrivacyTime,
    updatePrivateActivity,
    updateAutoSwitchPrivacy,
    updateAutoPrivacySwitchingTime
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
            {I18n.t('privacySportunity')}
          </Text>
        </View>
        <View style={style.content}>
            <View style={style.switchContainer}>
                <Text style={style.text}>
                    {isActivityPrivate 
                        ? I18n.t('privateSportunity') 
                        : I18n.t('publicSportunity')
                    }
                </Text>
                <Switch
                    onTintColor={colors.skyBlue}
                    value={isActivityPrivate}
                    onValueChange={() => updatePrivateActivity(!isActivityPrivate)}
                    />
            </View>
            {isActivityPrivate &&
                <View style={style.switchContainer}>
                    <Text style={style.text}>
                        {autoSwitchActivityPrivacy
                            ? I18n.t('automaticallySwitchPrivacy')
                            : I18n.t('automaticallySwitchPrivacyOff')
                        }
                    </Text>
                    <Switch
                        onTintColor={colors.skyBlue}
                        value={autoSwitchActivityPrivacy}
                        onValueChange={() => updateAutoSwitchPrivacy(!autoSwitchActivityPrivacy)}
                        />
                </View>
                
            }
            {isActivityPrivate && autoSwitchActivityPrivacy &&
                <View style={style.switchContainer}>
                    <Text style={style.text}>
                        {I18n.t('automaticallySwitchPrivacyNumberOfDays')}
                    </Text>
                    <TextInput
                        style={style.input}
                        autoCorrect={false}
                        placeholderTextColor="silver"
                        placeholder="0"
                        value={`${autoSwitchActivityPrivacyTime || ''}`}
                        autoCapitalize="none"
                        maxLength={3}
                        selectionColor="#ffffff"
                        keyboardType="numeric"
                        underlineColorAndroid={colors.skyBlue}
                        onChangeText={updateAutoPrivacySwitchingTime}
                    /> 
                </View>
            }
        </View>
        <Button validate={closeModal}/>
      </Modal>

    </View>
  )
}

PrivateModal.propTypes = {
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
});

export default connect(
  stateToProps,
  dispatchToProps
)(PrivateModal);

I18n.fallbacks = true
I18n.translations = translations;
