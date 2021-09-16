import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from 'react-native-text';
import PureComponent, { pure } from 'sportunity/src/lib/PureComponent'
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';

import environment from 'sportunity/src/createRelayEnvironment';
import { withNavigation } from 'react-navigation';

import EventDetailPageView from './EventDetailPageView';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

class EventDetail extends Component {
  render () {
    const {viewer, updateToken} = this.props; 

    if (viewer && viewer.sportunity)
      return (
        <EventDetailPageView viewer={viewer} sportunity={viewer.sportunity} user={viewer.me} chat={viewer.chat} updateToken={updateToken} navigation={this.props.navigation}/>
      );
    else 
      return null;
  }
};

const EventDetailTemp = createRefetchContainer(
  withNavigation(EventDetail), 
  graphql`
    fragment EventDetailPageContainer_viewer on Viewer
      @argumentDefinitions(
        sportunityId: {type: ID},
        sportunityChatId: {type: "String"},
        sportunityRelaunchId: {type: "String!"}
      )
      {
        id
        ...EventDetailPageView_viewer
        me{
          ...EventDetailPageView_user
        }
        sportunity(id: $sportunityId) {
          ...EventDetailPageView_sportunity
        }
        chat (sportunityId: $sportunityChatId) {
          id
        }
      }
  `,
)

export default class extends Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {
    const {navigation} = this.props;
    let sportunityChatId = navigation.getParam('id', null)
    let sportunityId = navigation.getParam('id', null)
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query EventDetailPageContainerQuery($sportunityId: ID, $sportunityChatId: String, $sportunityRelaunchId: String!) {
            viewer {
              ...EventDetailPageContainer_viewer @arguments(sportunityId: $sportunityId, sportunityChatId: $sportunityChatId, sportunityRelaunchId: $sportunityRelaunchId)
            }
          }
        `}
        variables={{
          sportunityId: sportunityId,
          sportunityChatId: sportunityChatId,
          sportunityRelaunchId: sportunityId
        }}
        render={({error, props}) => {
          if (props) {
            return <EventDetailTemp query={props} viewer={props.viewer} {...this.props}/>;
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