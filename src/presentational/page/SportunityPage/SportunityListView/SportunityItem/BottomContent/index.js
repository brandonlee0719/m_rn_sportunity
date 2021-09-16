import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import { SportunitySummary } from '../../../../../../customPropType';
import icons from '../../../../../../theme/images';
import { colors } from '../../../../../../../src/theme';
import { styles } from './styles';
import { getActivityStatusAndColor } from '../../../util';


/**
 * SportunityItem
 */
class BottomContent extends PureComponent {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.setStatusActivity();
  }

  componentDidUpdate = () => {
    this.setStatusActivity();
  }

  setStatusActivity() {
    const { sportunity, user } = this.props;
    const { status, color } = getActivityStatusAndColor({ sportunity, user });
    this.props.setStatusAcvity(status, color);
  }

  render(){
    const { sportunity:{ participantRange, participants, organizers, game_information }, actitvityColor } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          {/*<Image style={[styles.user_icon,{ tintColor: actitvityColor }]} source={icons.red_user} />*/}
          {participants &&
            <Text style={[styles.info,{ color: actitvityColor }]}>
              {I18n.t('sportunityParticipants') + ': ' + participants.length + '  '}
            </Text>
          }
        </View>
        <View>
        {organizers
          .filter(organizer => organizer.isAdmin)
          .splice(0, 1)
          .map((organizer, index) => (
          <View style={styles.right_column} key={index}>
            <Image style={[styles.user_icon,{ tintColor: colors.blue }]} source={icons.red_user} />
            <Text style={styles.count}>
              {game_information && game_information.opponent && (game_information.opponent.organizer || game_information.opponent.organizerPseudo)
                ? game_information.opponent.organizer
                  ? organizer.organizer.pseudo.length + game_information.opponent.organizer.pseudo.length > 25
                    ? organizer.organizer.pseudo.slice(0, 10) + '..'
                    : organizer.organizer.pseudo
                  : organizer.organizer.pseudo.length + game_information.opponent.organizerPseudo.length > 25
                    ? organizer.organizer.pseudo.slice(0, 10) + '..'
                    : organizer.organizer.pseudo
                : this.props.sportunity.status.indexOf('Organized') >= 0 && game_information.opponent && (game_information.opponent.lookingForAnOpponent|| (game_information.opponent.invitedOpponents && game_information.opponent.invitedOpponents.edges && game_information.opponent.invitedOpponents.edges.length > 0))
                  ? organizer.organizer.pseudo.length + I18n.t('lookingForAnOpponent').length > 25
                    ? organizer.organizer.pseudo.slice(0, 8) + '..'
                    : organizer.organizer.pseudo
                  : game_information.opponent && game_information.opponent.unknownOpponent
                    ? organizer.organizer.pseudo.length + I18n.t('unknownOpponentShort').length > 25
                      ? organizer.organizer.pseudo.slice(0, 8) + '..'
                      : organizer.organizer.pseudo
                    : organizer.organizer.pseudo
              }
            </Text>
            {game_information && game_information.opponent && (game_information.opponent.organizer || game_information.opponent.organizerPseudo) &&
              <View style={styles.right_column}>
                <Text style={styles.against}>{I18n.t('againstShort')}</Text>
                <Image style={[styles.user_icon,{ tintColor: colors.blue }]} source={icons.red_user} />
                <Text style={styles.count}>
                  {game_information.opponent.organizer
                  ? organizer.organizer.pseudo.length + game_information.opponent.organizer.pseudo.length > 25
                    ? game_information.opponent.organizer.pseudo.slice(0, 10) + '..'
                    : game_information.opponent.organizer.pseudo
                  : organizer.organizer.pseudo.length + game_information.opponent.organizerPseudo.length > 25
                    ? game_information.opponent.organizerPseudo.slice(0, 10) + '..'
                    : game_information.opponent.organizerPseudo
                  }
                </Text>
              </View>
            }
            {game_information && game_information.opponent && game_information.opponent.unknownOpponent &&
              <View style={styles.right_column}>
                <Text style={styles.against}>{I18n.t('againstShort')}</Text>
                <Image style={[styles.user_icon,{ tintColor: colors.blue }]} source={icons.red_user} />
                <Text style={styles.count}>
                  {I18n.t('unknownOpponentShort')}
                </Text>
              </View>
            }
            {this.props.sportunity.status.indexOf('Organized') >= 0 && game_information && game_information.opponent &&
              (game_information.opponent.lookingForAnOpponent || (game_information.opponent.invitedOpponents && game_information.opponent.invitedOpponents.edges && game_information.opponent.invitedOpponents.edges.length > 0)) &&
              <View style={styles.right_column}>
                <Text style={styles.against}>{I18n.t('againstShort')}</Text>
                <Image style={[styles.user_icon,{ tintColor: colors.blue }]} source={icons.red_user} />
                <Text style={styles.count}>
                  {I18n.t('lookingForAnOpponent')}
                </Text>
              </View>
            }
          </View>
          ))
        }
        </View>
      </View>
    )
  }
}

BottomContent.propTypes = {
  sportunity: SportunitySummary,
  actitvityColor: PropTypes.string.isRequired,
  setStatusAcvity: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
})

const dispatchToProps = (dispatch) => ({

});

export default createFragmentContainer( connect(
  stateToProps,
  dispatchToProps
)(BottomContent), {
  user: graphql`
    fragment BottomContent_user on User {
      id
    }
  `,
  sportunity: graphql`
    fragment BottomContent_sportunity on Sportunity{
    nbShares,
    status,
    survey {
      isSurveyTransformed
      surveyDates {
        answers {
          user {
            id
            pseudo
          }
          answer
        }
      }
    }
    participants{
      id
    },
    waiting{
      id
    },
    willing {
      id
    },
    canceling {
      canceling_user{
        id
      },
      status,
      cancelation_date
    }
    participantRange{
      from
      to
    }
    organizers {
      isAdmin
      organizer {
        id,
        pseudo,
        avatar
      }
    }
    game_information {
      opponent {
        organizerPseudo
        unknownOpponent
        lookingForAnOpponent
        organizer {
          id,
          pseudo,
          avatar
        }
        invitedOpponents (last: 5) {
          edges {
            node {
              id,
              members {
                id
              }
            }
          }
        }
      }
    }
  }`,
})



I18n.fallbacks = true
I18n.translations = translations;
