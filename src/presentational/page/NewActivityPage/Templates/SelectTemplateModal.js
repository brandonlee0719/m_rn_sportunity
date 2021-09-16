import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Modal, Alert, ActivityIndicator, ScrollView } from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';

import style from './style';
import translations from 'sportunity/src/translations.js';
import { colors, images } from 'sportunity/src/theme';

class SelectTemplateModal extends Component {

    constructor() {
        super();
        this.state = {
            isDeletingTemplateId: null
        }
    }

    confirmDeleteATemplate = (template) => {
        this.setState({isDeletingTemplateId: template.id})
        Alert.alert(
            I18n.t('deleteTemplateConfirmTitle'),
            I18n.t('deleteTemplateConfirmText').replace('{0}', template.title),
            [
            { text: I18n.t('yes'), onPress: () => this.props.onDeleteTemplate(template.id) },
            { text: I18n.t('no'), onPress: () => {this.setState({isDeletingTemplateId: null})} },
            ]
        )
    }

    render(){
        const { user, onRequestClose, isModalVisible, onApplyTemplate, onDeleteTemplate } = this.props;

        return(
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={isModalVisible}
            onRequestClose={onRequestClose}
          >
            <View style={{flex :1, flexDirection: 'column'}}>
              <View style={style.header}>
                <TouchableOpacity
                  onPress={onRequestClose}
                  style={style.closeIcon}
                >
                  <Image source={images.down_arrow} />
                </TouchableOpacity>

                <Text style={style.title}>
                  {I18n.t('templateListTitle')}
                </Text>
              </View>
                  
              <ScrollView style={style.modalContainer}>
                <View>
                  {user.sportunityTemplates.map((template, index) => (
                    <TouchableOpacity
                      key={index}
                      style={style.buttonContainer}
                      onPress={() => onApplyTemplate(template)}
                    >
                      <View style={style.itemContainer}>
                        <Text style={style.templateName} key={index}>
                          {template.title}
                        </Text>
                        
                        {this.state.isDeletingTemplateId === template.id
                        ? <ActivityIndicator
                            animating={true}
                            size="small"
                            color={colors.blue}
                          />
                        : <TouchableOpacity onPress={() => this.confirmDeleteATemplate(template)}>
                            <Image
                              style={style.removeIcon}
                              source={images.close_x}
                            />
                          </TouchableOpacity>
                        }
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </Modal>
        )
    }
}

export default createFragmentContainer(SelectTemplateModal, {
  user: graphql`
      fragment SelectTemplateModal_user on User{
          id
          sportunityTemplates {
              id,
              title
              description
              kind
              fees,
              privacy_switch_preference {
                privacy_switch_type,
                switch_privacy_x_days_before
              }
              invited {
                user {
                  ...UserCard_user
                  id,
                  pseudo
                  avatar
                }
                answer
              }
              invited_circles (last: 10) {
                edges {
                  node {
                    id,
                    name,
                    members {
                     id
                    }
                    owner {
                      id
                      pseudo
                      avatar
                    }
                    type
                    memberCount
                  }
                }
              }
              price_for_circle {
                circle {
                  id
                }
                price {
                  cents,
                  currency
                }
                participantByDefault
              }
              notification_preference {
                notification_type,
                send_notification_x_days_before
              }
              participantRange {
                from
                to
              }
              hide_participant_list
              price {
                currency,
                cents,
              },
              sport {
                sport {
                  id,
                  name {
                    EN
                    DE
                    FR
                  }
                  logo
                }
                positions {
                 id
                 EN
                 FR
                 DE
                }
                certificates {
                  id,
                  name {
                    EN
                    FR
                    DE
                  }
                }
                levels {
                  id
                  EN {
                    name
                    skillLevel
                    description
                  }
                  FR {
                    name
                    skillLevel
                    description
                  }
                  DE {
                    name
                    skillLevel
                    description
                  }
                }
              }
              ageRestriction {
                from, to
              } 
              sexRestriction
              address {
                address
                country
                city
                position {
                  lat
                  lng
                }
              }
              organizers {
                organizer {
                  id
                  pseudo
                }
                isAdmin
                role
                price {
                  cents,
                  currency
                },
                secondaryOrganizerType {
                  id
                  name {
                    id
                    FR
                    EN
                    DE 
                    ES
                  }
                }
                customSecondaryOrganizerType
              }
              pendingOrganizers { 
                id
                circles (last: 20) {
                  edges {
                    node {
                      id, 
                      name,
                      memberCount
                      type
                      members {
                        id
                      }
                    }
                  }
                }
                isAdmin
                role
                price {
                  cents,
                  currency
                },
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
              sportunityType {
                id,
                isScoreRelevant
                name {
                  FR,
                  EN
                }
              }
              game_information {
                opponent {
                  organizer {
                    id, 
                    pseudo,
                    avatar
                  }
                  organizerPseudo
                  lookingForAnOpponent
                  invitedOpponents (last: 5) {
                    edges {
                      node {
                        id
                        name
                        memberCount
                      }
                    }
                  }
                  unknownOpponent
                }
              }
          }
      }
  `
})

I18n.fallbacks = true
I18n.translations = translations;
