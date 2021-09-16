import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Animated,
  AsyncStorage,
  PermissionsAndroid,
  Linking, 
  Alert,
  ActivityIndicator
} from 'react-native';
import Geocoder from 'react-native-geocoder';
import Permissions from 'react-native-permissions';
import Text from 'react-native-text';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
const { GooglePlacesAutocomplete } = require('react-native-google-places-autocomplete');
import OpenSettings from 'react-native-open-settings';

Geocoder.fallbackToGoogle("AIzaSyCjT33JyzdH2YAREwWrKjvJ5uBdI_7Ifpc");

import translations from 'sportunity/src/translations.js';
import { updateUserLocation, updateUserCountry, updateUserCurrency } from 'sportunity/src/action/localeActions.js';
import { colors, images } from 'sportunity/src/theme';
import { styles, googleSearchStyles } from './style';

const geoLocationOptions = {
  timeout: 20000,
  maximumAge: 3600000,
  enableHighAccuracy: false,
};

class AskUserLocation extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      askAddressTopHeight: new Animated.Value(0),
      askAddressTopMaxHeight: 0,
      isLoadingLocation: false,
      isBlured: true
    };
  }

  onBlurOrFocus = () => {
    if (this.state.askAddressTopHeight._value === 0) {
      Animated.timing(this.state.askAddressTopHeight, {
        toValue: this.state.askAddressTopMaxHeight, 
        duration: 200
      }).start()
      setTimeout(() => this.setState({isBlured: true}), 20);
    }
    else {
      Animated.timing(this.state.askAddressTopHeight, {
        toValue: 0, 
        duration: 100
      }).start()
      setTimeout(() => this.setState({isBlured: false}), 10);
    }
  }

  getLocationPermission = (onGranted, onRejected) => {
    const isAndroid = Platform.OS === 'android';
    return isAndroid ? this.getLocationPermissionAndroid(onGranted, onRejected) : this.getLocationPermissionIos(onGranted, onRejected);
  }

  getLocationPermissionAndroid = async (onGranted, onRejected) => {
    try {
      const locationAccess = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      if (locationAccess === PermissionsAndroid.RESULTS.GRANTED) {
        typeof onGranted === 'function' && onGranted();
      } 
      else {
        typeof onRejected === 'function' && this.setState({isLoadingLocation: false}) && onRejected();
      }
    } 
    catch (err) {
      console.warn(err);
    }
  }

  openSettings = () => {
    const isIos = Platform.OS === 'ios';

    if (isIos) {
      Linking.openURL('app-settings:');
    } 
    else {
      OpenSettings.openSettings();
    }
  }

  locationPermissionAlert = () => {
    Alert.alert(
      'GPS access not granted',
      'Please enable GPS permissions from settings',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Settings', onPress: this.openSettings },
      ],
    );
  }

  getLocationPermissionIos = async (onGranted, onRejected) => {
    const locationAccess = await Permissions.request('location');
    if (locationAccess === 'authorized') {
      typeof onGranted === 'function' && onGranted();
    } else {
      typeof onRejected === 'function' && onRejected();
    }
  }

  handleGPSNotAvailable = ({ alreadyUsingLowAccuracy }) => {
    if (alreadyUsingLowAccuracy === true) {
      Alert.alert(I18n.t('alert'), I18n.t('sportunitiesGPSNotActivated'));
      this.setState({isLoadingLocation: false})
    }
    else 
      this.getUserLocation({ useLowAccuracy: true });
  }

  getUserLocation = async ({ useLowAccuracy }) => {
    const options = useLowAccuracy === true ? { ...geoLocationOptions, enableHighAccuracy: false } : geoLocationOptions;
    this.setState({isLoadingLocation: true})
    const onGranted = () => {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          const { city, country } = await this.getLocaleFromLatLng({ latitude, longitude });
          this.setDefaultAddress({ latitude, longitude, city, country });
          this.setState({isLoadingLocation: false})
        },
        error => this.handleGPSNotAvailable({ alreadyUsingLowAccuracy: useLowAccuracy, error }),
        options,
      );
    }
 
    this.getLocationPermission(onGranted, this.locationPermissionAlert);
  }

  getLocaleFromLatLng = ({ latitude, longitude }) => {
    return new Promise((resolve, reject) => {
      Geocoder.geocodePosition({ lat: latitude, lng: longitude }).then((results) => {
        let city, country;
        for (var a = 0 ; a < results.length; a++) {
          if (results[a].locality && results[a].country) {
            city = results[a].locality;
            country = results[a].country;
            resolve({ city, country });
            break;
          }
        }
        reject('No city or country corresponding to latitute and longitude!');
      });
    });
  }

  getCountryCurrency = countryCode => {
    if (countryCode === 'CH')
      return 'CHF'
    else 
      return 'EUR'
  }

  setDefaultAddress = (userAddress) => {
    AsyncStorage.setItem('userLocation', JSON.stringify({
      latitude: userAddress.latitude,
      longitude: userAddress.longitude,
      city: userAddress.city,
      country: userAddress.country
    }));
    this.props.updateUserLocation({
      latitude: userAddress.latitude, 
      longitude: userAddress.longitude, 
      city: userAddress.city,
      country: userAddress.country
    })
    this.props.updateUserCountry(userAddress.country)
    this.props.updateUserCurrency(this.getCountryCurrency(userAddress.country))

    this.props.updateLocation(userAddress);
  }

  render() {
    
    return (
      <KeyboardAvoidingView 
        style={styles.askAddressContainer} 
        behavior={'position'} 
        contentContainerStyle={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -200 : -240}>
        <Animated.View 
          onLayout={(event) => {
            var {x, y, width, height} = event.nativeEvent.layout;
            if (this.state.askAddressTopMaxHeight === 0){
              this.setState({askAddressTopMaxHeight: height > 0 ? height : 160});
              this.state.askAddressTopHeight.setValue(height > 0 ? height : 160);
            }
          }}
          style={{height: this.state.askAddressTopHeight, alignItems: 'center'}}
        >
          <Image source={ images.search_black} style={styles.askAddressImage}/>
          {this.state.isBlured && <Text style={styles.askAddressTitle}>{this.props.label}</Text>}
          {!this.state.isLoadingLocation && this.state.isBlured && 
            <View style={{alignItems: 'center'}}>
              <Text style={styles.askAddressAdd}>{I18n.t('sportunitiesAddLocationLocation')}</Text>
              <Text>{I18n.t('or')}</Text>
              <TouchableOpacity onPress={this.getUserLocation}>
                <Text style={styles.askAddressCurrentLocation}>{I18n.t('sportunitiesAddLocationCurrentLocation')}</Text>
              </TouchableOpacity>
            </View>
          }
        </Animated.View>
        {this.state.isLoadingLocation 
        ? <View style={styles.loadingContainer}>
            <ActivityIndicator
              animating={this.state.isLoadingLocation}
              size="large"
              color={colors.blue}
            />
          </View>
        : <GooglePlacesAutocomplete
            placeholder={I18n.t('addressEnterPlaceholder')}
            minLength={2}
            autoFocus={false}
            listViewDisplayed='auto'
            fetchDetails
            getDefaultValue={() => {
                return '';
            }}
            textInputProps={{
              autoCorrect: false,
              onFocus: this.onBlurOrFocus,
              onBlur: this.onBlurOrFocus,
              underlineColorAndroid:'transparent'
            }}
            onPress={(data, details = null) => {
              let country;
              details && details.address_components.forEach((item) => {
                if (item.types && item.types.length > 0 && item.types.indexOf("country") >= 0)
                  country = item.short_name;
              })
              details && this.setDefaultAddress({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                city: details.name,
                country
              })
            }}
            query={{
              key: 'AIzaSyBgGYouaXhHOdcQh_xavWcixXZTVdAsDBw',
              language: (this.props.language || 'en').toLowerCase(),
              location: this.props.userLocation ? this.props.userLocation.latitude + ','+ this.props.userLocation.longitude : null,
              radius: 50000
            }}
            styles={googleSearchStyles}
            nearbyPlacesAPI='GooglePlacesSearch'
            GooglePlacesSearchQuery={{
              rankby: 'distance',
            }}
            enablePoweredByContainer={false}
            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
          />
        }
      </KeyboardAvoidingView>
    )
  }
}

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
})

const dispatchToProps = (dispatch) => ({
  updateUserLocation: bindActionCreators(updateUserLocation, dispatch),
  updateUserCountry: bindActionCreators(updateUserCountry, dispatch),
  updateUserCurrency: bindActionCreators(updateUserCurrency, dispatch),
});

export default connect(stateToProps, dispatchToProps)(AskUserLocation);

I18n.fallbacks = true

I18n.translations = translations;
