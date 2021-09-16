import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableHighlight, Text, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilterModal from '../FilterModal'
import FiltersListItem from '../FiltersListItem';
import { images } from '../../../../theme';
import { styles, googleSearchStyles } from './style';
import { buttonStyle } from '../style'
const { GooglePlacesAutocomplete } = require('react-native-google-places-autocomplete');
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class FilterDetailPlaces extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })

  render = () => {
    const {
      clearPlaceFilter,
      radius,
      placeName,
      changePlaceRadius,
      changePlacePosition,
      changePlaceName,
      isPlaceSelected,
    } = this.props;

    const { isOpen } = this.state;

    return (
      <View>
          <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
            <View style={buttonStyle.headerCol}>
                <Text style={buttonStyle.headerText}>
                    {I18n.t('filterPlaces')}
                </Text>
                {isPlaceSelected
                 ? <View>
                    <Text style={buttonStyle.select}>
                      {placeName}
                    </Text>
                    <Text style={buttonStyle.select}>
                      {I18n.t('around') + ': ' + radius + ' km'}
                    </Text>
                  </View>
                : <Text style={buttonStyle.select}>
                    {I18n.t('select')}
                  </Text>
              }
            </View>
            <Image
                style={buttonStyle.headerIcon}
                source={images.right_arrow_blue}
            />
        </TouchableOpacity>
          {isPlaceSelected &&
            <FiltersListItem
              caption={I18n.t('clear')}
              itemStyle={buttonStyle.footerViewStyle}
              captionStyle={buttonStyle.footerCaptionStyle}
              onPress={clearPlaceFilter}
            />
          }
        {
          isOpen &&
            <FilterModal
                isModalVisible={isOpen}
                onRequestClose={() => this.setState({isOpen: false})}
                title={I18n.t('filterPlaces')}
                displayValidationButton={true}>
              <View style={styles.placeContextView}>

                {/*------------------------ TEXT INPUT ------------------------*/}

                <View style={styles.locationContext}>
                  <GooglePlacesAutocomplete
                    placeholder={I18n.t('enterAddress')}
                    minLength={2}
                    autoFocus={false}
                    listViewDisplayed='auto'
                    fetchDetails
                    autoCorrect={false}
                    onPress={(data, details = null) => {
                      const lat = details.geometry.location.lat
                      const lng = details.geometry.location.lng
                      const placeName = details.formatted_address
                      changePlaceName(placeName)
                      changePlacePosition(lat,lng)
                    }}
                    getDefaultValue={() => {
                      return placeName || '';
                    }}
                    query={{
                      key: 'AIzaSyBgGYouaXhHOdcQh_xavWcixXZTVdAsDBw',
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
                </View>

              {/*------------------------ AROUND ------------------------*/}


                <View style={styles.aroundContext}>
                  <View style={styles.leftContext}>
                    <TouchableHighlight
                      style={styles.aroundBtn}
                      onPress={() => changePlaceRadius(Math.max(0,radius - 10))}
                    >
                      <Text style={styles.plusMinusBtn}>-</Text>
                    </TouchableHighlight>
                  </View>
                  <View style={styles.aroundLabel}>
                    <Text style={styles.aroundLabelText}>{I18n.t('around')}</Text>
                  </View>
                  <View style={styles.aroundValue}>
                    <Text style={styles.aroundValueText}>{radius}</Text>
                  </View>
                  <View style={styles.aroundLabel}>
                    <Text style={styles.aroundLabelText}>km</Text>
                  </View>
                  <View style={styles.rightContext}>
                    <TouchableHighlight
                      style={styles.aroundBtn}
                      onPress={() => changePlaceRadius(radius + 10)}
                    >
                      <Text style={styles.plusMinusBtn}>+</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </FilterModal>
        }
      </View>
    );
  }
};

FilterDetailPlaces.propTypes = {
  changePlaceRadius: PropTypes.func.isRequired,
  changePlacePosition: PropTypes.func.isRequired,
  clearPlaceFilter: PropTypes.func.isRequired,
  changePlaceName: PropTypes.func.isRequired,
  radius: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number,
  placeName: PropTypes.string,
  isPlaceSelected: PropTypes.bool.isRequired,
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
)(FilterDetailPlaces);


I18n.fallbacks = true
I18n.translations = translations;
