import React, { Component } from 'react';
import {
  View,
  Modal,
  ScrollView,
  Image,
  Platform,
  TouchableOpacity,
  Alert
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Text from 'react-native-text';
import Icon from 'react-native-vector-icons/MaterialIcons';
import I18n from 'react-native-i18n';
import isEqual from 'lodash/isEqual';
import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import { connect } from 'react-redux';
import { createFragmentContainer, graphql } from 'react-relay';
import { bindActionCreators } from 'redux';
import Toast from 'react-native-simple-toast';
import ModalPicker from 'react-native-modal-selector';

import { updateStepsCompleted, updateStepsPercentage, updateNextStepToDo, toggleProgressBarDisplay } from '../../action/profileActions';
import {openCirclesOnPublicFilter} from 'sportunity/src/action/publicCirclesFiltersStateActions.js'
import translations from 'sportunity/src/translations.js';
import { images, colors } from '../../theme';
import UpdateUserTutorialStepsMutation from './UpdateUserTutorialStepsMutation';
import UpdateUserProfileTypeMutation from '../page/ProfilePage/UpdateUserProfileTypeMutation';
import ProgressBar from '../ProgressBar';
import ClubSteps from './ClubSteps';
import CompanySteps from './CompanySteps';
import PersonSteps from './PersonSteps';
import styles from './styles';
import * as globals from '../../lib/globalsjs/globals'

const isAndroid = Platform.OS === 'android';

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileType: get(props, 'viewer.me.profileType', ''),
      open: false,
      loading: true
    };
  }

  componentDidMount() {
    let percentage = this.checkAndUpdateSteps();
    if (percentage === 100) {
      setTimeout(this.onClose, 100);
      this.props.toggleProgressBarDisplay(false);
    }

    if (this.props.visible) {
      setTimeout(() => { this.setState({ open: true }); }, 50);
    }

    setTimeout(() => {
      this.setState({ loading: false })
    }, 99);

    this.setState({ profileType: get(this.props, 'viewer.me.profileType') });
    globals.register({ name: 'hideStepperForEver', data: {hideStepperForEver: this.hideStepperForEver}});
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible && this.props.visible) {
      this.setState({ open: true });
    }

    if (!isEqual(this.props.tutorialSteps, prevProps.tutorialSteps)) {
      let percentage = this.checkAndUpdateSteps();
      if (percentage === 100) {
        this.props.toggleProgressBarDisplay(false);
      }
    }

    if (get(this.props, 'viewer.me.profileType') !== get(prevProps, 'viewer.me.profileType')) {
      this.setState({ profileType: this.props.viewer.me.profileType });
    }
  }

  hideStepperForEver = () => {
    Alert.alert(
      I18n.t('stepper_hide'),
      I18n.t('stepper_hide_confirm'),
      [
        { text: I18n.t('no'), style: 'cancel' },
        { text: I18n.t('yes'), onPress: this.setAllStepsToDone },
      ],
    );
  }

  setAllStepsToDone = ()=> {
    let tutorialVar = {
      createFormStep: true,
      setupMembersSubscriptionStep: true,
      fulfilProfileStep: true,
      addOfficialDocumentsStep: true,
      createSubAccountStep: true,
      shareAccessStep: true,
      createCircleStep: true,
      organizeStep: true,
      setupStatisticsStep: true,
      joinAPrivateCircleStep: true,
      joinAPublicCircleStep: true,
      giveAvailabilitiesStep: true,
      bookSportunityStep: true
    };
    UpdateUserTutorialStepsMutation.commit(
      {
        userIDVar: this.props.viewer.me.id,
        tutorialVar,
      },
      {
        onFailure: error => {
          const errors = JSON.parse(error.getError().source);
          console.log(errors);
        },
        onSuccess: response => {
          console.log('step status changed');
          this.props.toggleProgressBarDisplay(false);
        },
      },
    );
  }

  getNewTutorialSteps = () => {
    const { viewer, tutorialSteps } = this.props;
    let newTutorialSteps = cloneDeep(tutorialSteps);

    if (viewer && viewer.me && viewer.me.tutorialSteps) {
      if (this.state.profileType === 'PERSON') {
        if (viewer.me.tutorialSteps.joinAPrivateCircleStep)
          newTutorialSteps['joinAPrivateCircleStep'] = true;
        if (viewer.me.tutorialSteps.joinAPublicCircleStep)
          newTutorialSteps['joinAPublicCircleStep'] = true;
        if (viewer.me.tutorialSteps.giveAvailabilitiesStep)
          newTutorialSteps['giveAvailabilitiesStep'] = true;
        if (viewer.me.tutorialSteps.fulfilProfileStep)
          newTutorialSteps['fulfilProfileStep'] = true;
        if (viewer.me.tutorialSteps.createSubAccountStep || viewer.me.isSubAccount)
          newTutorialSteps['createSubAccountStep'] = true;
        if (viewer.me.tutorialSteps.createCircleStep)
          newTutorialSteps['createCircleStep'] = true;
        if (viewer.me.tutorialSteps.organizeStep)
          newTutorialSteps['organizeStep'] = true;
      } else if (
        this.state.profileType === 'BUSINESS' ||
        this.state.profileType === 'ORGANIZATION' ||
        this.state.profileType === 'SOLETRADER'
      ) {
        if (viewer.me.tutorialSteps.createSubAccountStep || viewer.me.isSubAccount)
          newTutorialSteps['createSubAccountStep'] = true;
        if (viewer.me.tutorialSteps.shareAccessStep)
          newTutorialSteps['shareAccessStep'] = true;
        if (viewer.me.tutorialSteps.createCircleStep)
          newTutorialSteps['createCircleStep'] = true;
        if (viewer.me.tutorialSteps.organizeStep)
          newTutorialSteps['organizeStep'] = true;
        if (viewer.me.tutorialSteps.setupStatisticsStep)
          newTutorialSteps['setupStatisticsStep'] = true;
        if (viewer.me.tutorialSteps.createFormStep)
          newTutorialSteps['createFormStep'] = true;
        if (viewer.me.tutorialSteps.setupMembersSubscriptionStep)
          newTutorialSteps['setupMembersSubscriptionStep'] = true;
        if (viewer.me.tutorialSteps.addOfficialDocumentsStep)
          newTutorialSteps['addOfficialDocumentsStep'] = true;
      }
    }

    return newTutorialSteps;
  }

  checkAndUpdateSteps = () => {
    const { viewer, tutorialSteps } = this.props;
    const newTutorialSteps = this.getNewTutorialSteps();

    if (!isEqual(newTutorialSteps, tutorialSteps)) {
      this.props.updateStepsCompleted(newTutorialSteps);
    }

    if (viewer.me.tutorialSteps && !isEqual(newTutorialSteps, viewer.me.tutorialSteps)) {
      this.updateStepsStatus(newTutorialSteps);
    }

    return this.calculatePercentage(newTutorialSteps, this.state.profileType);
  };

  updateStepsStatus = newTutorialSteps => {
    let tutorialVar = {
      createFormStep: newTutorialSteps['createFormStep'],
      setupMembersSubscriptionStep: newTutorialSteps['setupMembersSubscriptionStep'],
      fulfilProfileStep: newTutorialSteps['fulfilProfileStep'],
      addOfficialDocumentsStep: newTutorialSteps['addOfficialDocumentsStep'],
      createSubAccountStep: newTutorialSteps['createSubAccountStep'],
      shareAccessStep: newTutorialSteps['shareAccessStep'],
      createCircleStep: newTutorialSteps['createCircleStep'],
      organizeStep: newTutorialSteps['organizeStep'],
      setupStatisticsStep: newTutorialSteps['setupStatisticsStep'],
      joinAPrivateCircleStep: newTutorialSteps['joinAPrivateCircleStep'],
      joinAPublicCircleStep: newTutorialSteps['joinAPublicCircleStep'],
      giveAvailabilitiesStep: newTutorialSteps['giveAvailabilitiesStep'],
      bookSportunityStep: newTutorialSteps['bookSportunityStep'],
    };
    UpdateUserTutorialStepsMutation.commit(
      {
        userIDVar: this.props.viewer.me.id,
        tutorialVar,
      },
      {
        onFailure: error => {
          const errors = JSON.parse(error.getError().source);
          console.log(errors);
        },
        onSuccess: response => {
          console.log('step status changed');
        },
      },
    );
  };

  handleSkipStep = step => {
    const { viewer, tutorialSteps } = this.props;
    let newTutorialSteps = cloneDeep(tutorialSteps);
    newTutorialSteps[step] = true;
    this.props.updateStepsCompleted(newTutorialSteps);
    this.updateStepsStatus(newTutorialSteps);
    this.calculatePercentage(newTutorialSteps, this.state.profileType);
  };

  getNextStepToDo = (steps, profileType) => {
    let nextStepToDo = '';
    if (profileType === 'PERSON') {
      nextStepToDo = !steps.joinAPrivateCircleStep ? I18n.t('stepper_modal_person_join_private_group')
      : !steps.joinAPublicCircleStep ? I18n.t('stepper_modal_person_join_public_group')
        : !steps.giveAvailabilitiesStep ? I18n.t('stepper_modal_person_availability')
          : !steps.fulfilProfileStep ? I18n.t('stepper_modal_person_profile')
            : !steps.createSubAccountStep ? I18n.t('stepper_modal_person_kids_profile')
              : !steps.createCircleStep ? I18n.t('stepper_modal_person_create_group')
                : !steps.organizeStep ? I18n.t('stepper_modal_person_organize_activity') : '';
    } else if (
      profileType === 'BUSINESS' ||
      profileType === 'ORGANIZATION' ||
      profileType === 'SOLETRADER'
    ) {
      nextStepToDo = !steps.createSubAccountStep ?
        (profileType === "BUSINESS"
          ? I18n.t('stepper_modal_company_create_teams')
          : I18n.t('stepper_modal_club_create_teams'))
        : !steps.shareAccessStep ?
          (profileType === "BUSINESS"
            ? I18n.t('stepper_modal_company_give_access')
            : I18n.t('stepper_modal_club_give_access'))
          : !steps.createCircleStep ?
            (profileType === "BUSINESS"
              ? I18n.t('stepper_modal_company_create_group')
              : I18n.t('stepper_modal_club_create_group'))
            : !steps.organizeStep ?
              (profileType === "BUSINESS"
                ? I18n.t('stepper_modal_company_organize_activity')
                : I18n.t('stepper_modal_club_organize_activity'))
              : !steps.setupStatisticsStep ?
                (profileType === "BUSINESS"
                  ? I18n.t('stepper_modal_company_stats')
                  : I18n.t('stepper_modal_club_stats'))
                : !steps.createFormStep ?
                  (profileType === "BUSINESS"
                    ? I18n.t('stepper_modal_company_form')
                    : I18n.t('stepper_modal_club_form'))
                  : !steps.setupMembersSubscriptionStep ?
                    (profileType === "BUSINESS"
                      ? I18n.t('stepper_modal_company_subscription')
                      : I18n.t('stepper_modal_club_subscription'))
                    : !steps.addOfficialDocumentsStep ?
                      (profileType === "BUSINESS"
                        ? I18n.t('stepper_modal_company_documents')
                        : I18n.t('stepper_modal_club_documents'))
                      : I18n.t('stepper_modal_completed');
    }

    return nextStepToDo;
  }

  calculatePercentage = (steps, profileType) => {
    let count = 0;
    let percentage = 0;
    const { isSubAccount } = this.props.viewer.me;

    if (profileType === 'PERSON') {
      count =
        (steps.joinAPrivateCircleStep & 1) +
        (steps.joinAPublicCircleStep & 1) +
        (steps.giveAvailabilitiesStep & 1) +
        (steps.fulfilProfileStep & 1) +
        (isSubAccount ? 0 : steps.createSubAccountStep & 1) +
        (steps.createCircleStep & 1) +
        (steps.organizeStep & 1);
      percentage =  Math.round(count * (isSubAccount ? (100/6) : (100/7)));

    } 
    else if (profileType === 'BUSINESS' || profileType === 'ORGANIZATION' || profileType === 'SOLETRADER') {
      count =
        (isSubAccount ? 0 : steps.createSubAccountStep & 1) +
        (steps.shareAccessStep & 1) +
        (steps.createCircleStep & 1) +
        (steps.organizeStep & 1) +
        (steps.setupStatisticsStep & 1) +
        (steps.createFormStep & 1) +
        (steps.setupMembersSubscriptionStep & 1) +
        (steps.addOfficialDocumentsStep & 1);
      percentage = Math.round(count * (isSubAccount ? (100/7) : (100/8)));
    }

    this.props.updateStepsPercentage(percentage);
    this.props.updateNextStepToDo(this.getNextStepToDo(steps, profileType));

    return percentage;
  };

  handleProfileTypeChange = (profileType) => {
    if (profileType === '' || profileType === null || profileType === undefined) {
      return;
    }

    this.setState({ profileType });

    UpdateUserProfileTypeMutation.commit(
      {
        userIDVar: this.props.viewer.me.id,
        profileTypeVar: profileType,
      },
      {
        onFailure: error => {
          Toast.show(I18n.t('updateFailed'));
          this.setState({
            profileType: this.props.viewer.me.profileType,
          });
        },
        onSuccess: response => {
          Toast.show(I18n.t('updateSuccess'));
          this.clearSteps();
          this.checkAndUpdateSteps();
        },
      },
    );
  };

  clearSteps = () => {
    let clearTutorialSteps = {
      createFormStep: false,
      setupMembersSubscriptionStep: false,
      fulfilProfileStep: false,
      addOfficialDocumentsStep: false,
      createSubAccountStep: false,
      shareAccessStep: false,
      createCircleStep: false,
      organizeStep: false,
      setupStatisticsStep: false,
      joinAPrivateCircleStep: false,
      joinAPublicCircleStep: false,
      giveAvailabilitiesStep: false,
      bookSportunityStep: false,
    };
    this.updateStepsStatus(clearTutorialSteps);
    this.props.updateStepsCompleted(clearTutorialSteps);
  };

  onClose = () => {
    this.setState({ open: false });
    this.props.onClose();
  };

  handleStepPress = (callback) => {
    this.onClose();
    callback();
  }

  getProfileTypeText = (profileType) => {
    switch (profileType) {
      case 'PERSON':
        return I18n.t('info_access_rights_user_type_person');
      case 'BUSINESS':
        return I18n.t('info_access_rights_user_type_business');
      case 'ORGANIZATION':
        return I18n.t('info_access_rights_user_type_organization');
      case 'SOLETRADER':
        return I18n.t('info_access_rights_user_type_soletrader');
    }
  }

  render() {
    const {
      stepsPercentage,
      tutorialSteps,
      viewer: { me },
      navigation,
    } = this.props;

    const isProfileTypePickerDisabled = me.mangoId || (me.subAccounts && me.subAccounts.length > 0) || me.isSubAccount || stepsPercentage > 0;

    if (this.state.loading) {
      return null;
    }

    return (
      <Modal transparent={false} visible={this.state.open} onRequestClose={this.onClose}>
        <ScrollView contentContainerStyle={{ backgroundColor: colors.silver }}>
          <View style={[styles.container, isAndroid ? {} : { marginTop: 30 }]}>
            <TouchableOpacity onPress={this.onClose} style={styles.closeIcon}>
              <Icon name="close" color="black" size={20}/>
            </TouchableOpacity>

            <View style={styles.heading}>
              <Image source={images.sportunity} style={styles.logo}/>
              <Text style={styles.headingText}>{I18n.t('stepper_heading')}</Text>
            </View>
            <Text style={styles.configureText}>
              {I18n.t('stepper_configure_account')}
            </Text>

            <ProgressBar percentage={stepsPercentage} />

            {!isProfileTypePickerDisabled && 
              <Text style={styles.profileTypeSelectText}>{I18n.t('stepper_modal_change_profile')}</Text>
            }

            {isProfileTypePickerDisabled
            ? <Text style={styles.profileTypeDisabled}>{this.getProfileTypeText(this.state.profileType)}</Text>
            : <View style={{marginTop: 15}}>
                <ModalPicker
                  data={[
                    {key: "", label: I18n.t('register_user_type_none')}, 
                    {key: "PERSON", label: I18n.t('info_access_rights_user_type_person')}, 
                    {key: "BUSINESS", label: I18n.t('info_access_rights_user_type_business')},
                    {key: "ORGANIZATION", label: I18n.t('info_access_rights_user_type_organization')},
                    {key: "SOLETRADER", label: I18n.t('info_access_rights_user_type_soletrader')}
                  ]}
                  initValue={this.state.profileType}
                  onChange={value => this.handleProfileTypeChange(value.key)}
                  cancelText={I18n.t('cancel')}
                />
                {isAndroid && <View style={styles.pickerBorder} />}
              </View>
            }


            {(this.state.profileType === 'ORGANIZATION' ||
              this.state.profileType === 'SOLETRADER') && (
              <ClubSteps
                navigation={navigation}
                user={me}
                tutorialSteps={tutorialSteps}
                onSkipStep={this.handleSkipStep}
                onClose={this.onClose}
                onStepPress={this.handleStepPress}
              />
            )}
            {this.state.profileType === 'PERSON' && (
              <PersonSteps
                navigation={navigation}
                user={me}
                tutorialSteps={tutorialSteps}
                onSkipStep={this.handleSkipStep}
                onClose={this.onClose}
                onStepPress={this.handleStepPress}
                openCirclesOnPublicFilter={this.props.openCirclesOnPublicFilter}
              />
            )}
            {this.state.profileType === 'BUSINESS' && (
              <CompanySteps
                navigation={navigation}
                user={me}
                tutorialSteps={tutorialSteps}
                onSkipStep={this.handleSkipStep}
                onClose={this.onClose}
                onStepPress={this.handleStepPress}
              />
            )}
          </View>
        </ScrollView>
      </Modal>
    );
  }
}

const dispatchToProps = dispatch => ({
  updateStepsCompleted: bindActionCreators(updateStepsCompleted, dispatch),
  updateStepsPercentage: bindActionCreators(updateStepsPercentage, dispatch),
  updateNextStepToDo: bindActionCreators(updateNextStepToDo, dispatch),
  toggleProgressBarDisplay: bindActionCreators(toggleProgressBarDisplay, dispatch),
  openCirclesOnPublicFilter: bindActionCreators(openCirclesOnPublicFilter, dispatch)
});

const stateToProps = state => ({
  tutorialSteps: state.sportunityProfile.tutorialSteps,
  stepsPercentage: state.sportunityProfile.stepsPercentage,
  nextStepToDo: state.sportunityProfile.nextStepToDo,
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps,
)(Stepper);

export default createFragmentContainer(withNavigation(ReduxContainer), {
  viewer: graphql`
    fragment Stepper_viewer on Viewer {
      id
      me {
        id
        profileType
        mangoId
        pseudo
        tutorialSteps {
          createFormStep
          setupMembersSubscriptionStep
          fulfilProfileStep
          addOfficialDocumentsStep
          createSubAccountStep
          shareAccessStep
          createCircleStep
          organizeStep
          setupStatisticsStep
          joinAPrivateCircleStep
          joinAPublicCircleStep
          giveAvailabilitiesStep
          bookSportunityStep
        }
        subAccounts {
          id
        }
        isSubAccount
      }
    }
  `,
});

I18n.fallbacks = true;
I18n.translations = translations;
