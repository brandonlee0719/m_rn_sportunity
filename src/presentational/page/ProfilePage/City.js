import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, StyleSheet, TouchableOpacity, Picker, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Text from 'react-native-text';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
const { GooglePlacesAutocomplete } = require('react-native-google-places-autocomplete');

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import styles from './infoContentStyles';

import translations from 'sportunity/src/translations.js';
import CityMutation from './CityMutation.js';

class City extends PureComponent {

  constructor(){
    super();

    this.state = {
      isModalVisible: false,
      publicAddress: null,
    }
  }

  componentDidMount = () => {
    this.setState({
      publicAddress: this.props.publicAddress,
    })
  }

  showInput = () => {
    this.setState({
      isModalVisible: true
    })
  }

  onBlurOrFocus = () => {
    if (typeof this.props.toggleEditField !== 'undefined')
      this.props.toggleEditField(); 
  }

  submitCityChange = (value) => {

    const completeAddress = {
      address: '',
      country: '',
      city: '',
      zip: '',
    }

    value.address_components.find((item) => {
      if (item.types[0] === 'country'){
        completeAddress.country = item.long_name;
      } else if (item.types[0] === 'locality' || item.types[1] === 'locality') {
        completeAddress.city = item.long_name;
      }
    });
    if (completeAddress.country && completeAddress.city) {
      const userIDVar = this.props.viewer.me.id;
      CityMutation.commit({
          userID: userIDVar,
          user: {
            publicAddress: completeAddress
          },
      },
      () => {
        AsyncStorage.removeItem('userLocation');
        Toast.show(I18n.t('sexUpdated'));
        this.setState({
          isModalVisible: false,
          publicAddress: completeAddress.city + ', ' + completeAddress.country
        });
      },
      error => {
        let errors = JSON.parse(error.getError().source);
        console.log(errors);
      },
      );
    }
  }

  render(){
    const { publicAddress, viewer } = this.props;

    return(
      <View>
        <View style={styles.container}>
          <View style={styles.headingContainer}>
            <Text style={styles.capitalWord}>
              {I18n.t('publicAddress') + '  '}
            </Text>
            {!this.state.isModalVisible && viewer.me && (!viewer.user || viewer.me.id === viewer.user && viewer.user.id) &&
              <TouchableOpacity
                style={styles.addContainer}
                onPress={this.showInput}
              >
                <Icon name="pencil" color={colors.charcoal} size={18} />
              </TouchableOpacity>
            }
          </View>
          {
            this.state.isModalVisible ?
              <GooglePlacesAutocomplete
                placeholder={I18n.t('addressEnterPlaceholder')}
                minLength={2}
                autoFocus={false}
                onBlur={this.onBlurOrFocus}
                onFocus={this.onBlurOrFocus}
                textInputProps={{
                  onFocus: this.onBlurOrFocus,
                  onBlur: this.onBlurOrFocus
                }}
                listViewDisplayed='auto'
                fetchDetails
                autoCorrect={false}
                onPress={(data, details = null) => this.submitCityChange(details)}
                getDefaultValue={() => {
                  return '';
                }}
                query={{
                  key: 'AIzaSyBgGYouaXhHOdcQh_xavWcixXZTVdAsDBw',
                  types: '(cities)',
                  language: (this.props.language || 'en').toLowerCase(),
                  location: this.props.userLocation ? this.props.userLocation.latitude + ','+ this.props.userLocation.longitude : null,
                  radius: 50000
                }}
                styles={googleSearchStyles}
                underlineColorAndroid="transparent"
                nearbyPlacesAPI='GooglePlacesSearch'
                GooglePlacesSearchQuery={{
                  rankby: 'distance',
                }}
                filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
              />
            :
              <Text style={styles.text}>
                { publicAddress ? publicAddress : I18n.t('publicAddressNotProvided') }
              </Text>
          }
        </View>
      </View>
    )
  }

}

City.propTypes = {
  publicAddress: PropTypes.string,
  viewer: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
  userLocation: state.sportunityLocale.userLocation
});

const dispatchToProps = (dispatch) => ({
});

export default connect(
  stateToProps,
  dispatchToProps
)(City);

const googleSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    ...styles.textareaContainer,
    borderTopWidth: 0,
  },
  textInput: {
    ...styles.textarea,
  },
  listView: {
    borderWidth: 1,
    borderColor: colors.grey,
    width: '80%',
  },
  description: {
    fontSize: fonts.size.medium,
    fontWeight: '400',
    color: colors.skyBlue,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
})

I18n.fallbacks = true
I18n.translations = translations;
