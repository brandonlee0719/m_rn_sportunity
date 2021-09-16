import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateLevelModal,
  setAllLevels,
  setBeginnerLevel,
  setIntermediateLevel,
  setAdvancedLevel,
  setProLevel,
} from 'sportunity/src/action/newActivityActions';
import RadioButton from 'react-native-radio-button';
import style from './style';

const LevelList = ({
  allLevelsOption,
  beginnerLevelOption,
  intermediateLevelOption,
  advancedLevelOption,
  proLevelOption,
  updateLevelModal,
  setAllLevels,
  setBeginnerLevel,
  setIntermediateLevel,
  setAdvancedLevel,
  setProLevel,
}) => {

  const openCloseLevelModal = () => {
    if (this.props.reduxData.isLevelModalVisible) {
      updateLevelModal(false);
    } else {
      updateLevelModal(true);
    }
  }
  const addAllLevels = () => {
    setAllLevels();
  }
  const addBeginnerLevel = () => {
    setBeginnerLevel();
  }
  const addIntermediateLevel = () => {
    setIntermediateLevel();
  }
  const addAdvancedLevel = () => {
    setAdvancedLevel();
  }
  const addProLevel = () => {
    setProLevel();
  }
  return(
    <View style={style.container}>

      <TouchableOpacity
        style={style.levelContainer}
        onPress={openCloseLevelModal}
      >
        <Text style={style.text}>
          ALL LEVELS
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={allLevelsOption}
          onPress={addAllLevels}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.levelContainer}
      >
        <Text style={style.text}>
          Beginner
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={beginnerLevelOption}
          onPress={addBeginnerLevel}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.levelContainer}
      >
        <Text style={style.text}>
          Intermediate
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={intermediateLevelOption}
          onPress={addIntermediateLevel}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.levelContainer}
      >
        <Text style={style.text}>
          Advanced
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={advancedLevelOption}
          onPress={addAdvancedLevel}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={style.levelContainer}
      >
        <Text style={style.text}>
          Pro
        </Text>
        <RadioButton
          animation={'bounceIn'}
          isSelected={proLevelOption}
          onPress={addProLevel}
        />
      </TouchableOpacity>

    </View>
  )
}

LevelList.propTypes = {
  allLevelsOption: PropTypes.bool.isRequired,
  beginnerLevelOption: PropTypes.bool.isRequired,
  intermediateLevelOption: PropTypes.bool.isRequired,
  advancedLevelOption: PropTypes.bool.isRequired,
  proLevelOption: PropTypes.bool.isRequired,
  updateLevelModal: PropTypes.func.isRequired,
  setAllLevels: PropTypes.func.isRequired,
  setBeginnerLevel: PropTypes.func.isRequired,
  setIntermediateLevel: PropTypes.func.isRequired,
  setAdvancedLevel: PropTypes.func.isRequired,
  setProLevel: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  allLevelsOption: state.sportunityNewActivity.allLevelsOption,
  beginnerLevelOption: state.sportunityNewActivity.beginnerLevelOption,
  intermediateLevelOption: state.sportunityNewActivity.intermediateLevelOption,
  advancedLevelOption: state.sportunityNewActivity.advancedLevelOption,
  proLevelOption: state.sportunityNewActivity.proLevelOption,
});

const dispatchToProps = (dispatch) => ({
  updateLevelModal: bindActionCreators(updateLevelModal, dispatch),
  setAllLevels: bindActionCreators(setAllLevels, dispatch),
  setBeginnerLevel: bindActionCreators(setBeginnerLevel, dispatch),
  setIntermediateLevel: bindActionCreators(setIntermediateLevel, dispatch),
  setAdvancedLevel: bindActionCreators(setAdvancedLevel, dispatch),
  setProLevel: bindActionCreators(setProLevel, dispatch),

});

export default connect(
  stateToProps,
  dispatchToProps
)(LevelList);
