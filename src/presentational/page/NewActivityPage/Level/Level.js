import PropTypes from 'prop-types';
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLevelModal } from 'sportunity/src/action/newActivityActions';
import icons from 'sportunity/src/theme/images';
import style from './style';
import LevelModal from './LevelModal/LevelModal.js';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

const Level = ({ isLevelModalVisible, allLevels, updateLevelModal }) => {

  const openCloseLevelModal = () => {
    if (isLevelModalVisible) {
      updateLevelModal(false);
    } else {
      updateLevelModal(true);
    }
  }

  return(
    <View>
      <LevelModal />

      <TouchableOpacity
        style={style.container}
        onPress={openCloseLevelModal}
      >

        <View style={style.subContainer}>

          <Text style={style.text}>
            {I18n.t('level')}
          </Text>

          {
            allLevels.length > 0 ?
              allLevels.map((item, index) => (
                <Text
                  key={index}
                  style={style.select}
                >
                  {item}
                </Text>
              )) :
              <Text
                style={style.select}
              >
                {I18n.t('select')}
              </Text>
          }

        </View>

        <Image
          style={style.icon}
          source={icons.right_arrow_blue}
        />

      </TouchableOpacity>

    </View>
  )
}

Level.propTypes = {
  isLevelModalVisible: PropTypes.bool.isRequired,
  allLevels: PropTypes.array.isRequired,
  updateLevelModal: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  allLevels: state.sportunityNewActivity.allLevels,
  isLevelModalVisible: state.sportunityNewActivity.isLevelModalVisible,
});

const dispatchToProps = (dispatch) => ({
  updateLevelModal: bindActionCreators(updateLevelModal, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Level);

I18n.fallbacks = true
I18n.translations = translations;
