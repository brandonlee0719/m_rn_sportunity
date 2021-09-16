import React, {Component} from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { StyleSheet, ScrollView, View, Alert, Image, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import I18n from 'react-native-i18n';
import {
    createFragmentContainer,
    graphql,
  } from 'react-relay';
import { withNavigation } from 'react-navigation';
import Toast from 'react-native-simple-toast';

import { metrics, colors, fonts, images } from 'sportunity/src/theme';
import translations from 'sportunity/src/translations.js';
import StatsSummary from './StatsSummary';
import CirclesItem from '../../CirclesPage/CirclesItem';


class ParticipantStatistics extends Component {

    constructor() {
        super();
        this.state = {
            stepsHeight: [50,50,50,50,50],
        }
    }


    goToCircle = circle => { 
        const { navigation, viewer: { me } } = this.props;

        let isCurrentUserTheOwner = !!me && circle.owner.id === me.id;
        let isCurrentUserCoOwner = !!me && circle.coOwners.findIndex(coOwner => coOwner.id === me.id) >= 0; 
        let isCurrentUserAMember = !!me && circle.members && circle.members.length > 0 && circle.members.findIndex(member => member.id === me.id) >= 0;
        let isCurrentUserAParent = !!me && circle.memberParents && circle.memberParents.length > 0 && circle.memberParents.findIndex(parent => parent.id === me.id) >= 0;

        if (!circle.isCircleAccessibleFromUrl && ((!isCurrentUserTheOwner && !isCurrentUserCoOwner && !isCurrentUserAParent && !isCurrentUserAMember) || !me)) 
            Toast.show(I18n.t('circleToastCircleIsPrivate'));
        else 
            navigation.navigate('circledetail', { circleId: circle.id, hideNavBar: true });

    }

    componentDidMount() {
        if (this.props.user && this.props.user.userStatistics && this.props.user.userStatistics.hasData) {
            let max = 0 ;
            this.props.user.userStatistics.steps.forEach(step => {
                if (step.value > max)
                 max = step.value
            })
            let newState = this.state.stepsHeight;
            this.props.user.userStatistics.steps.forEach((step, index) => {
                newState[index] = step.value * 100 / max ;
            })
            this.setState({
                stepsHeight: newState
            })
        }
    }

    render() {
        let { viewer, user, language } = this.props;
        return (
                <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
                    <View style={styles.content}>
                        <StatsSummary user={user} />
                        <Text style={styles.title}>
                            {I18n.t('profileParticipantStatistics')}
                        </Text>
                        {user.userStatistics && user.userStatistics.hasData
                        ?   <View>
                                <View>
                                    <Text style={styles.subTitle}>
                                        {I18n.t('profileParticipantStatisticsParticipationWithMembers')}
                                    </Text>
                                    {user.userStatistics.membersUserParticipatesWith && user.userStatistics.membersUserParticipatesWith.length > 0 &&
                                        user.userStatistics.membersUserParticipatesWith.filter(member => (!this.props.viewer.me || member.user.id !== this.props.viewer.me.id)).map((member, index) => (
                                            <TouchableOpacity key={index} style={styles.row} onPress={() => this.props.navigation.navigate('profile', { userId: member.user.id })}>
                                                <View style={styles.photoContainer}>
                                                    <Image source={{ uri: member.user.avatar }} style={styles.thumbProfile} />
                                                </View>
                                                <View style={styles.col}>
                                                    <Text style={styles.pseudo} numberOfLines={2}>
                                                        {member.user.pseudo}
                                                    </Text>
                                                    <Text style={styles.value} numberOfLines={2}>
                                                        {I18n.t('profileParticipantStatisticsParticipationNumber') + ': ' + member.number}
                                                    </Text>
                                                </View>
                                                <View style={{flex: 1}}>
                                                    <Text style={{color: colors.charcoal, textAlign: 'center'}}>
                                                        {I18n.t('profileParticipantStatisticsSeeStat')}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        ))

                                    }
                                </View>

                                <Text style={styles.subTitle}>
                                    {I18n.t('profileParticipantStatisticsTime')}
                                </Text>
                                <Text style={styles.value}>
                                    {I18n.t('profileParticipantStatisticsParticipationGlobalNote') + ': ' + user.userStatistics.globalNote + ' / 5'}
                                </Text>
                                <Text style={styles.value}>
                                    {I18n.t('profileParticipantStatisticsParticipationAverageTime') + ': ' + user.userStatistics.averageTime[language.toUpperCase()]}
                                </Text>

                                <View style={styles.chartContainer}>
                                    <View style={styles.chartCol}>
                                        <View style={{backgroundColor: colors.green, height: `${this.state.stepsHeight[0]}%`, width: `90%`}}/>
                                    </View>
                                    <View style={styles.chartCol}>
                                        <View style={{backgroundColor: colors.lightGreen, height: `${this.state.stepsHeight[1]}%`, width: `90%`}}/>
                                    </View>
                                    <View style={styles.chartCol}>
                                        <View style={{backgroundColor: colors.bloodOrange, height: `${this.state.stepsHeight[2]}%`, width: `90%`}}/>
                                    </View>
                                    <View style={styles.chartCol}>
                                        <View style={{backgroundColor: colors.red, height: `${this.state.stepsHeight[3]}%`, width: `90%`}}/>
                                    </View>
                                    <View style={styles.chartCol}>
                                        <View style={{backgroundColor: colors.darkGrey, height: `${this.state.stepsHeight[4]}%`, width: `90%`}}/>
                                    </View>
                                </View>
                                <View style={styles.chartLegend}>
                                    <View style={styles.chartCol}>
                                        <Text style={styles.legendText}>
                                            {user.userStatistics.steps[0].step[language.toUpperCase()]}
                                        </Text>
                                    </View>
                                    <View style={styles.chartCol}>
                                        <Text style={styles.legendText}>
                                            {user.userStatistics.steps[1].step[language.toUpperCase()]}
                                        </Text>
                                    </View>
                                    <View style={styles.chartCol}>
                                        <Text style={styles.legendText}>
                                            {user.userStatistics.steps[2].step[language.toUpperCase()]}
                                        </Text>
                                    </View>
                                    <View style={styles.chartCol}>
                                        <Text style={styles.legendText}>
                                            {user.userStatistics.steps[3].step[language.toUpperCase()]}
                                        </Text>
                                    </View>
                                    <View style={styles.chartCol}>
                                        <Text style={styles.legendText}>
                                            {user.userStatistics.steps[4].step[language.toUpperCase()]}
                                        </Text>
                                    </View>
                                </View>
                                {/*<View >
                                    <Text style={styles.title}>
                                        Show statistics of my clubs and groups
                                    </Text>
                                    <View style={{ height: 10 }} />
                                    {user.circlesUserIsIn && user.circlesUserIsIn.edges && user.circlesUserIsIn.edges.map(edge => edge.node).map((circle, index) => (
                                        <CirclesItem 
                                            key={index}
                                            user={user}
                                            circle={circle}
                                            goToCircles={this.goToCircle}
                                        />
                                    ))}
                                </View>*/}
                            </View>
                        :   <View>
                                <Text style={styles.subTitle}>
                                    {I18n.t('profileParticipantStatisticsNothing')}
                                </Text>
                            </View>
                        }

                    </View>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
    },
    scrollViewContentContainer: {
        paddingBottom: 80
    },
    content: {
        flex: 1,
        //flexDirection: 'column',
        paddingHorizontal: metrics.baseMargin
    },
    title: {
        color: colors.darkGrey,
        fontWeight: 'bold',
        fontSize: fonts.size.regular,
        marginTop: 15,
    },
    subTitle: {
        color: colors.darkBlue,
        fontSize: fonts.h5,
        marginVertical: 15
    },
    chartContainer: {
        flex: 1,
        width: '80%',
        marginTop: 20,
        height: 180,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderColor: colors.lightGrey,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 15
    },
    chartCol: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 3
    },
    chartLegend: {
        paddingHorizontal: 15,
        width: '80%',
        flexDirection: 'row',
        marginTop: 4
    },
    legendText: {
        fontSize: fonts.size.tiny,
        alignSelf: 'center'
    },
    row: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: metrics.baseMargin,
        backgroundColor: colors.snow,
        borderWidth: 1,
        borderColor: colors.steel,
        borderRadius: metrics.buttonRadius,
        height: 55,
    },
    col: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginLeft: 5,
        flex: 3
    },
    photoContainer: {
    },
    thumbProfile: {
        borderColor: colors.darkGreen,
        borderWidth: 3,
        width: metrics.images.medium,
        height: metrics.images.medium,
        borderRadius: metrics.images.mediumRadius,
        // resizeMode: 'contain',
    },
    pseudo: {
        color: colors.blue,
    },
    value: {
        color: colors.darkGrey,
        fontSize: fonts.size.small
    }
});

export default createFragmentContainer(withNavigation(ParticipantStatistics), {
    viewer: graphql`
        fragment ParticipantStatistics_viewer on Viewer {
            id
            me {
                id
            }
        }
    `,
    user: graphql`
        fragment ParticipantStatistics_user on User {
            id
            pseudo
            circlesUserIsIn(first: 20) {
                edges {
                    node {
                      ...CirclesItem_circle
                        id
                        name
                        memberCount
                        isCircleAccessibleFromUrl
                        owner {
                            id
                            profileType
                            pseudo
                        }
                        coOwners {
                            id
                        }
                        members {
                            id
                        }
                        memberParents {
                            id
                        }
                    }
                }
                count
            }
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
    `,
});

