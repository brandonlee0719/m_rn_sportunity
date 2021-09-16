import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Platform, Linking } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import MapView, { Marker } from 'react-native-maps';
import get from 'lodash/get';
import Icon from 'react-native-vector-icons/MaterialIcons';

import translations from 'sportunity/src/translations.js';
import { colors, metrics, fonts, images } from '../../../theme';
import Card from '../../UI/Card';

const { width } = Dimensions.get('window');
const latitudeDelta = 0.015;
const longitudeDelta = 0.0121;

class EventAddressMap extends Component {
  render() {
    const { address } = this.props;
    const coordinates = get(address, 'position');
    const areCoordinatesAvailable = get(coordinates, 'lat');
    
    if (!areCoordinatesAvailable) return <Text>Not found</Text>;

    const initialRegion = {
      latitude: coordinates.lat,
      longitude: coordinates.lng,
      latitudeDelta,
      longitudeDelta,
    };

    const markerCoordinates = {
      latitude: coordinates.lat,
      longitude: coordinates.lng,
    };

    return (
      <Card height={220} style={styles.container}>
        <TouchableOpacity onPress={() => {
          Platform.select({
            ios: () => {
              Linking.openURL('http://maps.apple.com/maps?daddr=' + coordinates.lat + ',' + coordinates.lng);
            },
            android: () => {
              Linking.openURL('http://maps.google.com/maps?daddr=' + coordinates.lat + ',' + coordinates.lng);
            }
          })();
        }}>
          <View>
            <View style={styles.addressContainer}>
              <View style={styles.address}>
                <Icon name="location-on" color={colors.charcoal} size={16} />
                <Text style={styles.addressText}>{address.address}, {address.city}, {address.zip} {address.country}</Text>
              </View>
            </View>

            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={initialRegion}
                cacheEnabled
                scrollEnabled={false}
                rotateEnabled={false}
              >
                <Marker coordinate={markerCoordinates} image={images.location} title={address.address} />
              </MapView>
            </View>
          </View>
        </TouchableOpacity>
      </Card> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: metrics.baseMargin,
  },
  addressContainer: {
    paddingHorizontal: metrics.baseMargin,
    paddingTop: metrics.baseMargin,
  },
  addressHeading: {
    color: colors.skyBlue,
    fontSize: fonts.size.regular,
    fontWeight: '500',
  },
  address: {
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'flex-end',
    marginLeft: -2,
  },
  addressText: {
    color: colors.charcoal,
    marginLeft: 4,
  },
  mapContainer: {
    height: 150,
    width: width,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.snow,
    marginVertical: metrics.baseMargin,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default EventAddressMap;

I18n.fallbacks = true
I18n.translations = translations;
