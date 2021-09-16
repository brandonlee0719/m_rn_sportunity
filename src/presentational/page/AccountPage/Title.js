// @flow
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

type Title$Props = {
  accountAvailable: boolean,
  bankAccountOptional: boolean,
  paymentMethodOptional: boolean
};

const Title = (props: Title$Props) => {
  let title = !props.accountAvailable
    ? I18n.t('accountNotificationNotEditable')
    : I18n.t('accountNotificationMandatory') +
      (props.bankAccountOptional ? I18n.t('accountNotificationExceptBank') : '') +
      (props.paymentMethodOptional ? I18n.t('accountNotificationExceptAccount') : '');
  return !!title
    ? <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    : null
}

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: metrics.doubleBaseMargin,
  },
  title: {
    color: colors.red,
  },
});

I18n.fallbacks = true
I18n.translations = translations;
