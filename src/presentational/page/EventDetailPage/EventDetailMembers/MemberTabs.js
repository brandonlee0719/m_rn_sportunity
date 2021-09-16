import React from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent';
import I18n from 'react-native-i18n';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';

import translations from 'sportunity/src/translations.js';
import { colors, metrics, fonts } from '../../../../theme';
import MemberTabView from './MemberTabView';

class MemberTabs extends PureComponent {
  state = {
    activeTab: 'participants',
    participants: [],
    invited: [],
    refused: [],
    waiting: []
  };

  componentDidMount() {
    this.setMembersState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props, nextProps)) {
      this.setMembersState(nextProps);
    }
  }

  setMembersState = props => {
    this.setState({
      participants: this.getParticipants(props),
      invited: this.getInvitedPending(props),
      refused: this.getRefusedMembers(props),
      waiting: this.getWaitingMembers(props)
    });
  };

  getParticipants = props => get(props, 'sportunity.participants');

  getInvitedMembers = props => {
    const invited = get(props, 'sportunity.invited', []);
    return invited.map(member => member.user);
  };

  getWaitingMembers = props => {
    const { waiting = [], willing = [] } = get(props, 'sportunity', {});
    const waitingList = [...waiting, ...willing];
    return waitingList;
  };

  getRefusedMembers = props => {
    const {
      sportunity,
      isOrganized,
      isParticipant,
      isOnWaitingList,
      isInvited,
      wasInvited
    } = props;
    let canceling = [];
    let refused = [];

    if (
      (isOrganized || isParticipant || isOnWaitingList || isInvited || wasInvited) &&
        ((sportunity.canceling && sportunity.canceling.length > 0) || (sportunity.invited && sportunity.invited.length > 0))
      ) {

      sportunity.canceling
      .filter(cancelled => cancelled.status !== "REFUSED_BY_ORGANIZER")
      .forEach(cancelled => {
        if (!this.isUserParticipant(sportunity, cancelled.canceling_user.id) &&
          canceling.findIndex(cancel => cancel.id === cancelled.canceling_user.id) < 0
        )
          canceling.push(cancelled.canceling_user);
      });

      sportunity.invited
        .filter(invited => invited.answer === 'NO' && canceling.findIndex(cancel => cancel.id === invited.user.id) < 0 && !this.isUserParticipant(sportunity, invited.user.id))
        .forEach(invited => canceling.push(invited.user));
    }

    return canceling;
  };

  getInvitedPending = (props) => {
    const {
      sportunity,
      isOrganized,
      isParticipant,
      isOnWaitingList,
      isInvited,
      wasInvited
    } = props;
    let invitedPending = [];

    if (
      (isOrganized ||
        isParticipant ||
        isOnWaitingList ||
        isInvited ||
        wasInvited) &&
      sportunity.invited &&
      sportunity.invited.length > 0
    ) {
      invitedPending = sportunity.invited
        .filter(
          invited =>
            invited.answer === 'WAITING' &&
            !this.isUserParticipant(sportunity, invited.user.id) &&
            !this.isUserCancelling(sportunity, invited.user.id)
        )
        .map(member => member.user);
    }

    return invitedPending;
  };

  isUserParticipant = (sportunity, userId) => {
    let isParticipant = false;

    if (sportunity.participants && sportunity.participants.length > 0)
      isParticipant =
        sportunity.participants.findIndex(
          participant => participant.id === userId
        ) >= 0;

    return isParticipant;
  };

  isUserCancelling = (sportunity, userId) => {
    let isCancelling = false;

    if (sportunity.canceling && sportunity.canceling.length > 0)
      isCancelling =
        sportunity.canceling.findIndex(
          cancelled => cancelled.canceling_user.id === userId && cancelled.status !== 'REFUSED_BY_ORGANIZER'
        ) >= 0;

    return isCancelling;
  };

  renderTabBar = (TABS) => {
    const { activeTab } = this.state;

    return (
      <View style={{ flexDirection: 'row' }}>
        {Object.keys(TABS).map((tab, i) => {
          const { name, color } = TABS[tab];
          const members = this.state[tab];
          const membersCount = get(members, 'length', 0);
          return (
            <TouchableOpacity
              key={i}
              style={[
                styles.tabBarOption,
                activeTab === tab && { borderColor: color }
              ]}
              onPress={() => this.setState({ activeTab: tab })}
            >
              <Text style={{ color: color, fontSize: fonts.size.h6 }}>
                {membersCount}
              </Text>
              <Text
                style={{
                  color: activeTab === tab ? colors.black : colors.charcoal,
                  marginTop: 5
                }}
              >
                {name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  getTabScene = (TABS) => {
    const { activeTab } = this.state;
    const activeTabKey = activeTab.toLowerCase();
    
    return (
      <MemberTabView
        {...this.props}
        heading={TABS[activeTab].name}
        members={this.state[activeTabKey]}
        color={TABS[activeTabKey].color}
        index={1}
      />
    );
  };

  render() {
    const TABS = {
      participants: {
        name: I18n.t('participants'),
        color: colors.green
      },
      invited: {
        name: I18n.t('invited'),
        color: colors.danube
      },
      refused: {
        name: I18n.t('refused'),
        color: colors.red
      },
      waiting: {
        name: I18n.t('waiting'),
        color: colors.bloodOrange
      }
    };

    return (
      <View>
        {this.renderTabBar(TABS)}
        <View style={styles.divider} />
        {this.getTabScene(TABS)}
      </View>
    );
  }
}

export default MemberTabs;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: colors.lightGrey,
  },
  tabBarOption: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: metrics.baseMargin,
    borderBottomWidth: 3,
    borderColor: colors.snow
  }
});

I18n.fallbacks = true;
I18n.translations = translations;
