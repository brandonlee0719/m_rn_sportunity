import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withNavigation} from 'react-navigation'
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, Image, TouchableOpacity, Text, View, Platform } from 'react-native';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import {graphql, createRefetchContainer, QueryRenderer } from 'react-relay';

import NavigationService from 'sportunity/src/NavigationService';
import environment from 'sportunity/src/createRelayEnvironment';

import HeaderSearchBar from '../../TopMenu/HeaderSearchBar';
import HeaderBackIcon from '../../TopMenu/HeaderBackIcon';

import { platformStyle } from '../../../lib/PlatformUtils/PlatformUtils'

export default Header = ({navigation, placeholder, goBack, onInputChange, inputContent, onClearInput, onSearchBarSelected, onClose, rightIcon}) => (
    <View style={defaultHeaderStyle.container}>
        <View style={{flex: 1}}>
            <HeaderBackIcon 
                navigation={navigation} 
                goBack={() => typeof onClose === 'function' ? onClose() : navigation.goBack()}
                down_arrow={typeof onClose === 'function'}
            />
        </View>
        <View style={{flex: !!rightIcon ? 5 : 7, marginRight: metrics.doubleBaseMargin}}>
            <HeaderSearchBar 
                placeholder={placeholder} 
                onChange={onInputChange}
                value={inputContent}
                onPress={onSearchBarSelected}
                autoFocus={true}
                onClearInput={onClearInput}
            />
        </View>
        <View style={{flex: 1}}>
            {rightIcon}
        </View>
    </View> 
)


const containerBase = {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: metrics.navBarHeight,
    backgroundColor: colors.blue,
    ...Platform.select({ios: {zIndex: 3},android: {elevation: 3, shadowOpacity: 0, shadowColor: 'transparent',shadowOffset: { width: 0, height: 0 },}})
  };
  const containerAndroid = {
    height: 50,
  };
  const containeriOS = {
    height: 70,
    paddingTop: 14,
  };
  
const defaultHeaderStyle = StyleSheet.create({
    container: platformStyle(containerBase, containerAndroid, containeriOS),
    icon: {
        flex: 2,
        marginLeft: 10,
    },
    drawerIconBadgeContainer: {
        flex: 2,
        marginTop: 0,
        top: 0,
    },
    text: {
        flex: 20,
        color: colors.white,
        ...fonts.style.h5,
        textAlign: 'center',
    }
})
  