import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import moment from 'moment';
import { images } from 'sportunity/src/theme';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

class NotificationsItemView extends Component {

  render = () => {
    const { notification, notificationClick } = this.props ;

    return (
      <TouchableOpacity style={[styles.container, !notification.isRead ? {backgroundColor: '#D8D8D8',} : null]} onPress={() => notificationClick(notification)}>
        <View key="header" style={styles.header}>
          <Image
            style={styles.headerIcon}
            source={images.info}
            resizeMode="contain"
          />
          <Text key="date" style={styles.date}>{moment(notification.created).format('ddd D MMM HH:mm')}</Text>
        </View>
        <View key="body" style={styles.body}>
          {notification.image
            ? <Image style={styles.sportImage} source={{uri: notification.image}} resizeMode="contain"/>
            : <View style={styles.icon} />
          }
          <View style={styles.column}>
            {notification.title && <Text key="title" style={styles.title}>{notification.title}</Text>}
            <Text key="text" style={notification.title ? styles.text : styles.title}>{notification.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
} 

NotificationsItemView.propTypes = {
  notification: PropTypes.object.isRequired,
  notificationClick: PropTypes.func.isRequired,
};

export default createFragmentContainer(NotificationsItemView, {
  notification: graphql`
    fragment NotificationItemView_notification on Notification{
      id
      title
      text
      link
      created
      image
      notificationType
      isRead
    }`
});
