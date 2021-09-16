import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { View, ScrollView } from 'react-native';
import Text from 'react-native-text';
import Icons from 'react-native-vector-icons/MaterialIcons';

import translations from 'sportunity/src/translations.js';
import { colors, metrics, fonts } from '../../../../theme';
import FormListItem from '../../../UI/FormListItem';
import ParticipantItem from '../ParticipantsList/ParticipantItem';

class MemberTabView extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      canSeeParticipants: true,
      invitedPending: [],
      invitedNo: [],
      canceling: [],
      waitingList: [],
      refused: [],
      isDetailSwitchOne: false,
    }
  }

  componentWillMount = () => {
    const { sportunity: {hide_participant_list}, isOrganized } = this.props ;

    if (hide_participant_list && !isOrganized) {
      this.setState({ canSeeParticipants: false });
    }
  }

  getUserPrice = (user, paymentStatuses) => {
    let result = {
      cents: 0,
      currency: this.props.userCurrency
    }
    paymentStatuses && paymentStatuses.forEach(paymentStatus => {
      if (paymentStatus.price && paymentStatus.user.id === user.id && paymentStatus.status !== 'Canceled') 
        result = {
          cents: paymentStatus.price.cents / 100,
          currency: paymentStatus.price.currency
        }
    })

    return result ;
  }

  render(){
    const {
      sportunity,
      index,
      members,
      heading,
      goToUser,
      isPast,
      isOrganized,
      cancelParticipant,
      color = colors.black,
    } = this.props;

    if (members.length === 0) {
      return (
        <View style={{ height: 150, backgroundColor: colors.snow, justifyContent: 'center', alignItems: 'center' }}>
          <Icons name="error-outline" size={30} color={colors.charcoal} />
          <Text style={{ color: colors.charcoal, marginTop: metrics.baseMargin }}>
            {index === 1
            ? I18n.t('noParticipant')
            : index === 2
              ? I18n.t('noInvited')
              : index === 3
                ? I18n.t('noRefused')
                : I18n.t('noWaiting')
            }
          </Text>
        </View>
      )
    }

    return (
      <View style={{ flex: 1, backgroundColor: colors.snow }}>
        <Text style={{ color, fontSize: fonts.size.regular, padding: metrics.baseMargin, fontWeight: '500' }}>{heading}</Text>
          { members.map((item, key) =>
              <ParticipantItem 
                key={key} 
                user={item}
                isOrganized={isOrganized}
                cancelParticipant={cancelParticipant}
                isPast={isPast}
                index={index}
                price={this.getUserPrice(item, sportunity.paymentStatus)}
                goToUser={goToUser}
              />
            )
          }
      </View>
    )
  }
}

const stateToProps = (state) => ({
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency,
});

const dispatchToProps = (dispatch) => ({

});

export default connect(stateToProps)(MemberTabView);

I18n.fallbacks = true
I18n.translations = translations;
