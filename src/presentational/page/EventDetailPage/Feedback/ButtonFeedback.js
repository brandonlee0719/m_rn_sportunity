// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {graphql, createFragmentContainer} from 'react-relay';
import { View } from 'react-native';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Button from '../../../Button/roundedButton';
import UpdateUserFeedbackMutation from '../mutation/UpdateUserFeedbackMutation.js';
import UpdateVenueFeedbackMutation from '../mutation/UpdateVenueFeedbackMutation.js';
import AddFeedbackModal from './AddFeedbackModal';


class ButtonFeedback extends Component {
  state = {
    showModal: false,
  }

  onPress = () => {
    // Modal select user for feedback
    !this.state.showModal &&
      this.setState({ showModal: true })
  }

  onModalClose = () => {
    this.setState({ showModal: false })
  }

  onFeedback = ({ text, to, rating }) => {
    if(to.type === 'user')
      this.addFeedbackToUser({ text, rating, createdAt:new Date() }, to.userID)
    else
      this.addFeedbackToVenue({ text,rating,createdAt:new Date() }, to.venueID)
  }

  addFeedbackToUser = (feedback, userID) => {
    UpdateUserFeedbackMutation.commit({
        user: {
          feedbacks: {
            text: feedback.text,
            rating: feedback.rating,
            author: this.props.viewer.me.id,
            createdAt: feedback.createdAt,
          }
        },
        userID,
      },
      () => {
        Toast.show(I18n.t('sportunityToastFeedbackUser'))
        this.props.navigation.goBack()
      },
      error => console.error(error.getError())
    );
  }

  addFeedbackToVenue = (feedback, venueID) => {
    UpdateVenueFeedbackMutation.commit({
      venueID: venueID,
      venue: {
        feedbacks: {
          text: feedback.text,
          rating: feedback.rating,
          author: viewer.me.id,
          createdAt: feedback.createdAt,
        }
      }
    },
    () => {
      Toast.show(I18n.t('sportunityToastFeedbackVenue'))
      this.props.navigation.goBack()
    },
    error => console.error(error.getError())
  );
  }


  render() {
    const { isParticipant, isOrganizer, organizers, venue, viewer:{me}, renderButton } = this.props;

    return (/* isParticipant && !isOrganizer && -- remove condition for testing purposes */
      <View>
        {
          !isOrganizer && (
            typeof renderButton === 'function'
            ? renderButton({ onPress: this.onPress, text: I18n.t('sportunityFeedbackAdd') })
            : <Button onPress={this.onPress}>{I18n.t('sportunityFeedbackAdd')}</Button>
          )
        }
        <AddFeedbackModal
          users={organizers.map(boss=>({ pseudo:boss.organizer.pseudo,id:boss.organizer.id, feedbacks: boss.organizer.feedbacks }))}
          me={me}
          venue={venue}
          show={this.state.showModal}
          onClose={this.onModalClose}
          onFeedback={this.onFeedback}/>
      </View>)
  }
}

ButtonFeedback.propTypes = {
  viewer: PropTypes.object.isRequired,
  venue: PropTypes.object,
  organizers: PropTypes.array.isRequired,
  isParticipant: PropTypes.bool.isRequired,
  isOrganizer: PropTypes.bool.isRequired,
};

/**
*  RELAY CREATE CONTAINER
*/
export default createFragmentContainer(ButtonFeedback, {
    viewer: graphql`
      fragment ButtonFeedback_viewer on Viewer {
        id,
        me {
          id
        },
      }
    `,
    venue: graphql`
      fragment ButtonFeedback_venue on Venue {
        id,
        name
      }
    `,
    organizers: graphql`
      fragment ButtonFeedback_organizers on Organizer @relay(plural: true) {
        isAdmin,
        organizer {
          id,
          pseudo
          feedbacks {
            feedbacksList (last: 1000) {
              edges {
                node {
                  author {
                    id
                  }
                }
              }
            }
          }
        }
      }
    `,
  },
);

I18n.fallbacks = true
I18n.translations = translations;
