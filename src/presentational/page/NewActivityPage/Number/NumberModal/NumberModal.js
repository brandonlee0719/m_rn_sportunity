import PropTypes from 'prop-types';
import React from 'react';
import { Modal, TouchableOpacity, View, Image } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateNumberModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import Minimum from './Minimum/Minimum.js';
import Maximum from './Maximum/Maximum.js';
import Exactly from './Exactly/Exactly.js';
import HideList from './HideList/HideList.js'
import Button from './Button/Button.js';

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { Header } from '../../../../Header';

const NumberModal = ({
  isNumberModalVisible,
  updateNumberModal,
  isExactlySwitchOn,
  isUpdating,
  viewer,
}) => {

  const openCloseNumberModal = () => {
    if (isNumberModalVisible) {
      updateNumberModal(false);
    } else {
      updateNumberModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isNumberModalVisible}
        onRequestClose={openCloseNumberModal}
      >
      <Header 
        onPressFunc={openCloseNumberModal}
        imgSrc={icons.down_arrow}
        text={I18n.t('numberOfParticipants')}
      />
        {/* <View style={style.header}>
          <TouchableOpacity
            onPress={openCloseNumberModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            {I18n.t('numberOfParticipants')}
          </Text>
        </View> */}
        {
          !isExactlySwitchOn ?
            <View>
              <Minimum viewer={viewer} />
              <Maximum viewer={viewer} />
            </View> :
              null
        }
        <Exactly viewer={viewer} isUpdating={isUpdating}/>
        <HideList viewer={viewer} />
        <Button />
      </Modal>

    </View>
  )
}

NumberModal.propTypes = {
  isNumberModalVisible: PropTypes.bool.isRequired,
  updateNumberModal: PropTypes.func.isRequired,
  isExactlySwitchOn: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  isNumberModalVisible: state.sportunityNewActivity.isNumberModalVisible,
  isExactlySwitchOn: state.sportunityNewActivity.isExactlySwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateNumberModal: bindActionCreators(updateNumberModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(NumberModal);

I18n.fallbacks = true
I18n.translations = translations;
