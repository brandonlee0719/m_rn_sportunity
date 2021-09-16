import React,{ Component } from 'react';
import { View, Image, TouchableOpacity, Platform, Linking } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import {
  graphql,
  createFragmentContainer
} from 'react-relay';
import { withNavigation } from 'react-navigation';

import translations from 'sportunity/src/translations.js';
import icons from '../../../../../src/theme/images';
import { styles } from './style';
import CompositionModal from './CompositionsModal';


class Composition extends Component {
  constructor (props) {
    super(props);
    this.state = {
        displayModal: false
    }
  }

  openModal = () => {
      this.setState({
          displayModal: true
      })
  }

  render = () => {
    const { sportunity, isOrganized, isParticipant } = this.props ; 
    
    return (
      <TouchableOpacity style={styles.container} onPress={this.openModal}>
          {sportunity && sportunity.compositions && sportunity.compositions.length > 0 && 
           <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image style={styles.thumb} source={icons.compositions} />
                </View>
                <Text style={styles.title} numberOfLines={1}>
                    {I18n.t('sportunityCompositions')}
                </Text>
            </View>
          }
          {this.state.displayModal && 
            <CompositionModal
                sportunity={sportunity}
                isOrganized={isOrganized}
                isParticipant={isParticipant}
                displayModal={this.state.displayModal}
                closeModal={() => this.setState({displayModal: false})}
            />
          }
      </TouchableOpacity>
    );
  }
}

export default createFragmentContainer(Composition, {
    sportunity: graphql`fragment Compositions_sportunity on Sportunity{
        id
        compositions {
            id
            name,
            fieldImage,
            users {
                user {
                    id
                    pseudo
                    avatar
                },
                position {
                    xPercentage,
                    yPercentage
                }
            }
        }
    }`,
});

I18n.fallbacks = true
I18n.translations = translations;
