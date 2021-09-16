import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n'

import translations from 'sportunity/src/translations';

import DrawerButton from '../../../Button/DrawerButton';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';

class DrawerWallet extends Component {
    render() {
        const { me, text } = this.props;
        return (
            me
            ? <DrawerButton icon={images.wallet} text={text} onPress={this.props.onPress} />
            : null
        )
    }
};

export default createFragmentContainer(DrawerWallet, {
  me: graphql`
    fragment DrawerWalletContainer_me on User {
        id
        isProfileComplete
    }
  `,
});


I18n.fallbacks = true
I18n.translations = translations;
