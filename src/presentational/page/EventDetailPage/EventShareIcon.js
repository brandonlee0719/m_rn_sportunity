import React from "react";
import PureComponent from "sportunity/src/lib/PureComponent";
import { StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { metrics, colors } from "sportunity/src/theme";
import { graphql, createRefetchContainer, QueryRenderer } from "react-relay";
import I18n from "react-native-i18n";
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialIcons';

import environment from "sportunity/src/createRelayEnvironment";
import translations from "sportunity/src/translations.js";

const { webAppUrl } = require('../../../../conf/constants.json');

class EventShareIconView extends PureComponent {
  render() {
    const { viewer } = this.props;

    if (!viewer || !viewer.sportunity) {
      return null;
    }

    const { sportunity: { id, title } } = viewer;

    let shareOptions = {
      title: title,
      message:
        I18n.t("sportunityShareMessage1") +
        " " +
        title +
        " " +
        I18n.t("sportunityShareMessage2"),
      url: webAppUrl + `/event-view/${id}`,
      subject:
        I18n.t("sportunityShareMessage1") +
        " " +
        title +
        " " +
        I18n.t("sportunityShareMessage2")
    };

    return (
      <TouchableOpacity
        style={styles.rightIconContainer}
        onPress={() => Share.open(shareOptions)}
      >
        <Icon name="share" color={colors.snow} size={22} />
      </TouchableOpacity>
    );
  }
}

const EventShareIconT = createRefetchContainer(
  (EventShareIconView),
  graphql`
    fragment EventShareIcon_viewer on Viewer
    @argumentDefinitions(sportunityId: {type: ID}) {
      id
      sportunity(id: $sportunityId) {
        id
        title
      }
    }
  `
);

export default (EventShareIcon = ({ sportunityId }) => {  
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query EventShareIconQuery($sportunityId: ID) {
          viewer {
            ...EventShareIcon_viewer @arguments(sportunityId: $sportunityId)
          }
        }
      `}
      variables={{
        sportunityId: sportunityId,
      }}
      render={({ error, props }) => {
        return props ? (
          <EventShareIconT query={props} viewer={props.viewer} />
        ) : null;
      }}
    />
  );
});

const styles = StyleSheet.create({
  rightIconContainer: {
    padding: metrics.baseMargin,
    justifyContent: "center",
  },
});

I18n.fallbacks = true;
I18n.translations = translations;
