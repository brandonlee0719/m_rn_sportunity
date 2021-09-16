import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, Image, TouchableOpacity, View, Text } from 'react-native';
import { metrics, images, colors, fonts } from 'sportunity/src/theme';
import {graphql, createRefetchContainer, QueryRenderer } from 'react-relay';

import { platformStyle } from '../../lib/PlatformUtils/PlatformUtils'
import NavigationService from 'sportunity/src/NavigationService';
import environment from 'sportunity/src/createRelayEnvironment';

const maxBadgeNumberStr = '99+'
const maxBadgeNumber = (badgeNumber) => badgeNumber > 99 ? maxBadgeNumberStr : badgeNumber;

class HeaderChatIconView extends PureComponent {
    openChatPage = () => {
        NavigationService.navigate("chat");
    }
    render() {
        const badgeNumber = this.props.unreadChats 
        return (
            this.props.viewer.me 
            ?   <TouchableOpacity style={styles.rightIconContainer} onPress={this.openChatPage}>
                    <Image 
                        source={images.comments} 
                        style={styles.rightIcon} 
                    />
                    {badgeNumber > 0 || badgeNumber == maxBadgeNumberStr
                    ?   <View style={styles.badgeContainer}>
                            <Text style={styles.badge}>{badgeNumber}</Text>
                        </View>
                    :   null
                    }
                </TouchableOpacity>
            :   null
        )
    }
}

const mapsToState = ({sportunityProfile: { counts: { unreadChats, unreadNotifications, unreadAllTotal } }}) => ({
    unreadChats: maxBadgeNumber(unreadChats),
    unreadNotifications: maxBadgeNumber(unreadNotifications),
    unreadAllTotal: maxBadgeNumber(unreadAllTotal),
});

const HeaderChatIconT = createRefetchContainer(
    connect(mapsToState)(HeaderChatIconView),
    graphql`
        fragment HeaderChatIcon_viewer on Viewer {
            id
            me {
                id,
            }
        }
    `,
);

export default HeaderChatIcon = ({ navigation }) => {
  return (
    <QueryRenderer
        environment={environment}
        query={graphql`
            query HeaderChatIconQuery {
                viewer {
                    ...HeaderChatIcon_viewer
                }
            }
        `}
        variables={{}}
        render={({error, props}) => {
            return (
                props 
                ?   <HeaderChatIconT query={props} viewer={props.viewer}/>
                :   null
            )
        }}
      />
    )
};

const badgeContainerBase = {
    position: 'absolute',
    width: 18,
    height: 18,
    backgroundColor: colors.red,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 2,
};
const badgeContainerAndroid = {
    right: 4,
    top: 16,
};
const badgeContaineriOS = {
    right: 4,
    top: 16,
}

const styles = StyleSheet.create({
    rightIconContainer: {
        width: metrics.rowHeitgh / 4,
        height: metrics.rowHeitgh / 4,
        justifyContent: 'center',
        marginRight: metrics.baseMargin
    },
    rightIcon: {
        width: 20,
        height: 20,
        tintColor: colors.white
    },
    badgeContainer: platformStyle(badgeContainerBase, badgeContainerAndroid, badgeContaineriOS),
    badge:{
      color: 'white',
      ...fonts.style.h5,
      fontSize: 10,
    },
})