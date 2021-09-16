import React from 'react';
import { StyleSheet, Switch, View, Text, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ModalPicker from 'react-native-modal-selector';
import I18n from 'react-native-i18n';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import Input, {styles as inputStyles} from '../Input';
import Address from './Address';
import FromTo from './FromTo'
import translations from 'sportunity/src/translations.js';

const Field = ({ type, title, value, error, onChange, disabled, list, ...otherProps }) => {
  
  if (type === 'email') {
    return (
      <View style={styles.textRow}>
        <Text>{title + ': ' + value}</Text>
      </View>
    )
  }
  else if (type === 'address') {
    return (
      <Address
        address={value}
        onChange={onChange}
        title={title}
      />
    )
  }
  else if (type === 'date') {
    return (
      <DatePicker
        style={otherProps.style || styles.datePicker}
        date={value}
        mode="date"
        placeholder={title}
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate="2100-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        showIcon={false}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            tintColor: colors.backgroundColor,
            left: 0,
            marginLeft: 0,
            backgroundColor: '#ffffff',
          },
          dateInput: {
            borderWidth: 2,
            borderColor: colors.skyBlue,
          },
        }}
        onDateChange={onChange}
      />
    )
  }
  else if (type === 'switch') {
    return (
      <View style={styles.switchRow}>
        <Text style={disabled ? styles.disabledText : styles.text}>
          {title}
        </Text>
        <Switch
          disabled={disabled}
          onTintColor={disabled ? colors.gray : colors.skyBlue}
          value={value}
          onValueChange={()=>onChange(!value)} />
      </View>
    )
  }
  else if (type === 'country') {
    return (
      <View style={styles.countryRow}>
        <Text style={styles.text}>
          {title} :
        </Text>
        <View style={{marginLeft: metrics.doubleBaseMargin}}>
          <ModalPicker
            data={countries.map(country => ({key: country, label:country}))}
            initValue={value ? value : I18n.t('accountNationalitySelect')}
            onChange={value => onChange(value.key)}
            cancelText={I18n.t('cancel')}
          />
        </View>
      </View>
    )
  }
  else if (type === 'hourInterval') {
    return (
      <FromTo onUpdate={onChange} value={value} />
    )
  }
  else if (type === 'select') {
    return (
      <View style={styles.countryRow}>
        <Text style={styles.text}>
          {title} :
        </Text>
        <View style={{marginLeft: metrics.doubleBaseMargin}}>
          <ModalPicker
            data={list.map(item => ({key: item, label:item}))}
            initValue={value ? value : I18n.t('select')}
            onChange={value => onChange(value.key)}
            cancelText={I18n.t('cancel')}
          />
        </View>
      </View>
    )
  }
  else
    return (
      <View style={styles.inputRow}>
        <Input
          updateText={onChange}
          defaultValue={value}
          error={error}
          placeholder={title}
          keyboardType={
            type === 'numeric'? 'numeric' : 'default'
          }
          noicon
        />
      </View>
    )
};

const countries = [
  '',
  'Austria',
  'Belgium',
  'Bulgaria',
  'Croatia',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Estonia',
  'Finland',
  'France',
  'Germany',
  'Greece',
  'Hungary',
  'Iceland',
  'Ireland',
  'Italy',
  'Latvia',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Malta',
  'Netherlands',
  'Norway',
  'Poland',
  'Portugal',
  'Romania',
  'Slovakia',
  'Slovenia',
  'Spain',
  'Sweden',
  'United Kingdom',
  'Switzerland',
];

const styles = StyleSheet.create({
  datePicker: {
    width: 200,
    marginHorizontal: 40
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  text: {
    color: colors.charcoal
  },
  disabledText: {
    color: colors.grey
  },
  picker: {
    width: 200,
    color: colors.skyBlue,
    alignSelf: 'center',
  },
  textRow: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin*2,
    marginBottom: metrics.baseMargin
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginLeft: metrics.baseMargin*2,
    //marginRight: metrics.baseMargin*2,
  },
  countryRow: {
    marginVertical: metrics.doubleBaseMargin,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: metrics.baseMargin*2,
    marginRight: metrics.baseMargin*2,
  }

})


export default Field;

I18n.fallbacks = true
I18n.translations = translations;