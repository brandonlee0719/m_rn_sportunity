import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer,
} from 'react-relay';
import Toast from 'react-native-simple-toast';
import { withNavigation } from 'react-navigation';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import environment from 'sportunity/src/createRelayEnvironment';
import NotificationsListView from './NotificationsListView';
import UpdateSportunity from '../EventDetailPage/mutation/UpdateSportunity';
import UpdateSportunityMutation from '../NewActivityPage/Validate/NewUpdateSportunityMutation';
import CancelSportunityMutation from '../EventDetailPage/mutation/CancelSportunity';
import CancelBookingMutation from '../EventDetailPage/mutation/CancelBooking';
import ReadNotificationsMutation from './ReadNotificationsMutation';
import ReadNotificationMutation from './ReadNotificationMutation';
import I18n from 'react-native-i18n';

import { View } from 'react-native';
// import Text from 'react-native-text';

import styles from './style';

class NotificationsPage extends Component {

  _readNotifications = () => {
    ReadNotificationsMutation.commit({
        user: this.props.query.viewer.me, 
      },
      () => {
        console.log('Notifications read')
      },
      error => {
        console.error("Error reading notifications: ",JSON.parse(error.getError().source));
      },
      
    );
  }

  _readNotification = (notifId) => {
    ReadNotificationMutation.commit({
        user: this.props.query.viewer.me, 
        notificationIdVar: notifId
      },
      () => {
        console.log('Notifications read')
      },
      error => {
        console.error("Error reading notification: ",JSON.parse(error.getError().source));
      },
    );
  }

  notificationClick = ({ id, link, notificationType, isRead }) => {
    if (!isRead)
      this._readNotification(id)

    const {navigate} = this.props.navigation

    if (notificationType === 'circleAskedInfo') {
      if (this.props.query && this.props.query.viewer && this.props.query.viewer.me && this.props.query.viewer.me.mangoId)
        navigate('sharedInformation');
      else {
        Toast.show(I18n.t('accountCompleteYourInformation'))
        setTimeout(() => navigate('paymentInformation', {onSaveAccount: () => navigate('accountCompleteYourInformation')}), 500) ;
      }
    }
    else if (notificationType === 'circleFees') {
      if (this.props.query && this.props.query.viewer && this.props.query.viewer.me && this.props.query.viewer.me.mangoId)
        navigate('circleMembershipFees');

        else {
          Toast.show(I18n.t('accountCompleteYourInformation'))
          setTimeout(() => navigate('paymentInformation', {onSaveAccount: () => navigate('accountCompleteYourInformation')}), 500) ;
        }
    }
    else if (notificationType === 'circle') {
      navigate('circledetail', {circleId: link})
    } 
    else if (link && link !== "") {
      navigate('eventdetail', { id: link });
    }
  }

  render() {
    const { viewer: { me } } = this.props.query;
    return (
      <View style={styles.container}>
        {me && 
          <NotificationsListView 
            notifications={me.notifications} 
            notificationClick={this.notificationClick} 
            readAllNotifications={this._readNotifications}
            numberOfUnreadNotifications={me.numberOfUnreadNotifications}/>
        }
      </View>
    );
    return <View></View>
  }
}

NotificationsPage.propTypes = {
  viewer: PropTypes.object.isRequired,
};


const NotificationsPageTemp = createRefetchContainer(withNavigation(NotificationsPage), 
  graphql`
    fragment NotificationsPage_query on Query {
      viewer {
        id
        me {
          id
          mangoId
          numberOfUnreadNotifications
          notifications(first: 20) @connection(key: "NotificationsPage_notifications") {
            edges {
              node {
                id
              }
            }
            ...NotificationsListView_notifications
          }
        } 
      }
    }`,
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('notifications')
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query NotificationsPageQuery {
            ...NotificationsPage_query
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <NotificationsPageTemp query={props} {...this.props}/>;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          }
        }}
      />
    )
  }
}
