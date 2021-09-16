import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, ScrollView, Text, StyleSheet, View, Picker} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import { withNavigation } from 'react-navigation';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';

import translations from 'sportunity/src/translations.js';
import { metrics, colors, fonts } from 'sportunity/src/theme';

import Button from '../../../Button/roundedButton';
import UpdateSportunityTypeMutation from './Mutations/UpdateSportunityTypeMutation.js';
import UpdateSportunityResultMutation from './Mutations/UpdateSportunityResultMutation.js';

import { style } from './styles';

class SportunityStatisticsModal extends Component {

    constructor(props){
        super(props);
        this.state = {
            sportunityType: '',
            sportunityTypeStatus: '',
            score: {
                currentTeam: null,
                adversaryTeam: null
            },
        }
    }


    componentDidMount = () => {
        if (this.props.sportunity && this.props.sportunity.sportunityType) {
            this.setState({
                sportunityType: {
                    id: this.props.sportunity.sportunityType.id,
                    name: this.props.sportunity.sportunityType.name,
                }
            })
        }
            
        if (this.props.sportunity && this.props.sportunity.sportunityTypeStatus) {
            this.setState({
                sportunityTypeStatus: this.props.sportunity.sportunityTypeStatus.id
            })
        }

        if (this.props.sportunity && this.props.sportunity.score) {
            this.setState({
            score: {
                    currentTeam: this.props.sportunity.score.currentTeam.toString(),
                    adversaryTeam: this.props.sportunity.score.adversaryTeam.toString()
                }
            })
        }
    }

    _handleChangeSportunityType = (sportunityType) => {
        this.setState({
            sportunityType
        })
    }

    _handleChangeSportunityResult = (sportunityResult) => {
        this.setState({
            sportunityTypeStatus: sportunityResult
        })
    }

    _handleCurrentTeamScoreChange = (value) => {
        this.setState({
            score: {
                currentTeam: value,
                adversaryTeam: this.state.score.adversaryTeam
            },
        })
    }

    _handleAdversaryTeamScoreChange = (value) => {
        this.setState({
            score: {
                currentTeam: this.state.score.currentTeam,
                adversaryTeam: value                
            },
        })
    }

    handleSavePress = () => {
        let {viewer, isPast, sportunity} = this.props;
        if (sportunity && !sportunity.sportunityType) {
            if (!this.state.sportunityType || this.state.sportunityType === '') {
                Toast.show(I18n.t('selectSportunityTypeError'));
                return ;
            }

            let params = {
                sportunityID: sportunity.id,
                sportunity:{
                    sportunityType: this.state.sportunityType
                },
            }

            UpdateSportunityTypeMutation.commit(params,
                (response) => {
                    Toast.show(I18n.t('sportunityTypeUpdateSuccess'));
                    this.props.onCloseModal()
                },
                (error) => {
                    Toast.show(I18n.t('sportunityTypeUpdateFailed'));
                },
            );
        }
        else if (sportunity && (
                !sportunity.sportunityTypeStatus || 
                sportunity.sportunityTypeStatus.id !== this.state.sportunityTypeStatus ||
                sportunity.score && (sportunity.score.currentTeam !== this.state.score.currentTeam || sportunity.score.adversaryTeam !== this.state.score.adversaryTeam)
                )
            ) {
            
            let scoreVar ; 
            if (this.state.score.currentTeam !== null) {
                if (isNaN(this.state.score.currentTeam)) {
                    Toast.show(I18n.t('sportunityScoreWrongFormat'))
                    return ;
                }
                scoreVar = {}
                scoreVar.currentTeam = Number(this.state.score.currentTeam);
                if (this.state.score.adversaryTeam !== null) {
                    if (isNaN(this.state.score.adversaryTeam)) {
                        Toast.show(I18n.t('sportunityScoreWrongFormat'))
                        return ;
                    }
                    scoreVar.adversaryTeam = Number(this.state.score.adversaryTeam)
                }
                else {
                    Toast.show(I18n.t('sportunityScoreWrongFormat'))
                    return ;
                }
            }
            
            let params = {
                sportunityID: sportunity.id,
                sportunity:{
                    sportunityTypeStatus: this.state.sportunityTypeStatus,
                    score: scoreVar
                },
            }

            UpdateSportunityResultMutation.commit(params,
                (response) => {
                    Toast.show(I18n.t('sportunityTypeUpdateSuccess'));
                    this.props.onCloseModal()
                },
                (error) => {
                    Toast.show(I18n.t('sportunityTypeUpdateFailed'));
                },
            );
        }  
        else {
            if (!this.state.sportunityTypeStatus || this.state.sportunityTypeStatus === '')
                Toast.show(I18n.t('selectSportunityResultError'))
        }
        
    }


    render(){
        let {viewer, isPast, sportunity, language} = this.props;
        
        let sportunityTypesList = !sportunity.sportunityType 
        ? [
            {value: '', label: I18n.t('none')},
            ...sportunity.sport.sport.sportunityTypes.map(type => ({
                value: type.id, label: type.name[language.toUpperCase()]
            }))
        ]
        : [];
        let sportunityResultList = sportunity.sportunityType
        ? [
            {value: '', label: I18n.t('none')},
            ...sportunity.sportunityType.statuses.map(status => ({
                value: status.id, label: status.name[language.toUpperCase()]
            }))
        ] 
        : [];

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
                {sportunity && !sportunity.sportunityType && 
                    sportunity.sport.sport.sportunityTypes && sportunity.sport.sport.sportunityTypes.length > 0 && 
                    <View style={style.inputRow}>
                        <Text style={style.inputLabel}>
                            {I18n.t('sportunityType') + ': '}
                        </Text>
                        <Picker
                            style={style.picker}
                            selectedValue={this.state.sportunityType}
                            onValueChange={value=>this._handleChangeSportunityType(value)}
                            mode="dialog" >
                            {sportunityTypesList.map((type, index) => (
                                <Picker.Item key={index} label={type.label} value={type.value}/>    
                            ))}
                        </Picker>
                    </View>
                }
                {!isPast && sportunity && sportunity.sportunityType &&
                    <View style={style.inputRow}>
                        <Text style={style.inputLabel}>
                            {I18n.t('sportunityType') + ': '}
                        </Text>
                        <Text style={style.text}>
                            {sportunity.sportunityType.name[language.toUpperCase()]}
                        </Text>
                    </View>
                }
                {isPast && sportunity && sportunity.sportunityType && 
                    <View>
                        <View style={style.inputRow}>
                            <Text style={style.inputLabel}>
                                {I18n.t('sportunityType') + ': '}
                            </Text>
                            <Text style={style.text}>
                                {sportunity.sportunityType.name[language.toUpperCase()]}
                            </Text>
                        </View>
                        <View style={style.inputRow}>
                            <Text style={style.inputLabel}>
                                {I18n.t('sportunityResult') + ': '}
                            </Text>
                            <Picker
                                style={style.picker}
                                selectedValue={this.state.sportunityTypeStatus}
                                onValueChange={value=>this._handleChangeSportunityResult(value)}
                                mode="dialog" >
                                {sportunityResultList.map((type, index) => (
                                    <Picker.Item key={index} label={type.label} value={type.value}/>    
                                ))}
                            </Picker>
                        </View>
                        {sportunity.sportunityType.isScoreRelevant && 
                        <View>
                            <View style={style.inputRow}>
                                <Text style={style.inputLabel}>
                                    {I18n.t('sportunityScoreCurrentTeam') + ': '}
                                </Text>
                                <View style={style.inputContainer}>
                                    <TextInput
                                        style={style.input}
                                        maxLength={50}
                                        autoCorrect={false}
                                        autoCapitalize="none"
                                        keyboardType="numeric"
                                        onChangeText={value => this._handleCurrentTeamScoreChange(value)}
                                        underlineColorAndroid={colors.snow}
                                        value={this.state.score.currentTeam}
                                    />
                                </View>
                            </View>
                            <View style={style.inputRow}>
                                <Text style={style.inputLabel}>
                                    {I18n.t('sportunityScoreAdversaryTeam') + ': '}
                                </Text>
                                <View style={style.inputContainer}>
                                    <TextInput
                                        style={style.input}
                                        maxLength={50}
                                        autoCorrect={false}
                                        autoCapitalize="none"
                                        keyboardType="numeric"
                                        onChangeText={value => this._handleAdversaryTeamScoreChange(value)}
                                        underlineColorAndroid={colors.snow}
                                        value={this.state.score.adversaryTeam}
                                    />
                                </View>
                            </View>
                        </View>
                        }
                    </View>
                }

                <View style={{flex: 1, width: '100%'}}>
                    <Button
                        onPress={this.handleSavePress}>
                        {I18n.t('save')}
                    </Button>
                </View>   

            </ScrollView>
        )
    }
}

SportunityStatisticsModal.propTypes = {
  sportunity: PropTypes.object.isRequired,
};

const stateToProps = (state) => ({
    language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
});

let ReduxContainer = connect(
    stateToProps,
    dispatchToProps
)(SportunityStatisticsModal);


export default createFragmentContainer(ReduxContainer, {
    viewer: graphql`
        fragment SportunityStatisticsModal_viewer on Viewer {
            id
        }
    `,
    sportunity: graphql`
        fragment SportunityStatisticsModal_sportunity on Sportunity{
            id, 
            title,
            beginning_date,
            ending_date,
            sport {
                sport {
                    type
                    sportunityTypes {
                        id
                        name {
                            FR,
                            EN
                        }
                    }
                }
            }
            sportunityType {
                id,
                name {
                    FR,
                    EN,
                },
                statuses {
                    id,
                    name {
                        FR,
                        EN
                    }
                }
                isScoreRelevant
            }
            sportunityTypeStatus {
                id,
                name {
                    FR, 
                    EN
                }
            }
            score {
                currentTeam,
                adversaryTeam
            }
        }
    `,
});

I18n.fallbacks = true
I18n.translations = translations;
