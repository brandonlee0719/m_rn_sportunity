import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import NotificationItemView from './NotificationItemView';
import styles from './style';


const NotificationListView = ({ notifications, notificationClick, numberOfUnreadNotifications, readAllNotifications }) => (
  (notifications && notifications.edges && notifications.edges.length > 0) ?
      (
        <ScrollView>
          {numberOfUnreadNotifications > 0 && 
            <TouchableOpacity onPress={readAllNotifications} style={styles.readAllContainer}>
              <Text style={styles.readAllText}>{I18n.t('readAllNotifications')}</Text>
            </TouchableOpacity>
          }
          { notifications.edges.map((notification, index) => (
            <NotificationItemView
              key={index}
              notification={notification.node}
              notificationClick={notificationClick}
            />
          ))}
        </ScrollView>
      )
      :
        <View style={styles.emptyListTextContainer}>
          <Text style={styles.emptyListText}>{I18n.t('notification_none')}</Text>
        </View>
);

NotificationListView.propTypes = {
  notifications: PropTypes.object.isRequired,
  notificationClick: PropTypes.func.isRequired,
};

export default createFragmentContainer(NotificationListView, {
  notifications: graphql`
    fragment NotificationsListView_notifications on NotificationConnection {
      edges {
        node {
          ...NotificationItemView_notification
        }
      }
    }`,
});

I18n.fallbacks = true

I18n.translations = translations;
