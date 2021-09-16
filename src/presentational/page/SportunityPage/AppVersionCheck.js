import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Linking, TouchableOpacity, Text } from 'react-native';

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import VersionCheck from 'react-native-version-check';

import { colors, fonts } from 'sportunity/src/theme';

let lastCheck = null;
let needUpdate = false;

const isTimeToCheck = () => true;

class AppVersionCheck extends Component {
  state = {
    needUpdate: false,
  }

  componentDidMount() { 
    if (isTimeToCheck()) {
      VersionCheck.needUpdate()
        .then(res => {
          needUpdate = res.isNeeded;
          this.setState({ needUpdate });
          console.log({ needUpdate })
        });
      lastCheck = new Date();
    }
    this.setState({ needUpdate });
  }

  _handlePress = async () => {
    Linking.openURL(await VersionCheck.getStoreUrl());
  }

  render() {
    if (!this.state.needUpdate) return null;

    return (
      <TouchableOpacity style={styles.container} onPress={this._handlePress}>
        <Text style={styles.udpateText}>{I18n.t('updateYourVersion')}</Text>
      </TouchableOpacity>
    );
  }
}

AppVersionCheck.propTypes = {
}

const styles = {
  container: {
    backgroundColor: colors.red,
    paddingVertical: 5,
    paddingHorizontal: 8
  },
  udpateText: {
    fontSize: fonts.size.small,
    textAlign: 'justify',
    color: colors.snow
  }
};

export default AppVersionCheck;

I18n.fallbacks = true;
I18n.translations = translations;
