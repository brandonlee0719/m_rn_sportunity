import PropTypes from 'prop-types';
import React from 'react';
import { Modal, TouchableOpacity, View, Image } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLevelModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import LevelList from './LevelList/LevelList.js';
import Range from './Range/Range.js';
import MultiSlider from './MultiSlider/Multislider.js';
import ValidateButton from './ValidateButton/ValidateButton.js';
import { Header } from '../../../../Header';

const LevelModal = ({ isLevelModalVisible, isLevelSwitchOn, updateLevelModal }) => {

  const openCloseLevelModal = () => {
    if (isLevelModalVisible) {
      updateLevelModal(false);
    } else {
      updateLevelModal(true);
    }
  }

  return(
    <View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isLevelModalVisible}
        onRequestClose={openCloseLevelModal}
      >

      <Header 
        onPressFunc={openCloseLevelModal}
        imgSrc={icons.down_arrow}
        text={"Level"}
      />

        {/* <View style={style.header}>
          <TouchableOpacity
            onPress={openCloseLevelModal}
            style={style.icon}
          >
            <Image
              source={icons.down_arrow}
            />
          </TouchableOpacity>

          <Text style={style.title}>
            Level
          </Text>
        </View> */}

        <Range />

        {
          !isLevelSwitchOn ?
            <LevelList /> :
            <MultiSlider />
        }

        <ValidateButton />

      </Modal>
    </View>
  )
}

LevelModal.propTypes = {
  isLevelModalVisible: PropTypes.bool.isRequired,
  isLevelSwitchOn: PropTypes.bool.isRequired,
  updateLevelModal: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  isLevelModalVisible: state.sportunityNewActivity.isLevelModalVisible,
  isLevelSwitchOn: state.sportunityNewActivity.isLevelSwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateLevelModal: bindActionCreators(updateLevelModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(LevelModal);
