import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Text from 'react-native-text';
import {LocaleConfig} from 'react-native-calendars';
import DateRangePicker from '../../../DateSportunity/DateRangePicker'

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import FiltersListItem from '../FiltersListItem';
import FilterModal from '../FilterModal'
import styles from './style';
import { buttonStyle } from '../style'
import { metrics, images, colors } from '../../../../theme';

// const FilterDetailDates = (props) => {
class FilterDetailDates extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })

  render = () => {
    const { from, to, onDateSelected, startDate, clearDateFilter, selectedStatus } = this.props;
    let { isOpen } = this.state;
    let From = {
      date: from ? new Date(from) : new Date(),
      day: '',
      textDate: ''
    }
    let To = {
      date: to ? new Date(to) : new Date(),
      day: '',
      textDate: ''
    }
    const weekday = I18n.t('weekdays')
    const months = I18n.t('months')
    if (from !== null) {
      From.day = weekday[From.date.getDay()]
      From.textDate = `${From.date.getDate()} ${months[From.date.getMonth()]} ${From.date.getFullYear()} `
    }
    if (to !== null) {
      To.day = weekday[To.date.getDay()]
      To.textDate = `${To.date.getDate()} ${months[To.date.getMonth()]} ${To.date.getFullYear()} `
    }

    LocaleConfig.defaultLocale = I18n.locale.toLowerCase();

    return (
      <View>
       <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
            <View style={buttonStyle.headerCol}>
                <Text style={buttonStyle.headerText}>
                    {I18n.t('filterDates')}
                </Text>
                {from && to
                ? <View>
                    <Text style={buttonStyle.select}>{I18n.t('from2') + ': ' + From.textDate}</Text>
                    <Text style={buttonStyle.select}>{I18n.t('to2') + ': ' + To.textDate}</Text>
                  </View>
                : <Text style={buttonStyle.select}>{I18n.t('select')}</Text>
                }
            </View>
            <Image
                style={buttonStyle.headerIcon}
                source={images.right_arrow_blue}
            />
        </TouchableOpacity>
        {
          from && to &&
            <FiltersListItem
              caption={I18n.t('clear')}
              itemStyle={buttonStyle.footerViewStyle}
              captionStyle={buttonStyle.footerCaptionStyle}
              onPress={clearDateFilter}
            />

        }
        {
          isOpen &&
          <FilterModal
                isModalVisible={isOpen}
                onRequestClose={() => this.setState({isOpen: false})}
                title={I18n.t('filterDates')}
                displayValidationButton={true}>
              <View style={styles.applyView}>
                <View style={styles.datesFromToView}>
                  <View style={styles.datesFromView}>
                    <View style={styles.datesFromTopView}>
                      <Text style={styles.fromLabel}>{I18n.t('from')}</Text>
                    </View>
                    <View style={styles.datesFromBottomView}>
                      <Text style={styles.fromValue}>{From.day}</Text>
                      <Text style={styles.fromValue}>{From.textDate}</Text>
                    </View>
                  </View>
                  <View style={styles.datesToView}>
                    <View style={styles.datesFromTopView}>
                      <Text style={styles.fromLabel}>{I18n.t('to')}</Text>
                    </View>
                    <View style={styles.datesFromBottomView}>
                      <Text style={styles.fromValue}>{To.day}</Text>
                      <Text style={styles.fromValue}>{To.textDate}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.datePicker}>
                  <ScrollView>
                      {/* monthCount={3}
                      startDate={startDate}
                      selectFrom={From.date}
                      selectTo={To.date}
                      startFromMonday={Boolean(true)}
                      isFutureDate={selectedStatus.indexOf('Past') < 0}
                      width={metrics.screenWidth - 80}
                      onSelectionChange={(current, previous) => {
                        onDateSelected(current, previous);
                      }}
                      bodyBackColor={colors.background}
                      weekDaysLocale={weekday}
                      monthsLocale={months} */}
                    <DateRangePicker
                      minDate={selectedStatus.indexOf('Past') < 0 ? new Date() : '2018-01-01'}
                      firstDay={1}
                      initialRange={From && From.date && To && To.date ? [From.date, To.date] : ['2019-01-01', '2019-01-01']}
                      onSuccess={onDateSelected}
                      theme={{ markColor: colors.bloodOrange, markTextColor: 'white' }}
                    />
                  </ScrollView>
                </View>
              </View>
          </FilterModal>
        }
      </View>
    );
  };
}


FilterDetailDates.propTypes = {
  startDate: PropTypes.object,
  from: PropTypes.any,
  to: PropTypes.any,
};

export default FilterDetailDates;

I18n.fallbacks = true
I18n.translations = translations;
