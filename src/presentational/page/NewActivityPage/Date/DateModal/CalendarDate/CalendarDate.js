import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Switch, Alert } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateNewActivityDate, updateNewActivityEndDate, updateFromHour, updateFromMinute,updateToHour, updateToMinute } from 'sportunity/src/action/newActivityActions';
import moment from 'moment';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { colors } from 'sportunity/src/theme';

import { style, calendarStyle} from './style';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Jan.', 'Fév.', 'Mar.', 'Avr.', 'Mai', 'Juin', 'Juil', 'Août', 'Sep.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
};
LocaleConfig.locales['en'] = {
  monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
};

class CalendarDate extends Component {

  constructor(){
    super();
    this.state = {
      switchMoreThanADay: false,
      displayCalendar: false
    }
  }

  componentDidMount = () => {
    const { updateNewActivityDate, updateNewActivityEndDate, newActivityDate, newActivityEndDate} = this.props;

    LocaleConfig.defaultLocale = I18n.locale.substring(0,2).toLowerCase() || 'en';
    this.setState({displayCalendar: true})
    
    if (!newActivityDate && !newActivityEndDate) {
      const today = new Date();
      today.setHours(0);
      today.setMinutes(0);
      today.setSeconds(0);
      const finalDate = moment(today).format('MMMM DD YYYY');
      const dateForServer = moment(today).format();
      updateNewActivityDate(finalDate, dateForServer);
      updateNewActivityEndDate(finalDate, dateForServer);
    }
    if (newActivityDate && newActivityEndDate && !moment(newActivityDate, 'MMMM DD YYYY').isSame(moment(newActivityEndDate, 'MMMM DD YYYY')))
      this.setState({switchMoreThanADay: true})
  }

  addDate = (date) => {
    const {newActivityDate, newActivityEndDate, updateFromHour, updateFromMinute, updateNewActivityDate, updateToHour, updateToMinute, updateNewActivityEndDate} = this.props;
    
    if (newActivityDate && !newActivityEndDate && this.state.switchMoreThanADay) {
      this.addEndDate(date)
    }
    else {
      const today = new Date();
      const finalDate = moment(date.dateString).format('MMMM DD YYYY');
      
      const dateForServer = moment(date.dateString).format();
      if(moment(dateForServer).isSameOrAfter(today, 'day')) {
        updateFromHour('');
        updateFromMinute('');
        updateNewActivityDate(finalDate, dateForServer);
        if (!this.state.switchMoreThanADay) {
          updateToHour('');
          updateToMinute('');
          updateNewActivityEndDate(finalDate, dateForServer);
        }
        else {
          updateToHour('');
          updateToMinute('');
          updateNewActivityEndDate('', '');
        }
      } 
      else {
        Alert.alert(I18n.t('alert'), I18n.t('futureDateAlert'))
        return false;
      }
    }
  }

  addEndDate = (date) => {
    const {updateToHour, updateToMinute, updateNewActivityEndDate, newActivityDate} = this.props;

    const today = new Date();
    const finalDate = moment(date.dateString).format('MMMM DD YYYY');
    const dateForServer = moment(date.dateString).format();

    if (moment(dateForServer).isBefore(today, 'day')) {
      Alert.alert(I18n.t('alert'), I18n.t('futureDateAlert'))
      return false;
    } 
    else if (moment(dateForServer).isSameOrAfter(moment(newActivityDate, 'MMMM DD YYYY'), 'day')) {
      updateToHour('');
      updateToMinute('');
      updateNewActivityEndDate(finalDate, dateForServer);
    } 
    else {
      Alert.alert(I18n.t('alert'), I18n.t('endingDateAlert'))
      return false;
    }
  }

  _switchMoreThanADay = () => {
    if (this.state.switchMoreThanADay) {
      this.addEndDate(moment(this.props.newActivityDate, 'MMMM DD YYYY'))
    }
    else {
      this.addEndDate(moment(this.props.newActivityDate, 'MMMM DD YYYY').add(1,'days'))
    }

    this.setState({switchMoreThanADay: !this.state.switchMoreThanADay})
  }

  getDateString(timestamp) {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    let dateString = `${year}-`
    if (month < 10) {
      dateString += `0${month}-`
    } else {
      dateString += `${month}-`
    }
    if (day < 10) {
      dateString += `0${day}`
    } else {
      dateString += day
    }

    return dateString
  }

  getDatesBetween = (startTimestamp, endTimestamp) => {
    let currentTimestamp = startTimestamp
    const { newActivityDate, newActivityEndDate, newActivityDateForServer, newActivityEndDateForServer } = this.props; 
    if (!isNaN(currentTimestamp) && !isNaN(endTimestamp)) {
      if (currentTimestamp < endTimestamp) { 

        const period = {}
        
        while (currentTimestamp < endTimestamp) {
          const dateString = this.getDateString(currentTimestamp)
          period[dateString] = {
            textColor: colors.white,
            color: colors.skyBlue,
            startingDay: currentTimestamp === startTimestamp,
          }
          currentTimestamp += 24 * 60 * 60 * 1000
        }
        const dateString = this.getDateString(endTimestamp)
        period[dateString] = {
          textColor: colors.white,
          color: colors.skyBlue,
          endingDay: true,
        }
        return period
      }
    }
    else {
      return {
        [moment(newActivityDateForServer).format('YYYY-MM-DD')]: {color: colors.skyBlue, textColor: colors.white, startingDay: true, endingDay: true}
      }
    }
  }

  render = () => {
    const { newActivityDate, newActivityEndDate, newActivityDateForServer, newActivityEndDateForServer } = this.props; 

    return(
      <View style={style.container}>
        <View style={style.row}>
          <Text style={style.title}>{I18n.t('moreThanADay')}</Text>
          <Switch
            onTintColor={colors.skyBlue}
            value={this.state.switchMoreThanADay}
            onValueChange={this._switchMoreThanADay} />
        </View>
        <Text style={style.title}>
          {this.state.switchMoreThanADay 
          ? I18n.t('choosePeriod')
          : I18n.t('startingDate')
          }
        </Text>
        {this.state.displayCalendar && (
          this.state.switchMoreThanADay
          ? <Calendar
              minDate={moment().format('YYYY-MM-DD')}
              //markedDates={{[moment(newActivityEndDateForServer).format('YYYY-MM-DD')]: {selected: true, marked: true, selectedColor: colors.skyBlue}}}
              markedDates={this.getDatesBetween(new Date(newActivityDate).getTime(), new Date(newActivityEndDate).getTime())}
              onDayPress={(date) => this.addDate(date)}
              firstDay={1}
              onPressArrowLeft={substractMonth => substractMonth()}
              onPressArrowRight={addMonth => addMonth()}
              markingType={'period'}
            />
          : <Calendar
              minDate={new Date()}
              markedDates={{[moment(newActivityDateForServer).format('YYYY-MM-DD')]: {selected: true, marked: true, selectedColor: colors.skyBlue}}}
              onDayPress={(date) => this.addDate(date)}
              firstDay={1}
              onPressArrowLeft={substractMonth => substractMonth()}
              onPressArrowRight={addMonth => addMonth()}
            />
        )}
      </View>
    )
  }
}

CalendarDate.propTypes = {
  updateNewActivityDate: PropTypes.func.isRequired,
  updateNewActivityEndDate: PropTypes.func.isRequired,
  newActivityDate: PropTypes.string.isRequired,
  newActivityEndDate: PropTypes.string.isRequired,
};

const stateToProps = (state) => ({
  newActivityDate: state.sportunityNewActivity.newActivityDate,
  newActivityEndDate: state.sportunityNewActivity.newActivityEndDate,
  newActivityDateForServer: state.sportunityNewActivity.newActivityDateForServer,
  newActivityEndDateForServer: state.sportunityNewActivity.newActivityEndDateForServer,  
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
)(CalendarDate);

I18n.fallbacks = true
I18n.translations = translations;
