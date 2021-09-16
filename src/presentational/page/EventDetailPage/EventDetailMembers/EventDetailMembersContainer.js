import React, { Component } from 'react';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';
import Icon from 'react-native-vector-icons/MaterialIcons';

import environment from 'sportunity/src/createRelayEnvironment';
import { withNavigation } from 'react-navigation';

import EventDetailMembers from './EventDetailMembers';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { images } from '../../../../theme';

class EventDetail extends Component {
  componentDidMount() {
    setTimeout(() => this.props.relay.refetch({query: true}), 500)
  }
  render () {
    const {viewer} = this.props.query; 
    const {updateToken} = this.props; 

    if (viewer && viewer.sportunity)
      return (
        <EventDetailMembers viewer={viewer} sportunity={viewer.sportunity} user={viewer.me} chat={viewer.chat} updateToken={updateToken} navigation={this.props.navigation}/>
      );
    else 
      return null;
  }
};

const EventDetailTemp = createRefetchContainer(
  withNavigation(EventDetail), 
  graphql`
    fragment EventDetailMembersContainer_query on Query
      @argumentDefinitions(
        sportunityId: {type: ID},
        sportunityChatId: {type: "String"},
        sportunityRelaunchId: {type: "String!"},
        query: {type: "Boolean!", defaultValue: false}
      )
      {
        viewer {
          id
          ...EventDetailMembers_viewer 
          me @include(if: $query) {
            ...EventDetailMembers_user
          }
          sportunity(id: $sportunityId) @include(if: $query) {
            ...EventDetailMembers_sportunity
          }
        }
      }
  `,
  graphql`
    query EventDetailMembersContainerRefetchQuery($sportunityId: ID, $sportunityChatId: String, $sportunityRelaunchId: String!, $query: Boolean!) {
      ...EventDetailMembersContainer_query @arguments(sportunityId: $sportunityId, sportunityChatId: $sportunityChatId, sportunityRelaunchId: $sportunityRelaunchId, query: $query)
    }
  `
)

export default class extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="person" size={25} color={tintColor} />,
  };
  
  render() {
    const {navigation} = this.props;
    let sportunityChatId = navigation.getParam('id', null)
    let sportunityId = navigation.getParam('id', null)
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query EventDetailMembersContainerQuery($sportunityId: ID, $sportunityChatId: String, $sportunityRelaunchId: String!, $query: Boolean!) {
            ...EventDetailMembersContainer_query @arguments(sportunityId: $sportunityId, sportunityChatId: $sportunityChatId, sportunityRelaunchId: $sportunityRelaunchId, query: $query)
          }
        `}
        variables={{
          sportunityId: sportunityId,
          sportunityChatId: sportunityChatId,
          sportunityRelaunchId: sportunityId,
          query: false
        }}
        render={({error, props}) => {
          if (props) {
            return <EventDetailTemp query={props} {...this.props}/>;
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