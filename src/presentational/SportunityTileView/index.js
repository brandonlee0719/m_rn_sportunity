import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Icon from 'sportunity/src/presentational/SportunityIcon';
import { images } from 'sportunity/src/theme';
import { styles } from './style';


const SportunityTile = (props) => {
  let LeftBar = null;
  if (props.status && props.leftBar) {
    /**
     * Get proper leftBar styling based on sportunity status
     * styles naming is leftBar+Status
     */
    const leftBarStyles = [styles.leftBar];
    const statusStyle = styles[`leftBar${props.status[0]}${props.status.substr(1).toLowerCase()}`];
    if (typeof statusStyle !== 'undefined') {
      leftBarStyles.push(statusStyle);
    }
    LeftBar = <View style={leftBarStyles} />;
  }

  let RigthBar = null;
  if (props.rightbar) {
    RigthBar = (
      <View style={styles.rightbar}>
        <Icon iconName={images.ellipse_bar} />
      </View>
    );
  }

  return (
    <View
      style={[
        styles.container, props.tileStyle || {},
        props.bordered && styles.bordered,
        props.shadowed && styles.shadowed,
      ]}
    >
      {LeftBar}
      <View style={styles.content}>
        {props.children}
      </View>
      {RigthBar}
    </View>
  );
};


SportunityTile.propTypes = {
  children: PropTypes.node,
  leftBar: PropTypes.bool,
  status: PropTypes.string,
  rightbar: PropTypes.bool,
  bordered: PropTypes.bool,
  shadowed: PropTypes.bool,
  tileStyle: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
};

export default SportunityTile;
