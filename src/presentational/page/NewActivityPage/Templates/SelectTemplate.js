import React, {Component} from 'react';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import { View, Image, TouchableOpacity } from 'react-native';
import Text from 'react-native-text';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import I18n from 'react-native-i18n';
import Toast from 'react-native-simple-toast';

import RelayStore from '../../../../RelayStore';
import icons from 'sportunity/src/theme/images';
import translations from 'sportunity/src/translations.js';
import SelectTemplateModal from './SelectTemplateModal';
import DeleteSportunityTemplateMutation from './DeleteSportunityTemplateMutation';
import style from './style';


import {
    resetAllFields, 
    updateTitle,
    updateDescription,
    updateSport,
    updateNewActivityDate,
    updateNewActivityEndDate,
    updatePlace,
    updateAddress,
    updateMinimumNumber,
    updateMaximumNumber,
    addUserAsParticipant,
    updatePrivateActivity,
    updatePricePerParticipant,
    updateInvitees,
    newInvitedCircle,
    newInvitedCircleAndPrice, 
    allowUpdatingPrice,
    updateSexRestriction, 
    updateAgeRestriction,
    updateFreeSwitch,
    updateHideParticipantsSwitch,
    updateNotificationPreferenceMode,
    updateAutoNotificationTime,
    updateAutoSwitchPrivacy,
    updateTimeAutoSwitchPrivacy,
    addCoOrganizer,
    resetCoOrganizers,
    updateSelectedTemplate
} from 'sportunity/src/action/newActivityActions';
import FormListItem from '../../../UI/FormListItem';

class SelectTemplate extends Component {
  constructor() {
    super();
    this.state = {
        isSelectTemplateModalVisible: false
    }
  }

  openSelectTemplateListModal = () => {
      this.setState({
          isSelectTemplateModalVisible: true
      })
  }

  closeSelectTemplateListModal = () => {
    this.setState({
        isSelectTemplateModalVisible: false
    })
  }

  _handleDeleteTemplate = (templateId) => {
    let params = {
      sportunityTemplateId: templateId
    }
    
    DeleteSportunityTemplateMutation.commit(params,
      (response) => {
        Toast.show(I18n.t('updateTemplateSuccess'));
      },
      (transaction) => {
          console.log('error: ', transaction, transaction.getError(), transaction.getError());
          Toast.show(I18n.t('sportunityAlertnewOpponentFailed'))
      }
    );
  }

  _handleApplyTemplate = (template) => {
    const {
        resetAllFields,
        updateTitle,
        updateDescription,
        updateSport,
        updateNewActivityDate,
        updateNewActivityEndDate,
        // updatePlace,
        updateAddress,
        updateMinimumNumber,
        updateMaximumNumber,
        addUserAsParticipant,
        updatePrivateActivity,
        updatePricePerParticipant,
        updateInvitees,
        newInvitedCircle,
        newInvitedCircleAndPrice, 
        allowUpdatingPrice,
        updateSexRestriction, 
        updateAgeRestriction,
        updateFreeSwitch,
        updateHideParticipantsSwitch,
        updateNotificationPreferenceMode,
        updateAutoNotificationTime,
        updateAutoSwitchPrivacy,
        updateTimeAutoSwitchPrivacy,
        addCoOrganizer,
        resetCoOrganizers,
        updateSelectedTemplate,
        language,
      } = this.props;
  
      //
      // Set initial values (update s)
      //
      resetAllFields() ;

      updateSelectedTemplate(template)

      updateTitle(template.title);
  
      updateDescription(template.description);
  
      updateSport(
        template.sport.sport.name.EN,
        this.getSportLevels(template),
        this.getSportPositions(template),
        this.getSportCertificates(template),
        {
          sport: template.sport.sport.id,
          levels: this.getSportLevelIds(template),
          positions: this.getSportPositionIds(template),
          certificates: this.getSportCertificateIds(template),
        },
      );
  
      updateAddress({
        address: template.address.address,
        country: template.address.country,
        city: template.address.city,
        zip: template.address.zip,
      });
  
      updateMinimumNumber(
        template.participantRange.from,
        0,
        template.price ? template.price.cents : 0,
        template.participantRange.to,
        template.organizers[0].price && Math.abs(template.organizers[0].price.cents) || 0,
        template.fees,
      );
  
      updateMaximumNumber(
        template.participantRange.to,
        0,
        template.price ? template.price.cents : 0,
        template.participantRange.from,
        template.organizers[0].price && Math.abs(template.organizers[0].price.cents) || 0,
        template.fees,
      );
  
      updateSexRestriction(template.sexRestriction);
      
      updateAgeRestriction({
        from: template.ageRestriction ? template.ageRestriction.from : 0, 
        to: template.ageRestriction ? template.ageRestriction.to : 100
      })
  
      updatePrivateActivity(this.checkIfSportunityIsPrivate(template));
  
      if (template.notification_preference && template.notification_preference.notification_type) {
        updateNotificationPreferenceMode(template.notification_preference.notification_type);
        if (template.notification_preference.notification_type === "Automatically" && template.notification_preference.send_notification_x_days_before)
          updateAutoNotificationTime(template.notification_preference.send_notification_x_days_before);
      }
  
      if (template.privacy_switch_preference && template.privacy_switch_preference.privacy_switch_type) {
        updateAutoSwitchPrivacy(template.privacy_switch_preference.privacy_switch_type === "Automatically");
        if (template.privacy_switch_preference.privacy_switch_type === "Automatically" && template.privacy_switch_preference.switch_privacy_x_days_before)
          updateTimeAutoSwitchPrivacy(template.privacy_switch_preference.switch_privacy_x_days_before);
      }
  
      if (template.price && template.price.cents > 0) 
        updateFreeSwitch(false);
      else 
        updateFreeSwitch(true);
  
      updatePricePerParticipant(
        template.price ? template.price.cents / 100 : 0,
        0,
        template.participantRange.from,
        template.participantRange.to,
        template.organizers[0].price && Math.abs(template.organizers[0].price.cents) || 0,
        template.fees,
      );
  
      updateInvitees(this.getInvitees(template));
  
      if (template.invited_circles && template.invited_circles.edges && template.invited_circles.edges.length > 0) {
        template.invited_circles.edges.forEach(edge => newInvitedCircle(edge.node))
      }
      
      if (template.price_for_circle && template.invited_circles && template.invited_circles.edges && template.invited_circles.edges.length > 0) {
        template.invited_circles.edges.forEach(edge => {
          let circlePriceIndex = template.price_for_circle.findIndex(item => item.circle.id === edge.node.id) ;
          if (circlePriceIndex >= 0) 
            newInvitedCircleAndPrice({
                circle: edge.node,
                price: {
                  cents: template.price_for_circle[circlePriceIndex].price.cents / 100,
                  currency: template.price_for_circle[circlePriceIndex].price.currency
                },
                participantByDefault: template.price_for_circle[circlePriceIndex].participantByDefault
            });
          else 
            newInvitedCircleAndPrice({
                circle: edge.node, 
                price: {
                  cents: template.price ? template.price.cents / 100 : 0 ,
                  currency: template.price.currency,
                },
                participantByDefault: false
              })
          }) 
      }
      
      resetCoOrganizers();
  
      if (template.organizers && template.organizers.length > 1) {        
        template.organizers.filter(organizer => !organizer.isAdmin).forEach(organizer => {
          addCoOrganizer({
              organizer: organizer.organizer,
              price: {
                cents: organizer.price.cents / 100,
                currency: organizer.price.currency
              },
              secondaryOrganizerType: organizer.secondaryOrganizerType 
                ? {key: organizer.secondaryOrganizerType.id, label: organizer.secondaryOrganizerType.name[language.toUpperCase()]}
                : null,
              customSecondaryOrganizerType: organizer.customSecondaryOrganizerType,
            })
        })
      }
  
      if (template.pendingOrganizers && template.pendingOrganizers.length > 0) {
        template.pendingOrganizers.forEach(org => {
          addCoOrganizer({
            id: org.id, 
            circles: org.circles.edges.map(edge => edge.node),
            price: {cents: org.price.cents / 100, currency: org.price.currency},
            secondaryOrganizerType: org.secondaryOrganizerType 
              ? {key: org.secondaryOrganizerType.id, label: org.secondaryOrganizerType.name[language.toUpperCase()]}
              : null,
            customSecondaryOrganizerType: org.customSecondaryOrganizerType,
          })
        })
      }
  
      updateHideParticipantsSwitch(template.hide_participant_list)
  
      // allow price update
      allowUpdatingPrice(true);

      this.closeSelectTemplateListModal()
    }
  
    //
    // Helper methods
    //
  
    getInvitees(template) {
        let invitedList = template.invited.length > 0 
        ? template.invited
            .filter(invited => {
                let isInACircle = false ;
                if (template.invited_circles && template.invited_circles.edges && template.invited_circles.edges.length > 0) {
                template.invited_circles.edges.forEach(edge => {
                    if (edge.node.members && edge.node.members.length > 0) {
                    if (edge.node.members.findIndex(member => member.id === invited.user.id) >= 0)
                        isInACircle = true 
                    }
                })
                }
    
                return !isInACircle ;
            })
            .map(invited => invited.user)
        : [] ;
    
    
        return invitedList ;
    }
  
    getSportLevels(template) {
      const result = [];
      template.sport.levels.forEach(level => result.push(level.EN.name));
      return result;
    }
  
    getSportPositions(template) {
      const result = [];
      template.sport.positions.forEach(position => result.push(position.EN));
      return result;
    }
  
    getSportCertificates(template) {
      const result = [];
      template.sport.certificates.forEach(certificate => result.push(certificate.name.EN));
      return result;
    }
  
    getSportLevelIds(template) {
      const result = [];
      template.sport.levels.forEach(level => result.push(level.id));
      return result;
    }
  
    getSportPositionIds(template) {
      const result = [];
      template.sport.positions.forEach(position => result.push(position.id));
      return result;
    }
  
    getSportCertificateIds(template) {
      const result = [];
      template.sport.certificates.forEach(certificate => result.push(certificate.id));
      return result;
    }
  
    checkIfSportunityIsPrivate(template) {
      if(template.kind === 'PRIVATE'){
        return true;
      } else if (template.kind === 'PUBLIC'){
        return false;
      }
    }

  render() {
    const { 
      viewer, 
      updateSelectedTemplate, 
      selectedTemplate, 
    } = this.props; 
  
    if (viewer.me && viewer.me.sportunityTemplates && viewer.me.sportunityTemplates.length > 0)
        return(
          <View>
            <FormListItem
              onPress={this.openSelectTemplateListModal}
              title={I18n.t('templateList')}
              subtitle={() => (
                <View>
                  {selectedTemplate && 
                    <Text style={style.select}>
                      {selectedTemplate.title}
                    </Text>
                  }
                </View>
              )}
              rightIcon={icons.right_arrow_blue}
            />
            {this.state.isSelectTemplateModalVisible && 
              <SelectTemplateModal 
                  user={viewer.me}
                  onRequestClose={this.closeSelectTemplateListModal}
                  onDeleteTemplate={this._handleDeleteTemplate}
                  isModalVisible={this.state.isSelectTemplateModalVisible}
                  onApplyTemplate={this._handleApplyTemplate}
              />
            }
          </View>
        )
    else
        return null;
  }
}

const stateToProps = (state) => ({
  selectedTemplate: state.sportunityNewActivity.selectedTemplate,
  language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
  updateSelectedTemplate: bindActionCreators(updateSelectedTemplate, dispatch),
  updateTitle: bindActionCreators(updateTitle, dispatch ),
  updateDescription: bindActionCreators(updateDescription, dispatch ),
  updateSport: bindActionCreators(updateSport, dispatch),
  updateNewActivityEndDate: bindActionCreators(updateNewActivityEndDate, dispatch),
  updateNewActivityDate: bindActionCreators(updateNewActivityDate, dispatch),
  updatePlace: bindActionCreators(updatePlace, dispatch),
  updateAddress: bindActionCreators(updateAddress, dispatch),
  updateMinimumNumber: bindActionCreators(updateMinimumNumber, dispatch),
  updateMaximumNumber: bindActionCreators(updateMaximumNumber, dispatch),
  addUserAsParticipant: bindActionCreators(addUserAsParticipant, dispatch),
  updatePrivateActivity: bindActionCreators(updatePrivateActivity, dispatch),
  updatePricePerParticipant: bindActionCreators(updatePricePerParticipant, dispatch),
  updateInvitees: bindActionCreators(updateInvitees, dispatch),
  newInvitedCircle: bindActionCreators(newInvitedCircle, dispatch),
  newInvitedCircleAndPrice: bindActionCreators(newInvitedCircleAndPrice, dispatch), 
  allowUpdatingPrice: bindActionCreators(allowUpdatingPrice, dispatch),
  updateSexRestriction: bindActionCreators(updateSexRestriction, dispatch),
  updateAgeRestriction: bindActionCreators(updateAgeRestriction, dispatch),
  updateFreeSwitch: bindActionCreators(updateFreeSwitch, dispatch),
  updateHideParticipantsSwitch: bindActionCreators(updateHideParticipantsSwitch, dispatch),
  updateNotificationPreferenceMode: bindActionCreators(updateNotificationPreferenceMode, dispatch),
  updateAutoNotificationTime: bindActionCreators(updateAutoNotificationTime, dispatch),
  updateAutoSwitchPrivacy: bindActionCreators(updateAutoSwitchPrivacy, dispatch),
  updateTimeAutoSwitchPrivacy: bindActionCreators(updateTimeAutoSwitchPrivacy, dispatch),
  addCoOrganizer: bindActionCreators(addCoOrganizer, dispatch),
  resetCoOrganizers: bindActionCreators(resetCoOrganizers, dispatch),
  resetAllFields: bindActionCreators(resetAllFields, dispatch),
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(SelectTemplate);

export default createFragmentContainer(ReduxContainer, {
  viewer: graphql`
  fragment SelectTemplate_viewer on Viewer {
      id,
      me {
        id
        ...SelectTemplateModal_user
        sportunityTemplates {
          id,
        }
      }
    }
  `,
});

I18n.fallbacks = true
I18n.translations = translations;
