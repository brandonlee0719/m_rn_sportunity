import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import I18n from "react-native-i18n";
import { graphql, createRefetchContainer } from "react-relay";
import get from 'lodash/get';

import translations from "sportunity/src/translations.js";
import styles from "./styles";
import { images, fonts, metrics } from "../../../../theme";

import * as globals from 'sportunity/src/lib/globalsjs/globals';

class EventStatistics extends Component {
  componentDidMount() {
    this.refetchQuery()
    globals.register({ name: 'eventStatsRefetch', data: {eventStatsRefetch: this.refetchQuery}});
  }

  refetchQuery = () => {
    if (this.props.sportunity) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        sportunityStatisticsId: this.props.sportunity.id,
        querySportunityStatistics: true
      });

      this.props.relay.refetch(refetchVariables, null, null, { force: false });
    }
  }

  getPlayerStats = (stats, statisticId) => {
    const playerStats = stats.filter(
      stat => stat.statisticName.id === statisticId
    );

    return playerStats.map(stat => ({
      player: stat.participant,
      playerStat: stat.value
    }));
  };

  getStats = sportunityStatistics => {
    return sportunityStatistics.reduce((acc, item) => {
      const statisticId = item.statisticName.id;
      const statisticName = item.statisticName.name;
      if (acc.find(stat => stat.id === statisticId)) {
        return acc;
      }

      return [
        ...acc,
        {
          id: statisticId,
          name: statisticName,
          statistics: this.getPlayerStats(sportunityStatistics, statisticId)
        }
      ];
    }, []);
  };

  getResult = (myScore, opponentScore) => {
    if (myScore > opponentScore) return I18n.t('win');

    if (myScore < opponentScore) return I18n.t('loss');

    return I18n.t('draw');
  }

  renderPlayersRow = player => (
    <View style={{ alignItems: 'center' }}>
      {player.avatar ? (
        <Image style={styles.avatar} source={{ uri: player.avatar }} />
      ) : (
        <Image style={styles.avatar} source={images.profile_photo} />
      )}

      <Text style={styles.cellText}>{player.pseudo}</Text>
    </View>
  );

  renderTeam = player => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Text
        numberOfLines={2}
        style={{ fontSize: fonts.size.regular, opacity: 0.9, marginBottom: 5, textAlign: 'center' }}
      >
        {player.pseudo || player.email}
      </Text>
      
      {player.avatar ? (
        <Image style={styles.teamAvatar} source={{ uri: player.avatar }} />
      ) : (
        <Image style={styles.teamAvatar} source={images.profile_photo} />
      )}
    </View>
  )

  renderOpponentTeam = ({ opponentUser, opponentPseudoOnly, unknownOpponent }) => {
    if (!!opponentUser) {
      return this.renderTeam(opponentUser);
    }

    if (!!opponentPseudoOnly) {
      return this.renderTeam({ pseudo: opponentPseudoOnly });
    }

    if (!!unknownOpponent) {
      return this.renderTeam({ pseudo: I18n.t('unknownOpponent') });
    }
  }

  renderSummary = () => {
    const { sportunity, viewer, language } = this.props;
    const opponentUser = get(sportunity, 'game_information.opponent.organizer');
    const opponentPseudoOnly = get(sportunity, 'game_information.opponent.organizerPseudo');
    const unknownOpponent = get(sportunity, 'game_information.opponent.unknownOpponent');

    if (!opponentUser && !opponentPseudoOnly && !unknownOpponent) {
      return null;
    }

    return (
      <View style={{ padding: metrics.doubleBaseMargin, alignItems: 'center', justifyContent: 'center', marginBottom: metrics.baseMargin }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 3, alignItems: 'flex-end' }}>
            {this.renderTeam(viewer.me)}
          </View>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            {sportunity.sportunityTypeStatus ? (
              <View>
                <Text style={{ fontWeight: '500', textAlign: 'center' }}>
                  {sportunity.score.currentTeam} - {sportunity.score.adversaryTeam}
                </Text>
                <Text style={{ fontWeight: '500', textAlign: 'center', marginTop: 5 }}>
                  {sportunity.sportunityTypeStatus.name[language.toUpperCase()]}
                </Text>
              </View>
            ) : <Text>vs</Text>}
          </View>
          <View style={{ flex: 3 }}>
            {this.renderOpponentTeam({ opponentUser, opponentPseudoOnly, unknownOpponent })}
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { viewer, sportunity } = this.props;
    const { sportunityStatistics } = viewer;
    const stats = sportunityStatistics && this.getStats(sportunityStatistics);

    if (!stats || stats.length === 0) {
      return null;
    }

    return (
      <View>
        {this.renderSummary()}
        <ScrollView horizontal style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <View style={styles.row}>
              <View style={{ flexDirection: "row", flex: 1, alignItems: 'flex-end' }}>
                <Text style={styles.headingCell}>Players</Text>
                {stats[0].statistics.map(item => (
                    <View>
                      {this.renderPlayersRow(item.player)}
                    </View>
                  ))}
              </View>
            </View>

            <View style={styles.separator} />

            {stats.map(stat => (
                <View style={[styles.border, { flex: 1 }]}>
                  <View key={stat.id} style={styles.row}>
                    <View style={{ flexDirection: "row", flex: 1 }}>
                      <Text style={styles.headingCell}>{stat.name}</Text>
                      {stat.statistics.map(item => (
                        <Text style={styles.cellText}>{item.playerStat}</Text>
                      ))}
                    </View>
                  </View>
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

EventStatistics.propTypes = {
  sportunity: PropTypes.object.isRequired
};

const stateToProps = state => ({
  language: state.sportunityLocale.language,
});

const dispatchToProps = dispatch => ({});

let ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(EventStatistics);

export default createRefetchContainer(
  ReduxContainer,
  {
    viewer: graphql`
      fragment EventStatistics_viewer on Viewer
        @argumentDefinitions(
          sportunityStatisticsId: { type: "String!", defaultValue: "" }
          querySportunityStatistics: { type: "Boolean", defaultValue: false }
        ) {
        id
        me {
          id
          pseudo
          email
          avatar
        }
        sportunityStatistics(sportunityID: $sportunityStatisticsId)
          @include(if: $querySportunityStatistics) {
          statisticName {
            id
            name
          }
          participant {
            id
            pseudo
            avatar
          }
          value
        }
      }
    `,
    sportunity: graphql`
      fragment EventStatistics_sportunity on Sportunity {
        id
        score {
          currentTeam
          adversaryTeam
        }
        sportunityTypeStatus {
          id
          name {
            id
            EN
            FR
          }
        }
        game_information {
          opponent {
            organizer {
              id
              pseudo
              email
              avatar
            }
            organizerPseudo
            lookingForAnOpponent
            unknownOpponent
          }
        }
      }
    `
  },
  graphql`
    query EventStatisticsRefetchQuery(
      $sportunityStatisticsId: String
      $querySportunityStatistics: Boolean!
    ) {
      viewer {
        ...EventStatistics_viewer
          @arguments(
            sportunityStatisticsId: $sportunityStatisticsId
            querySportunityStatistics: $querySportunityStatistics
          )
      }
    }
  `
);

I18n.fallbacks = true;
I18n.translations = translations;
