import React from 'react';
import Text from 'react-native-text';
import { createMaterialTopTabNavigator } from 'react-navigation';
import I18n from 'react-native-i18n';

import MemberTabView from './MemberTabView';
import translations from 'sportunity/src/translations.js';
import { colors, fonts } from '../../../../theme';

const isUserParticipant = (sportunity, userId) => {
  let isParticipant = false ;

  if (sportunity.participants && sportunity.participants.length > 0) 
    isParticipant = (sportunity.participants.findIndex(participant => participant.id === userId) >= 0)

  return isParticipant; 
}

const isUserCancelling = (sportunity, userId) => {
  let isCancelling = false ;

  if (sportunity.canceling && sportunity.canceling.length > 0)
    isCancelling = (sportunity.canceling.findIndex(cancelled => cancelled.canceling_user.id === userId) >= 0)

  return isCancelling; 
}

const getMemberTabs = ({ sportunity, ...props }) => {
  const { participants = [], invited = [], waiting = [], willing = [] } = sportunity;
  const colorParticipants = colors.green;
  const colorInvited = colors.danube;
  const colorRefused = colors.red;
  const colorWaiting = colors.bloodOrange;

  const invitedMembers = invited.map(member => member.user);
  const waitingList = [
    ...waiting,
    ...willing,
  ];

  const commonProps = {
    sportunity,
    ...props,
  };

  const { isOrganized, isParticipant, isOnWaitingList, isInvited, wasInvited } = props;
  let invitedPending = [];
  let invitedNo = [];
  let canceling = [];
  let refused = [];

  if ((isOrganized || isParticipant || isOnWaitingList || isInvited || wasInvited) && sportunity.invited && sportunity.invited.length > 0) {
    invitedPending = sportunity.invited.filter(invited => invited.answer === "WAITING" && !isUserParticipant(sportunity, invited.user.id) && !isUserCancelling(sportunity, invited.user.id)).map(member => member.user);
    invitedNo = sportunity.invited.filter(invited => invited.answer === "NO" && !isUserParticipant(sportunity, invited.user.id) && !isUserCancelling(invited.user.id)).map(member => member.user);
  }

  if ((isOrganized || isParticipant || isOnWaitingList || isInvited || wasInvited) && sportunity.canceling && sportunity.canceling.length > 0) {
    sportunity.canceling.forEach(cancelled => {
      if (cancelled.status !== "REFUSED_BY_ORGANIZER" && 
        !isUserParticipant(sportunity, cancelled.canceling_user.id) &&
        canceling.findIndex(cancel => cancel.canceling_user.id === cancelled.canceling_user.id) < 0)
      canceling.push(cancelled)
    })
    refused = sportunity.canceling
      .map(canceling => canceling.canceling_user)
      .filter(canceling => Boolean(participants.findIndex(participant => participant.id === canceling.id) < 0))
  }

  const MemberTabs = createMaterialTopTabNavigator(
    {
      Participants: {
        screen: () => (
          <MemberTabView
            {...commonProps}
            heading={I18n.t('participants')}
            members={participants}
            color={colorParticipants}
            index={1}
          />
        ),
        navigationOptions: {
          tabBarIcon: <Text style={{ color: colorParticipants, fontSize: fonts.size.h6 }}>{participants.length}</Text>,
          title: I18n.t('participants'),
        },
      },
      Invited: {
        screen: () => (
          <MemberTabView
            {...commonProps}
            heading={I18n.t('invited')}
            members={invitedMembers}
            color={colorInvited}
            index={2}
          />
        ),
        navigationOptions: {
          tabBarIcon: <Text style={{ color: colorInvited, fontSize: fonts.size.h6 }}>{invitedMembers.length}</Text>,
          title: I18n.t('invited'),
        },
      },
      Refused: {
        screen: () => (
          <MemberTabView
            {...commonProps}
            heading={I18n.t('refused')}
            members={refused}
            color={colorRefused}
            index={3}
          />
        ),
        navigationOptions: {
          tabBarIcon: <Text style={{ color: colorRefused, fontSize: fonts.size.h6 }}>{refused.length}</Text>,
          title: I18n.t('refused'),
        },
      },
      Waiting: {
        screen: () => (
          <MemberTabView
            {...commonProps}
            heading={I18n.t('waiting')}
            members={waitingList}
            color={colorWaiting}
            index={4}
          />
        ),
        navigationOptions: {
          tabBarIcon: <Text style={{ color: colorWaiting, fontSize: fonts.size.h6 }}>{waitingList.length}</Text>,
          title: I18n.t('waiting'),
        },
      },
    },
    {
      initialRoute: 'Participants',
      tabBarOptions: {
        showIcon: true,
        style: { backgroundColor: colors.snow },
        activeTintColor: colors.black,
        inactiveTintColor: colors.black,
        tabStyle: { padding: 0 },
        indicatorStyle: { backgroundColor: colors.skyBlue },
        labelStyle: { fontSize: 12, padding: 0 },
        upperCaseLabel: false,
      },
      swipeEnabled: false,
      lazyLoad: false,
      lazy: false,
      animationEnabled: false,
    }
  )

  return <MemberTabs />;
}

export default getMemberTabs;

I18n.fallbacks = true
I18n.translations = translations;
