import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { metrics } from 'sportunity/src/theme';
import {graphql, createRefetchContainer, QueryRenderer } from 'react-relay';

import NavigationService from 'sportunity/src/NavigationService';
import environment from 'sportunity/src/createRelayEnvironment';

class HeaderProfileIconView extends PureComponent {
    openProfilePage = () => {
        NavigationService.navigate("meProfile");
    }

    render() {
        return (
            this.props.viewer.me && this.props.viewer.me.avatar
            ?   <TouchableOpacity style={styles.leftIconContainer} onPress={this.openProfilePage}>
                    <Image 
                        source={{ uri: this.props.viewer.me.avatar }} 
                        style={styles.leftIcon} 
                    />
                </TouchableOpacity>
            :   null
        )
    }
}

const HeaderProfileIconT = createRefetchContainer(
    HeaderProfileIconView,
    graphql`
        fragment HeaderProfileIcon_viewer on Viewer {
            id
            me {
                id,
                avatar
            }
        }
    `,
);

export default HeaderProfileIcon = ({ navigation }) => {
  return (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query HeaderProfileIconQuery {
                viewer {
                    ...HeaderProfileIcon_viewer
                }
            }
        `}
        variables={{}}
        render={({error, props}) => {
            return (
                props 
                ?   <HeaderProfileIconT query={props} viewer={props.viewer}/>
                :   null
            )
        }}
      />
    )
};
  
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
      borderRadius: metrics.rowHeitgh / 8,
    }
})