import PropTypes from 'prop-types';
import React from 'react';
import { Modal, TouchableOpacity, View, Image } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePlaceModal, updatePlaceOrVenueModal, updateVenueModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

/**
*  Place Or Venue Modal
*/
const PlaceModal = ({ 
    viewer, 
    updatePlaceModal, 
    updatePlaceOrVenueModal, 
    updateVenueModal,
    isPlaceModalVisible, 
    isPlaceOrVenueModalVisible,
    isVenueModalVisible }) => {

  const openClosePlaceOrVenueModal = () => {
    if (isPlaceOrVenueModalVisible) {
        updatePlaceOrVenueModal(false);
    } else {
        updatePlaceOrVenueModal(true);
    }
  }

  const openClosePlaceModal = () => {
    openClosePlaceOrVenueModal()
    if (isPlaceModalVisible) {
        updatePlaceModal(false);
    } else {
        updatePlaceModal(true);
    }
  }

  const openCloseVenueModal = () => {
    openClosePlaceOrVenueModal();
    if (isVenueModalVisible) {
        updateVenueModal(false);
    }
    else {
        updateVenueModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isPlaceOrVenueModalVisible}
        onRequestClose={openClosePlaceOrVenueModal}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openClosePlaceOrVenueModal}
            style={style.closeIcon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            {I18n.t('place')}
          </Text>
        </View>

        <View style={style.container}>
            <TouchableOpacity
                style={style.buttonContainer}
                onPress={openClosePlaceModal}
            >

                <View style={style.buttonSubContainer}>
                    <Text style={style.text}>
                        {I18n.t('placeAddress')}
                    </Text>
                    <Text style={style.select}>
                        {I18n.t('select')}
                    </Text> 
                </View>
                <Image
                style={style.icon}
                source={icons.right_arrow_blue}
                />
            </TouchableOpacity>

            {viewer.slots && viewer.slots.length > 0 && 
                <TouchableOpacity
                    style={style.buttonContainer}
                    onPress={openCloseVenueModal}
                >

                    <View style={style.buttonSubContainer}>
                        <Text style={style.text}>
                            {viewer.me && viewer.me.profileType !== 'PERSON' ? I18n.t('searchVenueOther') : I18n.t('searchVenuePerson')}
                        </Text>
                        <Text style={style.select}>
                            {viewer.slots.length > 1
                            ?   viewer.slots.length + ' ' + I18n.t('availableSlots')
                            :   viewer.slots.length + ' ' + I18n.t('availableSlot')
                            }
                        </Text> 
                    </View>
                    <Image
                    style={style.icon}
                    source={icons.right_arrow_blue}
                    />
                </TouchableOpacity>
            }
        </View>

      </Modal>

    </View>
  )
}

PlaceModal.propTypes = {
  updatePlaceModal: PropTypes.func.isRequired,
  updatePlaceOrVenueModal: PropTypes.func.isRequired,
  updateVenueModal: PropTypes.func.isRequired,
  isPlaceModalVisible: PropTypes.bool.isRequired,
  isPlaceOrVenueModalVisible: PropTypes.bool.isRequired,
  isVenueModalVisible: PropTypes.bool.isRequired,
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
  updateVenueModal: bindActionCreators(updateVenueModal, dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(PlaceModal);

I18n.fallbacks = true
I18n.translations = translations;
