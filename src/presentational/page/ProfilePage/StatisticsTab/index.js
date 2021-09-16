import React from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, ScrollView, View, Alert, Image, Text, TouchableOpacity, ActivityIndicator, Modal, Dimensions } from 'react-native';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';

import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';

import OrganizerStatistics from './OrganizerStatistics.js';
import ParticipantStatistics from './ParticipantStatistics.js'

class StatisticTab extends PureComponent {
    render() {
        let { viewer, user, userID, language } = this.props;

        return (
            user
            ?   <View style={styles.container}>
                    {user && user.userStatistics && user.userStatistics.percentageOfOrganized >= 50
                        ? <OrganizerStatistics
                            viewer={viewer}
                            userID={userID}
                            language={language}
                            user={user}
                        />
                        : <ParticipantStatistics
                            viewer={viewer}
                            user={user}
                            language={language}
                            navigation={this.props.navigation}
                        />
                    }
                </View>
            :   <View></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: metrics.baseMargin
    },
});

const stateToProps = (state) => ({
    language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
});

let ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(StatisticTab);

export default createFragmentContainer(ReduxContainer, {
    viewer: graphql`
        fragment StatisticsTab_viewer on Viewer {
            ...OrganizerStatistics_viewer
            ...ParticipantStatistics_viewer
        }
    `,
    user: graphql`
        fragment StatisticsTab_user on User @argumentDefinitions (queryStats: {type: "Boolean!", defaultValue: false}) {
            ...OrganizerStatistics_user
            ...ParticipantStatistics_user
            id
            pseudo
            userStatistics @include(if: $queryStats) {
                hasData 
                percentageOfOrganized,
                globalNote,
                averageTime {
                    FR,
                    EN
                },
                steps {
                    step {
                        FR,
                        EN
                    },
                    value
                },
                membersUserParticipatesWith {
                    user {
                        id,
                        pseudo,
                        avatar
                    },
                    number
                }
                numberOfParticipated
                averageNumberOfParticipatedWeek
                averageNumberOfParticipatedMonth
                averageNumberOfParticipatedYear
            }
        }
    `}
)
