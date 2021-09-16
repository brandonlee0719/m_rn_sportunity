import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLevelModal, calculateMultipleLevels } from 'sportunity/src/action/newActivityActions';

import style from './style';

const ValidateButton = ({ calculateMultipleLevels, updateLevelModal, levelMinSliderValue, levelMaxSliderValue, isLevelSwitchOn }) => {

  const validateLevels = () => {
    const minValue = levelMinSliderValue;
    const maxValue = levelMaxSliderValue;
    const levelSwitchStatus = isLevelSwitchOn;
    if (isLevelSwitchOn) {
      calculateMultipleLevels(minValue, maxValue, levelSwitchStatus);
      updateLevelModal(false);
    } else {
      updateLevelModal(false);
    }
  }

  return(
    <TouchableOpacity
      style={style.container}
      onPress={validateLevels}
    >
      <Text style={style.text}>
        Validate
      </Text>
    </TouchableOpacity>
  )
}

ValidateButton.propTypes = {
  calculateMultipleLevels: PropTypes.func.isRequired,
  updateLevelModal: PropTypes.func.isRequired,
  levelMinSliderValue: PropTypes.number.isRequired,
  levelMaxSliderValue: PropTypes.number.isRequired,
  isLevelSwitchOn: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  levelMinSliderValue: state.sportunityNewActivity.levelMinSliderValue,
  levelMaxSliderValue: state.sportunityNewActivity.levelMaxSliderValue,
  isLevelSwitchOn: state.sportunityNewActivity.isLevelSwitchOn,
});

const dispatchToProps = (dispatch) => ({
  updateLevelModal: bindActionCreators(updateLevelModal, dispatch),
  calculateMultipleLevels: bindActionCreators(calculateMultipleLevels, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(ValidateButton);
