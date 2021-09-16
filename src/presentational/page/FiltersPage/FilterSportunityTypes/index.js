
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
import cloneDeep from 'lodash/cloneDeep'

import FiltersListItem from '../FiltersListItem';
import FilterModal from '../FilterModal'
import translations from 'sportunity/src/translations.js';
import styles from './style'
import { buttonStyle } from '../style'
import { images } from 'sportunity/src/theme';

class FilterSportunityTypes extends PureComponent {

  state = {
    isOpen: false,
  }

  onSelectType = (option) => {
    let newSportunityTypeFilter = cloneDeep(this.props.selectedSportunityTypes) ; 
    
    let selectSportunityTypeId ;
    
    this.props.viewer && this.props.viewer.sportunityTypes && 
        this.props.viewer.sportunityTypes.forEach(sportunityType => {
            if (sportunityType.name[this.props.language.toUpperCase()] === option) {
                selectSportunityTypeId = sportunityType.id;
            }
        })

    if (selectSportunityTypeId) {
      if (newSportunityTypeFilter.indexOf(selectSportunityTypeId) >= 0)
        newSportunityTypeFilter = newSportunityTypeFilter.filter(item => item !== selectSportunityTypeId);
      else
        newSportunityTypeFilter.push(selectSportunityTypeId);
    }
    else 
      newSportunityTypeFilter = []

    if (newSportunityTypeFilter && newSportunityTypeFilter.length === 0)
      this.props.changeSportunityTypesFilter([])

    this.props.changeSportunityTypesFilter(newSportunityTypeFilter)
  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })

  render(){
    const { isOpen } = this.state;
    const { viewer:{sportunityTypes}, selectedSportunityTypes } = this.props;
    let selectedSportunityTypesLabels = selectedSportunityTypes && selectedSportunityTypes.length > 0 
        ? selectedSportunityTypes.map(selectedSportunityType => {
            let pseudo = '';
            sportunityTypes.forEach(sportunityType => {
                if (sportunityType.id === selectedSportunityType) {
                pseudo = sportunityType.name[this.props.language.toUpperCase()];
                }
            })
            return pseudo;
            }) 
        : [];

    return(
      <View>
        <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
            <View style={buttonStyle.headerCol}>
                <Text style={buttonStyle.headerText}>
                    {I18n.t('filterSportunityTypes')}
                </Text>
                <Text style={buttonStyle.select}>
                    {selectedSportunityTypes && selectedSportunityTypes.length > 0
                      ? selectedSportunityTypesLabels.join(', ')
                      : I18n.t('select')
                    }
                </Text>
            </View>
            <Image
                style={buttonStyle.headerIcon}
                source={images.right_arrow_blue}
            />
        </TouchableOpacity>
        {
            sportunityTypes && sportunityTypes.length > 0 && selectedSportunityTypes && selectedSportunityTypes.length > 0 &&
            <FiltersListItem
              caption={I18n.t('clear')}
              itemStyle={buttonStyle.footerViewStyle}
              captionStyle={buttonStyle.footerCaptionStyle}
              onPress={() => this.onSelectType()}
            />
        }
        {
            isOpen && sportunityTypes && sportunityTypes.length > 0 &&
              <FilterModal
                isModalVisible={isOpen}
                onRequestClose={() => this.setState({isOpen: false})}
                title={I18n.t('filterSportunityTypes')}
                displayValidationButton={true}>
                    <MultipleChoice
                        options={sportunityTypes.map(sportunityType => 
                            sportunityType.name[this.props.language.toUpperCase()])
                        }
                        selectedOptions={selectedSportunityTypesLabels}
                        maxSelectedOptions={10}
                        onSelection={(option)=>this.onSelectType(option)}
                        style={{padding: 10}}
                    />
              </FilterModal>
        }
      </View>
    )
  }
}

export default createFragmentContainer(FilterSportunityTypes, 
  graphql`fragment FilterSportunityTypes_viewer on Viewer{
    
      sportunityTypes (sportType: COLLECTIVE) {
          id
          name{FR,EN}
      }
    
  }`
)


I18n.fallbacks = true
I18n.translations = translations;
