import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { View } from 'react-native';
import I18n from 'react-native-i18n';

import ChatListView from './ChatListView';
import ReadChatMutation from '../ChatDetailPage/mutation/ReadChat'
import style from './style';

class ChatPage extends Component {
  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }

  constructor() {
    super();

    this.state = {
      isLoading: false
    }
  }
  _increaseChatNumber = () => {
    if (!this.state.isLoading && this.props.viewer.me.chats.pageInfo.hasNextPage) {
      this.setState({isLoading: true})

      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        count: this.context.relay.variables.count + 8
      });
        
      this.props.relay.refetch(
          refetchVariables,
          null,
          () => {
            this.setState({isLoading: false})
          },
          {force: false}
      );
    }
  }

  _readAllChats= () => {
    const {viewer} = this.props
    const {chats} = this.props.viewer.me ;
    if (chats.edges && chats.edges.length > 0) {
      chats.edges.forEach(edge => {
        if (edge.node && !edge.node.read) {
          ReadChatMutation.commit({ 
            chatId: edge.node.id
          },
          (response) => {
            console.log(response)
          },
          error => console.log(error.getError()),
          );
        }
      })
    }
  }

  render(){
    const { viewer:{ me, me:{chats} } } = this.props;
    return (
      <View style={style.container}>
        <ChatListView 
          chats={chats} 
          me={me} 
          numberOfChats={this.context.relay.variables.count}
          increaseChatNumber={this._increaseChatNumber}
          readAllChats={this._readAllChats}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

ChatPage.propTypes = {
  viewer: PropTypes.object,
};

const ChatPageContainer =  createRefetchContainer(withNavigation(ChatPage), {
  viewer: graphql`
    fragment ChatPage_viewer on Viewer @argumentDefinitions (
      count: {type: Int, defaultValue: 8}
    ){
      me{
        chats(first: $count){
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          ...ChatListView_chats
          edges {
            node {
              id,
              read
            }
          }
        }
        ...ChatListView_me
      }
    }`
  }, 
  graphql`
    query ChatPageRefetchQuery ($count: Int) {
      viewer {
        ...ChatPage_viewer @arguments (count: $count)
      }
    }
  `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', I18n.t('drawerChats'))
    };
  };
  
  setTitle = title => this.props.navigation.setParams({title})

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ChatPageQuery (
            $count: Int
          ){
            viewer {
              ...ChatPage_viewer @arguments(
                count: $count
              )
            }
          }
        `}
        variables={{
          count: 8
        }}
        render={({error, props}) => {
          if (props) {
            return <ChatPageContainer viewer={props.viewer} query={props} {...this.props} setTitle={this.setTitle}/>;
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
