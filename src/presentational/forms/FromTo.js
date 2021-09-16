import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { metrics, colors, fonts } from 'sportunity/src/theme';

class FromTo extends Component {

  constructor(){
    super();

    this.state = {
      startingHour: '',
      startingMinute: '',
      endingHour: '',
      endingMinute: '',
    }
  }

  componentWillMount() {
    const {
      startingHour,
      startingMinute,
      endingHour,
      endingMinute
    } = this.props.value || {}

    this.setState({
      startingHour,
      startingMinute,
      endingHour,
      endingMinute
    })
  }

  addFromHour = (value) => {
    let startingHour
    if(isNaN(value)){
      startingHour = ''
      Alert.alert(I18n.t('alert'), I18n.t('startingHourNumberAlert'));
    } else if (value > 23){
      startingHour = ''
      Alert.alert(I18n.t('alert'), I18n.t('startingHourLengthAlert'));
    } else {
      if (value>2) {
        this.focusOnFromMinute()
      }
      startingHour = value
    }
    this.setState({
      startingHour,
    }, () => this.props.onUpdate(this.state))
  }

  focusOnFromMinute() {
    this.fromMinute.focus()
  }

  addFromMinute = (value) => {
    let startingMinute = ''
    if(isNaN(value)){
      Alert.alert(I18n.t('alert'), I18n.t('startingMinuteNumberAlert'));
    } else if (value > 59){
      Alert.alert(I18n.t('alert'), I18n.t('startingMinuteAlertLength'))
    } else {
      startingMinute = value
    }

    this.setState({
      startingMinute
    }, () => this.props.onUpdate(this.state))
  }

  addToHour = (value) => {
    if(isNaN(value)){
      this.setState({
        endingHour: '',
      })
      Alert.alert(I18n.t('alert'), I18n.t('endingHourNumberAlert'));
    } else if (value > 23){
      this.setState({
        endingHour: '',
      })
      Alert.alert(I18n.t('alert'), I18n.t('endingHourHourLengthAlert'))
    } else {
      this.setState({
        endingHour: value,
      })
    }
    this.props.onUpdate(this.state)
  }

  addToMinute = (value) => {
    if(isNaN(value)){
      this.setState({
        endingMinute: '',
      })
      Alert.alert(I18n.t('alert'), I18n.t('endingMinuteNumberAlert'));
    } else if (value > 59){
      this.setState({
        endingMinute: '',
      })
      Alert.alert(I18n.t('alert'), I18n.t('endingMinuteAlertLength'))
    } else {
      this.setState({
        endingMinute: value,
      })
    }
    this.props.onUpdate(this.state)
  }

  render(){
    const { toHour, toMinute, hasEndHour=false } = this.props;

    return(
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <View style={styles.hourContainer}>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              placeholderTextColor="silver"
              placeholder="0"
              value={this.state.startingHour && this.state.startingHour+''}
              maxLength={2}
              autoCapitalize="none"
              selectionColor="#ffffff"
              keyboardType="numeric"
              onChangeText={this.addFromHour}
              underlineColorAndroid={colors.skyBlue}
            />
            <Text style={styles.hourText}>
              :
            </Text>
            <TextInput
              ref={(n) => this.fromMinute = n}
              style={styles.input}
              autoCorrect={false}
              placeholderTextColor="silver"
              placeholder="00"
              value={this.state.startingMinute+''}
              maxLength={2}value={this.state.startingMinute && this.state.startingMinute+''}
              autoCapitalize="none"
              selectionColor="#ffffff"
              keyboardType="numeric"
              onChangeText={this.addFromMinute}
              underlineColorAndroid={colors.skyBlue}
            />
          </View>
        </View>

        {hasEndHour && (
          <View>
            <View style={styles.hourContainer}>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                placeholderTextColor="silver"
                placeholder="0"
                value={toHour}
                maxLength={2}
                autoCapitalize="none"
                selectionColor="#ffffff"
                keyboardType="numeric"
                onChangeText={this.addToHour}
                underlineColorAndroid={colors.skyBlue}

              />
              <Text style={styles.hourText}>
                :
              </Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                placeholderTextColor="silver"
                placeholder="00"
                value={toMinute}
                maxLength={2}
                autoCapitalize="none"
                selectionColor="#ffffff"
                keyboardType="numeric"
                onChangeText={this.addToMinute}
                underlineColorAndroid={colors.skyBlue}
              />
            </View>
          </View>
        )}

      </KeyboardAvoidingView>
    )
  }
}

FromTo.propTypes = {
  onUpdate: PropTypes.func.isRequred,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '500',
    marginHorizontal: metrics.doubleBaseMargin,
  },
  hourContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    borderRadius: metrics.borderRadius,
    // marginHorizontal: metrics.baseMargin,
  },
  input: {
    backgroundColor: colors.skyBlue,
    color: colors.snow,
    padding: 3,
    width: 40,
    height: 40,
    borderColor: colors.skyBlue,
    borderWidth: 1,
    textAlign: 'center',
  },
  hourText: {
    color: colors.snow,
    fontSize: fonts.size.regular,
    fontWeight: '500',
  },
});

export default FromTo

I18n.fallbacks = true
I18n.translations = translations;
