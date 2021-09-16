import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import translations from 'sportunity/src/translations.js';
import { styles } from './styles';
import {cloneDeep} from 'lodash';

const Levels = ({ levels, language, allLevelSelected }) => {
  let _levels = cloneDeep(levels);
  _levels = _levels.sort((a,b) => a[language.toUpperCase()].skillLevel - b[language.toUpperCase()].skillLevel > 0 ? 1 : -1)
  
  return(
    <View style={{ flex: 1, flexDirection: 'row' }}>
    {
      (_levels.length > 1 && !allLevelSelected) &&
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {<Text style={styles.level}>{_levels[0][language.toUpperCase()].name}</Text>}
          {<Text style={styles.to}>{I18n.t('to')}</Text>}
          {<Text style={styles.level}>{_levels[_levels.length-1][language.toUpperCase()].name}</Text>}
        </View>
    }
    {
      _levels.length === 1 &&
        <Text style={styles.level}>{_levels[0][language.toUpperCase()].name}</Text>
    }
    {
      allLevelSelected && <Text style={styles.level}>{I18n.t('allLevelSelected')}</Text>
    }
    </View>
  )
}

Levels.propTypes = {
  levels: PropTypes.array.isRequired,
}

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

export default connect(
  stateToProps,
  null
)(Levels);

I18n.fallbacks = true
I18n.translations = translations;
