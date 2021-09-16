import React, { Component } from "react";
import PropTypes from "prop-types";
import Text from "react-native-text";
import PureComponent, { pure } from "sportunity/src/lib/PureComponent";
import { graphql, createRefetchContainer, QueryRenderer } from "react-relay";
import Toast from "react-native-simple-toast";
import I18n from "react-native-i18n";
import Icon from "react-native-vector-icons/MaterialIcons";

import environment from "sportunity/src/createRelayEnvironment";
import { withNavigation } from "react-navigation";

import store from "../../../../store";
import translations from "sportunity/src/translations.js";
import EventDetailCarpooling from "./EventDetailCarpooling";
import ActivityLoader from "sportunity/src/presentational/ActivityIndicatorLoader/page";
import { images } from "../../../../theme";

class EventDetail extends Component {
  componentDidMount() {
    setTimeout(() => this.props.relay.refetch({query: true}), 1000)
  }
  render () {
    const {viewer} = this.props.query; 
    const {updateToken} = this.props; 

    if (viewer && viewer.sportunity)
      return (
        <EventDetailCarpooling
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
    fragment EventDetailCarpoolingContainer_query on Query
      @argumentDefinitions(
        sportunityId: {type: ID},
        sportunityChatId: {type: "String"},
        sportunityRelaunchId: {type: "String!"},
        query: {type: "Boolean!", defaultValue: false}
      )
      {
        viewer {
          id
          ...EventDetailCarpooling_viewer
          me @include(if: $query) {
            ...EventDetailCarpooling_user
          }
          sportunity(id: $sportunityId) @include(if: $query) {
            ...EventDetailCarpooling_sportunity
          }
        }
      }
  `,
  graphql`
    query EventDetailCarpoolingContainerRefetchQuery($sportunityId: ID, $sportunityChatId: String, $sportunityRelaunchId: String!, $query: Boolean!) {
      ...EventDetailCarpoolingContainer_query @arguments(sportunityId: $sportunityId, sportunityChatId: $sportunityChatId, sportunityRelaunchId: $sportunityRelaunchId, query: $query)
    }
  `
)

export default class EventDetailCarpoolingContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name="directions-car" size={25} color={tintColor} />
    ),
    tabBarOnPress: () => {
      const {
        sportunityDetails: { isUserLoggedIn, isParticipant, isOrganized }
      } = store.getState();

      if (!isUserLoggedIn) {
        Toast.show(I18n.t("sportunityAccessRestricted"));
      } else {
        navigation.navigate("eventCarpooling");
      }
    }
  });

  render() {
    const { navigation } = this.props;
    let sportunityChatId = navigation.getParam("id", null);
    let sportunityId = navigation.getParam("id", null);
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query EventDetailCarpoolingContainerQuery($sportunityId: ID, $sportunityChatId: String, $sportunityRelaunchId: String!, $query: Boolean!) {
            ...EventDetailCarpoolingContainer_query @arguments(sportunityId: $sportunityId, sportunityChatId: $sportunityChatId, sportunityRelaunchId: $sportunityRelaunchId, query: $query)
          }
        `}
        variables={{
          sportunityId: sportunityId,
          sportunityChatId: sportunityChatId,
          sportunityRelaunchId: sportunityId,
          query: false
        }}
        render={({ error, props }) => {
          if (props) {
            return <EventDetailTemp query={props} {...this.props} />;
          } else {
            return <ActivityLoader isAnimating={true} />;
          }
        }}
      />
    );
  }
}

I18n.fallbacks = true;
I18n.translations = translations;
