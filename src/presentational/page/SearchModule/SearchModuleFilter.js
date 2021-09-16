import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableOpacity, Text, View, ActivityIndicator, ScrollView, Modal, Platform } from 'react-native';
import {graphql, createRefetchContainer} from 'react-relay';
import I18n from 'react-native-i18n';

import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';
import addUserStyle from '../../AddUser/style'

import FilterDetailSports from '../FiltersPage/FilterDetailSports';
import FilterDetailPlaces from '../FiltersPage/FilterDetailPlaces'

class SearchModuleFilter extends Component {
    constructor(props) {
        super(props); 
    }


    render() {
        const {show, onClose, viewer, sportunitySport} = this.props
        
        return (
            <Modal
                animationType={'slide'}
                transparent={false}
                visible={show}
                onRequestClose={() => this.setState({selectedCircle: null})}
            >
                <View style={Platform.OS === 'android' ? addUserStyle.headerAndroid : addUserStyle.headerIOS}>
                    <TouchableOpacity
                        onPress={onClose}
                        style={addUserStyle.icon}>
                        <Image source={images.down_arrow}/>
                    </TouchableOpacity>

                    <Text style={addUserStyle.title}>
                        {I18n.t('filters')}
                    </Text>
                </View>

                <FilterDetailSports
                    filters={sportunitySport}
                    viewer={viewer}
                    onRemoveSportFilter={this.props.onRemoveSportFilter}
                    clearSportFilter={this.props.onRemoveSportFilter}
                    action={() => this.props.navigation.navigate('filterSports')}
                />

                {/* <FilterDetailPlaces
                    changePlaceRadius={props.changePlaceRadius}
                    changePlacePosition={props.changePlacePosition}
                    clearPlaceFilter={props.clearPlaceFilter}
                    changePlaceName={props.changePlaceName}
                    radius={placeFilter.radius}
                    lat={placeFilter.lat}
                    lng={placeFilter.lng}
                    placeName={placeFilter.name}
                    isPlaceSelected={isPlaceSelected}
                /> */}
                
            </Modal>
        )
    }
}

export default SearchModuleFilter;

I18n.fallbacks = true
I18n.translations = translations;