import PropTypes from 'prop-types';
import React from 'react';
import { Modal, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import I18n from 'react-native-i18n';

import { 
    updatePlaceModal,
    updatePlaceOrVenueModal, 
    updateVenueModal, 
    updateVenue, 
    updateInfrastructure, 
    updateSlot, 
    updateAddress,
    updateNewActivityDate, 
    updateNewActivityEndDate, 
    updateFromHour, 
    updateFromMinute, 
    updateToHour, 
    updateToMinute,
    updateIsDateUpdatable,
    updateRepeatValue,
    updateRepeatSwitch,
    resetDate
} from 'sportunity/src/action/newActivityActions';

import SlotItem from './SlotItem';
import icons from 'sportunity/src/theme/images';
import style from './style';
import translations from 'sportunity/src/translations.js';

/**
*  Venue Modal
*/
const VenueModal = ({ 
    viewer, 
    updatePlaceModal, 
    updatePlaceOrVenueModal, 
    updateVenueModal,
    updateVenue, 
    updateInfrastructure, 
    updateSlot,
    updateAddress,
    updateNewActivityDate, 
    updateNewActivityEndDate, 
    updateFromHour, 
    updateFromMinute, 
    updateToHour, 
    updateIsDateUpdatable,
    updateToMinute,
    updateRepeatValue,
    updateRepeatSwitch,
    resetDate,
    isPlaceModalVisible, 
    isPlaceOrVenueModalVisible,
    isVenueModalVisible }) => {

  const openCloseVenueModal = () => {
    if (isVenueModalVisible) {
        updateVenueModal(false);
    }
    else {
        updateVenueModal(true);
    }
  }

  selectSlot = (slot) => {
    resetDate();
    updateSlot(slot);
    updateInfrastructure(slot.infrastructure);
    updateVenue(slot.venue);
    updateAddress({
        address: slot.venue.address.address,
        country: slot.venue.address.country,
        city: slot.venue.address.city,
        zip: slot.venue.address.zip
    });

    const dateFromForServer = moment(slot.from).format();
    const dateEndForServer = moment(slot.end).format();

    const finalFromDate = moment(slot.from).format('MMMM DD YYYY HH:mm');
    const finalEndDate = moment(slot.end).format('MMMM DD YYYY HH:mm');
    updateNewActivityDate(finalFromDate, dateFromForServer);
    updateNewActivityEndDate(finalEndDate, dateEndForServer);
    updateFromHour(moment(slot.from).format('HH'));
    updateFromMinute(moment(slot.from).format('mm'));
    updateToHour(moment(slot.end).format('HH'));
    updateToMinute(moment(slot.end).format('mm'));
    if (slot.serie_information && slot.serie_information.remainingSlots > 0) {
      updateRepeatValue(slot.serie_information.remainingSlots);
      updateRepeatSwitch(true);
    }

    updateIsDateUpdatable(false);

    openCloseVenueModal();
  }

  return(
    <View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isVenueModalVisible}
        onRequestClose={openCloseVenueModal}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openCloseVenueModal}
            style={style.closeIcon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            {viewer.me && viewer.me.profileType !== 'PERSON' ? I18n.t('searchVenueOther') : I18n.t('searchVenuePerson')}
          </Text>
        </View>
        <ScrollView
          style={style.scrollView}
          contentContainerStyle={style.scrollViewContentContainer}
        >
          {viewer.slots && viewer.slots.map(slot => (
            <View key={slot.id} style={style.markerOverlayContainer}>
              <SlotItem slot={slot} onPress={() => selectSlot(slot)}/>
            </View>
          ))}
        </ScrollView>

      </Modal>

    </View>
  )
}

VenueModal.propTypes = {
  updatePlaceModal: PropTypes.func.isRequired,
  updatePlaceOrVenueModal: PropTypes.func.isRequired,
  updateVenueModal: PropTypes.func.isRequired,
  updateVenue: PropTypes.func.isRequired,
  updateInfrastructure: PropTypes.func.isRequired,
  updateSlot: PropTypes.func.isRequired,
  updateAddress: PropTypes.func.isRequired,
  updateNewActivityDate: PropTypes.func.isRequired, 
  updateNewActivityEndDate: PropTypes.func.isRequired, 
  updateFromHour: PropTypes.func.isRequired, 
  updateFromMinute: PropTypes.func.isRequired, 
  updateToHour: PropTypes.func.isRequired, 
  updateToMinute: PropTypes.func.isRequired,
  updateIsDateUpdatable: PropTypes.func.isRequired,
  updateRepeatValue: PropTypes.func.isRequired,
  updateRepeatSwitch: PropTypes.func.isRequired,
  resetDate: PropTypes.func.isRequired,
  isPlaceModalVisible: PropTypes.bool.isRequired,
  isPlaceOrVenueModalVisible: PropTypes.bool.isRequired,
  viewer: PropTypes.object.isRequired,
};


const stateToProps = (state) => ({
    isPlaceModalVisible: state.sportunityNewActivity.isPlaceModalVisible,
    isPlaceOrVenueModalVisible: state.sportunityNewActivity.isPlaceOrVenueModalVisible,
    isVenueModalVisible: state.sportunityNewActivity.isVenueModalVisible
});

const dispatchToProps = (dispatch) => ({
  updatePlaceModal: bindActionCreators(updatePlaceModal, dispatch),
  updatePlaceOrVenueModal: bindActionCreators(updatePlaceOrVenueModal, dispatch),
  updateVenueModal: bindActionCreators(updateVenueModal, dispatch),
  updateVenue: bindActionCreators(updateVenue, dispatch),
  updateInfrastructure: bindActionCreators(updateInfrastructure, dispatch),
  updateSlot: bindActionCreators(updateSlot, dispatch),
  updateAddress: bindActionCreators(updateAddress, dispatch),
  updateNewActivityDate: bindActionCreators(updateNewActivityDate, dispatch), 
  updateNewActivityEndDate: bindActionCreators(updateNewActivityEndDate, dispatch),
  updateFromHour: bindActionCreators(updateFromHour, dispatch),
  updateFromMinute: bindActionCreators(updateFromMinute, dispatch),
  updateToHour: bindActionCreators(updateToHour, dispatch),
  updateToMinute: bindActionCreators(updateToMinute, dispatch),
  updateIsDateUpdatable: bindActionCreators(updateIsDateUpdatable, dispatch),
  updateRepeatValue: bindActionCreators(updateRepeatValue, dispatch),
  updateRepeatSwitch: bindActionCreators(updateRepeatSwitch, dispatch),
  resetDate: bindActionCreators(resetDate, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(VenueModal);

I18n.fallbacks = true
I18n.translations = translations;
