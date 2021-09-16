import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';
import Text from 'react-native-text';
import {
    graphql,
    createRefetchContainer,
    QueryRenderer, 
} from 'react-relay';
import {withNavigation} from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n'

import { images } from 'sportunity/src/theme';
import DrawerButton from '../../../Button/DrawerButton';
import translations from 'sportunity/src/translations';

import { metrics, colors, fonts } from 'sportunity/src/theme';

import {
    creatingSubAccount,
} from 'sportunity/src/action/createProfileActions';

import { resetTutorialSteps } from 'sportunity/src/action/profileActions';
import environment from 'sportunity/src/createRelayEnvironment';

const maxBadgeNumberStr = '99+'
const maxBadgeNumber = (badgeNumber) => badgeNumber > 99 ? maxBadgeNumberStr : badgeNumber;

let styles;

class DrawerTeams extends Component {
    static contextTypes = {
        relay: PropTypes.shape({
          variables: PropTypes.object,
        }),
    }

    constructor() {
        super();
        this.state = {
            superToken: '',
            actualUserId: '',
            isListOpen: false,
            newSubAccountClicked: false
        }
    }

    async componentDidMount() {
        setTimeout(async () => {
            let superToken = '';
            let actualToken = '';
            try {
                superToken = await AsyncStorage.getItem('superToken');
                actualToken = await AsyncStorage.getItem('token');
            }
            catch (err) {
                console.log("No superToken");
            }
            if (superToken !== '' && superToken) {
                // const refetchVariables = fragmentVariables => ({
                //     ...fragmentVariables,
                //     superToken: superToken,
                //     query: true
                // });
                
                // this.props.relay.refetch(
                //     refetchVariables,
                //     null,
                //     null,
                //     {force: false}
                // );

                this.setState({
                    superToken,
                    actualToken,
                })
                if (actualToken !== superToken) {
                    this.setState({
                        isListOpen: true
                    })
                }
            }
        }, 2000)
    }

    componentWillReceiveProps = (nextProps) => {
        if  (this.props.isDrawerOpen !== nextProps.isDrawerOpen && !this.props.viewer.superMe && !!this.state.superToken) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                superToken: this.state.superToken,
                query: true
            });
            
            this.props.relay.refetch(
                refetchVariables,
                null,
                null,
                {force: false}
            );
        }
        if (nextProps.isDrawerOpen && this.state.newSubAccountClicked) {
            this.setState({ newSubAccountClicked: false })
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                superToken: this.state.superToken,
                query: true
            });
            
            this.props.relay.refetch(
                refetchVariables,
                null,
                null,
                {force: false}
            );
        }
    }

    switchAccount = (token) => {
        if (token !== this.state.actualToken) {
            this.props.resetTutorialSteps();
            this.props.onCloseDrawer();
            this.props.updateToken(token);
            this.setState({
                actualToken: token
            })
        }
    }

    switchToMainAccount = () => {
        if (this.state.superToken !== '' && this.state.actualToken !== this.state.superToken) {
            this.props.resetTutorialSteps();
            this.props.onCloseDrawer()
            this.props.updateToken(this.state.superToken)
            this.setState({
                actualToken: this.state.superToken
            })
        }
    }

    switchToSubAccountCreation = () => {
        this.setState({ newSubAccountClicked: true })
        this.props.creatingSubAccount(this.props.viewer.superMe.profileType)
        this.props.onCreateNewSubAccount()
    }

    render() {
        const { viewer, me } = this.props;
        const { isListOpen, actualToken, superToken } = this.state;

        let totalNumberOfNotification = 0;
        if (viewer.superMe && viewer.superMe.subAccounts && viewer.superMe.subAccounts.length > 0)
            viewer.superMe.subAccounts.forEach(subAccount => totalNumberOfNotification = totalNumberOfNotification + subAccount.unreadChats + subAccount.numberOfUnreadNotifications);

        return (
            viewer && viewer.superMe && me &&
                (viewer.superMe.subAccounts) &&
                (viewer.superMe.userPreferences.areSubAccountsActivated || viewer.superMe.subAccounts && viewer.superMe.subAccounts.length > 0) &&
                !viewer.superMe.isSubAccount
                ? <View>
                    {/*<TouchableOpacity style={styles.row} onPress={() => {this.setState({isListOpen: !this.state.isListOpen})}}>
                        <Text style={styles.text}>
                            {viewer.superMe.profileType === 'PERSON'
                            ?   I18n.t('drawerMyChildren')
                            :   I18n.t('drawerMyTeams')                                
                            }
                        </Text>
                            {totalNumberOfNotification > 0 &&
                                <View style={styles.totalBadgeContainer}>
                                    <Text style={styles.badge}>{totalNumberOfNotification}</Text>
                                </View>
                            }
                    </TouchableOpacity>*/}
                    <DrawerButton
                        text={viewer.superMe.profileType === 'PERSON' ? I18n.t('drawerMyChildren') : I18n.t('drawerMyTeams')}
                        onPress={() => { this.setState({ isListOpen: !this.state.isListOpen }) }}
                        icon={images.members}
                        overlay={totalNumberOfNotification > 0 &&
                            <View style={styles.totalBadgeContainer}>
                                <Text style={styles.badge}>{totalNumberOfNotification}</Text>
                            </View>
                        }
                    />
                    {isListOpen && viewer && viewer.superMe && viewer.superMe.subAccounts && viewer.superMe.subAccounts.length > 0 &&
                        <TouchableOpacity style={styles.listRow} onPress={this.switchToMainAccount}>
                            <View elevation={2} style={styles.photoContainer}>
                                <Image source={{ uri: viewer.superMe.avatar }} style={styles.thumbProfile} />
                            </View>
                            <Text style={me.id === viewer.superMe.id ? styles.selectedLabel : styles.label}>
                                {viewer.superMe.pseudo}
                            </Text>
                        </TouchableOpacity>
                    }
                    {isListOpen && viewer && viewer.superMe && viewer.superMe.subAccounts && viewer.superMe.subAccounts.length > 0 &&
                        viewer.superMe.subAccounts.map((subAccount, index) => (
                            <TouchableOpacity key={index} style={styles.listRow} onPress={() => this.switchAccount(subAccount.token)}>
                                <View style={styles.photoContainer}>
                                    <Image source={{ uri: subAccount.avatar }} style={styles.thumbProfile} />
                                    {(subAccount.unreadChats + subAccount.numberOfUnreadNotifications > 0 || subAccount.unreadChats + subAccount.numberOfUnreadNotifications == maxBadgeNumberStr) &&
                                        <View style={styles.badgeContainer}>
                                            <Text style={styles.badge}>{subAccount.unreadChats + subAccount.numberOfUnreadNotifications}</Text>
                                        </View>
                                    }
                                </View>
                                <Text style={me.id === subAccount.id ? styles.selectedLabel : styles.label}>
                                    {subAccount.pseudo}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                    {isListOpen && viewer.superMe.userPreferences.areSubAccountsActivated &&
                        <TouchableOpacity style={styles.listRow} onPress={this.switchToSubAccountCreation}>
                            <View style={styles.photoContainer}>
                                <View
                                    style={[styles.circular, styles.addition]}
                                    underlayColor={styles.underlayColor}
                                >
                                    <Text style={styles.charSymbol}> + </Text>
                                </View>
                            </View>
                            <Text style={styles.label}>
                                {viewer.superMe.profileType === 'PERSON'
                                    ? I18n.t('drawerAddChild')
                                    : I18n.t('drawerAddTeam')
                                }
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
                : null
        );
    }
};

styles = {
    text: {
        ...fonts.style.h5,
        color: colors.charcoal,
        //flex: 2,
        marginVertical: metrics.baseMargin,
    },
    row: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //marginBottom: metrics.baseMargin,
    },
    listRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: metrics.baseMargin,
        marginLeft: metrics.baseMargin
    },
    photoContainer: {
        marginRight: 10,
        shadowRadius: 20,
        elevation: 2,
        paddingRight: 5,
        paddingBottom: 5
    },
    thumbProfile: {
        width: metrics.images.medium,
        height: metrics.images.medium,
        borderRadius: metrics.images.mediumRadius,
    },
    label: {
        flex: 3,
        ...fonts.style.input,
    },
    selectedLabel: {
        flex: 3,
        ...fonts.style.input,
        color: colors.skyBlue,
        fontWeight: '500'
    },
    circular: {
        // flex: 1,
        width: metrics.images.medium,
        height: metrics.images.medium,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: metrics.icons.xl,
    },
    addition: {
        backgroundColor: colors.silver,
    },
    charSymbol: {
        color: colors.skyBlue,
        fontSize: fonts.style.h2.fontSize,
        fontFamily: fonts.style.h2.fontFamily,
        fontWeight: 'bold',
    },
    totalBadgeContainer: {
        //position: 'absolute',
        width: 18,
        height: 18,
        //right: 3,
        //bottom: -13,
        backgroundColor: colors.red,
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
    },
    badgeContainer: {
        position: 'absolute',
        width: 18,
        height: 18,
        right: 3,
        bottom: 3,
        backgroundColor: colors.red,
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center',
    },
    badge: {
        color: 'white',
        ...fonts.style.h5,
        fontSize: 10,
    },
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
    creatingSubAccount: bindActionCreators(creatingSubAccount, dispatch),
    resetTutorialSteps: bindActionCreators(resetTutorialSteps, dispatch),
});

const DrawerTeamsReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(DrawerTeams);


export default createRefetchContainer(
    DrawerTeamsReduxContainer,
    {viewer: graphql`
        fragment DrawerTeamsContainer_viewer on Viewer @argumentDefinitions(
            query: {type: "Boolean!", defaultValue: false},
            superToken: {type: "String"}
          )  {
                me {
                    id
                }  
                superMe (superToken: $superToken) @include(if: $query) {
                    id,
                    pseudo,
                    avatar,
                    profileType, 
                    isSubAccount,
                    subAccounts {
                      id
                      pseudo,
                      avatar,
                      token,
                      unreadChats
                      numberOfUnreadNotifications
                    }
                    userPreferences {
                        areSubAccountsActivated
                    }
                }
            }
        `,
        me: graphql`
            fragment DrawerTeamsContainer_me on User {
                id
            }
        `
    },
    graphql`
      query DrawerTeamsContainerRefetchQuery ($query: Boolean!, $superToken: String) {
        viewer {
          me {
            ...DrawerTeamsContainer_me 
          }
          ...DrawerTeamsContainer_viewer @arguments (query: $query, superToken: $superToken) 
        }
      }
    `
);

I18n.fallbacks = true
I18n.translations = translations;
