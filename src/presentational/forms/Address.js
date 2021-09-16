import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAddress } from 'sportunity/src/action/createProfileActions';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import icons from 'sportunity/src/theme/images';
const { GooglePlacesAutocomplete } = require('react-native-google-places-autocomplete');
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import FormListItem from '../UI/FormListItem';

class Address extends Component {

  constructor (props) {
    super(props);
    this.state = {
      isModalVisible: false,
    }
  }
  
  hasNumbers = (t) => {
    var regex = /\d/;
    
    return regex.test(t);
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
        completeAddress.city = item.long_name;
      }
    })
    if (this.props.type === 'cities') 
      completeAddress.address = '';

    if (completeAddress.country === ''){ 
      Alert.alert(I18n.t('alert'), I18n.t('addressSui'));
      return false;
    } 
    else if (completeAddress.city === ''){
      Alert.alert(I18n.t('alert'), I18n.t('addressCity'));
      return false;
    } 
    else if (!this.hasNumbers(details.formatted_address) && (!this.props.type || this.props.type !== 'cities')){
      Alert.alert(I18n.t('alert'), I18n.t('addressStreet'))
    } 
    else {
      this.props.onChange(completeAddress)
      this.setState({isModalVisible: false})
    }
  }

  render = () => {
    const {address, onChange, title, type} = this.props; 

    const { country, city="" } = address || {};
    const streetAddress = address && address.address ? address.address : "";
    
    return (
      <View>
        <FormListItem
          onPress={() => this.setState({ isModalVisible: true })}
          title={title}
          subtitle={() => (
            <Text style={{ color: colors.charcoal }}>
              {type === 'cities' 
              ? address ? `${city}, ${country}` : address ? address : I18n.t('addressEnter')
              : address && address.address ? `${country}, ${city}, ${streetAddress}` : address ? address : I18n.t('addressEnter')
              }
            </Text>
          )}
          rightIcon={icons.right_arrow_blue}
          containerStyle={{width:'100%'}}
        />

        <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.isModalVisible}
            onRequestClose={() => this.setState({isModalVisible: false})}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => this.setState({isModalVisible: false})}
                style={styles.icon}
              >
                <Image
                  source={icons.down_arrow}
                />
              </TouchableOpacity>
              <Text style={styles.title}>
                {title}
              </Text>
            </View>
            <GooglePlacesAutocomplete
              placeholder={I18n.t('addressEnter')}
              minLength={2}
              autoFocus={true}
              listViewDisplayed='auto'
              fetchDetails
              autoCorrect={false}
              onPress={this.addAddress}
              getDefaultValue={() => {
                return address && streetAddress !== "" ? `${country}, ${city}, ${streetAddress}`: address ? address : '';
              }}
              query={{
                key: 'AIzaSyBgGYouaXhHOdcQh_xavWcixXZTVdAsDBw',
                language: (this.props.language || 'en').toLowerCase(),
                types: type === 'cities' ? '(cities)' : 'geocode',
                location: this.props.userLocation ? this.props.userLocation.latitude + ','+ this.props.userLocation.longitude : null,
                radius: 50000
              }}
              styles={{
                container: googleSearchStyles.container,
                textInputContainer: googleSearchStyles.textInputContainer,
                textInput: googleSearchStyles.textInput,
                listView: googleSearchStyles.listView,
                description: googleSearchStyles.description,
                predefinedPlacesDescription: googleSearchStyles.predefinedPlacesDescription,
              }}
              nearbyPlacesAPI='GooglePlacesSearch'
              GooglePlacesSearchQuery={{
                rankby: 'distance',
              }}
              filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
            />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    margin: metrics.baseMargin*2,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  modalContainer: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.skyBlue,
    height: 50,
    paddingTop: 5,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: metrics.doubleBaseMargin,
    color: colors.snow,
    fontSize: fonts.size.h6,
  },
  icon: {
    marginLeft: metrics.baseMargin,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
    fontSize: fonts.size.small
  },
})

const googleSearchStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    backgroundColor: colors.silver,
  },
  textInput: {
    margin: metrics.doubleBaseMargin,
    borderWidth: 1,
    borderColor: colors.steel,
    fontSize: fonts.size.medium,
  },
  listView: {
    marginHorizontal: metrics.doubleBaseMargin,
  },
  description: {
    fontSize: fonts.size.medium,
    fontWeight: '400',
    color: colors.skyBlue,
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  
});

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
  userLocation: state.sportunityLocale.userLocation
});

const dispatchToProps = (dispatch) => ({
});

export default connect(
  stateToProps,
  dispatchToProps
)(Address);

I18n.fallbacks = true
I18n.translations = translations;
