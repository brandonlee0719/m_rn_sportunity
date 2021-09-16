import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import Text from 'react-native-text';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import moment from 'moment';
import I18n from 'react-native-i18n';

import Modal from 'sportunity/src/presentational/Modal';
import translations from 'sportunity/src/translations.js';
import icons from '../../../../src/theme/images';
import { metrics, colors, fonts } from 'sportunity/src/theme';
import { styles } from './styles';

import VoteForManOfTheGameMutation from './VoteForManOfTheGameMutation';

class VoteForManOfTheGameModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalVisible: false,
        }
    }

    componentDidMount() {
        
        let mainOrganizer ;
        if (this.props.sportunity.organizers && this.props.sportunity.organizers.length > 0) {
            this.props.sportunity.organizers.forEach(organizer => {
                if (organizer.isAdmin)
                    mainOrganizer = organizer.organizer
            })
        }
        if (mainOrganizer) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                voteForManOfTheGameUserId: mainOrganizer.id,
            });
        
            this.props.relay.refetch(
                refetchVariables,
                null,
                null,
                {force: false}
            );
        }
    }

    componentWillReceiveProps = (nextProps) => {
    }

    openModal = () => {
        this.setState({
            isModalVisible: true
        })
    }

    closeModal = () => {
        this.setState({
            isModalVisible: false
        })
    }

    limitDateToVote = (endingDate) => {
        return moment(endingDate).add(12, 'hours');
    }

    confirmVoteForParticipant = (me, participant, sportunity) => {
        if (this.getCurrentUserVote(me, sportunity.manOfTheGameVotes)) {
            Alert.alert(
                I18n.t('sportunityVoteForManOfTheGameTitleShort'),
                I18n.t('sportunityVoteForManOfTheGameAlreadyDone'),
                [
                    { text: I18n.t('ok'), onPress: () => {}},
                ]
            )
        }
        else if (me.id === participant.id) {
            Alert.alert(
                I18n.t('sportunityVoteForManOfTheGameTitleShort'),
                I18n.t('sportunityVoteForManOfTheGameHimSelf'),
                [
                    { text: I18n.t('ok'), onPress: () => {}},
                ]
            )
        }
        else {
            Alert.alert(
                I18n.t('sportunityVoteForManOfTheGameTitleShort'),
                I18n.t('sportunityVoteForManOfTheGameConfirmation') + participant.pseudo,
                [
                    { text: I18n.t('yes'), onPress: () => this.voteForParticipant(participant) },
                    { text: I18n.t('no'), onPress: () => {}},
                ]
            )
        }
    }

    voteForParticipant = (participant) => {
        const { viewer, sportunity } = this.props;
        let params = { 
            sportunityID: sportunity.id,
            participantID: participant.id 
        };
    
        VoteForManOfTheGameMutation.commit(params,
            () => {
                this.closeModal()
                Toast.show(I18n.t('updateSuccess'));              
            },
            error => {
                Toast.show(I18n.t('updateFailed'));
                let errors = JSON.parse(error.getError().source);
                console.log(errors.errors[0].message);
            },
        );
    }

    getCurrentUserVote = (me, votes) => {
        let result = null;

        votes.forEach(vote => {
            if (vote.voter.id === me.id)
                result = vote.votedFor
        });

        return result;
    }

    getManOfTheGame = (votes) => {
        let result ;
        let aggregatedVotes = [];
        votes.forEach(vote => {
            let index = aggregatedVotes.findIndex(aggregatedVote => aggregatedVote.user.id === vote.votedFor.id);
            if (index >= 0) {
                aggregatedVotes[index].votes = aggregatedVotes[index].votes + 1 ;
            }
            else {
                aggregatedVotes.push({
                    user: vote.votedFor,
                    votes: 1
                })
            }
        })
        
        let maxVote = 0 ;
        aggregatedVotes.forEach(aggregatedVote => {
            if (aggregatedVote.votes > maxVote) {
                result = [aggregatedVote.user]
                maxVote = aggregatedVote.votes
            }
            else if (aggregatedVote.votes === maxVote) {
                result.push(aggregatedVote.user)
            }   
        })
        return result ;
    }

    getUserVoteNumber = (participant, votes) => {
        let result = 0;
        votes.forEach(vote => {
            if (vote.votedFor.id === participant.id)
                result++ 
        })
        return result
    }


    render(){
        let {viewer, sportunity, viewer: {statisticPreferences}, isParticipant, isOrganized} = this.props;
        
        let currentUserVote = sportunity ? this.getCurrentUserVote(viewer.me, sportunity.manOfTheGameVotes) : null

        if (sportunity && 
                sportunity.participants && 
                sportunity.participants.length > 0 &&
                sportunity.canUserVoteForManOfTheGame && 
                moment().isBefore(this.limitDateToVote(sportunity.ending_date))) {
            return (
                <View>
                    <TouchableOpacity 
                        style={styles.rowContainer}
                        onPress={this.openModal}
                    >
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {currentUserVote ? I18n.t('sportunityVoteForManOfTheGameYourVote') : I18n.t('sportunityVoteForManOfTheGameTitle')}
                                </Text>
                                {currentUserVote
                                ?   <View style={styles.manOfTheGameRow}>
                                        <View style={styles.photoContainer}>
                                            <Image source={{ uri: currentUserVote.avatar }} style={styles.thumbProfile} />
                                        </View>
                                        <Text style={styles.pseudo}>
                                            {currentUserVote.pseudo}
                                        </Text>                      
                                    </View>
                                :   <Text style={styles.limitDate}>
                                        {I18n.t('sportunityVoteForManOfTheGameLimitDate') + " : " + this.limitDateToVote(sportunity.ending_date).format('DD MMM YYYY HH:mm')}
                                    </Text>
                                }
                            </View>
                            <Image style={styles.icon} source={icons.right_arrow} />
                        </View>
                    </TouchableOpacity>

                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        isModalVisible={this.state.isModalVisible}
                        openCloseModal={this.closeModal}
                        title={I18n.t('sportunityVoteForManOfTheGameTitleShort')}
                    >
                        <ScrollView contentContainerStyle={styles.manOfTheGameModalContainer}>
                            {sportunity.participants.map(participant => (
                                <TouchableOpacity
                                    onPress={() => this.confirmVoteForParticipant(viewer.me, participant, sportunity)}
                                    key={participant.id}
                                    style={styles.rowContainer}
                                >
                                    <View style={styles.row}>
                                        <View style={styles.photoContainer}>
                                            <Image source={{ uri: participant.avatar }} style={styles.thumbProfile} />
                                        </View>
                                        {sportunity.manOfTheGameVotes && 
                                            sportunity.manOfTheGameVotes.length > 0 && currentUserVote && 
                                            currentUserVote.id === participant.id 
                                            ?   <Text style={[styles.pseudo, styles.votedFor]}>
                                                    {participant.pseudo}
                                                </Text>
                                            :   <Text style={styles.pseudo}>
                                                    {participant.pseudo}
                                                </Text>
                                        }
                                        
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>   
                    </Modal>
                </View>
            )
        }
        else if (sportunity && 
                    statisticPreferences && 
                    (!statisticPreferences.private || isParticipant || isOrganized) && 
                    !sportunity.canUserVoteForManOfTheGame && 
                    sportunity.manOfTheGameVotes && 
                    sportunity.manOfTheGameVotes.length > 0 && 
                    moment().isAfter(this.limitDateToVote(sportunity.ending_date))) {
            return (
                <View>
                    <TouchableOpacity 
                    style={styles.rowContainer}
                        onPress={this.openModal}
                    >
                        <Text style={styles.title} numberOfLines={1}>
                            {this.getManOfTheGame(sportunity.manOfTheGameVotes).length > 1
                                ? I18n.t('sportunityMenOfTheGame')
                                : I18n.t('sportunityManOfTheGame')
                            }
                        </Text>
                        {this.getManOfTheGame(sportunity.manOfTheGameVotes).map((manOfTheGame, index) => (
                            <View key={index} style={styles.manOfTheGameRow}>
                                <View style={styles.photoContainer}>
                                    <Image source={{ uri: manOfTheGame.avatar }} style={styles.thumbProfile} />
                                </View>
                                <Text style={styles.pseudo}>
                                    {manOfTheGame.pseudo}
                                </Text>                      
                            </View>
                        ))}                    
                    </TouchableOpacity>

                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        isModalVisible={this.state.isModalVisible}
                        openCloseModal={this.closeModal}
                        title={I18n.t('sportunityVoteForManOfTheGameTitleShort')}
                    >
                        <ScrollView contentContainerStyle={styles.manOfTheGameModalContainer}>
                            {sportunity.participants.map(participant => (
                                <View
                                    key={participant.id}
                                    style={styles.rowContainer}
                                >
                                    <View style={styles.row}>
                                        <View style={styles.photoContainer}>
                                            <Image source={{ uri: participant.avatar }} style={styles.thumbProfile} />
                                        </View>
                                        <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                                            {sportunity.manOfTheGameVotes && 
                                                sportunity.manOfTheGameVotes.length > 0 &&
                                                this.getManOfTheGame(sportunity.manOfTheGameVotes).findIndex(manOfTheGame => manOfTheGame.id === participant.id) >= 0 
                                                ?   
                                                        <Text style={[styles.pseudo, styles.manOfTheGame]}>
                                                            {participant.pseudo}
                                                        </Text>                                                
                                                :   currentUserVote && currentUserVote.id === participant.id 
                                                    ?   <Text style={[styles.pseudo, styles.votedFor]}>
                                                            {participant.pseudo}
                                                        </Text>
                                                    :   <Text style={styles.pseudo}>
                                                            {participant.pseudo}
                                                        </Text>
                                            }
                                            <Text>
                                                {I18n.t('sportunityManOfTheGameNumberOfVotes') + ': ' + this.getUserVoteNumber(participant, sportunity.manOfTheGameVotes)}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>   
                    </Modal>
                </View>
            )
        }
        else return null;
    }
}

VoteForManOfTheGameModal.propTypes = {
  sportunity: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
});

let ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(VoteForManOfTheGameModal);

export default  createRefetchContainer(ReduxContainer, {
    viewer: graphql`
        fragment VoteForManOfTheGame_viewer on Viewer
        @argumentDefinitions(
            voteForManOfTheGameUserId: {type: "String"},
        ) {
            me {
                id
            }
            statisticPreferences (userID: $voteForManOfTheGameUserId) {
                private,
            }
            
        }
    `,
    sportunity: graphql`
        fragment VoteForManOfTheGame_sportunity on Sportunity {
            id
            ending_date
            participants {
                id,
                pseudo,
                avatar
            }
            canUserVoteForManOfTheGame
            manOfTheGameVotes {
                voter {
                    id
                }
                votedFor {
                    id
                    pseudo,
                    avatar
                }
                date
            }
            organizers {
                organizer {
                    id
                }
                isAdmin
            }
        }
    `},
    graphql`
        query VoteForManOfTheGameRefetchQuery ($voteForManOfTheGameUserId: String) {
            viewer {
                ...VoteForManOfTheGame_viewer @arguments(voteForManOfTheGameUserId: $voteForManOfTheGameUserId)
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;
