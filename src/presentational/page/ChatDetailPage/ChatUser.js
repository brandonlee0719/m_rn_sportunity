import React, { Component } from 'react';
import {
  createRefetchContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import I18n from 'react-native-i18n';

import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import {ChatView} from './ChatDetailPageContainer'
import ChatDetailPage from '../ChatDetailPage/ChatDetailPage'

export class ChatUserContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', I18n.t('drawerChats'))
    };
  };
  
  setTitle = title => this.props.navigation.setParams({title})

  render() {
    const {navigation} = this.props; 
    let id = navigation.getParam('id', null)
    let name = navigation.getParam('name', null)

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ChatUserQuery (
              $id: String, 
          ){
            viewer {
              ...ChatDetailPage_viewer
              chat (userId: $id) {
                id
                ...ChatDetailPage_chat
              }
            }
          }
        `}
        variables={{
          id, 
        }}
        render={({error, props}) => {
          if (props) {
            return <ChatDetailPage 
              viewer={props.viewer} 
              query={props} 
              chat={props.viewer.chat}
              setTitle={this.setTitle}
              id={id}
              name={name}
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