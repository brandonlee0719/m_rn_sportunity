import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { metrics, colors } from 'sportunity/src/theme';

const NextButton = ({ text = I18n.t('next'), onPress }) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: colors.snow, padding: metrics.baseMargin }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default NextButton;

I18n.fallbacks = true
I18n.translations = translations;
