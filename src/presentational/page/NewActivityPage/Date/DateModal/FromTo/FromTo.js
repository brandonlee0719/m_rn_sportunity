import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { updateNewActivityDate, updateNewActivityEndDate, updateFromHour, updateFromMinute,updateToHour, updateToMinute } from 'sportunity/src/action/newActivityActions';
import { colors } from 'sportunity/src/theme';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';


class FromTo extends Component {

  constructor(){
    super();

    this.state = {
      startingHour: '',
      startingMinute: '',
      endingHour: '',
      endingMinute: '',
    }
    this.inputRefs = {};
  }

  addFromHour = (value) => {
    if(isNaN(value)){
      this.setState({
        startingHour: '',
      })
      Alert.alert(I18n.t('alert'), I18n.t('startingHourNumberAlert'));
    } else if (value > 23){
      this.setState({
        startingHour: '',
      })
      Alert.alert(I18n.t('alert'), I18n.t('startingHourLengthAlert'));
    } else {
      this.setState({
        startingHour: value,
      })
      this.props.updateFromHour(value);
      const startDateTime = moment(this.props.newActivityDateForServer);
      startDateTime.set('hour', value);
      const finalDate = startDateTime.format('MMMM DD YYYY HH:mm');
      const dateForServer = moment(startDateTime).format();
      this.props.updateNewActivityDate(finalDate, dateForServer);
      if (value.length === 2) {
        this.inputRefs.fromMinute.focus()
      }
    }
  }

  addFromMinute = (value) => {
    if(isNaN(value)){
      this.setState({
        startingMinute: '',
      })
      Alert.alert(I18n.t('alert'), I18n.t('startingMinuteNumberAlert'));
    } else if (value > 59){
      this.setState({
        startingMinute: '',
      })
      Alert.alert(I18n.t('alert'), I18n.t('startingMinuteAlertLength'))
    } else {
      this.setState({
        startingMinute: value,
      })
      this.props.updateFromMinute(value);

      const startDateTime = moment(this.props.newActivityDateForServer);
      startDateTime.set('minute', value);
      const finalDate = startDateTime.format('MMMM DD YYYY HH:mm');
      const dateForServer = moment(startDateTime).format();
      this.props.updateNewActivityDate(finalDate, dateForServer);
      if (value.length === 2) {
        this.inputRefs.toHour.focus()
      }
    }
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
      this.props.updateToHour(value);
      const endDateTime = moment(this.props.newActivityEndDateForServer);
      endDateTime.set('hour', value);
      const finalDate = endDateTime.format('MMMM DD YYYY HH:mm');
      const dateForServer = moment(endDateTime).format();
      this.props.updateNewActivityEndDate(finalDate, dateForServer);
      if (value.length === 2) {
        this.inputRefs.toMinute.focus()
      }
    }
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
      this.props.updateToMinute(value);
      const endDateTime = moment(this.props.newActivityEndDateForServer);
      endDateTime.set('minute', value);
      const finalDate = endDateTime.format('MMMM DD YYYY HH:mm');
      const dateForServer = moment(endDateTime).format();
      this.props.updateNewActivityEndDate(finalDate, dateForServer);
    }
  }
  render(){
    const { fromHour, fromMinute, toHour, toMinute } = this.props;

    return(
      <KeyboardAvoidingView style={style.container}>
        <View>
          <Text style={style.text}>
            {I18n.t('startingHour')}
          </Text>

          <View style={style.hourContainer}>
            <TextInput
              style={style.input}
              autoCorrect={false}
              placeholderTextColor="silver"
              placeholder="0"
              value={fromHour}
              maxLength={2}
              autoCapitalize="none"
              selectionColor="#ffffff"
              keyboardType="numeric"
              onChangeText={this.addFromHour}
              underlineColorAndroid={colors.skyBlue}
              ref={ref => this.inputRefs['fromHour'] = ref}
              inputRef="fromHour"
            />
            <Text style={style.hourText}>
              :
            </Text>
            <TextInput
              style={style.input}
              autoCorrect={false}
              placeholderTextColor="silver"
              placeholder="00"
              value={fromMinute}
              maxLength={2}
              autoCapitalize="none"
              selectionColor="#ffffff"
              keyboardType="numeric"
              onChangeText={this.addFromMinute}
              underlineColorAndroid={colors.skyBlue}
              ref={ref => this.inputRefs['fromMinute'] = ref}
              inputRef="fromMinute"
            />
          </View>
        </View>

        <View>
          <Text style={style.text}>
            {I18n.t('endingHour')}
          </Text>

          <View style={style.hourContainer}>
            <TextInput
              style={style.input}
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
              ref={ref => this.inputRefs['toHour'] = ref}
              inputRef="toHour"

            />
            <Text style={style.hourText}>
              :
            </Text>
            <TextInput
              style={style.input}
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
              ref={ref => this.inputRefs['toMinute'] = ref}
              inputRef="toMinute"
            />
          </View>
        </View>

      </KeyboardAvoidingView>
    )
  }
}

FromTo.propTypes = {
  newActivityDateForServer: PropTypes.string.isRequired,
  newActivityEndDateForServer: PropTypes.string.isRequired,
  updateNewActivityDate: PropTypes.func.isRequired,
  updateNewActivityEndDate: PropTypes.func.isRequired,
  updateFromHour: PropTypes.func.isRequired,
  updateFromMinute: PropTypes.func.isRequired,
  updateToHour: PropTypes.func.isRequired,
  updateToMinute: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  newActivityDateForServer: state.sportunityNewActivity.newActivityDateForServer,
  newActivityEndDateForServer: state.sportunityNewActivity.newActivityEndDateForServer,
  fromMinute: state.sportunityNewActivity.fromMinute,
  fromHour: state.sportunityNewActivity.fromHour,
  toHour: state.sportunityNewActivity.toHour,
  toMinute: state.sportunityNewActivity.toMinute,
});

const dispatchToProps = (dispatch) => ({
  updateNewActivityEndDate: bindActionCreators(updateNewActivityEndDate, dispatch),
  updateNewActivityDate: bindActionCreators(updateNewActivityDate, dispatch),
  updateFromHour: bindActionCreators(updateFromHour, dispatch),
  updateFromMinute: bindActionCreators(updateFromMinute, dispatch),
  updateToHour: bindActionCreators(updateToHour, dispatch),
  updateToMinute: bindActionCreators(updateToMinute, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(FromTo);

I18n.fallbacks = true
I18n.translations = translations;
