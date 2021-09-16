import React, { Component } from 'react';
import PureComponent, { forceUpdate } from 'sportunity/src/lib/PureComponent'
import { View, Text, TouchableOpacity, StyleSheet, NativeModules, Platform } from 'react-native';
import { colors, fonts, metrics } from 'sportunity/src/theme';
import { updateLocale } from 'sportunity/src/action/localeActions.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import moment from 'moment-timezone';
import 'moment/min/locales.min';

import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

class ChooseLanguage extends PureComponent {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'test',
    };
  };

  componentDidMount = () => {
    if (this.props.viewer && this.props.viewer.me) {
    }
    else {
      if (Platform.OS === 'android') {
        I18n.locale = I18n.currentLocale()
      } else {
        I18n.locale = NativeModules.SettingsManager.settings.AppleLocale.replace(/_/, '-');
      }
      
      I18n.locale.substring(0, 2) === 'fr' && this.props.updateLocale('fr');
      I18n.locale.substring(0, 2) === 'fr' && moment.locale('fr')
    }
    moment.tz.setDefault("Europe/Zurich");
  }

  setLanguage = (lang) => {
    I18n.locale = lang;
    this.props.updateLocale(lang)
    moment.locale(lang)
    this.props.updateLanguage(lang)
    //typeof forceUpdate === 'function' && forceUpdate({ lang })
    // this.props.switchScene('sportunities')
  }

  render(){
    const { language } = this.props;
    
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.setLanguage('en')}>
          <Text style={styles.text}>EN</Text>
          {
            language === 'en' && <View style={styles.line}/>
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.setLanguage('fr')}>
          <Text style={styles.text}>FR</Text>
          {
            language === 'fr' && <View style={styles.line}/>
          }
        </TouchableOpacity>
      </View>
    )
  }
}


const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
  updateLocale: bindActionCreators(updateLocale, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(ChooseLanguage);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: metrics.doubleBaseMargin,
  },
  button: {
    marginRight: metrics.doubleBaseMargin,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: fonts.size.h5,
    color: colors.darkGrey,
  },
  line: {
    width: 25,
    borderWidth: 2,
    borderColor: colors.blue,
  },
});
