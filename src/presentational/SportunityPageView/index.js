import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './style';

const SportunityPageView = (props) => {
  const { style } = props;
  return (
    <View style={[styles.viewContainer, style || {}]}>
      {props.children}
    </View>
  );
};

SportunityPageView.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node,
};

export default SportunityPageView;
