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

const ChatSportunityContainerTemp = createRefetchContainer(withNavigation(ChatView), {
    viewer: graphql`
        fragment ChatSportunity_viewer on Viewer @argumentDefinitions(
            id: {type: "ID"},
            queryChat: {type: "Boolean!", defaultValue: false},
        ){
            ...ChatDetailPage_viewer
            chats (id: $id, first:1) @include(if: $queryChat){
            edges {
                node {
                    id
                    ...ChatDetailPage_chat
                }
            }
            }
        }`
    },
    graphql`
      query ChatSportunityRefetchQuery ($id: ID, $queryChat: Boolean!) {
        viewer {
          ...ChatSportunity_viewer @arguments (id: $id, queryChat: $queryChat)
        }
      }
    `
);

export class ChatSportunityContainer extends Component {
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
            query ChatSportunityQuery (
                $id: ID, 
                $queryChat: Boolean!
            ){
              viewer {
                ...ChatSportunity_viewer @arguments(
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
              return <ChatSportunityContainerTemp 
                  viewer={props.viewer} 
                  query={props} 
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