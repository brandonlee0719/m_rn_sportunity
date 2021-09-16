import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, Image, Platform, View, TextInput } from 'react-native';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import { metrics, images, colors, fonts } from 'sportunity/src/theme';
import {graphql, createRefetchContainer, QueryRenderer } from 'react-relay';

import NavigationService from 'sportunity/src/NavigationService';
import environment from 'sportunity/src/createRelayEnvironment';
import HeaderCrossIcon from './HeaderCrossIcon'

class HeaderSearchBarView extends PureComponent {
    openSearchModule = () => {
        if (typeof this.props.onPress === 'function') {
            this.props.onPress()
        }
    }

    render() {
        const {placeholder, onChange, value, autoFocus = false, onClearInput} = this.props; 

        return (
            <View style={[styles.searchBarContainer, Platform.select({ios: {zIndex: 40}, android: {elevation: 3}})]}>
                <Image source={images.search} style={styles.searchBarIcon}/>
                <TextInput
                    style={styles.searchBarInput}
                    placeholder={placeholder}
                    placeholderTextColor={colors.white}
                    underlineColorAndroid="transparent"
                    autoCorrect={false}
                    onFocus={this.openSearchModule}
                    onChangeText={onChange}
                    value={value}
                    selectionColor={colors.white}
                    autoFocus={autoFocus}
                />
                <View style={{position: 'absolute', right: -23}}>  
                    {!!value && value !== '' && <HeaderCrossIcon onPress={onClearInput}/>}
                </View>
            </View>
        )
    }
}

export default HeaderSearchBarView 
const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchBarInput: {
        padding: 5,
        flex: 1,
        backgroundColor: colors.lightBlue,
        fontSize: fonts.size.medium,
        height: 35,
        maxHeight: 30,
        color: colors.white,
        paddingLeft: metrics.doubleBaseMargin * 2,
    },
    searchBarIcon: {
        zIndex: 3, 
        tintColor: colors.white,
        position: 'absolute',
        left: metrics.baseMargin,
    },
})