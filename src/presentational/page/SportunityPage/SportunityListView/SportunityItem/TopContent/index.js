import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import moment from 'moment';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import _ from 'lodash';
import cloneDeep from 'lodash/cloneDeep';

import UpdateSportunityMutation from '../../../../EventDetailPage/mutation/UpdateSportunity.js'
import CancelBookingMutation from '../../../../EventDetailPage/mutation/CancelBooking.js';
import icons from '../../../../../../../src/theme/images';
import { styles } from './styles';
import Levels from './levels';
import { SportunitySummary } from '../../../../../../customPropType';
import { colors, metrics } from '../../../../../../theme/index.js';
import { dispatchToActions } from '../../../../../../action/utils.js';
import { updateStepsCompleted } from '../../../../../../action/profileActions';

class TopContent extends PureComponent {
  constructor() {
    super()
    this.state = {
      organizer: null,
      isBooking: false,
      isCanceling: false,
    }
  }

  componentDidMount = () => {
    const {sportunity} = this.props
    if (sportunity && sportunity.organizers) {
      sportunity.organizers.forEach(organizer => {
        if (organizer.isAdmin && organizer.organizer.areStatisticsActivated) {
          this.setState({
            organizer: organizer.organizer
          })
        }
      })
    }
  }

  bookSportunityWithDialog = () => {
    if (!this.state.isBooking) {
      Alert.alert(
        I18n.t('sportunityAlertbookingValidation'),
        I18n.t('sportunityAlertBook'),
        [
          { text: I18n.t('yes'), onPress: () => this.book() },
          { text: I18n.t('no'), onPress: () => {} },
        ]
      )
    }
  }

  updateTutorialSteps = () => {
    const { tutorialSteps, updateStepsCompleted } = this.props;
    let newTutorialSteps = cloneDeep(tutorialSteps);

    newTutorialSteps['giveAvailabilitiesStep'] = true;
    updateStepsCompleted(newTutorialSteps);
  }

  book() {
    const { viewer, user, sportunity} = this.props;
    let params = { 
      sportunityID: sportunity.id, 
      sportunity:{
        participants: user.id,
        invited: {
          user: user.id,
          answer: "YES"
        }
      },
    };

    this.setState({isBooking: true})

    Toast.show(I18n.t('sportunityToastBookDoing'));

    UpdateSportunityMutation.commit(params,
      () => {
        Toast.show(I18n.t('sportunityToastBookSuccess'))
        this.setState({isBooking: false})
        this.updateTutorialSteps();
      },
      error => {
        console.error(error.getError())
        Alert.alert(I18n.t('alert'), error.getError().source.errors[0].message)
        this.setState({isBooking: false})
      },
    );
  }

  cancelBookingWithDialog = () => {
    if (!this.state.isCanceling) {
      Alert.alert(
        I18n.t('sportunityAlertCancel'),
        I18n.t('sportunityAlertCancelParticipation'),
        [
          { text: I18n.t('yes'), onPress: () => this.cancelBookingCommit() },
          { text: I18n.t('no'), onPress: () => {} },
        ]
      )
    }
  }

  cancelBookingCommit(){
    const { viewer, user, sportunity } = this.props;
    let params = { 
      sportunityID: sportunity.id,
      sportunity:{
        canceling: user.id,
      }
    };

    this.setState({isCanceling: true})
    if (this.props.wasInvited) {
      params.sportunity.invited = {
        user: user.id,
        answer: "NO"
      }
    }

    Toast.show(I18n.t('sportunityToastCancelDoing'));

    CancelBookingMutation.commit(params,
      () => {
        this.setState({isCanceling: false})
        Toast.show(I18n.t('sportunityToastCancelSuccess'));
      },
      error => {
        this.setState({isCanceling: false})
        Toast.show(I18n.t('sportunityToastCancelFail'));
        let errors = JSON.parse(error.getError().source);
        console.log(errors.errors[0].message);
      },
    );
  }

  getUserSpecificPrice = (user, paymentStatus, price) => {
    if (paymentStatus) {
      let index = paymentStatus.findIndex(paymentStatus => {
        return paymentStatus.status !== 'Canceled' && user && paymentStatus && paymentStatus.price && user.id === paymentStatus.user.id;
      });
      if (index >= 0)
        return paymentStatus[index].price
      else
        return price ;
    }
    else return price ;
  }

  toTitleCase = string => _.upperFirst(_.toLower(string));

  render = () => {
    const {
      onPress, sportunity, sportunity:{ beginning_date, sport, address, venue, infrastructure, price, title, paymentStatus }, actitvityColor, status, viewer, language, user,
      showEventDetail
    } = this.props ;

    let userPrice = this.getUserSpecificPrice(user, paymentStatus, price)

    let { organizer } = this.state

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>

          <View style={styles.col1}>
            {!showEventDetail
              && <Text style={[styles.status, { color: actitvityColor }]} numberOfLines={2} ellipsizeMode="tail">
                  {this.toTitleCase(status)}
                </Text>
            }
            <View style={showEventDetail ? { height: 80 } : [styles.imageContainer, status.length < 10 ? { marginTop: metrics.baseMargin } : {}]}>
              <View style={styles.imageWrapper}>
                {sport && <Image style={styles.icon} source={{ uri: sport && sport.sport && sport.sport.logo }} />}
              </View>
            </View>
            {showEventDetail
              && <View style={{ marginLeft: -15, justifyContent: 'flex-start', marginBottom: 10 }}>
                  <Text style={{ color: colors.charcoal }}>{sportunity.kind}</Text>
                </View>
            }
          </View>


          <View style={styles.col2}>
            <View style={{ flexWrap: 'wrap' }}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
            </View>
            <View>
            {sport && !sport.allLevelSelected &&
              <View style={styles.row}>
                {sport && sport.levels && sport.levels.length > 0 && <Levels levels={sport.levels} allLevelSelected={sport.allLevelSelected}/> }
              </View>
            }
            {venue && infrastructure
              ? <View style={styles.row}>
                  <Image style={styles.iconLocation} source={icons.location} />
                  <View style={styles.locationContainer}>
                    <Text style={styles.location} numberOfLines={1}>
                      {venue.name + ' - ' + infrastructure.name}
                    </Text>
                    <Text style={styles.location} numberOfLines={1}>
                      {address && `${address.city}`}
                    </Text>
                  </View>
                </View>
              : <View style={styles.row}>
                  <Image style={styles.iconLocation} source={icons.location} />
                  <Text style={{ color: colors.charcoal }} numberOfLines={1}>
                    {address && `${address.city}`}
                  </Text>
                </View>
              }
              {showEventDetail
                && <View style={{marginTop: 3}}>
                    <Text style={{ color: colors.charcoal, fontSize: 12 }}>
                      {sportunity && sportunity.participants && sportunity.participants.length} {I18n.t('particpantsShort').toLowerCase()}
                      ({I18n.t('min')} {sportunity.participantRange.from} - {I18n.t('max')} {sportunity.participantRange.to})
                    </Text>
                  </View>
              }
            </View>
          </View>


          <View style={styles.col3}>
            <Text style={styles.day}>
              {moment(beginning_date).format('ddd')}
            </Text>
            <Text style={[styles.date, styles.row]}>
              {moment(beginning_date).format('DD MMM')}
            </Text>
            <Text style={[styles.time, styles.row]}>
              {moment(beginning_date).format('HH:mm')}
            </Text>

            {sportunity.status === 'Past' || sportunity.status === 'Cancelled'
              ? sportunity.score && sportunity.sportunityTypeStatus && organizer && organizer.statisticPreferences && !organizer.statisticPreferences.private &&
                  <View style={styles.scoreContainer}>
                    <Text style={styles.scoreText}>
                      {sportunity.sportunityType.name[language.toUpperCase()]}
                    </Text>
                    <Text style={styles.scoreText}>
                      {sportunity.sportunityTypeStatus.name[language.toUpperCase()] + ' '}
                      {sportunity.score.currentTeam + ' - ' + sportunity.score.adversaryTeam }
                    </Text>
                  </View>
              : userPrice && userPrice.cents > 0 &&
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>
                    {`${userPrice.cents/100} ${userPrice.currency}`}
                  </Text>
                </View>
            }

          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

TopContent.propTypes = {
  onPress: PropTypes.func.isRequired,

  sportunity: SportunitySummary,
  actitvityColor: PropTypes.string.isRequired,

};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
  tutorialSteps: state.sportunityProfile.tutorialSteps,
});

const dispatchToProps = dispatchToActions({
  updateStepsCompleted,
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps,
)(TopContent);

export default createFragmentContainer(ReduxContainer, {
  sportunity: graphql`
    fragment TopContent_sportunity on Sportunity{
      id,
      title,
      status,
      beginning_date,
      price {
        currency
        cents
      },
      survey {
        isSurveyTransformed
        surveyDates {
          beginning_date
          ending_date
        }
      }
      organizers {
        organizer {
          id
          pseudo
          avatar
          areStatisticsActivated
          statisticPreferences {
            private
          }
        }
        isAdmin
      }
      paymentStatus {
        user {
          id
        }
        status
        price {
          cents,
          currency
        }
      }
      venue {
        id
        name
      }
      infrastructure {
        id
        name
      }
      address {
        address
        country
        city
        zip
        position {
          lat
          lng
        }
      },
      participantRange {
        from, to
      }
      sportunityType {
        id,
        name {
          EN,
          FR
        }
      }
      sportunityTypeStatus {
        id,
        name {
          EN,
          FR
        }
      }
      score {
        currentTeam,
        adversaryTeam
      },
      sport {
        sport {
          logo
        },
        allLevelSelected,
        levels{
          id,
          EN {
            name
            skillLevel
          },
          FR {
            name
            skillLevel
          }
        }
      }
    }
  `,
  viewer: graphql`
    fragment TopContent_viewer on Viewer {
        id
    }
  `,
  user: graphql`
    fragment TopContent_user on User {
      id
    }
  `
})

I18n.fallbacks = true
I18n.translations = translations;
