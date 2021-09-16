import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { metrics, images, colors } from 'sportunity/src/theme';
import {graphql, createRefetchContainer, QueryRenderer } from 'react-relay';

import NavigationService from 'sportunity/src/NavigationService';
import environment from 'sportunity/src/createRelayEnvironment';

class HeaderBackIcon extends PureComponent {
    render() {
        return (
            <TouchableOpacity style={styles.leftIconContainer} onPress={this.props.goBack}>
                <Image 
                    source={this.props.down_arrow ? images.down_arrow : images.right_arrow} 
                    style={styles.leftIcon} 
                />
            </TouchableOpacity>
        )
    }
}

export default HeaderBackIcon; 
  
const styles = StyleSheet.create({
    leftIconContainer: {
      width: metrics.rowHeitgh / 4,
      height: metrics.rowHeitgh / 4,
      justifyContent: 'center',
      marginLeft: metrics.baseMargin
    },
    leftIcon: {
      width: '100%',
      height: '100%',
      aspectRatio: 0.5,
      resizeMode: 'contain',
      transform:[ {scaleX: -1}],
      tintColor: colors.white,
    }
})