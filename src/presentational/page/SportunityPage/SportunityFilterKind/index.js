import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import filterKind from '../../../../customPropType/FilterKind';
import change from '../../../../action/changeSportunityFilterKind';
import SportunityFilterKindTabItem from './SportunityFilterKindTabItem';
import { images, colors } from 'sportunity/src/theme';
import style from './style';
import { clearFilters } from 'sportunity/src/action/FiltersStateActions.js'
import * as globals from '../../../../lib/globalsjs/globals';

const openDrawer = () => globals.object('openDrawer').call('openDrawer');
const maxBadgeNumberStr = '99+'
const maxBadgeNumber = (badgeNumber) => badgeNumber > 99 ? maxBadgeNumberStr : badgeNumber;

// List of tuples containing kind and description for
// each tab:

// const tabs = [
//   [
//     'Available',    // 1º Kind
//     I18n.t('sportunitiesTabFind'),   // 2º Description
//     images.search,
//   ],
//   // [
//   //   'Booked',
//   //   'Booked',
//   //   images.calendarCheck,
//   // ],
//   [
//     'Organized',
//     I18n.t('sportunitiesTabMySportunities'),
//     images.sportunity,
//   ],
// ];

class SportunityFilterKind extends PureComponent{
  constructor() {
    super()
    this.state = {
      lastClicked: null
    }
  }

  changeKind = (kind) => {
    const {navigation} = this.props
    // Avoiding the user to click too fast on tabs
    if (new Date() - this.state.lastClicked > 500 && this.props.selectedKind !== kind) {
      this.setState({lastClicked: new Date()})
      this.props.clearFilters()
      if (kind === 'Organize')
        navigation.navigate('new_activity')
      else {
        this.props.changeKind(kind);

        if(kind === 'Filter')
          navigation.navigate('filters')
        else
          navigation.navigate('sportunityList')
      }
    }
  }

  render(){
    const {user} = this.props
    const tabs = 
      [
        {
          kind: 'Organized',
          desc: I18n.t('sportunitiesTabMySportunities'),
          iconUrl: images.sportunity,
          action: () => this.props.navigation.replace('sportunityList'),
          route: 'sportunityList'
        },
        /*{
          kind:'Available',    // 1º Kind
          desc: I18n.t('sportunitiesTabFind'),   // 2º Description
          iconUrl: images.search,
          action: () => this.changeKind('Available')
        },*/
        {
          kind:'Circles',
          desc: user && user.profileType === 'ORGANIZATION' ? I18n.t('circleTitleClubs') : I18n.t('circleTitleOthers'),
          iconUrl: images.circle2,
          action: () => this.props.navigation.replace('circles'),
          style: {
            width: 24,
            height: 20,
            tintColor: colors.white,
          },
          route: 'circles'
        },
        {
          kind:'Organize',
          desc: I18n.t('sportunitiesTabOrganize'),
          iconUrl: images.organize,
          action: () => this.changeKind('Organize')
        }
    ];

    this.props.user && this.props.user.id && tabs.push({
      kind:'Notifications',
      desc: I18n.t('notifications'),
      iconUrl: images.bell,
      action: () => this.props.navigation.navigate('notifications'),
      badgeNumber: this.props.unreadNotifications
    })

    tabs.push({
      kind:'Menu',
      desc: I18n.t('menu'),
      iconUrl: images.menu_burger,
      action: openDrawer,
      badgeNumber: this.props.unreadAllTotal
    })

    return (
      <View style={style.tabContainer}>

        {
          tabs.map((item, index) => {
            return(
              <SportunityFilterKindTabItem
                key={index}
                description={item.desc}
                kind={item.kind}
                iconUrl={item.iconUrl}
                selected={item.route === this.props.navigation.state.routeName}
                action={item.action}
                customStyle={item.style}
                badgeNumber={item.badgeNumber}
              />
            )
          })
        }

      </View>
    )
  }
}


SportunityFilterKind.propTypes = {
  // What is the currently selected kind of sportunity
  selectedKind: filterKind.isRequired,
  // What function to call in order to change the selected kind
  changeKind: PropTypes.func.isRequired,
};

const mapsToState = ({
  sportunityProfile: { counts: { unreadChats, unreadNotifications, unreadAllTotal } }
}) => ({
  unreadChats: maxBadgeNumber(unreadChats),
  unreadNotifications: maxBadgeNumber(unreadNotifications),
  unreadAllTotal: maxBadgeNumber(unreadAllTotal),
});

const stateToProps = ({sportunityList, sportunityProfile: { counts: { unreadChats, unreadNotifications, unreadAllTotal } }}) => ({
  selectedKind: sportunityList.selectedKind,
  unreadChats: maxBadgeNumber(unreadChats),
  unreadNotifications: maxBadgeNumber(unreadNotifications),
  unreadAllTotal: maxBadgeNumber(unreadAllTotal),
});
const dispatchToProps = (dispatch) => ({
  changeKind: (kind) => dispatch(change(kind)),
  clearFilters: bindActionCreators(clearFilters, dispatch),
});

export default connect(stateToProps,dispatchToProps)(SportunityFilterKind);

I18n.fallbacks = true

I18n.translations = translations;
