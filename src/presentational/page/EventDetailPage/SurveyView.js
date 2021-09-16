import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {createFragmentContainer, graphql} from 'react-relay';
import { View, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Text from 'react-native-text';
import moment from 'moment';
import Toast from 'react-native-simple-toast'

import InvitedAnswersSurveyMutation from './mutation/InvitedAnswersSurvey';
import { styles } from './styles';
import {
  colors,
  images,
  metrics
} from 'sportunity/src/theme';

class SurveyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUserModifies: true,
        invitedUser: [],
        userHasAnswered: false,
        answers: [],
    }
  }

  componentDidMount() {
    const {sportunity, me} = this.props;
    let invitedUser = [];
    let userHasAnswered = false ;

    if (sportunity.survey && sportunity.survey.surveyDates && sportunity.survey.surveyDates.length > 1) {
	    [].concat(
            sportunity.invited.map(user => (user.user)),
            sportunity.organizers.map(user => (user.organizer)),
        ).forEach(user => {
	    	if (sportunity.survey.surveyDates[0].answers.findIndex(answer => answer.user.id === user.id) >= 0 && invitedUser.findIndex(invited => invited.id === user.id) < 0)
                invitedUser.push(user)
        })
        if (sportunity.survey.surveyDates[0].answers.findIndex(answer => answer.user.id === me.id) >= 0)
            userHasAnswered = true ;
    }

    let answers = [] ;
    this.props.sportunity.survey.surveyDates.forEach(surveyDate => {
        let index = surveyDate.answers.findIndex(answer => answer.user.id === this.props.me.id);
        
        if (index >= 0) {
            answers.push({
                beginning_date: surveyDate.beginning_date,
                ending_date: surveyDate.ending_date,
                answer: surveyDate.answers[index].answer
            })
        }
        else {
            answers.push({
                beginning_date: surveyDate.beginning_date,
                ending_date: surveyDate.ending_date,
                answer: 'WAITING'
            })
        }
    })

    if (userHasAnswered) {
        this.setState({currentUserModifies: false})
    }

    this.setState({
        invitedUser,
        userHasAnswered,
        answers
    })
  }

  handlePressButton = () => {
    if (!this.state.currentUserModifies) {
        let answers = [] ;
        this.props.sportunity.survey.surveyDates.forEach(surveyDate => {
            let index = surveyDate.answers.findIndex(answer => answer.user.id === this.props.me.id);
            
            if (index >= 0) {
                answers.push({
                    beginning_date: surveyDate.beginning_date,
                    ending_date: surveyDate.ending_date,
                    answer: surveyDate.answers[index].answer
                })
            }
            else {
                answers.push({
                    beginning_date: surveyDate.beginning_date,
                    ending_date: surveyDate.ending_date,
                    answer: 'WAITING'
                })
            }
        })

        this.setState({
            currentUserModifies: !this.state.currentUserModifies,
            answers 
        })
    }
    else {
        this.handleSubmit();
    }
  }

  changeAnswer = surveyDate => {
    let answers = this.state.answers ;

    let index = answers.findIndex(answer => moment(answer.beginning_date).isSame(surveyDate.beginning_date) && moment(answer.ending_date).isSame(surveyDate.ending_date));
    
    if (index >= 0) {
        answers[index] = {
            beginning_date: surveyDate.beginning_date,
            ending_date: surveyDate.ending_date,
            answer: answers[index].answer === 'YES' ? 'WAITING' : 'YES'
        } 
    }

    this.setState({
        answers 
    })
  }

  handleSubmit = () => {
    let params = {
        sportunityID: this.props.sportunity.id,
	    userIdVar: this.props.me.id,
	    answers: this.state.answers
    };
    
    InvitedAnswersSurveyMutation.commit(params,
        () => {
            Toast.show(I18n.t('updateSuccess'))
            let invitedUser = this.state.invitedUser; 
            if (!this.state.userHasAnswered) {
                invitedUser.push(this.props.me)
            }
            this.setState({
                currentUserModifies: !this.state.currentUserModifies,
                userHasAnswered: true,
                invitedUser
            });
        },
        (error) => {
            Toast.show(I18n.t('updateFailed'))
            this.setState({
                currentUserModifies: !this.state.currentUserModifies,
            })
        },
    );
  }

  render = () => {
    const {sportunity, me, isAdmin, language} = this.props;

    const {currentUserModifies, invitedUser, userHasAnswered, answers} = this.state ;
    
    return (
        <View>
            {sportunity.survey && sportunity.survey.surveyDates.length > 0 && sportunity.survey.surveyDates && 
                <View style={styles.rowContainer}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={localStyle.firstCol}>
                            <View style={localStyle.whiteCell} />
                            {invitedUser.length > 0 &&  
                                invitedUser.filter(invited => sportunity.survey.surveyDates[0].answers.findIndex(answer => answer.user.id === invited.id) >= 0).map((invited, index) => (
                                    <View style={[localStyle.userRow, invited.id === me.id && currentUserModifies ? localStyle.heightlighten : {}]} key={index}>
                                        <View style={{marginRight: 5}}>
                                            <Image source={{ uri: invited.avatar }} style={styles.smallThumbProfile} />
                                        </View>
                                        <Text style={styles.smallPseudo} numberOfLines={1}>
                                            {invited.pseudo.length > 12
                                            ?   invited.pseudo.slice(0,10) + '..'
                                            :   invited.pseudo
                                            }
                                        </Text> 
                                    </View>
                                ))
                            }  
                            {!userHasAnswered && 
                                <View style={[localStyle.userRow, currentUserModifies ? localStyle.heightlighten : {}]}>
                                    <View style={{marginRight: 5}}>
                                        <Image source={{ uri: me.avatar }} style={styles.smallThumbProfile} />
                                    </View>
                                    <Text style={styles.smallPseudo} numberOfLines={1}>
                                        {me.pseudo.length > 12
                                        ?   me.pseudo.slice(0,10) + '..'
                                        :   me.pseudo
                                        }
                                    </Text> 
                                </View>
                            }   
                        </View>
                        <View style={{flex: 3}}>
                            <ScrollView horizontal={true} style={localStyle.scrollViewStyle} alwaysBounceHorizontal={false}>
                                {sportunity.survey.surveyDates.map((surveyDate, index) => (
                                    <View style={moment(surveyDate.beginning_date).isBefore(moment()) ? localStyle.pastDateCol : localStyle.dateCol} key={index}>
                                        <View style={localStyle.dateCell}>
                                            <Text style={localStyle.month}>
                                                {moment(surveyDate.beginning_date).format('MMM').toUpperCase()}
                                            </Text>
                                            <Text style={localStyle.day}>
                                                {moment(surveyDate.beginning_date).format('ddd DD')}
                                            </Text>
                                            <Text style={localStyle.hour}>
                                                {moment(surveyDate.beginning_date).format('HH:mm')}
                                            </Text>
                                            <Text style={localStyle.hour}>
                                                {moment(surveyDate.ending_date).format('HH:mm')}
                                            </Text>
                                            <View style={localStyle.yesNumberContainer}>
                                                <Image source={images.check} style={localStyle.checkboxImage}/>
                                                <Text style={localStyle.yesNumber}>
                                                    {surveyDate.answers.filter(answer => answer.answer === 'YES').length}
                                                </Text>
                                            </View>
                                        </View>
                                        {invitedUser.map((invited, index) => (
                                            moment(surveyDate.beginning_date).isBefore(moment())
                                            ?   surveyDate.answers.find(answer => answer.user.id === invited.id) && surveyDate.answers.find(answer => answer.user.id === invited.id).answer === 'YES'
                                                ?   <View key={index} style={localStyle.pastYesAnswerContainer}>
                                                        <Image source={images.check} style={localStyle.bigCheckboxImage}/>
                                                    </View>
                                                :   <View key={index} style={localStyle.pastNoAnswerContainer}>
                                                    </View>
                                            :   currentUserModifies && invited.id === me.id 
                                                ?   <TouchableOpacity key={index} style={[localStyle.answerContainer, localStyle.heightlighten]} onPress={() => this.changeAnswer(surveyDate)}>
                                                        {answers.find(answer => moment(answer.beginning_date).isSame(surveyDate.beginning_date) && moment(answer.ending_date).isSame(surveyDate.ending_date)).answer === 'YES' &&
                                                            <Image source={images.check} style={localStyle.bigCheckboxImage}/>
                                                        }
                                                    </TouchableOpacity>
                                                :   surveyDate.answers.find(answer => answer.user.id === invited.id) && surveyDate.answers.find(answer => answer.user.id === invited.id).answer === 'YES'
                                                    ?   <View key={index} style={localStyle.yesAnswerContainer}>
                                                            <Image source={images.check} style={localStyle.bigCheckboxImage}/>
                                                        </View>
                                                    :   <View key={index} style={localStyle.noAnswerContainer}>
                                                        </View>
                                        
                                        ))}
                                        {!userHasAnswered && 
                                            (currentUserModifies 
                                            ?   <TouchableOpacity style={[moment(surveyDate.beginning_date).isAfter(moment()) ? localStyle.answerContainer : localStyle.pastAnswerContainer, localStyle.heightlighten]} onPress={() => moment(surveyDate.beginning_date).isAfter(moment()) && this.changeAnswer(surveyDate)}>
                                                    {answers && answers.find(answer => moment(answer.beginning_date).isSame(surveyDate.beginning_date) && moment(answer.ending_date).isSame(surveyDate.ending_date)) && answers.find(answer => moment(answer.beginning_date).isSame(surveyDate.beginning_date) && moment(answer.ending_date).isSame(surveyDate.ending_date)).answer === 'YES' &&
                                                        <Image source={images.check} style={localStyle.bigCheckboxImage}/>
                                                    }
                                                </TouchableOpacity>
                                            :   <View key={index} style={moment(surveyDate.beginning_date).isAfter(moment()) ? localStyle.answerContainer : localStyle.pastAnswerContainer}>
                                                </View>
                                            )
                                        }   
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                    </View>
                    {currentUserModifies && 
                        <TouchableOpacity style={localStyle.validateButton} onPress={this.handlePressButton}>
                            <Text style={localStyle.validateButtonTitle} numberOfLines={1}>
                                {answers.filter(a => a.answer === 'YES').length > 0 ? I18n.t('sportunitySurveyValidate') : I18n.t('sportunitySurveyValidateNone')}
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
            }
            {!currentUserModifies &&
                <TouchableOpacity style={styles.rowContainer} onPress={this.handlePressButton}>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.title} numberOfLines={1}>
                            {userHasAnswered 
                            ?   I18n.t('sportunitySurveyMyAvailabilitiesModify')
                            :   I18n.t('sportunitySurveyMyAvailabilities')
                            }
                        </Text>
                        <Image style={styles.icon} source={images.right_arrow} />
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
  }
};

export default createFragmentContainer(SurveyView, {
    sportunity: graphql`fragment SurveyView_sportunity on Sportunity{
        survey {
            isSurveyTransformed
            surveyDates {
                beginning_date
                ending_date
                answers {
                    user {
                        id
                        pseudo
                        avatar
                    }
                    answer
                }
            }
        }
        organizers {
            organizer {
                id
                pseudo,
                avatar
            }
        }
        invited{
            user {
              id
              pseudo,
              avatar
            }
            answer
        },
    }`,
});

const localStyle = StyleSheet.create({
    firstCol: {
        flex: 2,
        borderColor: colors.steel,
        borderRightWidth: 1,
        flexDirection: 'column'
    },
    whiteCell: {
        height: 100, 
    },
    userRow: {
        marginLeft: metrics.smallMargin,
        borderColor: colors.steel,
        borderTopWidth: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 30
    },
    scrollViewStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    dateCol: {
        flexDirection: 'column',
        borderColor: colors.steel,
        borderRightWidth: 1,
        width: 70
    },
    pastDateCol: {
        flexDirection: 'column',
        borderColor: colors.grey,
        borderRightWidth: 1,
        width: 70,
        backgroundColor: colors.steel
    },
    dateCell: {
        height: 100,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        fontSize: 12
    },
    month: {
        color: colors.bloodOrange,
        fontSize: 12
    },
    day: {
        marginVertical: 2,
        fontSize: 12
    },
    hour: {
        fontSize: 12
    },
    yesNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    yesNumber: {
        fontSize: 12
    },
    checkboxImage: {
        tintColor: colors.lightGreen,
        height: 10,
        width: 10,
        marginRight: 3
    },  
    userAnswers: {

    },
    yesAnswerContainer: {
        backgroundColor: colors.lightGreen,
        height: 30,
        borderColor: colors.steel,
        borderTopWidth: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    noAnswerContainer: {
        backgroundColor: colors.lightRed,
        height: 30,
        borderColor: colors.steel,
        borderTopWidth: 1, 
    },
    answerContainer: {
        height: 30,
        borderColor: colors.steel,
        borderTopWidth: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heightlighten: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.bloodOrange,
    },
    pastYesAnswerContainer: {
        backgroundColor: colors.steel,
        height: 30,
        borderColor: colors.grey,
        borderTopWidth: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pastNoAnswerContainer: {
        backgroundColor: colors.steel,
        height: 30,
        borderColor: colors.grey,
        borderTopWidth: 1, 
    },
    pastAnswerContainer: {
        height: 30,
        borderColor: colors.grey,
        borderTopWidth: 1, 
        backgroundColor: colors.steel,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bigCheckboxImage: {
        tintColor: colors.green,
        height: 15,
        width: 15,
    },
    validateButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.skyBlue, 
        marginVertical: metrics.baseMargin,
        paddingVertical: 10,
        borderRadius: 15
    },
    validateButtonTitle: {
        color: colors.white
    }
})  

I18n.fallbacks = true
I18n.translations = translations;