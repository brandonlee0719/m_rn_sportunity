import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { metrics, colors, images, fonts } from 'sportunity/src/theme';

class UserCard extends Component{
    constructor(props) { 
        super(props);
    }

    render() {
        const {user, goToUser, containerStyle, avatarStyle, deleteUser} = this.props;

        return (
            <TouchableOpacity style={[styles.container, containerStyle]} onPress={() => typeof goToUser === 'function' && goToUser(user)}>
                <View style={styles.leftContainer}>
                    <Image style={[styles.avatar , avatarStyle]} source={{ uri: user.avatar }}/>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.pseudo}>
                        {user.pseudo}
                    </Text>
                    <Text style={styles.name}>
                        {user.firstName && user.lastName 
                        ?   user.firstName + ' ' + user.lastName
                        :   ''
                        }
                    </Text>
                    <View style={styles.sportsContainer}>
                        {user.sports && user.sports.length > 0 && user.sports.map((sport, index) => (
                            <Image style={styles.sportIcon} source={{ url: sport.sport.logo }} key={index}/>
                        ))}
                    </View>
                    {user.circlesUserIsIn && user.circlesUserIsIn.edges && user.circlesUserIsIn.edges.length > 0 &&
                        <View style={styles.circlesContainer}>
                            <Image source={images.sportunity_group} style={styles.circleIcon} />
                            <View style={{flexDirection: 'row'}}>
                                <Text numberOfLines={2} style={styles.circlesName}>
                                    {(user.circlesUserIsIn.edges.map(edge => edge.node).map((circle, index) => (
                                        (index > 0 ? ',' : '') + circle.name
                                    ))).toString().length > 25
                                    ?   user.circlesUserIsIn.edges.map(edge => edge.node).filter((circle, index) => Boolean(index < 2)).map((circle, index) => (
                                            (index > 0 ? ', ' : '') + circle.name + (index === 1 ? ',..' : '')
                                        ))
                                    :   user.circlesUserIsIn.edges.map(edge => edge.node).map((circle, index) => (
                                            (index > 0 ? ', ' : '') + circle.name
                                        ))
                                    }
                                </Text>
                            </View>
                        </View>
                    }
                </View>
                {deleteUser && <TouchableOpacity style={styles.icon} onPress={() => deleteUser(user)}>
                    <Image style={styles.rightButton} source={images.close_x} />
                </TouchableOpacity>}
            </TouchableOpacity>
        )
    }
};

export default createFragmentContainer(UserCard, {
  user: graphql`
    fragment UserCard_user on User {
        id
        pseudo
        firstName
        lastName
        avatar
        circlesUserIsIn (first: 3) {
            count
            edges {
                node {
                    id,
                    name
                }
            }
        }
        sports {
            sport {
                id
                logo
            }
        }
    }`,
});

  
const styles = StyleSheet.create({
    container: {
        height: 110,
        flex: 1,
        flexDirection: 'row',
        borderWidth: metrics.borderWidthRow,
        borderRadius: metrics.borderRowRadius,
        borderColor: colors.lightGrey,
        //padding: metrics.smallMargin,
        backgroundColor: colors.white,
        elevation: 2,
        shadowColor: colors.black,
        shadowOffset: { width: 1, height: 3},
        shadowOpacity: 0.1,
        paddingVertical: metrics.baseMargin,
        paddingRight: metrics.baseMargin
    },
    leftContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: metrics.baseMargin,
    },
    rightContainer: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    avatar: {
        width: metrics.images.big,
        height: metrics.images.big,
        borderRadius: metrics.images.bigRadius,
        resizeMode: 'cover',
    },
    pseudo: {
        fontSize: fonts.size.medium,
        fontWeight: 'bold',
        color: colors.blue,
        marginBottom: 2
    },
    name: {
        fontSize: fonts.size.small,
        marginBottom: 2
    },
    sportsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 2
    },
    sportIcon: {
        width: metrics.images.small,
        height: metrics.images.small,
        tintColor: colors.lightBlue,
        marginRight: 5
    },
    circlesContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    circleIcon: {
        width: metrics.images.small,
        height: metrics.images.small,
        marginRight: 5
    },
    circlesName: {
        fontSize: fonts.size.small
    },
    icon: {
        alignSelf:'center',
        padding: metrics.baseMargin,
        paddingRight: 0,
      },
      rightButton: {
        tintColor: colors.charcoal, height: 15, width: 15 
      },
})


I18n.fallbacks = true
I18n.translations = translations;
