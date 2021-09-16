import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';

import translations from 'sportunity/src/translations.js';
import StepsListItem from './StepsListItem';
import { images, colors } from '../../theme';

const showUnavailableToast = () => {
  Toast.show(I18n.t('featureAvailableOnWeb'));
}

class CompanySteps extends Component {
  render() {
    const { user, tutorialSteps, onSkipStep, navigation, onStepPress } = this.props;
    const stepNumbers = [8, 7, 6, 5, 4, 3, 2, 1];
    return (
      <View>
        {!user.isSubAccount && 
          <StepsListItem
            stepNumber={stepNumbers.pop()}
            image={() => <Icon name="users" size={45} color={colors.charcoal} />}
            headingText={I18n.t('stepper_modal_company_create_teams')}
            description={I18n.t('stepper_modal_company_create_teams_description_1')}
            onPress={() => { onStepPress(() => navigation.navigate('myAccount', { screenToOpen: 'SubAccounts' })) }}
            onSkipPress={() => onSkipStep('createSubAccountStep')}
            isStepComplete={tutorialSteps && tutorialSteps.createSubAccountStep}
          />
        }
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={() => <Icon name="key" size={50} color={colors.charcoal} />}
          headingText={I18n.t('stepper_modal_company_give_access')}
          description={I18n.t('stepper_modal_company_give_access_description_1')}
          onPress={() => { onStepPress(() => navigation.navigate('myAccount', { screenToOpen: 'Access Rights' })) }}
          onSkipPress={() => onSkipStep('shareAccessStep')}
          isStepComplete={tutorialSteps && tutorialSteps.shareAccessStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={images.addGroup}
          headingText={I18n.t('stepper_modal_company_create_groups')}
          description={I18n.t('stepper_modal_company_create_groups_description_1')}
          onPress={() => { onStepPress(() => navigation.navigate('newCircle')) }}
          onSkipPress={() => onSkipStep('createCircleStep')}
          isStepComplete={tutorialSteps && tutorialSteps.createCircleStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={() => <Icon name="plus-circle" size={45} color={colors.charcoal} />}
          headingText={I18n.t('stepper_modal_company_organize_activity')}
          description={I18n.t('stepper_modal_company_organize_activity_description_1')}
          onPress={() => { onStepPress(() => navigation.navigate('new_activity')) }}
          onSkipPress={() => onSkipStep('organizeStep')}
          isStepComplete={tutorialSteps && tutorialSteps.organizeStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={images.statisitics}
          headingText={I18n.t('stepper_modal_company_stats')}
          description={I18n.t('stepper_modal_company_stats_description_1')}
          onPress={() => { onStepPress(() => navigation.navigate('myAccount', { screenToOpen: 'Statistics' })) }}
          onSkipPress={() => onSkipStep('setupStatisticsStep')}
          isStepComplete={tutorialSteps && tutorialSteps.setupStatisticsStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={() => <Icon name="wpforms" size={45} color={colors.charcoal} />}
          headingText={I18n.t('stepper_modal_company_form')}
          description={I18n.t('stepper_modal_company_form_description_1')}
          onPress={showUnavailableToast}
          onSkipPress={() => onSkipStep('createFormStep')}
          isStepComplete={tutorialSteps && tutorialSteps.createFormStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={() => <Icon name="money" size={45} color={colors.charcoal} />}
          headingText={I18n.t('stepper_modal_company_subscription')}
          description={I18n.t('stepper_modal_company_subscription_description_1')}
          onPress={showUnavailableToast}
          onSkipPress={() => onSkipStep('setupMembersSubscriptionStep')}
          isStepComplete={tutorialSteps && tutorialSteps.setupMembersSubscriptionStep}
        />
        
        <StepsListItem
          stepNumber={stepNumbers.pop()}
          image={images.validDocument}
          headingText={I18n.t('stepper_modal_company_documents')}
          description={I18n.t('stepper_modal_company_documents_description_1')}
          onPress={showUnavailableToast}
          onSkipPress={() => onSkipStep('addOfficialDocumentsStep')}
          isStepComplete={tutorialSteps && tutorialSteps.addOfficialDocumentsStep}
        />
      </View>
    );
  }
}

export default CompanySteps;

I18n.fallbacks = true;
I18n.translations = translations;
