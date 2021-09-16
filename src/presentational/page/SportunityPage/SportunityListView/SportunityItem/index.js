import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View } from 'react-native';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import RelaySubscription from 'relay-subscriptions';

import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import SportunitySummary from '../../../../../../src/customPropType/SportunitySummary';
import TopContent from './TopContent';
import BottomContent from './BottomContent';

import UpdateSportunitySubscription from './Subscriptions/UpdateSportunitySubscription';

import { styles } from './styles';

import { getActivityColor, getStatus } from '../../util';

class SportunityItem extends PureComponent {

  constructor(props){
    super(props);
    this.sub ;
    this.state = {
      status: 'AVAILABLE_GREY',
      color: 'GREY',
    }
  }

  componentDidMount() {
    this.sub = UpdateSportunitySubscription({sportunityId: this.props.sportunity.id});
  }

  componentWillUnmount() {
    this.sub.dispose()
  }

  componentWillReceiveProps = () => {
    this.getTopContentStatusToShow();
  }

  setStatusAcvity = (status, color) => {
    this.setState({ status, color })
  }

  getTopContentStatusToShow = () => {
    const { userId, sportunity, language } = this.props;
    return getStatus({ userId, sportunity, I18n, language, activityStatus: this.state.status });
  }

  switchToPage = () => {
    const { onPress, sportunity } = this.props;
    const { color, status } = this.state;
    onPress(sportunity, status, getActivityColor(color));
  }

  render() {

    const { sportunity, viewer, user, showTutorial1, showTutorial2, slideThreshold } = this.props;
    const activityColor = getActivityColor(this.state.color);

    return (
      <View style={[styles.container, showTutorial1 && {left: slideThreshold}, showTutorial2 && {right: slideThreshold}]}>
        <View style={styles.content}>

          <TopContent
            onPress={this.switchToPage}
            sportunity={sportunity}
            status={this.getTopContentStatusToShow()}
            actitvityColor={activityColor}
            viewer={viewer}
            user={user}
          />

          <BottomContent
            style={styles.bottom}
            sportunity={sportunity}
            setStatusAcvity={this.setStatusAcvity}
            actitvityColor={activityColor}
            user={user}
          />
        </View>
      </View>
    );
  }
}

export default createFragmentContainer(SportunityItem, {
  sportunity: graphql`
  fragment SportunityItem_sportunity on Sportunity{
    id
    title
    status
    cancel_date
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
    organizers {
      organizer {
        id
        pseudo
        avatar
      }
      isAdmin
      role
      secondaryOrganizerType {
        id
        name {
          FR
          EN
          DE
          ES
        }
      }
      customSecondaryOrganizerType
    }
    ...TopContent_sportunity
    ...BottomContent_sportunity
  }`,
  viewer: graphql`
    fragment SportunityItem_viewer on Viewer {
      ...TopContent_viewer
    }
  `,
  user: graphql`
    fragment SportunityItem_user on User {
      ...TopContent_user
      ...BottomContent_user
    }
  `
})

SportunityItem.propTypes = {
  //  Action to be called when the user press the item, to show more info about it.
  onPress: PropTypes.func.isRequired,
  // The item to be displayed.
  sportunity: SportunitySummary,
};

I18n.fallbacks = true

I18n.translations = translations;
