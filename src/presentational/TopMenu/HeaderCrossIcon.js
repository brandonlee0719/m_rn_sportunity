import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { metrics, images, colors, fonts } from 'sportunity/src/theme';
import {graphql, createRefetchContainer, QueryRenderer } from 'react-relay';

class HeaderCrossIcon extends PureComponent {
    onPress = () => {
        this.props.onPress()
    }
    render() {
        return (
            <TouchableOpacity style={styles.rightIconContainer} onPress={this.onPress}>
                <Image 
                    source={images.close_x} 
                    style={styles.rightIcon} 
                />
            </TouchableOpacity>
        )
    }
}
export default HeaderCrossIcon

const styles = StyleSheet.create({
    rightIconContainer: {
        width: metrics.rowHeitgh / 4,
        height: metrics.rowHeitgh / 4,
        justifyContent: 'center',
        marginRight: metrics.baseMargin
    },
    rightIcon: {
        width: 15,
        height: 15,
        tintColor: colors.white
    },
})