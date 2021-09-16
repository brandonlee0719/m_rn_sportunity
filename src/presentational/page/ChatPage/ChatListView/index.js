import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, RefreshControl, Text, TouchableOpacity } from 'react-native';
import I18n from 'react-native-i18n';
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';

import {  colors } from 'sportunity/src/theme';
import ChatItem from './ChatItem';
import Message from './Message';
import styles from './style';

class ChatListView extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
    this._onRefresh = this._onRefresh.bind(this);
  }

  _onRefresh = () => {
    this.setState({ isRefreshing: true });
    setTimeout(() => {
      this.setState({ isRefreshing: false });
      //this.props.updateCountLastChat(this.props.count+10);
    }, 3000);
  }

  goToChat = (chat, title) =>{
    this.props.navigation.navigate('chatdetail', { id: chat.id, title: title })
  }

  _sortChats = (chats) => {
    return chats.sort((chatA, chatB) => {
      if (chatA.node.messages.edges.length > 0 && chatB.node.messages.edges.length > 0) {
        if (!chatA.node.read && !chatB.node.read) {
          if (new Date(chatB.node.messages.edges[0].node.created) - new Date(chatA.node.messages.edges[0].node.created) > 0)
            return 1
          else 
            return -1
        }
        else if (!chatA.node.read)
          return -1;
        else if (!chatB.node.read)
          return 1; 
        else if (new Date(chatB.node.messages.edges[0].node.created) - new Date(chatA.node.messages.edges[0].node.created) > 0)
          return 1
        else 
          return -1
      }
      else if (chatA.node.messages.edges.length > 0)
        return -1 ;
      else return 1;

    })
  }

  /**
   *
   */
  render(){
    const chats  = this.props.chats.edges ; //this._sortChats(this.props.chats.edges);
    const {me, readAllChats} = this.props
    return (
      <ScrollView
        onMomentumScrollEnd={this.props.increaseChatNumber}
        scrollEventThrottle={300} 
        refreshControl={ <RefreshControl
          refreshing={this.state.isRefreshing}
          onRefresh={this._onRefresh}
          tintColor={colors.blue}
          title="Loading..."
          titleColor={colors.blue}
          colors={['#ff0000', colors.skyBlue, colors.darkBlue]}
          progressBackgroundColor={colors.darkBlue} />
        }
      >
        {me && me.unreadChats > 0 && 
            <TouchableOpacity onPress={readAllChats} style={styles.readAllContainer}>
              <Text style={styles.readAllText}>{I18n.t('readAllNotifications')}</Text>
            </TouchableOpacity>
        }
        { chats && chats.map((chat, index) => (
            <ChatItem
              key={index}
              goToChat={this.goToChat}
              chat={chat.node}
              me={this.props.me}
            />
          ))
        }
        {
          chats && chats.length === 0 &&
            <Text style={styles.emptyListText}>
              You do not have any chats available. You need to create or book sportunity to access chat.
            </Text>
        }
      </ScrollView>
    );

  }
}

ChatListView.propTypes = {
  chats: PropTypes.object.isRequired,
};

const ChatListViewContainer =  createFragmentContainer(ChatListView, {
  chats: graphql`fragment ChatListView_chats on ChatConnection{
    edges{
      node{
        ...ChatItem_chat
      }
    }
  }`,
  me: graphql`fragment ChatListView_me on User{
    id
    unreadChats
  }`,
})

export default ChatListViewContainer;
