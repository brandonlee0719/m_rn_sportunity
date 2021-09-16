// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {createFragmentContainer, graphql} from 'react-relay';
import { View, Image, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import moment from 'moment';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { metrics, colors, fonts, images } from '../../../src/theme';

const DateSportunity = (props) => {
  const { sportunity:{ beginning_date, ending_date } } = props;
  return (
    <View style={styles.rowMargin}>
      <Image style={styles.icon} source={images.timeIcon} />
      <View style={styles.seperator} />
      <Text style={styles.dateDesc} numberOfLines={3}>
        {moment(beginning_date).format('ddd DD MMM YYYY') + ' ' + I18n.t('from') + ' ' + moment(beginning_date).format('HH:mm') + ' ' + I18n.t('to') + ' ' + moment(ending_date).format('HH:mm')}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  icon: {
    width: metrics.icons.small,
    height: metrics.icons.small,
    tintColor: colors.lightGreen,
  },
  dateDesc: StyleSheet.flatten([fonts.style.normal, {
    color: colors.darkGrey,
    marginLeft: 5,
  }]),
  rowMargin:{
    flexDirection: 'row',
    padding: metrics.baseMargin,
    alignItems: 'center',
    backgroundColor: colors.snow,
    marginHorizontal: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 3,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  seperator: {
    width: metrics.baseMargin,
  },
});

DateSportunity.propTypes = {
  sportunity: PropTypes.object.isRequired,
};

export default createFragmentContainer(DateSportunity, {
  sportunity: graphql`fragment DateSportunity_sportunity on Sportunity{
    beginning_date
    ending_date
    sport{
      sport {
        logo
      }
    }
  }`,
});

I18n.fallbacks = true
I18n.translations = translations;