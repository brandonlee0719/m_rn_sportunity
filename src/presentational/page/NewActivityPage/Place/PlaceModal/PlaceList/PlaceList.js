import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Switch,
  Alert
} from 'react-native';
import Text from 'react-native-text';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updatePlaceSwitch,
  updatePlace,
  updateAddress,
  updatePlaceModal,
  updateVenue,
  updateInfrastructure,
  updateSlot,
  resetDate
} from 'sportunity/src/action/newActivityActions';

import { colors } from 'sportunity/src/theme';
import { styles, googleSearchStyles } from './style';
import SearchBar from '../SearchBar/SearchBar.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const { GooglePlacesAutocomplete } = require('react-native-google-places-autocomplete');

class PlaceList extends Component {

  componentDidMount() {
    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      query: true
    });

    this.props.relay.refetch(
      refetchVariables,
      null,
      null,
      {force: false}
    );
  }

  onOffPlaceSwitch = () => {
    if (this.props.isPlaceSwitchOn) {
      this.props.updatePlaceSwitch(false);
    } else {
      this.props.updatePlaceSwitch(true);
    }
  }

  addVenue = (item) => {
    this.props.updatePlace(item);
    this.props.updatePlaceModal(false);
  }

  addAddress = (data, details = null) => {
    const completeAddress = {
      address: details.name,
      country: '',
      city: '',
      zip: '',
    }

    details.address_components.find((item) => {
      if (item.types[0] === 'country'){
        completeAddress.country = item.long_name;
      } else if (item.types[0] === 'postal_code') {
        completeAddress.zip = item.long_name;
      } else if (item.types[0] === 'locality') {
        completeAddress.city = item.short_name;
      }
    })

    if (completeAddress.country === ''){
      Alert.alert(I18n.t('alert'), I18n.t('addressSui'));
      return false;
    } else if (completeAddress.city === ''){
      Alert.alert(I18n.t('alert'), I18n.t('addressCity'));
      return false;
    } else {
      this.props.updateAddress(completeAddress)
    }

    this.props.updateAddress(completeAddress)

    if (this.props.venue)
      this.props.updateVenue(null);
    if (this.props.infrastructure)
      this.props.updateInfrastructure(null)
    if (this.props.slot) {
      this.props.updateSlot(null)
      this.props.resetDate()
    }

    this.props.updatePlaceModal(false);
  }

  render() {
    const {
      viewer,
      updatePlace,
      updateAddress,
      updatePlaceModal,
      searchPlaceText,
      isPlaceSwitchOn,
      updatePlaceSwitch,
      updateVenue,
      updateInfrastructure,
      updateSlot,
      resetDate,
      slot,
      infrastructure,
      venue,
      language,
      userLocation
    } = this.props; 

    return(
      <View style={styles.container}>
        {
          !isPlaceSwitchOn ?
            <GooglePlacesAutocomplete
              placeholder={I18n.t('enterAddress')}
              minLength={2}
              autoFocus={false}
              listViewDisplayed='auto'
              fetchDetails
              autoCorrect={false}
              onPress={this.addAddress}
              getDefaultValue={() => {
                return '';
              }}
              query={{
                key: 'AIzaSyBgGYouaXhHOdcQh_xavWcixXZTVdAsDBw',
                language: (language || 'en').toLowerCase(),
                location: userLocation ? userLocation.latitude + ','+ userLocation.longitude : null,
                radius: 50000
              }}
              styles={googleSearchStyles}
              nearbyPlacesAPI='GooglePlacesSearch'
              GooglePlacesSearchQuery={{
                rankby: 'distance',
              }}
              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
            />
            : null
        }

      </View>
    )
  }
}

PlaceList.propTypes = {
  viewer: PropTypes.object.isRequired,
  updatePlace: PropTypes.func.isRequired,
  updateAddress: PropTypes.func.isRequired,
  updatePlaceModal: PropTypes.func.isRequired,
  searchPlaceText: PropTypes.string.isRequired,
  isPlaceSwitchOn: PropTypes.bool.isRequired,
  updatePlaceSwitch: PropTypes.func.isRequired,
  updateVenue: PropTypes.func.isRequired,
  updateInfrastructure: PropTypes.func.isRequired,
  updateSlot: PropTypes.func.isRequired,
  resetDate: PropTypes.func.isRequired
};

const stateToProps = (state) => ({
  searchPlaceText: state.sportunityNewActivity.searchPlaceText,
  isPlaceSwitchOn: state.sportunityNewActivity.isPlaceSwitchOn,
  venue: state.sportunityNewActivity.venue,
  infrastructure: state.sportunityNewActivity.infrastructure,
  slot: state.sportunityNewActivity.slot,
  language: state.sportunityLocale.language,
  userLocation: state.sportunityLocale.userLocation
});

const dispatchToProps = (dispatch) => ({
  updatePlaceSwitch: bindActionCreators(updatePlaceSwitch, dispatch),
  updatePlace: bindActionCreators(updatePlace, dispatch),
  updateAddress: bindActionCreators(updateAddress, dispatch),
  updatePlaceModal: bindActionCreators(updatePlaceModal, dispatch),
  updateVenue: bindActionCreators(updateVenue, dispatch),
  updateInfrastructure: bindActionCreators(updateInfrastructure, dispatch),
  updateSlot: bindActionCreators(updateSlot, dispatch),
  resetDate: bindActionCreators(resetDate, dispatch)
});

const PlaceListReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(PlaceList);

export default createRefetchContainer(PlaceListReduxContainer, {
  viewer: graphql`
    fragment PlaceList_viewer on Viewer @argumentDefinitions(
      query: {type: "Boolean!", defaultValue: false}
    ){
        id
        venues(last : 50) @include(if: $query) {
          edges {
            node {
              id,
              name,
              address {
                address,
                country,
                city,
                zip
              }
            }
          }
        }
      }
    `,
  },
  graphql`
    query PlaceListRefetchQuery ($query: Boolean!) {
      viewer {
        ...PlaceList_viewer @arguments(query: $query)
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;
