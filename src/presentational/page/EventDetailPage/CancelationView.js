import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent, { pure } from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Text from 'react-native-text';
import { styles } from './styles';
import icons from '../../../../src/theme/images';

const Cancelation = pure(({ cancelSportunity, cancel }) => (
  <TouchableOpacity style={styles.rowContainer} onPress={cancelSportunity}>

    <View style={styles.rowPolicy}>
      <Text style={styles.policy}>{I18n.t('cancelationPolicy')}</Text>
      <View style={styles.right_column}>
        <Image style={styles.icon} source={icons.question} />
      </View>
    </View>

    {
      !cancel &&
      <View>
        <Text style={styles.cancelation} numberOfLines={4}>
          {I18n.t('cancelationPolicyText')}
        </Text>
      </View>
    }


  </TouchableOpacity>
))

Cancelation.propTypes = {
  onPress: PropTypes.func,
  cancel: PropTypes.bool.isRequired,
};

export default Cancelation;


I18n.fallbacks = true
I18n.translations = translations;
