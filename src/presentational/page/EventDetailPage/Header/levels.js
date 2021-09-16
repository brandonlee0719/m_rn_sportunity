import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import { styles } from './styles';
import icons from '../../../../theme/images';
import { withNavigation } from 'react-navigation';
import {cloneDeep} from 'lodash'
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';

const Levels = ({ sport, language }) => {
  let levels = cloneDeep(sport.levels).sort((a,b) => {
    if (a[language.toUpperCase()].skillLevel - b[language.toUpperCase()].skillLevel > 0)
      return 1 
    else if (a[language.toUpperCase()].skillLevel - b[language.toUpperCase()].skillLevel < 0)
      return -1
    else return 0
  })
  
  return(
    <View style={styles.row}>
      <Image style={styles.icon} source={icons.infoIcon} />

      {
        levels && !sport.allLevelSelected && levels.length > 1 &&
          <View style={styles.levelContainer}>
            <Text style={styles.headerTxtDescTop}>
              {I18n.t('levels') + ': '}
              {levels && levels[0] && 
                levels[0][language.toUpperCase()].name + ' ' + I18n.t('to') + ' ' + levels[levels.length-1][language.toUpperCase()].name
              }
            </Text>
          </View>
      }
      {
        levels && !sport.allLevelSelected && levels.length === 1 &&
          <View style={styles.levelContainer}>
            <Text style={styles.headerTxtDescTop}>
              {I18n.t('levels') + ': '}
              {levels && levels[0] && levels[0][language.toUpperCase()].name}
            </Text>
          </View>
      }
    </View>
  )
}

Levels.propTypes = {
  sport: PropTypes.object.isRequired,
}

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

const ReduxContainer = connect(
  stateToProps,
  null
)(Levels);

export default createFragmentContainer(ReduxContainer, {
  sport: graphql`fragment levels_sport on SportunitySport{ 
    allLevelSelected,
    levels{
      id,
      EN {
        name,
        description,
        skillLevel  
      },
      FR {
        name,
        description,
        skillLevel
      }
    }
  }`,
});
