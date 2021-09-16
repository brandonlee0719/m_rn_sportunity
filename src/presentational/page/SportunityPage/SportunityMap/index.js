import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent, { pure } from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity } from 'react-native';
import Relay from 'react-relay/classic';

import icons from '../../../../../src/theme/images';
import Marker from './Marker';
import styles from './style';


// TODO initial region should not be constant, but rather depends
// on  user's specific situation ( like last known position or last
// place looked up or similar ).
const initialRegion = {
  latitude: 46.81,
  longitude: 8.227,
  latitudeDelta: 0.223,
  longitudeDelta: 0.223,
};

const SportunitiesMap = pure(({ sportunities }) => {

  const markers = sportunities && sportunities.edges.map((sportunity, key) =>
    <Marker key={key} sportunity={sportunity} />
  );
  return (
    <View style={styles.map}>
      <MapView style={styles.mapFrame} initialRegion={initialRegion}>
        {markers}
      </MapView>
      <TouchableOpacity style={styles.gpsOverlayContainer}>
        <Image style={styles.iconGPS} source={icons.gps} />
      </TouchableOpacity>
    </View>

  );
})

SportunitiesMap.propTypes = {
  sportunities: PropTypes.object,
};


export default Relay.createContainer(SportunitiesMap, {
  fragments: {
    sportunities: () => Relay.QL`
      fragment on SportunityConnection{
        edges{
          node{
            ${Marker.getFragment('sportunity')}
          }
        }
      }`,
  },
});
