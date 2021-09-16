import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from 'react-native-text';
import moment from 'moment';
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';

import { styles } from './style';

const Message = ({ messages, title, isRead }) => {
  let message = null;

  if( messages && messages.edges){
    message = messages.edges[messages.edges.length - 1].node;
  }
  return (
  <View style={styles.col}>
    <View style={styles.row}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.datetimeContainer}>
        <Text style={styles.datetime}>
          {message && moment(message.created).format('MMM DD.MM.YY HH:mm')}
        </Text>
      </View>
    </View>
    
    <View style={styles.detailContainer}>
      <View style={styles.row}>
        <Text style={isRead ? styles.subtitle : styles.unreadSubtitle} numberOfLines={1}>{message && message.author && message.author.pseudo}</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={isRead ? styles.message : styles.unreadMessage}>{message && message.text}</Text>
      </View>
    </View>
    
  </View>
)}

Message.propTypes = {
  messages: PropTypes.object,
  sportunity: PropTypes.object,
};


const MessageContainer =  createFragmentContainer(Message, {
  messages: graphql`
    fragment Message_messages on MessageConnection{
      edges {
        node {
          id,
          text,
          author {
            id,
            firstName,
            lastName,
            pseudo
          },
          created
        }
      }
    }`,
})

export default MessageContainer;
