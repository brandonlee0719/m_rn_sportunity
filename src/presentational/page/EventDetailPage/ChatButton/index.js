import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import icons from '../../../../theme/images';
import { styles } from '../styles';

const Button = ({ goToChat, isParticipant, isOrganized }) => (
  <TouchableOpacity
    onPress={() => goToChat()}
    style={[styles.rowContainer, { marginTop: -3 }]}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text style={styles.title} numberOfLines={1}>
        {
          isParticipant === true || isOrganized === true ?
          I18n.t('sportunityChatWithOrganizers')
          :
          I18n.t('sportunityAskQuestions')
        }
      </Text>
      <Image
        style={styles.icon}
        source={icons.comments}
      />
    </View>
  </TouchableOpacity>
)

Button.propTypes = {
  isParticipant: PropTypes.bool,
  goToChat: PropTypes.func.isRequired,
};

export default Button;

I18n.fallbacks = true
I18n.translations = translations;
