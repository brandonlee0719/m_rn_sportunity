import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, AsyncStorage } from 'react-native';
import Text from 'react-native-text';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay'; 
import { isEqual } from 'lodash';
import {cloneDeep} from 'lodash'

import UnreadNotificationSubscription from './unreadNotificationSubscription';

import { metrics, colors, fonts } from 'sportunity/src/theme';
import { updateProfileCounter } from 'sportunity/src/action/profileActions';
import { connect } from 'react-redux';
import { dispatchToActions } from '../../../../action/utils';

const styles = {
  text: {
    ...fonts.style.h5,
    color: colors.charcoal,
    flex: 2,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: metrics.baseMargin,
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

const countUnreadNotifications = (collection) =>
  collection.reduce((mem, { numberOfUnreadNotifications = 0 }) => mem + numberOfUnreadNotifications, 0)

class DrawerNotification extends Component {
  constructor(props){
    super(props);
    this.sub ;
  }

  async componentDidMount() {
    setTimeout(async () => {
      this.componentWillReceiveProps({...this.props, force: true })
      await this._refetch()
    }, 2000);
    this.sub = UnreadNotificationSubscription()
  }

  componentWillUnmount() {
    this.sub.dispose()
  }

  componentWillReceiveProps(nextProps) {
    const { viewer: { user } } = this.props;
    const {
      force = false,
      viewer: {
        superMe,
        authorizedAccounts,
      },
      updateProfileCounter,
      user: newMe,
    } = nextProps;

    if (superMe && newMe &&
        (force ||
          (!user || !user.numberOfUnreadNotifications || !isEqual(user, newMe))
        )
      ) {
      let newAuthorizedAccounts = [];
      if (authorizedAccounts && authorizedAccounts.accounts) {
        newAuthorizedAccounts = cloneDeep(authorizedAccounts.accounts) ;
        let otherIndex = newAuthorizedAccounts.findIndex(item => item.id === newMe.id)
        if (otherIndex >= 0)
        newAuthorizedAccounts.splice(otherIndex, 1);
      }
  
      updateProfileCounter({
        unreadNotifications: parseInt(newMe.numberOfUnreadNotifications || 0),
        unreadAllNotifications:
          //parseInt(newMe.numberOfUnreadNotifications || 0) +
          countUnreadNotifications(superMe.subAccounts) +
          countUnreadNotifications(newAuthorizedAccounts) + 
          newMe.numberOfFormsToFill +
          newMe.numberOfPaymentModelsToPay,
      });
    }

    if (!this.props.isDrawerOpen && nextProps.isDrawerOpen) {
      this._refetch()
    }
  }

  _refetch = async() => {
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
  }

  render() {
    const { viewer, me, onPress, text, updateProfileCounter } = this.props;
    return null ;
    return(
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {
          me
          ?
            <View style={styles.badgeContainer}>
              <Text style={styles.badge}>{me.numberOfUnreadNotifications}</Text>
            </View>
          :
          null
        }

      </TouchableOpacity>
    );
  }

}

DrawerNotification.propTypes = {
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
)(DrawerNotification)

export default createRefetchContainer(rdx, 
  {
    user: graphql`
      fragment DrawerNotificationContainer_user on User {
        id
        numberOfUnreadNotifications
        numberOfFormsToFill
        numberOfPaymentModelsToPay
      }
    `,
    viewer: graphql`
      fragment DrawerNotificationContainer_viewer on Viewer @argumentDefinitions(
        query: {type: "Boolean!", defaultValue: false},
        superToken: {type: "String"},
        userToken: {type: "String"}
      ){
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
        authorizedAccounts(userToken: $userToken) @include(if: $query){
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
    `
  },
  graphql`
    query DrawerNotificationContainerRefetchQuery ($query: Boolean!, $superToken: String, $userToken: String) {
      viewer {
        me {
          ...DrawerNotificationContainer_user @arguments(query: $query)
        }
        ...DrawerNotificationContainer_viewer @arguments (query: $query, superToken: $superToken, userToken: $userToken) 
      }
    }
  `
)