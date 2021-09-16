import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Text from 'react-native-text';
import { images } from 'sportunity/src/theme'
import { styles } from './styles';
import { withNavigation } from 'react-navigation';

import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';


class AdvancedSettings extends Component {
  constructor() {
    super();
  }

  render(){

    const { sportunity: { sexRestriction, ageRestriction } } = this.props;

    const sexOptions = [
        { value: 'MALE', label: I18n.t('male') },
        { value: 'FEMALE', label: I18n.t('female') },
        { value: 'NONE', label: I18n.t('mixed') },
    ];

    return(
      <View style={styles.descContainer}>
          <Text style={styles.desc} numberOfLines={3}>
              {sexRestriction && 
                I18n.t('askedGender') + ': ' + sexOptions.find(sexOption => sexRestriction === sexOption.value).label + '\n'}
              {I18n.t('askedAge') + ': ' + 
                I18n.t('from') + ' ' + ageRestriction.from + ' ' + 
                I18n.t('to') + ' ' + ageRestriction.to + ' ' + 
                I18n.t('yearsOld') }
          </Text>
      </View>
    )
  }
}
AdvancedSettings.propTypes = {
  sportunity: PropTypes.object.isRequired,
};


export default createFragmentContainer(AdvancedSettings, {
  sportunity: graphql`fragment AdvancedSettingsView_sportunity on Sportunity{
    ageRestriction {
        from, 
        to
    }
    sexRestriction
  }`,
});

I18n.fallbacks = true
I18n.translations = translations;
