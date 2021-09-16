import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Switch, View } from 'react-native';
import Text from 'react-native-text';
import {createFragmentContainer, graphql} from 'react-relay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEqual } from 'lodash';

import ParticipantItem from './ParticipantItem';
import AddParticipants from './AddParticipants';
import { colors } from '../../../../theme';
import SportunityAccordion from '../../../SportunityAccordion';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import {styles} from '../styles.js'

class ParticipantsList extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeSection: 1,
      canSeeParticipants: true,
      invitedPending: [],
      invitedNo: [],
      canceling: [],
      waitingList: [],
      refused: [],
      isDetailSwitchOne: false,
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange = (key) => {
    this.setState({ activeSection: key });
  }

  componentWillMount = () => {
    const { sportunity, sportunity: {hide_participant_list}, isOrganized, isParticipant, isOnWaitingList, isInvited, wasInvited } = this.props ;
    
    if (hide_participant_list && !isOrganized) {
      this.setState({
        canSeeParticipants: false
      })
    }

    if ((isOrganized || isParticipant || isOnWaitingList || isInvited || wasInvited) && sportunity.invited && sportunity.invited.length > 0) {
      let invitedPending = sportunity.invited.filter(invited => invited.answer === "WAITING" && !this.isParticipant(sportunity, invited.user.id) && !this.isCancelling(invited.user.id));
      let invitedNo = sportunity.invited.filter(invited => invited.answer === "NO" && !this.isParticipant(sportunity, invited.user.id) && !this.isCancelling(invited.user.id))
      this.setState({invitedPending, invitedNo})
    }

    if ((sportunity.waiting && sportunity.waiting.length > 0) || (sportunity.willing && sportunity.willing.length > 0)) {
      let waitingList = [];
      sportunity.waiting.forEach(waiting => waitingList.push(waiting))
      sportunity.willing.forEach(willing => waitingList.push(willing))
      this.setState({waitingList})
    }

    if ((isOrganized || isParticipant || isOnWaitingList || isInvited || wasInvited) && sportunity.canceling && sportunity.canceling.length > 0) {
      let canceling = []; 
      sportunity.canceling.forEach(cancelled => {
        if (cancelled.status !== "REFUSED_BY_ORGANIZER" && 
          !this.isParticipant(sportunity, cancelled.canceling_user.id) &&
          canceling.findIndex(cancel => cancel.canceling_user.id === cancelled.canceling_user.id) < 0)
        canceling.push(cancelled)
      })
      let refused = sportunity.canceling.filter(cancelled => cancelled.status === "REFUSED_BY_ORGANIZER");      
      this.setState({canceling, refused})
    }
  }

  componentWillReceiveProps = nextProps => {
    if (!isEqual(this.props.sportunity, nextProps.sportunity)) {
      const { sportunity, sportunity: {hide_participant_list}, isOrganized, isParticipant, isOnWaitingList, isInvited, wasInvited } = nextProps ;
      if ((isOrganized || isParticipant || isOnWaitingList || isInvited || wasInvited) && sportunity.invited && sportunity.invited.length > 0) {
        let invitedPending = sportunity.invited.filter(invited => invited.answer === "WAITING" && !this.isParticipant(sportunity, invited.user.id) && !this.isCancelling(invited.user.id));
        let invitedNo = sportunity.invited.filter(invited => invited.answer === "NO" && !this.isParticipant(sportunity, invited.user.id) && !this.isCancelling(invited.user.id))
        this.setState({invitedPending, invitedNo})
      }

      if ((sportunity.waiting && sportunity.waiting.length > 0) || (sportunity.willing && sportunity.willing.length > 0)) {
        let waitingList = [];
        sportunity.waiting.forEach(waiting => waitingList.push(waiting))
        sportunity.willing.forEach(willing => waitingList.push(willing))
        this.setState({waitingList})
      }
      else {
        this.setState({waitingList: []})
      }
  
      if ((isOrganized || isParticipant || isOnWaitingList || isInvited || wasInvited) && sportunity.canceling && sportunity.canceling.length > 0) {
        let canceling = []; 
        sportunity.canceling.forEach(cancelled => {
          if (cancelled.status !== "REFUSED_BY_ORGANIZER" && 
            !this.isParticipant(sportunity, cancelled.canceling_user.id) &&
            canceling.findIndex(cancel => cancel.canceling_user.id === cancelled.canceling_user.id) < 0)
          canceling.push(cancelled)
        })
        let refused = sportunity.canceling.filter(cancelled => cancelled.status === "REFUSED_BY_ORGANIZER");      
        this.setState({canceling, refused})
      }
    }
  }

  isParticipant = (sportunity, userId) => {
    let isParticipant = false ;

    if (sportunity.participants && sportunity.participants.length > 0) 
      isParticipant = (sportunity.participants.findIndex(participant => participant.id === userId) >= 0)

    return isParticipant; 
  }

  isCancelling = (userId) => {
    const { sportunity } = this.props ;
    let isCancelling = false ;

    if (sportunity.canceling && sportunity.canceling.length > 0)
      isCancelling = (sportunity.canceling.findIndex(cancelled => cancelled.canceling_user.id === userId) >= 0)

    return isCancelling; 
  }

  getUserPrice = (user, paymentStatuses) => {
    let result = {
      cents: 0,
      currency: this.props.userCurrency
    }
    paymentStatuses.forEach(paymentStatus => {
      if (paymentStatus.user.id === user.id && paymentStatus.status !== 'Canceled') 
        result = {
          cents: paymentStatus.price.cents / 100,
          currency: paymentStatus.price.currency
        }
    })
    return result 
  }

  renderAccordion = (index, title, users, paymentStatuses) => {
    const invitedAnswerLabel = [
      {value: "WAITING", label: I18n.t('sportunityInvitedAnswerWaiting')},
      {value: "NO", label: I18n.t('sportunityInvitedAnswerNo')},
      {value: "YES", label: I18n.t('sportunityInvitedAnswerYes')},
    ]
    
    return (
      (index === 1 || users.length > 0) && 
        <SportunityAccordion
          title={title}
          length={users && users.length}
          collapsed={this.state.canSeeParticipants && index === this.state.activeSection}
          onChange={() => this.onChange(index)}
          canOpen={this.state.canSeeParticipants}
          messageIfCantOpen={I18n.t('organizerHasHiddenParticipantList')}
        >
          { users && users.map((item, key) =>
              <ParticipantItem 
                key={key} 
                user={item} 
                isOrganized={this.props.isOrganized}
                cancelParticipant={this.props.cancelParticipant}
                isPast={this.props.isPast}
                index={index}
                price={this.getUserPrice(item, paymentStatuses)}
                showDetails={(index === 1 || (index === 3 && this.getUserPrice(item, paymentStatuses).cents !== 0)) && this.state.isDetailSwitchOne}
                goToUser={this.props.goToUser}
              />
            )
          }
        </SportunityAccordion>
    )
  }

  handleSwitchChange = () => {
    this.setState({
      isDetailSwitchOne: !this.state.isDetailSwitchOne
    })
  }

  render(){
    const { participants, paymentStatus } = this.props.sportunity;
    
    const { user, organizerId, isOrganized, viewer, isPast } = this.props

    const {invitedPending, invitedNo, canceling, waitingList} = this.state ;

    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        {isOrganized && participants && participants.length > 0 && 
          <View style={styles.switchRow}>
            <Text style={[styles.titleDesc, {flex: 4}]}>
              {I18n.t('sportunityDisplayParticipantDetails')}
            </Text>
            <Switch
              style={styles.switchButton}
              onTintColor={colors.skyBlue}
              value={this.state.isDetailSwitchOne}
              onValueChange={this.handleSwitchChange}
            />
          </View>
        }
        {this.renderAccordion(1, I18n.t('sportunityGoingParticipants'), participants, paymentStatus)}
        {isOrganized && !isPast && <AddParticipants viewer={viewer} user={user} onAddParticipants={this.props.addParticipants}/>}
        {this.renderAccordion(2, I18n.t('sportunityWaitingList'), waitingList, paymentStatus)}
        {this.renderAccordion(3, I18n.t('sportunityCancelingUser'), canceling.map(cancelled => cancelled.canceling_user), paymentStatus)}
        {this.renderAccordion(4, I18n.t('sportunityInvitedList'), invitedPending.map(invited => invited.user), paymentStatus)}
        {this.renderAccordion(5, I18n.t('sportunityInvitedAnswerNo'), invitedNo.map(invited => invited.user), paymentStatus)}
        {/*isOrganized && this.renderAccordion(6, I18n.t('sportunityInvitedAnswerYes'), invited.filter(invited => invited.answer === "YES").map(invited => invited.user))*/}
      </ScrollView>
    )
  }
}

ParticipantsList.propTypes = {
  sportunity: PropTypes.object.isRequired,
};


const stateToProps = (state) => ({
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency,
});

const dispatchToProps = (dispatch) => ({
});

export default createFragmentContainer(connect(stateToProps, dispatchToProps)(ParticipantsList), {
    viewer: graphql`
      fragment ParticipantsList_viewer on Viewer {
        id
        ...AddParticipants_viewer
      }
    `,
    user: graphql`
      fragment ParticipantsList_user on User {
        id
        ...AddParticipants_user
      }
    `
});

I18n.fallbacks = true
I18n.translations = translations;
