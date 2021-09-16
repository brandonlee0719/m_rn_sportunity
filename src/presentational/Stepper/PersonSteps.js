import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import StepsListItem from './StepsListItem';
import { images, colors } from '../../theme';

class PersonSteps extends Component {
  render() {
    const { user, tutorialSteps, onSkipStep, navigation, onStepPress } = this.props;
    const stepNumbers = [7, 6, 5, 4, 3, 2, 1];
    return (
      <View>
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={images.privateGroup}
          headingText={I18n.t('stepper_modal_person_join_private_group')}
          description={I18n.t('stepper_modal_person_join_private_group_description_1')}
          onPress={() => onStepPress(() => navigation.navigate('searchModule', { navigation, placeholder: I18n.t('searchCircle'), openOnTab: 'Groups'}))}
          onSkipPress={() => onSkipStep('joinAPrivateCircleStep')}
          isStepComplete={tutorialSteps && tutorialSteps.joinAPrivateCircleStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={images.publicGroup}
          headingText={I18n.t('stepper_modal_person_join_public_group')}
          description={I18n.t('stepper_modal_person_join_public_group_description_1')}
          onPress={() => onStepPress(() => {this.props.openCirclesOnPublicFilter(true); navigation.navigate('circles')})}
          onSkipPress={() => onSkipStep('joinAPublicCircleStep')}
          isStepComplete={tutorialSteps && tutorialSteps.joinAPublicCircleStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={() => <Icon name="check" size={50} color={colors.charcoal} />}
          headingText={I18n.t('stepper_modal_person_availability')}
          description={I18n.t('stepper_modal_person_availability_description_1')}
          onPress={() => onStepPress(() => navigation.navigate('Home'))}
          onSkipPress={() => onSkipStep('giveAvailabilitiesStep')}
          isStepComplete={tutorialSteps && tutorialSteps.giveAvailabilitiesStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={() => <Icon name="user" size={50} color={colors.charcoal} />}
          headingText={I18n.t('stepper_modal_person_profile')}
          description={I18n.t('stepper_modal_person_profile_description_1')}
          onPress={() => onStepPress(() => navigation.navigate('meProfile'))}
          onSkipPress={() => onSkipStep('fulfilProfileStep')}
          isStepComplete={tutorialSteps && tutorialSteps.fulfilProfileStep}
        />
        
        {!user.isSubAccount && 
          <StepsListItem
            stepNumber={stepNumbers.pop()}
            image={() => <Icon name="users" size={50} color={colors.charcoal} />}
            headingText={I18n.t('stepper_modal_person_kids_profile')}
            description={I18n.t('stepper_modal_person_kids_profile_description_1')}
            onPress={() => onStepPress(() => navigation.navigate('myAccount', { screenToOpen: 'SubAccounts' }))}
            onSkipPress={() => onSkipStep('createSubAccountStep')}
            isStepComplete={tutorialSteps && tutorialSteps.createSubAccountStep}
          />
        }
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={images.addGroup}
          headingText={I18n.t('stepper_modal_person_create_group')}
          description={I18n.t('stepper_modal_person_create_group_description_1')}
          onPress={() => onStepPress(() => navigation.navigate('newCircle'))}
          onSkipPress={() => onSkipStep('createCircleStep')}
          isStepComplete={tutorialSteps && tutorialSteps.createCircleStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={() => <Icon name="plus-circle" size={50} color={colors.charcoal} />}
          headingText={I18n.t('stepper_modal_person_organize_activity')}
          description={I18n.t('stepper_modal_person_organize_activity_description_1')}
          onPress={() => onStepPress(() => navigation.navigate('new_activity'))}
          onSkipPress={() => onSkipStep('organizeStep')}
          isStepComplete={tutorialSteps && tutorialSteps.organizeStep}
        />
      </View>
    );
  }
}

export default PersonSteps;

I18n.fallbacks = true;
I18n.translations = translations;
