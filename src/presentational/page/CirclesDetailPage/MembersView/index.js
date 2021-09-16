import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import { userType } from '../../../../../src/customPropType';
import MemberItem from './MemberItem';
import NoMember from './NoMember';

import style from './style';

const getQuestionByResponse = (response, circle) =>
  circle.askedInformation.find((question) =>
    question.id === response.information
  )

const getUserResponses = (user, circle) =>
  circle.membersInformation
    .filter((response) => response.user.id === user.id)
    .reduce((mem, response) => [
      ...mem,
      { question: getQuestionByResponse(response, circle), response, },
    ], [])

const isUserAsked = (user, question, responses) =>
  responses
    .filter((response) => response.user.id === user.id)
    .find((response) => question.id === response.information)

const isUserFulfilledInfo = (user, circle) =>
  circle.askedInformation
    .filter((question) => !question.filledByOwner)
    .reduce(
      (mem, question) => mem && !!isUserAsked(user, question, circle.membersInformation),
      true
    )

class MembersView extends Component {

  render(){
    const { viewer, circle, members, isParentList, isCurrentUserTheOwner } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Text style={style.heading}>
          {this.props.members.length > 1 
            ? isParentList 
              ? this.props.members.length + ' parents ' + I18n.t('circleInCircle')
              : this.props.members.length + ' ' + I18n.t('circleInCircle')
            : isParentList 
              ? this.props.members.length + ' parent ' + I18n.t('circleInCircle')
              : this.props.members.length + ' ' + I18n.t('circleInCircle')
          }
        </Text>
        <ScrollView>
          {
              members && members.length > 0
              ? members.map((item, index) => {
                  return(
                    <MemberItem
                      key={item.id}
                      user={item}
                      removeMember={this.props.removeMember}
                      existingAskedInformation={circle.askedInformation && circle.askedInformation.length > 0}
                      fulfilledInfos={
                        circle.askedInformation.length
                        ? isUserFulfilledInfo(item, circle)
                        : null
                      }
                      details={
                        this.props.detailed
                          ? getUserResponses(item, circle)
                          : []
                      }
                      userCanRemoveMember={this.props.userCanRemoveMember}
                      hideFulFilledInfosIcon={this.props.hideFulFilledInfosIcon}
                    />
                  )
                })
              : isCurrentUserTheOwner && !isParentList && <NoMember viewer={viewer}/>
            }
        </ScrollView>
      </View>
    );
  }
}

MembersView.propTypes = {
  members: PropTypes.arrayOf(userType).isRequired,
};

export default MembersView;

I18n.fallbacks = true
I18n.translations = translations;
