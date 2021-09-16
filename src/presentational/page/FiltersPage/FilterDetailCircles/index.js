import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import {
  createFragmentContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';
import MultipleChoice from 'react-native-multiple-choice';
import CirclesInvitationModal from '../../NewActivityPage/Invitations/CirclesInvitationModal';

import FiltersListItem from '../FiltersListItem';
import FilterModal from '../FilterModal'
import translations from 'sportunity/src/translations.js';
import styles from './style'
import { buttonStyle } from '../style'
import { images } from 'sportunity/src/theme';

class FilterDetailCircles extends PureComponent {

  state = {
    isOpen: false,
  }

  onSelectCircles = (options) => {
    let userId ;

    this.props.clearCircleFilter()

    options.forEach(option => {
      this.props.addCircleFilter(option.id);
    })

  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })

  render(){
    const { isOpen } = this.state;
    const { circles, selectedCircles, clearCircleFilter, viewer } = this.props;
    let selectedCirclesLabels = selectedCircles && selectedCircles.length > 0 ? selectedCircles.map(selectedCircle => {
      let pseudo = '';
      circles && circles.edges.forEach(circle => {
        if (circle.node.id === selectedCircle) {
          pseudo = circle.node.name +' ' + I18n.t('mySportClubsOf') + ' ' + circle.node.owner.pseudo ;
        }
      })
      return pseudo;
    }) : [];

    return(
      <View>
        {
          circles && circles.edges.length > 0 &&
            <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
                <View style={buttonStyle.headerCol}>
                    <Text style={buttonStyle.headerText}>
                        {I18n.t('mySportClubs')}
                    </Text>
                    <Text style={buttonStyle.select}>
                      {selectedCirclesLabels.length > 0
                        ? selectedCirclesLabels.join(', ')
                        : I18n.t('select')
                      }
                    </Text>
                </View>
                <Image
                    style={buttonStyle.headerIcon}
                    source={images.right_arrow_blue}
                />
            </TouchableOpacity>
        }
        {
          circles && circles.edges.length > 0 && selectedCirclesLabels.length > 0 &&
            <FiltersListItem
              caption={I18n.t('clear')}
              itemStyle={buttonStyle.footerViewStyle}
              captionStyle={buttonStyle.footerCaptionStyle}
              onPress={clearCircleFilter}
            />
        }
        {
            isOpen && circles && circles.edges.length > 0 &&
              <CirclesInvitationModal
                viewer={viewer}
                self={viewer.me}
                show={isOpen}
                onClose={() => this.setState({isOpen: false})}
                addCircleInvitee={this.onSelectCircles}
                invitedCircles={selectedCircles.map(el => ({id: el}))}
                circles={circles.edges.map(edge => edge.node)}
                circlesFromClub={[]}
                circlesCurrentUserIsIn={[]}
                title={I18n.t('mySportClubs')}
            />
        }
              {/*<FilterModal
                isModalVisible={isOpen}
                onRequestClose={() => this.setState({isOpen: false})}
                title={I18n.t('mySportClubs')}
                displayValidationButton={true}>
                    <MultipleChoice
                        options={circles.edges.map(circle => circle.node.name +' ' + I18n.t('mySportClubsOf') + ' ' + circle.node.owner.pseudo)}
                        selectedOptions={selectedCirclesLabels}
                        maxSelectedOptions={10}
                        onSelection={(option)=>this.onSelectCircle(option)}
                        style={{padding: 10}}
                    />
              </FilterModal>*/}
        
        {
            isOpen && circles && circles.edges.length === 0 &&
                <Text>{I18n.t('noCircle')}</Text>
        }
      </View>
    )
  }
}

export default createFragmentContainer(FilterDetailCircles, 
  graphql`fragment FilterDetailCircles_circles on CircleConnection{
    
      edges {
          node {
            id
            name
            type
            memberCount
            owner {
                id
                avatar
                pseudo
            }
          }
        }
    
  }`
)


I18n.fallbacks = true
I18n.translations = translations;
