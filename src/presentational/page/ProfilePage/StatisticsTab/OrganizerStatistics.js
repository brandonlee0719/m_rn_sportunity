import React, {Component} from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import PropTypes from 'prop-types'
import { StyleSheet, ScrollView, View, Image, Text, ActivityIndicator, Dimensions } from 'react-native';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast';
import get from 'lodash/get';
import { withNavigation } from 'react-navigation';

import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';
import Filters from './Filters';


const {height, width} = Dimensions.get('window');

class OrganizerStatisticTab extends Component {
    static contextTypes = {
        relay: PropTypes.shape({
          variables: PropTypes.object,
        }),
    }
    constructor() {
        super();
        this.state = {
            userStatistics: [],
            userStatisticsCols: [],
            sportunitiesStatistics: [],
            isProcessing: false,
            isCircleListOpen: false,
            selectedCircle: {
                id: null,
                name: ''
            }
        }
    }

    componentDidMount() {
        const { user } = this.props;
        if (user && user.defaultStatisticFilter) {
            this.applyFilter(user.defaultStatisticFilter);
        } 
        else if (user && user.statisticFilters && user.statisticFilters.length) {
            this.applyFilter(user.statisticFilters[0]);
        }
        else if (this.props.userID) {
            this.setState({
                isProcessing: true
            })
            
            const refetchVariables = fragmentVariables => ({
                ...this.context.relay.variables,
                id: this.props.userID,
                userId: this.props.userID,
                query: true,
            });
              
            this.props.relay.refetch(
                refetchVariables,
                null,
                () => {
                    this.setState({
                        sportunitiesStatistics: this._getSportunitiesStats(this.props.viewer.sportunitiesStatistics),
                        isProcessing: false
                    })
                },
                {force: true}
            );
        }
    }

    _getParticipantsStatsCols = (statisticPreferences) => {
        let results = [];
        if (statisticPreferences && statisticPreferences.userStats) {
            Object.keys(statisticPreferences.userStats).forEach(stat => {
                if (stat === "statManOfTheGame" && statisticPreferences.userStats[stat] && statisticPreferences.userStats[stat].id) {
                    results.push({
                        id: statisticPreferences.userStats[stat].id,
                        name: I18n.t('sportunityManOfTheGame')
                    })
                }
                else if (statisticPreferences.userStats[stat] && statisticPreferences.userStats[stat].id)
                    results.push(statisticPreferences.userStats[stat])
            })
        }
        return results;
    }

    _getParticipantsStats = (userStatisticsCols, circlesStatistics) => {
        let results = [];

        if (circlesStatistics && circlesStatistics.length > 0) {
            circlesStatistics.forEach(stat => {
                if (stat.participant) {
                    let index = results.findIndex(result => result.participant && result.participant.id === stat.participant.id);
                    let colIndex = userStatisticsCols.findIndex(result => result.id === stat.statisticName.id);

                    if (colIndex >= 0) {
                        if (index < 0) {
                            results.push({ participant: stat.participant, values: [] })
                            results[results.length - 1].values[colIndex] = { id: stat.statisticName.id, value: stat.value };
                        }
                        else {
                            results[index].values[colIndex] = { id: stat.statisticName.id, value: stat.value }
                        }
                    }
                    else if (stat.statisticName.name === "Man of the game") {
                        if (index < 0) {
                            results.push({ participant: stat.participant, values: [] })
                            results[results.length - 1].values.push({ id: stat.statisticName.id, value: stat.value });
                        }
                        else {
                            results[index].values.push({ id: stat.statisticName.id, value: stat.value })
                        }
                    }
                }
            })
        }
        return results;
    }

    applyFilter = (filter) => {
        const circle = get(filter, 'circleList.edges[0]');
        const dateBegin = get(filter, 'date_begin') || (new Date('1/1/2010')).toISOString();
        const dateEnd = get(filter, 'date_end') || (new Date()).toISOString();

        const dateInterval = {
            from: dateBegin,
            to: dateEnd,
        };

        this.setState({
            activeFilter: filter.id,
            isProcessing: true,
            isCircleListOpen: false
        });
        
        const refetchVariables = fragmentVariables => ({
            circleId: get(circle, 'node.id', ''),
            query: true,
            id: this.props.userID,
            userId: this.props.userID,
            dateInterval,
        });
        
        this.props.relay.refetch(
            refetchVariables,
            null,
            () => {
                let userStatisticsCols = this._getParticipantsStatsCols(this.props.viewer.statisticPreferences);
                this.setState({
                    sportunitiesStatistics: this._getSportunitiesStats(this.props.viewer.sportunitiesStatistics),
                    userStatistics: this._getParticipantsStats(userStatisticsCols, this.props.viewer.circlesStatistics),
                    userStatisticsCols
                })
                setTimeout(() => {
                    this.sortDown(0);
                    this.setState({
                        isProcessing: false
                    })
                }, 150)
            },
            {force: true}
        );
    }

    sortUp = (colIndex) => {
        let userStats = this.state.userStatistics;

        userStats = userStats.sort((a, b) => {
            if (a.values[colIndex].value - b.values[colIndex].value > 0)
                return 1;
            else if (a.values[colIndex].value - b.values[colIndex].value < 0)
                return -1
            else return 0;
        })
        this.setState({
            userStatistics: userStats
        })
    }

    sortDown = (colIndex) => {
        let userStats = this.state.userStatistics;
        userStats = userStats.sort((a, b) => {
            if (b.values[colIndex].value - a.values[colIndex].value > 0)
                return 1;
            else if (b.values[colIndex].value - a.values[colIndex].value < 0)
                return -1
            else return 0;
        })
        this.setState({
            userStatistics: userStats
        })
    }

    openCircleListModal = () => {
        if (this.props.user && this.props.user.circles && this.props.user.circles.edges && this.props.user.circles.edges.length > 0)
            this.setState({
                isCircleListOpen: true
            })
        else
            Toast.show(I18n.t('pleaseCreateCircle'))
    }

    _getSportunitiesStats = (sportunitiesStatistics) => {
        let results = [];

        if (sportunitiesStatistics && sportunitiesStatistics.length > 0) {
            sportunitiesStatistics.forEach(stat => {
                results.push({
                    sportunityType: stat.sportunityType && stat.sportunityType.name[this.props.language.toUpperCase()],
                    sportunityTypeStatus: stat.sportunityTypeStatus && stat.sportunityTypeStatus.name[this.props.language.toUpperCase()],
                    value: stat.value
                })
            })
        }
        return results ;
    }

    handleFilterSelection = (filter) => {
        this.applyFilter(filter);
    }

    openFilterPage = () => {
        if (this.props.user && this.props.user.id) {
          this.props.navigation.navigate('filters',{activeKind: this.state.activeFilter, onApplyFilter: this.handleFilterSelection})
        }
        else {
          Toast.show(I18n.t('filterLoginFirst'))
        }
    }

    renderEmptyStatistics = () => {
        return (
            <Text>No statistics to show</Text>
        );
    }

    render() {
        let { viewer, user } = this.props;
        const { userStatisticsCols, userStatistics, sportunitiesStatistics, activeFilter, selectedCircle } = this.state;
        
        let circles = user && user.circles && user.circles.edges && user.circles.edges.map(circle => {if (circle.node.memberCount > 0) return circle; else return false}).filter(i => Boolean(i))
        const statisticFilters = user && user.statisticFilters && user.statisticFilters.map(filter => ({ ...filter, filterName: filter.name }));
        const defaultStatisticFilter = user && user.defaultStatisticFilter;

        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 40 }}>
                    <Filters
                        isUserOwner={get(user, 'id') === get(viewer, 'me.id')}
                        user={viewer && viewer.me} 
                        circles={circles}
                        savedFilters={statisticFilters}
                        onFilterSelection={this.handleFilterSelection}
                        activeFilter={this.state.activeFilter}
                        defaultFilter={defaultStatisticFilter}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.content}>
                        {((!userStatistics || userStatistics.length === 0) && (!sportunitiesStatistics || sportunitiesStatistics.length === 0)) && 
                            <View style={{marginTop: 125}}>
                                <Text style={styles.title}>
                                    {I18n.t('profileParticipantStatisticsNothing')}
                                </Text>
                            </View>
                        }
                        {this.state.isProcessing
                        ?   <View style={styles.loadingContainer}>
                                <ActivityIndicator
                                    size="large"
                                    animating={this.state.isProcessing}
                                />
                            </View>
                        :   <View>
                                {userStatistics && userStatistics.length > 0 &&
                                    <View>
                                        <View>
                                            <ScrollView
                                                horizontal={true}
                                                showsHorizontalScrollIndicator={false}
                                                bounces={false}
                                                scrollEventThrottle={1}
                                                contentContainerStyle={{flexDirection: 'column'}}
                                            >
                                                <View style={styles.statContainer}>
                                                    <View style={styles.headerRow}>
                                                        <View style={styles.headerCell}>
                                                            <Text style={styles.headerText} numberOfLines={2}>
                                                                Participant
                                                            </Text>
                                                        </View>
                                                        {userStatisticsCols.map((name, index) => (
                                                            <View key={index} style={styles.headerCell}>
                                                                <Text style={styles.headerText} numberOfLines={2}>
                                                                    {name.name}
                                                                </Text>
                                                            </View>
                                                        ))}
                                                    </View>
                                                </View>

                                                <ScrollView>
                                                    <View style={{ flex: 1 }}>
                                                        {userStatistics.map((stat, index) => (
                                                            <View key={index} style={styles.contentRow}>
                                                                <View style={styles.contentCell}>
                                                                    <View style={styles.photoContainer}>
                                                                        <Image source={{ uri: stat.participant.avatar }} style={styles.thumbProfile} />
                                                                    </View>
                                                                    <Text style={styles.contentText} numberOfLines={2}>
                                                                        {stat.participant.pseudo}
                                                                    </Text>
                                                                </View>
                                                                {stat.values.map((value, colIndex) => (
                                                                    <View key={index+'-'+colIndex} style={styles.contentCell}>
                                                                        <Text style={styles.contentText} numberOfLines={2}>
                                                                            {value.value}
                                                                        </Text>
                                                                    </View>
                                                                ))}
                                                            </View>
                                                        ))}
                                                    </View>
                                                </ScrollView>
                                            </ScrollView>
                                        </View>
                                    </View>
                                }
                            </View>
                        }
                    </View>
                    {sportunitiesStatistics && sportunitiesStatistics.length > 0 &&
                        <View style={styles.content}>
                            <Text style={styles.title}>
                                {I18n.t('profileStatOrganized')}
                            </Text>
                            {this.state.isProcessing
                            ?   <View style={styles.loadingContainer}>
                                    <ActivityIndicator
                                        size="large"
                                        animating={this.state.isProcessing}
                                    />
                                </View>
                            :   <View>
                                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                        <View style={styles.statContainer}>
                                            <View style={styles.headerRow}>
                                                <View style={styles.headerCell}>
                                                    <Text style={styles.headerText} numberOfLines={2}>
                                                        {I18n.t('profileStatSportunityType')}
                                                    </Text>
                                                </View>
                                                <View style={styles.headerCell}>
                                                    <Text style={styles.headerText} numberOfLines={2}>
                                                        {I18n.t('profileStatSportunityResult')}
                                                    </Text>
                                                </View>
                                                <View style={styles.headerCell}>
                                                    <Text style={styles.headerText} numberOfLines={2}>
                                                        {I18n.t('profileStatSportunityNumber')}
                                                    </Text>
                                                </View>
                                            </View>

                                            {sportunitiesStatistics.map((stat, index) => (
                                                <View key={index} style={styles.contentRow}>
                                                    <View style={styles.contentCell}>
                                                        <Text style={styles.contentText} numberOfLines={2}>
                                                            {stat.sportunityType}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.contentCell}>
                                                        <Text style={styles.contentText} numberOfLines={2}>
                                                            {stat.sportunityTypeStatus}
                                                        </Text>
                                                    </View>
                                                    <View style={styles.contentCell}>
                                                        <Text style={styles.contentText} numberOfLines={2}>
                                                            {stat.value}
                                                        </Text>
                                                    </View>

                                                </View>
                                            ))}
                                        </View>
                                    </ScrollView>
                                </View>
                            }
                        </View>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
    },
    scrollViewContentContainer: {
        paddingBottom: 50
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        paddingHorizontal: metrics.baseMargin,
    },
    title: {
        color: colors.skyBlue,
        fontWeight: 'bold',
        fontSize: fonts.h4,
        marginTop: 15
    },
    loadingContainer: {
        marginTop: 40
    },
    background: {
        flex: 1
      },
    overlay: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    optionContainer: {
        borderRadius:5,
        width:width*0.8,
        backgroundColor:'rgba(255,255,255,0.8)',
        left:width*0.1,
    },
    optionStyle: {
        padding: 14,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    modalPseudo: {
        marginLeft: 10,
        ...fonts.style.regular,
        color: colors.charcoal
    },

    statContainer: {
        flexDirection: 'column',
        marginTop: 2
    },
    headerRow: {
        flexDirection: 'row'
    },
    headerCell: {
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.skyBlue
    },
    headerText: {
        color: colors.snow,
        textAlign: 'center'
    },
    contentRow: {
        flexDirection: 'row'
    },
    contentCell: {
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    contentText: {
        color: colors.darkGrey,
        textAlign: 'center'
    },
    photoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 3
    },
    thumbProfile: {
        borderColor: colors.darkGreen,
        borderWidth: 3,
        width: metrics.images.medium,
        height: metrics.images.medium,
        borderRadius: metrics.images.mediumRadius,
        // resizeMode: 'contain',
    },
});

export default createRefetchContainer(withNavigation(OrganizerStatisticTab), {
    user: graphql`
        fragment OrganizerStatistics_user on User {
            id
            pseudo
            circles (first: 10) {
                edges {
                    node {
                        id
                        name
                        memberCount
                    }
                }
            }
            defaultStatisticFilter {
                id
                name
                date_begin
                date_end
                circleList (first: 10) {
                    edges {
                        node {
                            id
                        }
                    }
                }
            }
            statisticFilters {
                id
                name
                date_begin
                date_end
                circleList (first: 10) {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
            }
        }
    `,
    viewer: graphql`
        fragment OrganizerStatistics_viewer on Viewer @argumentDefinitions(
            id: {type: "String"},
            circleId: {type: "String"},
            query: {type: "Boolean!", defaultValue: false},
            userId: {type: "String!", defaultValue: "_"}
            dateInterval: { type: "StringIntervalInput", defaultValue: "_ " }
        ) {
            id
            me {
                id
            }
            statisticPreferences (userID: $id) @include(if:$query) {
                private,
                userStats {
                    stat0 {
                        id
                        name
                    }
                    stat1 {
                        id,
                        name
                    }
                    stat2 {
                        id,
                        name
                    }
                    stat3 {
                        id,
                        name
                    }
                    stat4 {
                        id,
                        name
                    }
                    stat5 {
                        id,
                        name
                    }
                    statManOfTheGame {
                        id,
                        name
                    }
                }
            }
            circlesStatistics (userID: $id, circleID: $circleId, dateInterval: $dateInterval) @include(if:$query) {
                statisticName {
                    id,
                    name
                },
                participant {
                    id
                    pseudo
                    avatar
                }
                value
            }
            sportunitiesStatistics (userID: $id) @include(if:$query) {
                sportunityType {
                    id
                    name {
                        EN,
                        FR
                    }
                }
                sportunityTypeStatus {
                    id
                    name {
                        EN,
                        FR
                    }
                }
                value
            }
        }
    `},
    graphql`
        query OrganizerStatisticsRefetchQuery ($id: String, $circleId: String, $query: Boolean!, $userId: String!, $dateInterval: StringIntervalInput) {
            viewer {
                ...OrganizerStatistics_viewer @arguments(id: $id, circleId: $circleId, query: $query, userId: $userId, dateInterval: $dateInterval)
            }
        }
`)
