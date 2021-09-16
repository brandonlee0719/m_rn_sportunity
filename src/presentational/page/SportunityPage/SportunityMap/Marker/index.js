import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Text from 'react-native-text';
import Triangle from 'react-native-triangle';
import Relay from 'react-relay/classic';

import icons from '../../../../../../src/theme/images';
import { styles, triangle } from './styles';

const Marker = ({ sportunity:{ address } }) => (
  address && address.position ?
  <RNMarker
    coordinate={{ latitude: address.position.lat,longitude: address.position.lng }}
  >
    <View style={styles.container} >
      <View style={styles.iconContainer}>
        <Image style={styles.markerIcon} source={icons.shoes} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text_date}>15 Mar 16 {'\n'}15:00</Text>
      </View>
    </View>
    <View style={styles.triangle_holder}>
      <Triangle
        width={triangle.below.width}
        height={triangle.below.height}
        color={triangle.below.color}
        direction={triangle.below.direction}
      />
      <Triangle
        style={styles.triangle_surface}
        width={triangle.upper.width}
        height={triangle.upper.height}
        color={triangle.upper.color}
        direction={triangle.upper.direction}
      />
    </View>
  </RNMarker>
  :
  null

);

Marker.propTypes = {
  sportunity: PropTypes.object,
};

export  default Relay.createContainer(Marker, {
  fragments: {
    sportunity: () => Relay.QL`fragment on Sportunity{
      address {
        country
        city
        zip
        position {
          lat
          lng
        }
      },
    }`,
  },
});
