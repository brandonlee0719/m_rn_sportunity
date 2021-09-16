import React, { Component } from 'react';
import ChatDetailPage from './ChatDetailPage';

import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';

class ChatEdgeContainer extends Component {
  render() {
    const { viewer, viewer:{ me }, chats } = this.props;
    return <ChatDetailPage viewer={viewer} chat={chats.edges[0].node} me={me} />;
  }
}

export const ChatEdge =  createFragmentContainer(ChatEdgeContainer, {
  chats: graphql`fragment ChatEdgeContainer_chats on ChatConnection{
    edges {
      node {
          id
          ...ChatDetailPage_chat
      }
    }
  }`,
});