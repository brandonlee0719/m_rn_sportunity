import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  GiftedChat,
  LoadEarlier,
  loadEarlierProps,
  Composer
} from "react-native-gifted-chat";
import { graphql, createFragmentContainer, QueryRenderer } from "react-relay";
import { cloneDeep } from "lodash";

import AddMessageMutation from "../mutation/AddMessage";
import ReadChatMutation from "../mutation/ReadChat";

import I18n from "react-native-i18n";

class MessagesList extends Component {
  constructor(props) {
    super(props);

    const user = this.props.viewer.me;

    this.state = {
      messages: [],
      localMessage: false,
      readMessage: false,
      numberReceiveProps: 1,
      user: {
        _id: user.id,
        name: user.pseudo,
        avatar: user.avatar
      }
    };
  }

  componentDidMount() {
    this.loadMessages();
  }

  componentWillMount() {
    this.readChat();
  }

  componentWillUnmount() {
    this.readChat();
  }

  readChat = () => {
    const { viewer, chat } = this.props;

    ReadChatMutation.commit(
      { chatId: chat.id },
      response => {
        console.log(response);
      },
      error => console.log(error.getError())
    );
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.chat.messages &&
      this.props.chat.messages &&
      nextProps.chat.messages.edges
    ) {
      const length = nextProps.chat.messages.edges.length;
      if (length === 0) return;

      this.setState(previousState => {
        return {
          messages: cloneDeep(nextProps.chat.messages.edges)
            .reverse()
            .map(item => this.renderMessage(item))
        };
      });
    }
  }

  renderMessage = item => {
    return {
      _id: item.node.id,
      text: item.node.text,
      createdAt: new Date(item.node.created),
      user: {
        _id: item.node.author && item.node.author.id,
        name: item.node.author && item.node.author.pseudo,
        avatar: item.node.author && item.node.author.avatar
      }
    };
  };
  /**
   * change structure message
   */
  loadMessages = () => {
    const messages = this.props.chat.messages;
    let newMessages = cloneDeep(messages);
    newMessages = messages
      ? newMessages.edges
          .sort((a, b) => (a.node.created <= b.node.created ? 1 : -1))
          .map(item => this.renderMessage(item))
      : [];

    this.setState({ messages: newMessages, length: newMessages.length });
    this.renderComposer = this.renderComposer.bind(this);
  };

  /*onSend = (messages) => {
    this.props.onSend(messages[0].text);
  }*/

  onSend = messages => {
    const { chat, viewer } = this.props;

    this.setState(previousState => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
        localMessage: true
      };
    });

    AddMessageMutation.commit(
      {
        chatId: chat.id,
        message: {
          text: messages[0].text,
          author: viewer.me.id
        }
      },
      response => {
        console.log(response);
      },
      error => console.log(error.getError())
    );
  };

  renderLoadEarlier(props) {
    return <LoadEarlier {...props} label={I18n.t("loadMore")} />;
  }

  renderComposer(props) {
    const { viewOnly } = this.props;
    if (viewOnly) {
      return null;
    }
    return <Composer {...props} />;
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={this.state.user}
        placeholder={I18n.t("typeMessage")}
        onLoadEarlier={this.props.onLoadEarlier}
        loadEarlier={this.props.canLoadEarlier}
        isLoadingEarlier={this.props.isLoadingEarlier}
        renderLoadEarlier={props => this.renderLoadEarlier(props)}
        renderComposer={this.renderComposer}
      />
    );
  }
}

MessagesList.propTypes = {
  chat: PropTypes.object.isRequired,
  viewer: PropTypes.object.isRequired
};

export default createFragmentContainer(MessagesList, {
  viewer: graphql`
    fragment MessagesList_viewer on Viewer {
      me {
        id
        pseudo
        avatar
      }
    }
  `
});
