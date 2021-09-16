import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import I18n from 'react-native-i18n';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';


import Modal from '../../../../../src/presentational/Modal';
import translations from 'sportunity/src/translations.js';

import SportunityStatisticsModal from './SportunityStatisticsModal';
import ParticipantsStatisticsModal from './ParticipantsStatisticsModal';

import * as globals from 'sportunity/src/lib/globalsjs/globals';

import { style } from './styles';

class StatisticFillingModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            visibleModal: null,
        }
    }

    componentDidMount() {
        if (this.props.sportunity) {
            const refetchVariables = fragmentVariables => ({
                ...fragmentVariables,
                sportunityStatisticsId: this.props.sportunity.id,
                querySportunityStatistics: true,
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
        /*if (nextProps.relay.variables.id === this.props.sportunity.id) {
            if (nextProps.sportunity && nextProps.sportunity.sportunityType) {
                this.setState({
                    sportunityType: {
                        id: nextProps.sportunity.sportunityType.id,
                        name: nextProps.sportunity.sportunityType.name,
                    }
                })
            }
            
            if (nextProps.sportunity && nextProps.sportunity.sportunityTypeStatus) {
                this.setState({
                    sportunityTypeStatus: nextProps.sportunity.sportunityTypeStatus.id
                })
            }

            if (nextProps.sportunity && nextProps.sportunity.score) {
                this.setState({
                    score: {
                        currentTeam: nextProps.sportunity.score.currentTeam.toString(),
                        adversaryTeam: nextProps.sportunity.score.adversaryTeam.toString()
                    }
                })
            }
        }*/
    }

    /*componentWillUnmount = () => {
        const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            sportunityStatisticsId: null,
            querySportunityStatistics: false,
        });
    
        this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
        );
    }*/
    closeParticipantModal = () => {
        this.setState({visibleModal: null})
        globals.object('eventStatsRefetch').call('eventStatsRefetch')
    }

    render(){
        let {viewer, isPast, sportunity} = this.props;
        
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
                <TouchableOpacity 
                    style={style.rowContainer} 
                    onPress={() => this.setState({visibleModal: 'sportunity'})}
                    >
                    <Text style={style.rowTitle}>{I18n.t('sportunityStatistics')}</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={style.rowContainer} 
                    onPress={() => this.setState({visibleModal: 'participants'})}
                    >
                    <Text style={style.rowTitle}>{I18n.t('participantsStatistics')}</Text>
                </TouchableOpacity>
                
                <Modal
                    isModalVisible={this.state.visibleModal === 'sportunity'}
                    openCloseModal={() => this.setState({visibleModal: null})}
                    title={I18n.t('sportunityStatistics')}
                    >
                    <SportunityStatisticsModal 
                        sportunity={sportunity}
                        viewer={viewer}
                        isPast={isPast}
                        onCloseModal={() => this.setState({visibleModal: null})}/>
                </Modal>

                <Modal
                    isModalVisible={this.state.visibleModal === 'participants'}
                    openCloseModal={this.closeParticipantModal}
                    title={I18n.t('participantsStatistics')}
                    >
                    <ParticipantsStatisticsModal 
                        sportunity={sportunity}
                        viewer={viewer}
                        isPast={isPast}
                        onCloseModal={this.closeParticipantModal}/>
                </Modal>


            </ScrollView>
        )
    }
}

StatisticFillingModal.propTypes = {
  sportunity: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
});

let ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(StatisticFillingModal);


export default createRefetchContainer(ReduxContainer, 
    {
        viewer: graphql`
            fragment StatisticFillingModal_viewer on Viewer 
            @argumentDefinitions(
                sportunityStatisticsId: {type: "String!", defaultValue: ""},
                querySportunityStatistics: {type: "Boolean", defaultValue: false},
            ){
                ...SportunityStatisticsModal_viewer
                ...ParticipantsStatisticsModal_viewer
                sportunityStatistics (sportunityID: $sportunityStatisticsId) @include(if:$querySportunityStatistics) {
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
            fragment StatisticFillingModal_sportunity on Sportunity {
                id
                title
                beginning_date
                ending_date
                ...SportunityStatisticsModal_sportunity
                ...ParticipantsStatisticsModal_sportunity
            }
    `}
    , graphql`
        query StatisticFillingModalRefetchQuery ($sportunityStatisticsId: String, $querySportunityStatistics: Boolean!) {
            viewer {
                ...StatisticFillingModal_viewer @arguments(sportunityStatisticsId: $sportunityStatisticsId, querySportunityStatistics: $querySportunityStatistics)
            }
        }
    `
);

I18n.fallbacks = true
I18n.translations = translations;
