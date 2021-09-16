import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Picker, Modal, ScrollView, Dimensions } from 'react-native';
import Text from 'react-native-text';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { AsyncStorage } from 'react-native';
import I18n from 'react-native-i18n';
import { bindActionCreators } from 'redux';

import { updateFrom } from 'sportunity/src/action/profileActions';
import translations from 'sportunity/src/translations.js';
import { images } from 'sportunity/src/theme';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import { connect } from 'react-redux';
import { resetTutorialSteps } from '../../../../action/profileActions';
const {height, width} = Dimensions.get('window');

let styles ;
const maxBadgeNumberStr = '99+'
const maxBadgeNumber = (badgeNumber) => badgeNumber > 99 ? maxBadgeNumberStr : badgeNumber;

class DrawerHeader extends Component {
  constructor() {
    super();
    this.state = {
      userToken: null,
      actualToken: null,
      isListOpen: false,
      displayAuthorizedAccountsPicker: false,
    }
  }

  async componentDidMount() {
   await setTimeout(async () => {
      let userToken = '';
      let actualToken = '';
      try {
          userToken = await AsyncStorage.getItem('userToken');
          actualToken = await AsyncStorage.getItem('token');
      }
      catch (err) {
          console.log("No userToken");
      }
      
      if (userToken && userToken !== '') {
        const refetchVariables = fragmentVariables => ({
          ...fragmentVariables,
          userToken,
          query: true
        });
        
        this.props.relay.refetch(
          refetchVariables,
          null,
          null,
          {force: false}
        );
        this.setState({
            userToken,
            actualToken,
        })
        if (actualToken !== userToken) {
          this.setState({
              isListOpen: true
          })
        }
      }
    }, 2000)
  }

  componentWillReceiveProps = (nextProps) => {
    if  (this.props.isDrawerOpen !== nextProps.isDrawerOpen && !this.props.viewer.superMe) {
        const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            userToken: this.state.userToken,
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

  switchUser = (token) => {
    this.setState({
      actualToken: token
    })
    this.props.onCloseDrawer();
    this.props.updateFrom('login');
    this.props.updateSuperToken(token)
    this.props.updateToken(token);
    this.props.resetTutorialSteps();
  }

  getSelectedAccount = (viewer, me) => {
    let selectedAccount ;
    if (me && viewer.authorizedAccounts) {
      if (me.id === viewer.authorizedAccounts.id)
        selectedAccount = {
          pseudo: viewer.authorizedAccounts.pseudo,
          avatar: viewer.authorizedAccounts.avatar,
          id: viewer.authorizedAccounts.id
        }
      else if (viewer.authorizedAccounts.accounts) {
        viewer.authorizedAccounts.accounts.forEach(account => {
          if (account.id === me.id) {
            selectedAccount = {
              pseudo: account.pseudo,
              avatar: account.avatar,
              id: account.id
            }
          }
        })
        if (!selectedAccount && viewer.authorizedAccounts && viewer.authorizedAccounts.accounts) {
          viewer.authorizedAccounts.accounts.forEach(account => {
            if (account.subAccounts && account.subAccounts.length > 0) {
              account.subAccounts.forEach(subAccount => {
                if (subAccount.id === me.id)
                  selectedAccount = {
                    pseudo: account.pseudo,
                    avatar: account.avatar,
                    id: account.id
                  }
              })
            }
          })
        }
      }
    }
    if (!selectedAccount && me && viewer.superMe) {
      if (viewer.superMe.id === me.id)
        selectedAccount = {
          pseudo: viewer.superMe.pseudo,
          avatar: viewer.superMe.avatar,
          id: viewer.superMe.id
        }
      else if (viewer.superMe.subAccounts && viewer.superMe.subAccounts.length > 0) {
        viewer.superMe.subAccounts.forEach(subAccount => {
          if (subAccount.id === me.id)
            selectedAccount = {
              pseudo: viewer.superMe.pseudo,
              avatar: viewer.superMe.avatar,
              id: viewer.superMe.id
            }
        })
      }
    }

    if (selectedAccount)
      return selectedAccount
    else
      return null;
  }

  render() {
    const {
      onPress,
      viewer,
      me,
      viewer: {
        authorizedAccounts
      },
      badgeNumber
    } = this.props;
    let index = 0;
    let data = [];
    let selectedUser = this.getSelectedAccount(viewer, me );

    if (authorizedAccounts && authorizedAccounts.accounts && selectedUser) {
      data.push({
        token: this.state.userToken, 
        pseudo: authorizedAccounts.pseudo, 
        avatar: authorizedAccounts.avatar,
        id: authorizedAccounts.id, 
        badge: authorizedAccounts.unreadChats + authorizedAccounts.numberOfUnreadNotifications
      })
      data = data.concat(authorizedAccounts.accounts.map((account, index) => ({
        token: account.token, 
        pseudo: account.pseudo, 
        avatar: account.avatar,
        id: account.id,
        badge: account.unreadChats + account.numberOfUnreadNotifications
      })))
      let index = data.findIndex(item => item.id === selectedUser.id)
      data.splice(index, 1);
    }

    let badgeTotal = 0 ; 
    data.forEach(item => badgeTotal = badgeTotal + item.badge)
    return (
      selectedUser && authorizedAccounts && authorizedAccounts.accounts && authorizedAccounts.accounts.length > 0 ?
          <View style={styles.container}>
            
            <View style={styles.column}>
              <TouchableOpacity onPress={() => this.setState({displayAuthorizedAccountsPicker: true})}>
                
                <View style={styles.drawerPhotoContainer}>
                  <Image source={{ uri: selectedUser.avatar }} style={styles.avatar} />
                  {(badgeTotal > 0 || badgeTotal==maxBadgeNumberStr) &&
                    <View style={styles.drawerBadgeContainer}>
                      <Text style={styles.badge}>{badgeTotal}</Text>
                    </View>
                  }
                </View>
                <View style={styles.drawerPseudoLine}>
                  <Text style={styles.text}>
                    {selectedUser.pseudo} &#9660;
                  </Text>
                </View>
                </TouchableOpacity>
            </View>
            
            <Image source={images.logo} style={styles.logo} />

            <Modal
              animationType={'slide'}
              transparent={true}
              visible={this.state.displayAuthorizedAccountsPicker}
              onRequestClose={() => this.setState({displayAuthorizedAccountsPicker: false})}
            >
              <TouchableOpacity style={styles.background} onPress={() => this.setState({displayAuthorizedAccountsPicker: false})}>
                <View style={styles.overlay}>
                  <View style={[styles.optionContainer]}>
                    <ScrollView keyboardShouldPersistTaps={"always"}>
                      <View style={{paddingHorizontal:10}}>
                        {data.map((authorizedAccount, index) => (
                          <TouchableOpacity
                            key={index}
                            style={styles.optionStyle}
                            onPress={() => this.switchUser(authorizedAccount.token)}>
                            <View style={styles.photoContainer}>
                              <Image style={styles.avatar} source={{ uri: authorizedAccount.avatar }}/>
                              {(authorizedAccount.badge > 0 || authorizedAccount.badge==maxBadgeNumberStr) &&
                                <View style={styles.badgeContainer}>
                                  <Text style={styles.badge}>{authorizedAccount.badge}</Text>
                                </View>
                              }
                            </View>
                            <Text style={styles.modalPseudo}>
                              {authorizedAccount.pseudo}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>

        </View>
      : <View style={styles.centeredContainer}>
          <Image source={images.logo} style={styles.logo} />
      </View>
    )
  };
}

const stateToProps = ({
  sportunityProfile: {
    counts: {
      unreadTotal,
      unreadAllTotal,
    }
  }
}) => ({
  badgeNumber: maxBadgeNumber(unreadAllTotal - unreadTotal),
})

const dispatchToProps = (dispatch) => ({
  updateFrom: bindActionCreators(updateFrom, dispatch),
  resetTutorialSteps: bindActionCreators(resetTutorialSteps, dispatch),
});

const RdxDrawerHeader = connect(stateToProps, dispatchToProps)(DrawerHeader)

export default createRefetchContainer(RdxDrawerHeader, 
  {
    me: graphql`
      fragment header_me on User {
        id
        pseudo
        avatar
      }
    `,
    viewer: graphql`
      fragment header_viewer on Viewer @argumentDefinitions(
        query: {type: "Boolean!", defaultValue: false},
        userToken: {type: "String"}
      ) {
          superMe(superToken: $userToken) @include(if: $query) {
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
          authorizedAccounts(userToken: $userToken) @include(if: $query) {
            id
            pseudo,
            avatar
            profileType,
            unreadChats
            numberOfUnreadNotifications
            accounts {
              id,
              pseudo,
              avatar,
              token,
              unreadChats
              numberOfUnreadNotifications
              authorization_level
              subAccounts {
                id
              }
            }
          }
      }
  `,
  },
  graphql`
    query headerRefetchQuery ($query: Boolean!, $userToken: String) {
      viewer {
        ...header_viewer @arguments(query: $query, userToken: $userToken)
      }
    }
  `
);

styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: metrics.baseMargin,
        marginTop: metrics.doubleBaseMargin + metrics.baseMargin,
        marginBottom: metrics.doubleBaseMargin * 2,
    },
    centeredContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: metrics.baseMargin,
      marginTop: metrics.doubleBaseMargin,
      marginBottom: metrics.doubleBaseMargin * 2 
    },
    text: {
      ...fonts.style.regular,
      color: colors.charcoal,
      flex: 1,
      textAlign: 'center',
      zIndex: 1,
    },
    logo: {
        alignSelf: 'center',
        width: 60,
        height: 60,
        marginTop: 10
        //flex: 1
    },
    column:{
      flexDirection: 'column',
      height: 60,
      //alignItems: 'center',
      //alignSelf: 'stretch',
      flex: 4,
      marginVertical: metrics.baseMargin,
    },
    drawerBadgeContainer:{
      position: 'absolute',
      width: 18,
      height: 18,
      right: 55,
      bottom: -2,
      backgroundColor: colors.red,
      justifyContent: 'center',
      borderRadius: 10,
      alignItems: 'center',
      //zIndex: 2,
    },
    badgeContainer:{
      position: 'absolute',
      width: 18,
      height: 18,
      right: -2,
      bottom: -2,
      backgroundColor: colors.red,
      justifyContent: 'center',
      borderRadius: 10,
      alignItems: 'center',
      //zIndex: 2,
    },
    badge:{
      color: 'white',
      ...fonts.style.h5,
      fontSize: 10,
    },
    drawerPhotoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    photoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 3,
    },
    drawerPseudoLine: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      marginTop: 3
    },
    pseudoLine: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: metrics.images.mediumRadius,
      resizeMode: 'cover',
    },
    downIcon: {
      width: 10,
      height: 10,
      tintColor: colors.blue,
      resizeMode: 'contain',
    },
    picker: {
      color: colors.skyBlue,
    },

    background: {
      flex: 1
    },
    overlay: {
      width: width,
      height: height,
      backgroundColor: 'rgba(0,0,0,0.7)',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    optionContainer: {
      borderRadius:5,
      width:width*0.8,
      backgroundColor:'rgba(255,255,255,0.8)'
    },
    optionStyle: {
      padding: 8,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      flexDirection: 'row',
      alignItems: 'center'
    },
    modalPseudo: {
      marginLeft: 10,
      ...fonts.style.regular,
      color: colors.charcoal
    }
};


I18n.fallbacks = true
I18n.translations = translations;
