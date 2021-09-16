import PropTypes from 'prop-types';
import React from 'react';
import {View, Image, Text} from 'react-native';
import {Bar} from 'react-native-progress'
import I18n from 'react-native-i18n';

import { colors, images, fonts } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';

const UpdatePage = ({ progress, updateStatus }) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={images.logo} style={{resizeMode: 'contain', width: 200, height: 230, marginBottom: 100}}/>
        <Bar progress={progress} width={250} borderColor={colors.blue} color={colors.blue}/>
        <Text style={{marginTop: 15, color: colors.charcoal, fontSize: fonts.size.small}}>{I18n.t(updateStatus) + ' ...'}</Text>
    </View>
);

export default UpdatePage;

I18n.fallbacks = true
I18n.translations = translations;