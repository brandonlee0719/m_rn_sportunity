import PropTypes from 'prop-types';
import React from 'react';
import { Modal, TouchableOpacity, View, Image } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePlaceModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import SearchBar from './SearchBar/SearchBar.js';
import PlaceList from './PlaceList/PlaceList.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

/**
*  Place Modal
*/
const PlaceModal = ({ viewer, updatePlaceModal, isPlaceModalVisible }) => {

  const openClosePlaceModal = () => {
    if (isPlaceModalVisible) {
      updatePlaceModal(false);
    } else {
      updatePlaceModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isPlaceModalVisible}
        onRequestClose={openClosePlaceModal}
      >
        <View style={style.header}>
          <TouchableOpacity
            onPress={openClosePlaceModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            {I18n.t('placeAddress')}
          </Text>
        </View>

        <PlaceList viewer={viewer} />

      </Modal>

    </View>
  )
}

PlaceModal.propTypes = {
  updatePlaceModal: PropTypes.func.isRequired,
  isPlaceModalVisible: PropTypes.bool.isRequired,
  viewer: PropTypes.object.isRequired,
};


const stateToProps = (state) => ({
  isPlaceModalVisible: state.sportunityNewActivity.isPlaceModalVisible,
});

const dispatchToProps = (dispatch) => ({
  updatePlaceModal: bindActionCreators(updatePlaceModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(PlaceModal);

I18n.fallbacks = true
I18n.translations = translations;
