import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import I18n from "react-native-i18n";

import { metrics, fonts, colors } from '../../../../theme';
import translations from 'sportunity/src/translations.js';


class StatsSummary extends Component {
  _getUserStats = user => {
    let userStats = [
      {
        name: I18n.t('profile_statistics_user_participated'),
        value: user.userStatistics.numberOfParticipated,
      },
      {
        name: I18n.t('profile_statistics_user_averageWeek'),
        value:
          Math.round(
            user.userStatistics.averageNumberOfParticipatedWeek * 10,
          ) / 10,
      },
      {
        name: I18n.t('profile_statistics_user_averageMonth'),
        value:
          Math.round(
            user.userStatistics.averageNumberOfParticipatedMonth * 10,
          ) / 10,
      },
      {
        name: I18n.t('profile_statistics_user_averageYear'),
        value:
          Math.round(
            user.userStatistics.averageNumberOfParticipatedYear * 10,
          ) / 10,
      },
    ];
    return userStats;
  };

  render() {
    const { user } = this.props;
    console.log({ user })
    const userStats = this._getUserStats(user);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{'Activities Statistics'}</Text>
        <ScrollView horizontal={true}>
          <View style={styles.teamRow}>
            {userStats &&
              userStats.map((stat, index) => (
                <View key={index} style={styles.statItem}>
                  <Text style={styles.statValue}>{stat.value}</Text>
                  <Text style={styles.statName}>{stat.name}</Text>
                </View>
              ))
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: metrics.baseMargin,
    height: 145,
  },
  title: {
    fontSize: fonts.size.regular,
    fontWeight: 'bold',
    marginBottom: metrics.doubleBaseMargin,
    color: colors.darkGrey,
  },
  teamRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    textAlign: 'center',
    padding: metrics.baseMargin,
    width: 120,
  },
  statValue: {
    fontSize: fonts.size.regular,
    color: colors.blue,
    fontWeight: 'bold',
  },
  statName: {
    fontSize: fonts.size.small,
    fontWeight: 'bold',
    marginTop: metrics.baseMargin,
    textAlign: 'center',
    color: colors.darkGrey,
  },
};

export default StatsSummary;

I18n.fallbacks = true;
I18n.translations = translations;
