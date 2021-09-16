import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import I18n from 'sportunity/src/lib/I18n';
import merge from 'lodash/merge';
import DrawerIcon from '../Drawer/DrawerIcon';
import { platformStyle } from '../../lib/PlatformUtils/PlatformUtils'
import {
  images,
  colors,
  metrics,
  fonts,
} from 'sportunity/src/theme';
import * as globals from '../../lib/globalsjs/globals';

const openDrawer = () => globals.object('openDrawer').call('openDrawer');
const maxBadgeNumberStr = '99+'
const maxBadgeNumber = (badgeNumber) => badgeNumber > 99 ? maxBadgeNumberStr : badgeNumber;

export const SportunityKindTabItem = ({
  selected,
  action,
  iconUrl,
  component,
  badgeNumber = 0,
  style: customStyle,
}) => {
  const styleItem = selected ? selectedStyle : nonSelectedStyle;
  const imageStyle = customStyle || {};
  
  return component?
    component
    :
    (<TouchableOpacity
      onPress={() => action()}
      underlayColor='transparent'
      style={styleItem.container}
    >
      <Image source={iconUrl} style={[styleItem.tabIcon, imageStyle]}/>
      {badgeNumber > 0 || badgeNumber==maxBadgeNumberStr
        ?
          <View style={style.badgeContainer}>
            <Text style={style.badge}>{badgeNumber}</Text>
          </View>
        :
        null
      }
    </TouchableOpacity>);
};

const tabs = ({
  user,
  switchScene,
  unreadChats,
  unreadNotifications,
  unreadAllTotal,
  selectedKind,
  title
}) => {
  return [
  {
    component:
      <TouchableOpacity onPress={() => user && switchScene('meProfile')} style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center', width: 50, height: 50, borderWidth: 0, borderColor: colors.skyBlue, backgroundColor: colors.skyBlue }}>
        <Image source={user && user.avatar ? { uri: user.avatar } : require('../../../assets/icons/profil-01.png')} style={{ width: 50, height: 50, borderRadius: 35, resizeMode: 'cover' }} />
      </TouchableOpacity>
  },
  {
    component: 
      <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: colors.white, fontSize: 18}}>
          {title}
        </Text>
      </View>
  },
  /*{
    kind: 'notifications',
    iconUrl: images.bell,
    badgeNumber: unreadNotifications,
    action: () => switchScene('notifications'),
  },*/
  {
    kind: 'Chat',
    iconUrl: images.comments,
    badgeNumber: unreadChats,
    action: () => switchScene('chat'),
  },
]};

const TabStateHoc = (Tabs) => {

  return hcomp = class extends Component {
    state = {
      selected: null,
    }

    changeKindWrapper = (kind, action) => () => {
      this.setState({
        [kind]: true,
        selected: kind,
      })
      return action();
    }

    selectedKind = () => this.state.selected;

    switchScene = (target) => {
      this.props.navigation.navigate(target);
    }

    render() {
      return (
        <Tabs
          {...this.state}
          {...this.props}
          changeKind={this.changeKindWrapper}
          selectedKind={this.props.selectedKind}
          switchScene={this.switchScene}
        />
      );
    }
  }
}

const TopMenu = ({
  selected,
  user,
  changeKind,
  unreadChats,
  unreadNotifications,
  unreadAllTotal,
  switchScene,
  selectedKind,
  title
}) => (
  <View style={style.container}>
    {tabs({
      user,
      switchScene,
      unreadChats,
      unreadNotifications,
      unreadAllTotal,
      selectedKind,
      title
    }).map(
      ({ kind, iconUrl, component, action, badgeNumber, style: styleTabItem }, index) => {
        return(
          <SportunityKindTabItem
            key={index}
            kind={kind}
            iconUrl={iconUrl}
            component={component}
            selected={kind === selected}
            badgeNumber={badgeNumber}
            action={changeKind(kind, action)}
            style={styleTabItem}
            title={title}
          />
        )
      })
    }
  </View>
)

const containerBase = {
  flexDirection: 'row',
  backgroundColor: colors.blue,
  height: metrics.navBarHeight,
  marginTop: 0,
  borderTopColor: colors.blue,
  borderTopWidth: StyleSheet.hairlineWidth,
  borderBottomColor: colors.blue,
  borderBottomWidth: StyleSheet.hairlineWidth,
  ...Platform.select({ios: {zIndex: 3},android: {elevation: 3, shadowOpacity: 0, shadowColor: 'transparent',shadowOffset: { width: 0, height: 0 },}})
};
const containerAndroid = {
  
  paddingTop: 14,
  height: 70,
};
const containeriOS = {
  height: 70,
  paddingTop: 14,
};
const badgeContainerBase = {
  position: 'absolute',
  width: 18,
  height: 18,
  backgroundColor: colors.red,
  justifyContent: 'center',
  borderRadius: 10,
  alignItems: 'center',
  zIndex: 2,
};
const badgeContainerAndroid = {
  left: 42,
  top: 8,
};
const badgeContaineriOS = {
  left: 37,
  top: 14,
}

const style = StyleSheet.create({
  container: platformStyle(containerBase, containerAndroid, containeriOS),
  icon: {
    width: 25,
    height: 22,
    zIndex: 1,
  },
  badgeContainer: platformStyle(badgeContainerBase, badgeContainerAndroid, badgeContaineriOS),
  badge:{
    color: 'white',
    ...fonts.style.h5,
    fontSize: 10,
  },
});

const nonSelected = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
    paddingBottom: 22, //metrics.sportunitiesBottomTabItemPadding,
    height: metrics.navBarHeight - 10,
  },
  tabIcon: {
    width: 20,
    height: 20,
    tintColor: colors.white,
  },
};

const selected = merge({}, nonSelected, {
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});

const nonSelectedStyle = StyleSheet.create(nonSelected);
const selectedStyle = StyleSheet.create(selected);
const underlayColor = colors.steel;


const mapsToState = ({
  sportunityProfile: { counts: { unreadChats, unreadNotifications, unreadAllTotal } }

}) => ({
  unreadChats: maxBadgeNumber(unreadChats),
  unreadNotifications: maxBadgeNumber(unreadNotifications),
  unreadAllTotal: maxBadgeNumber(unreadAllTotal),
});

const hoc = TabStateHoc(TopMenu);
export default connect(mapsToState)(hoc)
