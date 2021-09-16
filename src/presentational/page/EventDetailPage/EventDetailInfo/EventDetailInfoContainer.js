import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "react-native-text";
import PureComponent, { pure } from "sportunity/src/lib/PureComponent";
import { graphql, createRefetchContainer, QueryRenderer } from "react-relay";
import Icon from "react-native-vector-icons/MaterialIcons";

import environment from "sportunity/src/createRelayEnvironment";
import { withNavigation } from "react-navigation";

import EventDetailInfo from "./EventDetailInfo";
import UpdateSportunitySubscription from '../../SportunityPage/SportunityListView/SportunityItem/Subscriptions/UpdateSportunitySubscription';
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import { images } from "../../../../theme";

class EventDetail extends Component {
  static contextTypes = {
    relay: PropTypes.shape({
      variables: PropTypes.object,
    }),
  }

  constructor(props){
    super(props);
    this.sub ;
  }

  componentDidMount() {
    this.sub = UpdateSportunitySubscription({sportunityId: this.props.sportunityId});
  }

  componentWillUnmount() {
    this.sub && this.sub.dispose()
  }
  
  refetch = () => 
    this.props.relay.refetch(fragmentVariables => ({...this.context.relay.variables}))

  render() {
    const { viewer } = this.props.query;
    const { updateToken } = this.props;

    if (viewer && viewer.sportunity)
      return (
        <EventDetailInfo
          refetch={this.refetch}
          viewer={viewer}
          sportunity={viewer.sportunity}
          user={viewer.me}
          chat={viewer.chat}
          updateToken={updateToken}
          navigation={this.props.navigation}
        />
      );
    else return null;
  }
}

const EventDetailTemp = createRefetchContainer(
  withNavigation(EventDetail),
  graphql`
    fragment EventDetailInfoContainer_query on Query
      @argumentDefinitions(
        sportunityId: { type: ID }
        sportunityChatId: { type: "String" }
        sportunityRelaunchId: { type: "String!" }
      ) {
      viewer {
        id
        ...EventDetailInfo_viewer
        me {
          ...EventDetailInfo_user
        }
        sportunity(id: $sportunityId) {
          ...EventDetailInfo_sportunity
        }
        chat(sportunityId: $sportunityChatId) {
          id
        }
      }
    }
  `, graphql`
      query EventDetailInfoContainerRefetchQuery ($sportunityId: ID, $sportunityChatId: String, $sportunityRelaunchId: String!)
        {
          ...EventDetailInfoContainer_query @arguments(sportunityId: $sportunityId, sportunityChatId: $sportunityChatId, sportunityRelaunchId: $sportunityRelaunchId)
        }
      `
)

export default class EventDetailInfoContainer extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="info-outline" size={25} color={tintColor} />
    )
  };

  render() {
    const { navigation } = this.props;
    let sportunityChatId = navigation.getParam("id", null);
    let sportunityId = navigation.getParam("id", null);
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query EventDetailInfoContainerQuery(
            $sportunityId: ID
            $sportunityChatId: String
            $sportunityRelaunchId: String!
          ) {
            ...EventDetailInfoContainer_query
              @arguments(
                sportunityId: $sportunityId
                sportunityChatId: $sportunityChatId
                sportunityRelaunchId: $sportunityRelaunchId
              )
          }
        `}
        variables={{
          sportunityId: sportunityId,
          sportunityChatId: sportunityChatId,
          sportunityRelaunchId: sportunityId
        }}
        render={({ error, props }) => {
          if (props) {
            return <EventDetailTemp query={props} {...this.props} sportunityId={sportunityId} />;
          } else {
            return <ActivityLoader isAnimating={true} />;
          }
        }}
      />
    );
  }
}
