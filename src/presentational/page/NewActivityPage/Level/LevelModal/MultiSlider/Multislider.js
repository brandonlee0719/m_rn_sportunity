import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Slider } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateLevelMinSlider, updateLevelMaxSlider } from 'sportunity/src/action/newActivityActions';
import style from './style';

/**
*  Multislider component
*/
class Multislider extends Component {
  componentDidUpdate = () => {
    if (this.props.levelMinSliderValue >= this.props.levelMaxSliderValue) {
      this.props.updateLevelMinSlider(this.props.levelMaxSliderValue - 1);
    }
  }
  // Handling slider (From) value
  chooseLevelMinSliderValue = (value) => {
    this.props.updateLevelMinSlider(value);
  }
  // Handling slider (To) value
  chooseLevelMaxSliderValue = (value) => {
    if (value === 1) {
      this.props.updateLevelMaxSlider(2);
    } else {
      this.props.updateLevelMaxSlider(value);
    }
  }
  /**
  *  Render
  */
  render() {
    const levelMinSliderValue = this.props.levelMinSliderValue;
    const levelMaxSliderValue = this.props.levelMaxSliderValue;
    return (
      <View style={style.container}>
        <View>
          <View style={style.fromToContainer}>
            <Text style={style.keyText}>
              From
            </Text>
            <Text style={style.valueText}>
              {levelMinSliderValue === 1 ? 'Beginner' : null}
              {levelMinSliderValue === 2 ? 'Intermediate' : null}
              {levelMinSliderValue === 3 ? 'Advanced' : null}
              {levelMinSliderValue === 4 ? 'Pro' : null}
            </Text>
          </View>
          <View style={style.fromToContainer}>
            <Text style={style.keyText}>
              To
            </Text>
            <Text style={style.valueText}>
              {levelMaxSliderValue === 1 ? 'Beginner' : null}
              {levelMaxSliderValue === 2 ? 'Intermediate' : null}
              {levelMaxSliderValue === 3 ? 'Advanced' : null}
              {levelMaxSliderValue === 4 ? 'Pro' : null}
            </Text>
          </View>
        </View>

        <View style={style.slidersContainer}>
          <View style={style.sliderContainer}>
            <Slider
              style={style.slider1}
              minimumValue={1}
              maximumValue={4}
              value={levelMinSliderValue}
              step={1}
              onValueChange={this.chooseLevelMinSliderValue}
            />
          </View>

          <View style={style.sliderContainer}>
            <Slider
              style={style.slider1}
              minimumValue={1}
              maximumValue={4}
              value={levelMaxSliderValue}
              step={1}
              onValueChange={this.chooseLevelMaxSliderValue}
            />
          </View>
        </View>

      </View>
    );
  }
}

Multislider.propTypes = {
  levelMinSliderValue: PropTypes.number.isRequired,
  levelMaxSliderValue: PropTypes.number.isRequired,
  updateLevelMinSlider: PropTypes.func.isRequired,
  updateLevelMaxSlider: PropTypes.func.isRequired,
};


const stateToProps = (state) => ({
  levelMinSliderValue: state.sportunityNewActivity.levelMinSliderValue,
  levelMaxSliderValue: state.sportunityNewActivity.levelMaxSliderValue,
});

const dispatchToProps = (dispatch) => ({
  updateLevelMinSlider: bindActionCreators(updateLevelMinSlider, dispatch),
  updateLevelMaxSlider: bindActionCreators(updateLevelMaxSlider, dispatch),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Multislider);
