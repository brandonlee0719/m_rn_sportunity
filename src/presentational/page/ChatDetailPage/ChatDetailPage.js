import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';
import { withNavigation } from 'react-navigation';

import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import AddMessageSubscription from './subscription/AddMessage';
import styles from './style';
import MessagesList from './MessagesList';
import UsersList from './UsersList';
import UserItem from './UsersList/UserItem';

/**
 * ChatView
 */
class ChatView extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: null,
      image: null,
      status: 'Not connected',
      isLoadingEarlier: false,
      messageCount: 20
    };
    this.sub ;
  }

  componentDidMount() {
    this.sub = AddMessageSubscription({chatIdsVar: [this.props.chat.id]})
  }

  /**
   *
   */
  componentWillMount() {
    this.setState({
      users: this.props.chat.users,
    });
  }
  componentWillUnmount() {
    this.sub.dispose()
  }

  infoChat = (chat, me) => {
    let title = '';
    if (chat.sportunity){
      title = chat.sportunity.title;
    }
    else if (chat.circle) {
      title = chat.circle.name ;
    }
    else{
      const userChat = chat.users.find((item) => item.id !== me.id);
      if (userChat) {
        title = userChat.pseudo;
      }
    }
    return title;
}

  _onLoadEarlier = () => {
    if (!this.state.isLoadingEarlier) {
      this.setState({isLoadingEarlier: true})
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        messageCount: this.state.messageCount + 20
      });

      this.props.relay.refetch(
          refetchVariables,
          null,
          () => this.setState({isLoadingEarlier: false, messageCount: this.state.messageCount + 20}),
          {force: false}
      );
    }
  }
  
  render(){
    return (
      this.props.chat &&
        <View style={this.props.hideMenu ? {flex: 1} : styles.container}>
          {(this.props.chat.sportunity != null || this.props.chat.circle != null) &&
            <UsersList users={this.state.users} />
          }
          <MessagesList
            chat={this.props.chat}
            viewer={this.props.viewer}
            onLoadEarlier={this._onLoadEarlier}
            isLoadingEarlier={this.state.isLoadingEarlier}
            canLoadEarlier={this.props.chat.messages && this.props.chat.messages.pageInfo.hasPreviousPage && !this.state.isLoadingEarlier}
            viewOnly={this.props.viewOnly}
          />
        </View>
    );
  }
}

ChatView.propTypes = {
  chat: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired,
}

const ChatViewContainer = createRefetchContainer(withNavigation(ChatView), {
    chat: graphql`fragment ChatDetailPage_chat on Chat @argumentDefinitions(
      messageCount: {type: "Int", defaultValue: 20}
    ) {
      id,
      users{
        id
        pseudo
        ...UserItem_user
      },
      sportunity{
        id
        title
      },
      circle {
        id
        name
      }
      read,
      messages(last: $messageCount){
        pageInfo {
          hasPreviousPage
        }
        edges {
          node {
            id,
            text,
            author {
              id,
              firstName,
              lastName,
              pseudo,
              avatar
            },
            created
          }
        }
      }
    }`,
    viewer: graphql`fragment ChatDetailPage_viewer on Viewer{
      me {
        id
      }
      ...MessagesList_viewer
    }`,
  },
  graphql`
    query ChatDetailPageRefetchQuery ($messageCount: Int, $id: ID) {
      viewer {
        ...ChatDetailPage_viewer @arguments(messageCount: $messageCount, id: $id)
        chats (id: $id, first:1) {
          edges {
            node {
              ...ChatDetailPage_chat @arguments(messageCount: $messageCount)
            }
          }
        }
      }
    }
  `
)

export default ChatViewContainer
