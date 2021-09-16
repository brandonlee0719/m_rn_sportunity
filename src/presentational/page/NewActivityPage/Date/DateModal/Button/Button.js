import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import { updateDateModal } from 'sportunity/src/action/newActivityActions';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import style from './style';

class Button extends Component{
  componentDidMount() {
    this.props.onRef && this.props.onRef(this)
  }
  
  componentWillUnmount() {
    this.props.onRef && this.props.onRef(undefined)
  }

  openCloseDateModal = () => {
    const { updateDateModal, isDateModalVisible, updateNewActivityDate, updateNewActivityEndDate, newActivityDate, newActivityEndDate, repeatValue, isRepeatSwitchOn } = this.props; 
      const today = new Date();
      if(newActivityDate === '') {
        Alert.alert(I18n.t('alert'), I18n.t('selectStartingDateAlert'))
        return false;
      } 
      else if(newActivityEndDate === '' || newActivityEndDate === "Invalid date") {
        Alert.alert(I18n.t('alert'), I18n.t('selectEndingDateAlert'))
        return false;
      } 
      else if(
        moment(newActivityDate, 'MMMM DD YYYY HH:mm').isBefore(moment(today, 'MMMM DD YYYY HH:mm')) ||
        moment(newActivityEndDate, 'MMMM DD YYYY HH:mm').isBefore(moment(today, 'MMMM DD YYYY HH:mm'))
      ){
        Alert.alert(I18n.t('alert'), I18n.t('futureDateAlert'))
        return false;
      } 
      else if(
        moment(newActivityDate, 'MMMM DD YYYY').isSame(newActivityEndDate, 'MMMM DD YYYY') &&
        moment(newActivityEndDate, 'MMMM DD YYYY HH:mm').hour() === 0 &&
        moment(newActivityEndDate, 'MMMM DD YYYY HH:mm').minutes() === 0
      ){
        Alert.alert(I18n.t('alert'), I18n.t('midnightAlert'));
        return false;
      } 
      else if (moment(newActivityEndDate, 'MMMM DD YYYY HH:mm').isSameOrBefore(moment(newActivityDate, 'MMMM DD YYYY HH:mm'))) {
        Alert.alert(I18n.t('endingDateAlert'));
        return false;
      } 
      else if (isRepeatSwitchOn && (isNaN(repeatValue) || repeatValue === "")) {
        Alert.alert(I18n.t('selectARepeatitionNumber'))
        return false;
      }
      else if (isRepeatSwitchOn && (parseInt(repeatValue) > 52 || parseInt(repeatValue) <= 0)) {
        Alert.alert(I18n.t('selectARepeatitionNumberError'))
        return false;
      }
      else {
        updateDateModal(false);
        this.props.onValidDate();
      }
  }

  render() {
    const { updateDateModal, isDateModalVisible, updateNewActivityDate, updateNewActivityEndDate, newActivityDate, newActivityEndDate, repeatValue, isRepeatSwitchOn } = this.props; 
    return(
      <View style={style.container}>
        <TouchableOpacity
          style={style.buttonContainer}
          onPress={this.openCloseDateModal}
        >
          <Text style={style.text}>
            {I18n.t('validate')}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Button.propTypes = {
  updateDateModal: PropTypes.func.isRequired,
  isDateModalVisible: PropTypes.bool.isRequired,
  newActivityDate: PropTypes.string.isRequired,
  newActivityEndDate: PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  isDateModalVisible: state.sportunityNewActivity.isDateModalVisible,
  newActivityDate: state.sportunityNewActivity.newActivityDate,
  newActivityEndDate: state.sportunityNewActivity.newActivityEndDate,
  isRepeatSwitchOn: state.sportunityNewActivity.isRepeatSwitchOn,
  repeatValue: state.sportunityNewActivity.repeatValue,
});

const dispatchToProps = (dispatch) => ({
  updateDateModal: bindActionCreators(updateDateModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Button);

I18n.fallbacks = true
I18n.translations = translations;
