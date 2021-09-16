import React, { Component } from 'react';
import { ScrollView, View, Switch } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import cloneDeep from 'lodash/cloneDeep';

import translations from 'sportunity/src/translations.js';
import NewCircleMutation from './NewCircleMutation';
import { dispatchToActions } from '../../../action/utils';
import { updateNewCirclePublic, updateNewCircleAccessibleWithLink, updateNewCircleShared } from '../../../action/newCircleActions';
import { updateStepsCompleted } from '../../../action/profileActions';
import NewCircleNavBar from './NewCircleNavBar';
import Heading from '../../UI/Heading';
import styles from './styles';
import { colors } from 'sportunity/src/theme';

import * as globals from '../../../lib/globalsjs/globals';

class NewCircleStep4 extends Component {
  state = {
    loading: false,
  }

  createNewCircle = ({
    navigation,
    name,
    description,
    address,
    sport,
    circleType,
    isCirclePublic,
    isCircleShared,
    isCircleAccessibleWithLink,
    circlesInPrivateMode,
  }) =>  {

    return new Promise((resolve, reject) => {
      const circleTypes = ['ADULTS', 'CHILDREN', 'TEAMS', 'CLUBS', 'COMPANIES'];
    
      NewCircleMutation.commit({
        circle: {
          name,
          address,
          description,
          mode: isCirclePublic ? 'PUBLIC' : 'PRIVATE',
          type: circleTypes[circleType],
          isCircleUsableByMembers: isCircleShared,
          isCircleAccessibleFromUrl: isCircleAccessibleWithLink,
          sport: sport 
          ? {sport: sport.sportID, levels: sport.level}
          : null,
          circlesInPrivateMode: isCirclePublic ? [] : circlesInPrivateMode.map(circle => circle.id.toString()),
        }},
        (response) => {
          globals.object('refetchCircles').call('refetchCircles')
          setTimeout(() => {
            navigation.navigate('NewCircleSuccess', { circleId: response.circleId });
          }, 100); 
          this.updateTutorialSteps();
          resolve(response)
        },
        error => {
          reject(error);
        },
      );
    });
  }

  updatePublicSwitch = (e) => {
    const {
      updateNewCirclePublic,
      updateNewCircleAccessibleWithLink,
      isCircleAccessibleWithLink,
    } = this.props;
    updateNewCirclePublic(e);
    updateNewCircleAccessibleWithLink(e ? true : isCircleAccessibleWithLink);
  }

  updateAccessibleWithLinkSwitch = e => {
    this.props.updateNewCircleAccessibleWithLink(e);
  }

  updateSharedSwitch = e => {
    this.props.updateNewCircleShared(e);
  }

  handleRightButtonPress = async () => {
    const { isCirclePublic, navigation } = this.props;
    if (isCirclePublic) {
      try {
        this.setState({ loading: true });
        await this.createNewCircle(this.props);
        Toast.show(I18n.t('newCircleSuccess'));
      } catch (error) {
        Toast.show(I18n.t('newCircleFailed'));
      } finally {
        this.setState({ loading: false });
      }
    } else {
      navigation.navigate('NewCircleStep5', { createNewCircle: this.createNewCircle })
    }
  }

  updateTutorialSteps = () => {
    const { tutorialSteps, updateStepsCompleted, isCirclePublic } = this.props;
    const newTutorialSteps = cloneDeep(tutorialSteps);

    if (isCirclePublic) {
      newTutorialSteps['joinAPublicCircleStep'] = true;
    } else {
      newTutorialSteps['joinAPrivateCircleStep'] = true;
    }

    newTutorialSteps['createCircleStep'] = true;

    updateStepsCompleted(newTutorialSteps);
  }

  render() {
    const {
      isCirclePublic,
      isCircleAccessibleWithLink,
      isCircleShared,
    } = this.props;

    return (
      <NewCircleNavBar
        step={4}
        maxSteps={isCirclePublic ? 4 : 5}
        displayNextButton
        rightButtonText={isCirclePublic ? I18n.t('finish') : I18n.t('next')}
        onNextButtonPress={this.handleRightButtonPress}
        loading={this.state.loading}
      >
        <ScrollView>
          <Heading text={I18n.t('privacy')} />

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>
              <Text style={{fontWeight: 'bold'}}>
                {(isCirclePublic ? I18n.t('circleOptionPublic') : I18n.t('circleOptionPrivate'))+ ': '}
              </Text>
              {isCirclePublic ? I18n.t('circleOptionPublicExplaination') : I18n.t('circleOptionPrivateExplaination')}
            </Text>
            <Switch
              style={styles.switchButton}
              onTintColor={colors.skyBlue}
              value={isCirclePublic}
              onValueChange={this.updatePublicSwitch}
            />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>
              <Text style={{fontWeight: 'bold'}}>
                {(isCircleAccessibleWithLink ? I18n.t('circleOptionAccessibleWithLink') : I18n.t('circleOptionNotAccessibleWithLink')) + ': '}
              </Text>
              {isCircleAccessibleWithLink ? I18n.t('circleOptionAccessibleWithLinkExplaination') : I18n.t('circleOptionNotAccessibleWithLinkExplaination')}
            </Text>
              <Switch
                style={styles.switchButton}
                onTintColor={colors.skyBlue}
                value={isCircleAccessibleWithLink}
                disabled={isCirclePublic}
                onValueChange={this.updateAccessibleWithLinkSwitch}
              />
          </View>

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>
              <Text style={{fontWeight: 'bold'}}>
                {(isCircleShared ? I18n.t('circleOptionUsableByMembers') : I18n.t('circleOptionNotUsableByMembers')) + ': '}
              </Text>
              {isCircleShared ? I18n.t('circleOptionUsableByMembersExplaination') : I18n.t('circleOptionNotUsableByMembersExplaination')}
            </Text>
            <Switch
              style={styles.switchButton}
              onTintColor={colors.skyBlue}
              value={isCircleShared}
              onValueChange={this.updateSharedSwitch}
            />
          </View>
        </ScrollView>
      </NewCircleNavBar>
    );
  }
}

const stateToProps = (state) => ({
  name: state.sportunityNewCircle.name,
  description: state.sportunityNewCircle.description,
  address: state.sportunityNewCircle.address,
  circleType: state.sportunityNewCircle.circleType,
  sport: state.sportunityNewCircle.sport,
  circleType: state.sportunityNewCircle.circleType,
  isCirclePublic: state.sportunityNewCircle.isCirclePublic,
  isCircleAccessibleWithLink: state.sportunityNewCircle.isCircleAccessibleWithLink,
  isCircleShared: state.sportunityNewCircle.isCircleShared,
  circlesInPrivateMode: state.sportunityNewCircle.circlesInPrivateMode,
  tutorialSteps: state.sportunityProfile.tutorialSteps,
});

const dispatchToProps = dispatchToActions({
  updateNewCirclePublic,
  updateNewCircleAccessibleWithLink,
  updateNewCircleShared,
  updateStepsCompleted,
})

const NewCircleStep4Container = connect(
  stateToProps,
  dispatchToProps,
)(NewCircleStep4);

export default NewCircleStep4Container;

I18n.fallbacks = true
I18n.translations = translations;