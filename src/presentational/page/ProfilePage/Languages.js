import PropTypes from 'prop-types';
import React from 'react';
import { pure } from 'sportunity/src/lib/PureComponent'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './infoContentStyles';
import translations from 'sportunity/src/translations.js';
import { colors } from 'sportunity/src/theme';

const isolanguages = require('@cospired/i18n-iso-languages')
isolanguages.registerLocale(require("@cospired/i18n-iso-languages/langs/en.json"))
isolanguages.registerLocale(require("@cospired/i18n-iso-languages/langs/fr.json"))
isolanguages.registerLocale(require("@cospired/i18n-iso-languages/langs/de.json"))

const Languages = pure(({ languages, viewer, navigation, language }) => {
  return(
    <View>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.capitalWord}>
            {I18n.t('languages')}
          </Text>
          {
            viewer.me && ( !viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
              <TouchableOpacity
                style={styles.addContainer}
                onPress={() => navigation.navigate('languages')}
              >
                <Icon name="pencil" color={colors.charcoal} size={18} />
              </TouchableOpacity>
          }
        </View>

        <View style={styles.languageContainer}>
          {
            languages.map((item)=>(
              <Text
                style={styles.text}
                key={item.id}
              >
                {isolanguages.getName(item.code, language) ? isolanguages.getName(item.code, language) : item.name}
              </Text>
            ))
          }
        </View>

      </View>
    </View>
  )
});

Languages.propTypes = {
  languages: PropTypes.array.isRequired,
  viewer: PropTypes.object.isRequired,
}

export default createFragmentContainer(Languages, {
  languages: graphql`
    fragment Languages_languages on Language @relay(plural: true){
      id,
      code,
      name
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;
