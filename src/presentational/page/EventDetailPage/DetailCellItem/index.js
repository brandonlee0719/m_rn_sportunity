import PropTypes from 'prop-types';
import React,{ Component } from 'react';
import { View, Image, TouchableOpacity, Platform, Linking } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';
import translations from 'sportunity/src/translations.js';
import Modal from '../../../../../src/presentational/Modal';
import icons from '../../../../../src/theme/images';
import { styles } from './styles';
import { addressType } from '../../../../customPropType';

class DetailCellItem extends Component {
  constructor (props) {
    super(props);
  }

  openMap = () => {
    const { venue, address } = this.props; 
    let latitude, longitude; 
    if (venue && venue.address && venue.address.position) {
      latitude = venue.address.position.lat ;
      longitude = venue.address.position.lng ;
    }
    else if (address && address.position) {
      latitude = address.position.lat ;
      longitude = address.position.lng ;
    }

    Platform.select({
        ios: () => {
            Linking.openURL('http://maps.apple.com/maps?daddr=' + latitude + ',' + longitude);
        },
        android: () => {
            Linking.openURL('http://maps.google.com/maps?daddr=' + latitude + ',' + longitude);
        }
    })();
  }


  render = () => {
    const { address, venue, infrastructure } = this.props ; 
    
    return (
      <TouchableOpacity style={styles.container} onPress={this.openMap}>
          {venue && infrastructure
          ? <View style={styles.row}>
              <View style={styles.imageContainer}>
                {infrastructure && infrastructure.logo 
                ? <Image style={styles.thumb} source={{uri: infrastructure.logo}} />
                : <Image style={styles.thumb} source={icons.infrastructure} />
                }
              </View>
              <View style={styles.detailContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {venue.name}
                </Text>
                <Text style={styles.title} numberOfLines={1}>
                  {infrastructure.name}
                </Text>
                <Text style={styles.smallTitle} numberOfLines={1}>
                  {address && `${address.address} ${address.city}, ${I18n.t(address.country.toLowerCase())}`}
                </Text>
              </View>
            </View>
          : <View style={styles.detailContainer}>
              <View style={styles.row}>
                <Image style={[styles.iconLocation, styles.iconGreen]} source={icons.location} />
                <Text style={styles.title} numberOfLines={2}>
                { address && `${address.address} ${address.city}, ${I18n.t(address.country.toLowerCase())}` }
                </Text>
              </View>
            </View>
          }
      </TouchableOpacity>
    );
  }
}

DetailCellItem.propTypes = {
  address: PropTypes.object.isRequired,
};

export default  createFragmentContainer(DetailCellItem, {
  address: graphql`fragment DetailCellItem_address on AddressModel{
    address
    city
    country
    position{
      lat
      lng
    }
  }`,
});

I18n.fallbacks = true
I18n.translations = translations;
