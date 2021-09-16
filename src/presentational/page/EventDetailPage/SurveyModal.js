import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {createFragmentContainer, graphql} from 'react-relay';
import { View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Text from 'react-native-text';
import moment from 'moment';
import Modal from '../../../../src/presentational/Modal';
import FilterModal from '../FiltersPage/FilterModal'
import Button from '../../Button/roundedButton';
import { withNavigation } from 'react-navigation';

import { styles } from './styles';
import {
  colors,
  images,
  metrics,
  fonts
} from 'sportunity/src/theme';

class SurveyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDateIndex: null,
        surveyDates: [],
        answerNumber: 0, 
        pendingNumber: 0,
    }
  }

  componentDidMount() {
    const {sportunity, me, displayModal, language} = this.props;
    
    const surveyDates = sportunity.survey.surveyDates.map(dates => ({
        beginning_date: dates.beginning_date,
        ending_date: dates.ending_date,
        answers: dates.answers && dates.answers.filter(answer => answer.answer === 'YES').length
    }));

    let answerNumber = sportunity.survey.surveyDates[0].answers.length ;
    let pendingNumber = sportunity.invited.length - answerNumber;

    this.setState({
        surveyDates, 
        answerNumber,
        pendingNumber    
    })
  }

  transformSurvey = () => {
    const surveyDates = this.props.sportunity.survey.surveyDates.map(dates => ({
        beginning_date: dates.beginning_date,
        ending_date: dates.ending_date,
        answers: dates.answers && dates.answers.filter(answer => answer.answer === 'YES').length
    }))
    if (this.state.selectedDateIndex !== null)
        this.props.transformSurvey(surveyDates[this.state.selectedDateIndex])
  }

  selectDate = (dateIndex) => {
    this.setState({
        selectedDateIndex: dateIndex === this.state.selectedDateIndex ? null : dateIndex
    })
  }

  render = () => {
    const {sportunity, me, displayModal, language} = this.props;

    const {surveyDates, answerNumber, pendingNumber} = this.state ;
    
    return (
        <FilterModal
            isModalVisible={displayModal}
            onRequestClose={this.props.toggleModal}
            title={I18n.t('sportunitySurveyTitle')}
            displayValidationButton={this.state.selectedDateIndex !== null}
            onValidate={this.transformSurvey}>
            <View style={{flex: 1}}>
                <ScrollView contentContainerStyle={localStyle.container}>
                    <View style={localStyle.topContainer}>
                        <View style={localStyle.descriptionContainer}>
                            <Text style={localStyle.description}>
                                {I18n.t('sportunitySurveyAnswers') + ' (' + answerNumber + ') | ' + I18n.t('sportunitySurveyWaiting') + ' (' + pendingNumber + ')'}
                            </Text>
                        </View>
                        <View style={localStyle.descriptionContainer2}>
                            <Text style={localStyle.description}>
                                {I18n.t('sportunitySurveyDescription')}
                            </Text>
                        </View>
                    </View>
                    {surveyDates.map((surveyDate, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={moment(surveyDate.beginning_date).isAfter(moment()) ? localStyle.buttonContainer : localStyle.pastButtonContainer} 
                            onPress={() => moment(surveyDate.beginning_date).isAfter(moment()) && this.selectDate(index)}>
                            <View style={localStyle.leftContainer}>
                                <View style={moment(surveyDate.beginning_date).isAfter(moment()) ? localStyle.dateContainer : localStyle.pastDateContainer}>
                                    <Text style={localStyle.date}>
                                        {moment(surveyDate.beginning_date).format('MMM')}
                                    </Text>
                                    <Text style={localStyle.date}>
                                        {moment(surveyDate.beginning_date).format('DD')}
                                    </Text>
                                    <Text style={localStyle.date}>
                                        {moment(surveyDate.beginning_date).format('ddd').toUpperCase()}
                                    </Text>
                                    <Text style={localStyle.hour}>
                                        {moment(surveyDate.beginning_date).format('HH:mm') + ' - ' + moment(surveyDate.ending_date).format('HH:mm')}
                                    </Text>
                                </View>
                                <View style={{flex: 7}}>
                                    <Text style={localStyle.answerText}>
                                        {surveyDate.answers + ' ' + (surveyDate.answers > 1 ? I18n.t('sportunitySurveyAvailables') : I18n.t('sportunitySurveyAvailable'))}
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex: 1}}>
                                {this.state.selectedDateIndex !== null && this.state.selectedDateIndex === index &&
                                    <Image source={images.check} style={localStyle.checkboxImage}/>
                                }
                            </View> 
                            {moment(surveyDate.beginning_date).isBefore(moment()) &&
                                <View style={{flex: 2}}>
                                    <Text style={localStyle.pastText}>
                                        {I18n.t('sportunitiesStatusPast').toLowerCase()}
                                    </Text>
                                </View>
                            }
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </FilterModal>
    )
  }
};

export default createFragmentContainer(SurveyModal, {
    sportunity: graphql`fragment SurveyModal_sportunity on Sportunity{
        survey {
            isSurveyTransformed
            surveyDates {
                beginning_date
                ending_date
                answers {
                    answer
                }
            }
        }
        invited {
            user {
                id
            }
        }
    }`,
});

const localStyle = StyleSheet.create({
    container: {
        padding: metrics.baseMargin,
        flexDirection: 'column',
        justifyContent: 'center',
        //flex: 1,
        backgroundColor: colors.background
    },
    topContainer: {
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: metrics.buttonRadius,
        backgroundColor: colors.background,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 5,
        marginBottom: -1,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
    },
    descriptionContainer: {
        padding: metrics.baseMargin,
        width: '100%'
    },
    descriptionContainer2: {
        padding: metrics.baseMargin,
        borderTopWidth: 1,
        borderColor: colors.lightGrey,
        width: '100%'
    },
    description: {

    },
    buttonContainer: {
        borderWidth: 1,
        borderColor: colors.lightGrey,
        borderRadius: metrics.buttonRadius,
        paddingRight: metrics.baseMargin,
        backgroundColor: colors.snow,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: -1,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
    },
    pastButtonContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: metrics.buttonRadius,
        paddingRight: metrics.baseMargin,
        backgroundColor: colors.lightGrey,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: -1,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 11
    },
    dateContainer: {
        padding: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRightWidth: 1,
        borderColor: colors.lightGrey,
        flex: 3
    },
    pastDateContainer: {
        padding: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRightWidth: 1,
        borderColor: colors.grey,
        flex: 3
    },
    date: {
        fontSize: fonts.size.medium
    },
    hour: {
        fontSize: fonts.size.small
    },
    answerText: {
        fontSize: fonts.size.regular,
        marginLeft: metrics.baseMargin
    },
    checkboxImage: {
        tintColor: colors.lightGrey,
        height: 15,
        width: 15,
    }, 
    pastText: {
        fontSize: fonts.size.medium,
        color: colors.red
    }
})

I18n.fallbacks = true
I18n.translations = translations;