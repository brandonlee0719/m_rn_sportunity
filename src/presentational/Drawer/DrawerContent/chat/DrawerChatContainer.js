import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, AsyncStorage } from 'react-native';
import Text from 'react-native-text';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
import { connect } from 'react-redux';
import { dispatchToActions } from '../../../../action/utils';
import {cloneDeep} from 'lodash'

import UnreadChatsSubscription from './unreadChatsSubscription';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import { updateProfileCounter } from 'sportunity/src/action/profileActions'

const styles = {
  text: {
    ...fonts.style.h5,
    color: colors.charcoal,
    flex: 2,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer:{
    height: metrics.icons.medium,
    width: metrics.icons.medium,
    backgroundColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge:{
    color: 'white',
    ...fonts.style.h5,
  },

};


const countUnreadChats = (collection) =>
  collection.reduce((mem, { unreadChats = 0 }) => mem + unreadChats, 0)

class DrawerChat extends Component {
  constructor(props){
    super(props);
    this.sub ;
  }

  async componentDidMount() {
    setTimeout(async () => {
      this.componentWillReceiveProps({...this.props, force: true })
      
      let userToken = await AsyncStorage.getItem('userToken');
      let superToken = await AsyncStorage.getItem('superToken');

      if (userToken && superToken) {
          const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            userToken: userToken, 
            superToken: superToken,
            query: true
          });
          
          this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
          );
      }
    }, 2000)

    this.sub = UnreadChatsSubscription()
  }

  componentWillUnmount() {
    !!this.sub && this.sub.dispose()
  }

  componentWillReceiveProps(nextProps) {
    const { user } = this.props;
    const {
      force = false,
      user:newMe,
      viewer: {
        superMe,
        authorizedAccounts,
      },
      updateProfileCounter,
    } = nextProps;
    
    if (newMe && superMe &&
      (force ||
        (!user || !user.unreadChats || user.unreadChats != newMe.unreadChats))) {
      
        let newAuthorizedAccounts = [];
        if (authorizedAccounts && authorizedAccounts.accounts) {
          newAuthorizedAccounts = cloneDeep(authorizedAccounts.accounts) ;
          let otherIndex = newAuthorizedAccounts.findIndex(item => item.id === newMe.id)
          if (otherIndex >= 0)
            newAuthorizedAccounts.splice(otherIndex, 1);
        }

      updateProfileCounter({
        unreadChats: parseInt(newMe.unreadChats || 0),
        unreadAllChats:
          //parseInt(newMe.unreadChats || 0) +
          countUnreadChats(superMe.subAccounts) +
          countUnreadChats(newAuthorizedAccounts),
      });
    }
  }

  render() {
    const {
      onPress,
      text,
      user = {} ,
      updateProfileCounter
    } = this.props
    return null;
    return(
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {
          user
          ?
            <View style={styles.badgeContainer}>
              <Text style={styles.badge}>{user.unreadChats}</Text>
            </View>
          :
          null
        }

      </TouchableOpacity>
    );
  }
}


DrawerChat.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  updateProfileCounter: PropTypes.func.isRequired,
};

const actions = {
  updateProfileCounter,
}

const rdx = connect(
  null,
  dispatchToActions(actions),
)(DrawerChat);

export default createRefetchContainer(rdx, 
  {
    user: graphql`
      fragment DrawerChatContainer_user on User @argumentDefinitions(
        query: {type: "Boolean!", defaultValue: false},
      )  {
        id
        unreadChats @include(if: $query)
      }
    `,
    viewer: graphql`
      fragment DrawerChatContainer_viewer on Viewer @argumentDefinitions(
        query: {type: "Boolean!", defaultValue: false},
        superToken: {type: "String"},
        userToken: {type: "String"}
      )  {
      superMe(superToken: $superToken) @include(if: $query){
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
    }`
  },
  graphql`
    query DrawerChatContainerRefetchQuery ($query: Boolean!, $superToken: String, $userToken: String) {
      viewer {
        me {
          ...DrawerChatContainer_user @arguments(query: $query)
        }
        ...DrawerChatContainer_viewer @arguments (query: $query, superToken: $superToken, userToken: $userToken) 
      }
    }
  `
)