import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import I18n from 'react-native-i18n';

import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import ChatDetailPage from './ChatDetailPage';

export class ChatView extends Component{
  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }

  componentDidMount() {
    let { id } = this.props;

    const refetchVariables = fragmentVariables => ({
      ...fragmentVariables,
      id,
      queryChat: true
    });

    this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
    );

    if (this.props.name === 'chatuser' && this.props.viewer.chat && this.props.viewer.chat.id && !this.context.relay.variables.queryChat) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        chatId: this.props.viewer.chat.id,
        queryChat: true
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
      const { viewer, viewer:{ chats, me }, hideMenu, viewOnly } = this.props;
      return chats && chats.edges && chats.edges[0]
      ? <ChatDetailPage viewer={viewer} chat={chats.edges[0].node} me={me} hideMenu={hideMenu} viewOnly={viewOnly} />
      : null;
  }
}

const ChatContainerTemp = createRefetchContainer(withNavigation(ChatView), {
    viewer: graphql`fragment ChatDetailPageContainer_viewer on Viewer @argumentDefinitions (
      id: {type: "ID"},
      queryChat: {type: "Boolean!", defaultValue: false},
    ) {
      ...ChatDetailPage_viewer
      chats (id: $id, first:1) @include(if: $queryChat){
        edges {
          node {
              id
              ...ChatDetailPage_chat
          }
        }
      }
    }`,
  },
  graphql`
    query ChatDetailPageContainerRefetchQuery ($id: ID, $queryChat: Boolean!) {
      viewer {
        ...ChatDetailPageContainer_viewer @arguments (id: $id, queryChat: $queryChat)
      }
    }
  `
);


export class ChatContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', I18n.t('drawerChats'))
    };
  };

  setTitle = title => this.props.navigation.setParams({title})

  render() {
    let {id,name} = this.props;
    let viewOnly = false;
    const {navigation} = this.props;
    if (navigation) {
      id = navigation.getParam('id', null)
      name = navigation.getParam('name', null)
      viewOnly = navigation.getParam('viewOnly', false)
    }

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ChatDetailPageContainerQuery (
            $id: ID,
            $queryChat: Boolean!
          ){
            viewer {
              ...ChatDetailPageContainer_viewer @arguments(
                id: $id,
                queryChat: $queryChat
              )
            }
          }
        `}
        variables={{
          id,
          queryChat: false
        }}
        render={({error, props}) => {
          if (props) {
            return <ChatContainerTemp
                viewer={props.viewer}
                query={props}
                setTitle={this.setTitle}
                id={id}
                name={name}
                viewOnly={viewOnly}
                {...this.props}
              />;
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
