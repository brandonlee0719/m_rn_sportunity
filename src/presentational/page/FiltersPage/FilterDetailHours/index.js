import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pure } from 'sportunity/src/lib/PureComponent'
import { View, Image } from 'react-native';
import Text from 'react-native-text';
//import MultiSlider from 'react-native-multi-slider';

import styles from './style';
import { metrics, images } from '../../../../theme';

const FilterDetailHours = pure((props) => {
  const { onValuesChange, minValue, maxValue } = props;

  return (
    <View style={styles.hoursView}>
      <View style={styles.hoursValue}>
        <View style={styles.hoursMinValue}>
          <Text style={styles.fromValue}>{minValue}</Text>
        </View>
        <View style={styles.hoursMaxValue}>
          <Text style={styles.fromValue}>{maxValue}</Text>
        </View>
        <View style={styles.hoursCloseValue}>
          <Image style={styles.discloser} source={images.close} />
        </View>
      </View>
      <View style={styles.multiSlider}>
        {/*<MultiSlider
          selectedStyle={styles.multiSliderSelectedStyle}
          unselectedStyle={styles.multiSliderUnselectedStyle}
          containerStyle={styles.multiSliderContainerStyle}
          trackStyle={styles.multiSliderTrackStyle}
          min={minValue}
          max={maxValue}
          markerStyle={styles.multiSliderMarkerStyle}
          pressedMarkerStyle={styles.multiSliderPressedMarkerStyle}
          values={[minValue, maxValue]}
          sliderLength={metrics.screenWidth - 80}
          onValuesChangeFinish={(changedHours) => onValuesChange(changedHours)}
        />*/}
      </View>
    </View>
  );
});

FilterDetailHours.propTypes = {
  onValuesChange: PropTypes.func.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default FilterDetailHours;
