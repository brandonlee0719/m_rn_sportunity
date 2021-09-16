import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import {createRefetchContainer, graphql} from 'react-relay';
import { connect } from 'react-redux';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';

import Modal from '../../../../../src/presentational/Modal';
import translations from 'sportunity/src/translations.js';
import { images } from 'sportunity/src/theme'

import ParticipantStatisticsDetailsModal from './ParticipantStatisticsDetailsModal';
import UpdateSportunityStatisticsMutation from './Mutations/UpdateSportunityStatisticsMutation'
import Button from '../../../Button/roundedButton';

import { style } from './styles';

class ParticipantsStatisticsModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            userStatistics: [],
            participantModalIndex: null
        }
    }

    componentDidMount() {
        if (this.props.sportunity) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                participantsStatisticsModalId: this.props.sportunity.id,
                queryParticipantsStatisticsModal: true,
            });
        
            this.props.relay.refetch(
                refetchVariables,
                null,
                () => {
                    this.setState({
                        userStatistics: this._getParticipantsStats(this.props.viewer.sportunityStatistics)
                    })
                },
                {force: false}
            );
        }
    }

    _getParticipantsStats = (sportunityStatistics) => {
        let results = [];
        if (sportunityStatistics && sportunityStatistics.length > 0) {
            sportunityStatistics.forEach(stat => {
                if (stat.participant) {
                    let index = results.findIndex(result => result.participant && result.participant.id === stat.participant.id);
                    if (index < 0) 
                        results.push({participant: stat.participant, values:[{id: stat.statisticName.id, name: stat.statisticName.name ,value:stat.value}]})
                    else 
                        results[index].values.push({id: stat.statisticName.id, name: stat.statisticName.name, value:stat.value})
                }
            })
        }
        return results ;
    }

    _handleSaveParticipantStats = () => {
        const {userStatistics} = this.state; 
        let sportunityStatisticsVar = [];

        userStatistics.forEach(userStatistic => {
            userStatistic.values.forEach(value => {
                sportunityStatisticsVar.push({
                    statisticId: value.id,
                    participantId: userStatistic.participant.id,
                    value: value.value
                })
            })
        })

        let params = {
            sportunityID: this.props.sportunity.id,
            sportunityStatistics: sportunityStatisticsVar,
        }
        
        UpdateSportunityStatisticsMutation.commit(params,
            (response) => {
                Toast.show(I18n.t('sportunityTypeUpdateSuccess'));
                this.setState({participantModalIndex: null})
            },
            (error) => {
                Toast.show(I18n.t('sportunityTypeUpdateFailed'));
            },
        );
    }

    _handleUpdateParticipantStatValue = (participant, stat, incrementValue) => {
        let valueIndex = 0 ;
        let {userStatistics} = this.state ;
        userStatistics.forEach((item, index) => {
            if (item.participant.id === participant.participant.id) {
                item.values.forEach((value, j) => {
                    if (value.id === stat.id && userStatistics[index].values[j].value + incrementValue >= 0) {
                        if (j !== 0 || (userStatistics[index].values[j].value + incrementValue >= 0 && userStatistics[index].values[j].value + incrementValue <= 1))
                            userStatistics[index].values[j].value = userStatistics[index].values[j].value + incrementValue;

                        valueIndex = j ;
                    }
                })
            }
        })

        if (valueIndex === 0) {
            userStatistics.forEach((item, index) => {
                if (item.participant.id === participant.participant.id) {
                    item.values.forEach((value, j) => {
                        if (j > 0)
                            userStatistics[index].values[j].value = 0 ;
                    })
                }
            })
        }


        this.setState({
            userStatistics
        })
    }

    closeParticipantModal = () => {
        this.setState({
            userStatistics: this._getParticipantsStats(this.props.viewer.sportunityStatistics)
        })
        this.setState({participantModalIndex: null})
    }


    render(){
        let {viewer, isPast, sportunity} = this.props;

        let {userStatistics} = this.state ;

        return (
            <ScrollView style={style.container}>
                <View style={style.header}>
                    <Text style={style.eventName}>{sportunity.title}</Text>
                    {moment(sportunity.beginning_date).format('MMMM DD YYYY') === moment(sportunity.ending_date).format('MMMM DD YYYY')
                        ? <Text style={style.eventDates}>
                            {moment(sportunity.beginning_date).format('ddd. DD MMM. YY') + ', ' + moment(sportunity.beginning_date).format('HH:mm') + ' - ' + moment(sportunity.ending_date).format('HH:mm')}
                          </Text>
                        : <View>
                            <Text style={style.eventDates}>
                                {I18n.t('fromCapitalized') + ': ' + moment(sportunity.beginning_date).format('dddd DD MMMM YY HH:mm')}
                            </Text>
                            <Text style={style.eventDates}>
                                {I18n.t('toCapitalized') + ': ' + moment(sportunity.ending_date).format('dddd DD MMMM YY  HH:mm')}
                            </Text>
                          </View>
                    }
                </View>
                {userStatistics && userStatistics.length > 0 
                   ? userStatistics.map((item, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={style.participantContainer}
                            onPress={() => this.setState({participantModalIndex: index})}
                        >
                            <View style={style.photoContainer}>
                                <Image source={{ uri: item.participant.avatar }} style={style.thumbProfile}/>
                            </View>
                            <Text style={style.participantPseudo}>
                                {item.participant.pseudo}
                            </Text>
                            <Image style={style.icon} source={images.right_arrow_blue} />
                        </TouchableOpacity>
                     ))
                   : <Text>{I18n.t('noParticipant')}</Text>
                }
                <Modal
                    isModalVisible={this.state.participantModalIndex !== null}
                    openCloseModal={this.closeParticipantModal}
                    title={I18n.t('participant')}
                    >
                    {this.state.participantModalIndex !== null && this.state.userStatistics[this.state.participantModalIndex] && 
                        <ParticipantStatisticsDetailsModal 
                            participant={this.state.userStatistics[this.state.participantModalIndex]}
                            participation={this.state.userStatistics[this.state.participantModalIndex] && this.state.userStatistics[this.state.participantModalIndex].values[0].value === 1}
                            sportunity={sportunity}
                            viewer={viewer}
                            isPast={isPast}
                            onChangeStatValue={(participant, stat, incrementValue) => this._handleUpdateParticipantStatValue(participant, stat, incrementValue)}
                            onSave={this._handleSaveParticipantStats}
                            />
                    }
                </Modal>                

            </ScrollView>
        )
    }
}

ParticipantsStatisticsModal.propTypes = {
  sportunity: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
});

let ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(ParticipantsStatisticsModal);

export default createRefetchContainer(ReduxContainer, {
    viewer: graphql`
        fragment ParticipantsStatisticsModal_viewer on Viewer 
        @argumentDefinitions(
            participantsStatisticsModalId: {type: "String!", defaultValue: ""},
            queryParticipantsStatisticsModal: {type: "Boolean", defaultValue: false},
        ){
            id
            sportunityStatistics (sportunityID: $participantsStatisticsModalId) @include(if:$queryParticipantsStatisticsModal) {
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
        }
    `,
    sportunity: graphql`
        fragment ParticipantsStatisticsModal_sportunity on Sportunity{
            id
            title
            beginning_date
            ending_date
        }
    `}, graphql`
        query ParticipantsStatisticsModalRefetchQuery ($participantsStatisticsModalId: String, $queryParticipantsStatisticsModal: Boolean!) {
            viewer {
                ...ParticipantsStatisticsModal_viewer @arguments(participantsStatisticsModalId: $participantsStatisticsModalId, queryParticipantsStatisticsModal: $queryParticipantsStatisticsModal)
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;
