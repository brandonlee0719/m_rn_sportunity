import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import { images } from 'sportunity/src/theme'

import Button from '../../../Button/roundedButton';

import { style } from './styles';

class ParticipantsStatisticsDetailsModal extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const {sportunity, participant, participation, onChangeStatValue, onSave} = this.props; 
        
        return ( 
            <ScrollView style={style.container}>
                <View style={style.header}>
                    <View style={style.photoContainer}>
                        <Image source={{ uri: participant.participant.avatar }} style={style.participantModalThumbProfile}/>
                    </View>
                    <Text style={style.participantModalPseudo}>
                        {participant.participant.pseudo}
                    </Text>
                    <Text style={style.participantModalEventName}>{sportunity.title}</Text>
                    {moment(sportunity.beginning_date).format('MMMM DD YYYY') === moment(sportunity.ending_date).format('MMMM DD YYYY')
                        ? <Text style={style.participantModalEventDates}>
                            {moment(sportunity.beginning_date).format('ddd. DD MMM. YY') + ', ' + moment(sportunity.beginning_date).format('HH:mm') + ' - ' + moment(sportunity.ending_date).format('HH:mm')}
                          </Text>
                        : <View>
                            <Text style={style.participantModalEventDates}>
                                {I18n.t('fromCapitalized') + ': ' + moment(sportunity.beginning_date).format('dddd DD MMMM YY HH:mm')}
                            </Text>
                            <Text style={style.participantModalEventDates}>
                                {I18n.t('toCapitalized') + ': ' + moment(sportunity.ending_date).format('dddd DD MMMM YY  HH:mm')}
                            </Text>
                          </View>
                    }
                </View>
                {participant.values && participant.values.length > 0 &&
                    participant.values/*.slice(0, participation ? participant.values.length - 1 : 1)*/.map((value, index) => (
                        <View style={style.rowContainer} key={index}>
                            <Text style={style.statName}>{value.name}</Text>
                            <View style={style.participantModalInputRow}>
                                <TouchableOpacity 
                                    style={style.statButtonContainer}
                                    onPress={() => onChangeStatValue(participant, value, -1)}>
                                    <Text style={style.statButton}>-</Text>
                                </TouchableOpacity>
                                <Text style={style.statValue}>{value.value}</Text>
                                <TouchableOpacity 
                                    style={style.statButtonContainer}
                                    onPress={() => onChangeStatValue(participant, value, 1)}>
                                    <Text style={style.statButton}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
                
                <View style={{flex: 1, width: '100%', marginBottom: 15}}>
                    <Button
                        onPress={onSave}>
                        {I18n.t('save')}
                    </Button>
                </View>   

            </ScrollView>
        )
    }
}

ParticipantsStatisticsDetailsModal.propTypes = {
};

const stateToProps = (state) => ({
});

const dispatchToProps = (dispatch) => ({
});

let ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(ParticipantsStatisticsDetailsModal);

export default ReduxContainer ;

I18n.fallbacks = true
I18n.translations = translations;
