import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import {withNavigation} from 'react-navigation'

import SportunityFilterKind from '../SportunityPage/SportunityFilterKind';
import Add from '../../Button/Add';
import styles from './style';

class NoLoginPage extends Component{

  render(){
    const selectedKind= this.props.selectedKind;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text>{I18n.t('youAreNotConnected')} {selectedKind === 'Organized' ? 'organize': 'book'} {I18n.t('sportunities')}</Text>
          {
            selectedKind === 'Organized' ?
            <View style={styles.buttonAddFooter}>
              <Add Action={() => this.props.navigation.navigate('new_activity')} />
            </View>
            :
            null
          }
        </View>
             </View>
    )
  }
}

NoLoginPage.propTypes = {
  selectedKind: PropTypes.string,
};

export default withNavigation(NoLoginPage);

I18n.fallbacks = true
I18n.translations = translations;
