import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, TouchableOpacity, Image } from 'react-native';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import Text from 'react-native-text';
import { images } from 'sportunity/src/theme'
import { styles } from './styles';
import Status from './StatusView';
import AdvancedSettings from './AdvancedSettingsView'
import {
  graphql,
  createFragmentContainer,
  QueryRenderer,
} from 'react-relay';
import { withNavigation } from 'react-navigation';
class Description extends PureComponent {
  constructor() {
    super();
    this.state = {
      isDescriptionOpen: false,
    }
  }

  openCloseDescription = () => {
    this.state.isDescriptionOpen ?
      this.setState({
        isDescriptionOpen: false,
      })
    :
    this.setState({
      isDescriptionOpen: true,
    })
  }

  render(){

    const { isDescriptionOpen } = this.state;
    const { language, user, status, sportunity, sportunity: { description } } = this.props;

    return(

      <TouchableOpacity style={styles.rowContainer} onPress={this.openCloseDescription}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={[styles.title, {fontSize: 15}]} numberOfLines={1}>
            {I18n.t('descriptionLong')}
          </Text>
          {isDescriptionOpen
          ? <Image style={styles.icon} source={images.down_arrow} />
          : <Image style={[styles.icon]} source={images.right_arrow_blue} />
          }
        </View>

        {
          this.state.isDescriptionOpen ?
            <View style={styles.descContainer}>
                <Text style={styles.desc} numberOfLines={100}>
                  {description}
                </Text>
              <Status
                status={status}
                sportunity={sportunity}
                organizers={sportunity.organizers}
                userId={user && user.id}
                potentialSecondaryOrganizer={this.props.potentialSecondaryOrganizer}
                language={language}/>
              {
                sportunity && sportunity.ageRestriction && (sportunity.sexRestriction !== 'NONE' || sportunity.ageRestriction.from > 0 || sportunity.ageRestriction.to < 100) && 
                  <AdvancedSettings
                    sportunity={sportunity}
                  />
              }
            </View>
          :
            <View style={styles.descContainer}>
              <Text style={styles.desc} numberOfLines={3}>
                {description}
              </Text>
            </View>
        }
      </TouchableOpacity>
    )
  }
}

Description.propTypes = {
  sportunity: PropTypes.object.isRequired,
};

export default  createFragmentContainer(Description, {
  sportunity: graphql`fragment DescriptionView_sportunity on Sportunity{
    description
    ...StatusView_sportunity
    ...AdvancedSettingsView_sportunity
    ageRestriction {
      from,
      to
    }
    organizers{
      isAdmin
      role
      permissions {
          detailsAccess {
            view
            edit
          }
          chatAccess {
            view
            edit
          }
          memberAccess {
            view
            edit
          }
          carPoolingAccess {
            view
            edit
          }
          imageAccess {
            view
            edit
          }
          compositionAccess {
            view
            edit
          }
        }
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
      price {
        cents,
        currency
      }
      organizer{
        id
        pseudo
        sportunityNumber
        feedbacks{
          averageRating
          count
        }
        sports {
          levels {
            EN {
              name
            }
          }
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
        }
        pseudo
        avatar
        followers{
          id
        }
      }
    }
  }`,
});

I18n.fallbacks = true
I18n.translations = translations;
