import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import I18n from 'react-native-i18n';
import MultipleChoice from 'react-native-multiple-choice';

import FiltersListItem from '../FiltersListItem';
import FilterModal from '../FilterModal'
import translations from 'sportunity/src/translations.js';
import styles from './style'
import { buttonStyle } from '../style'
import { images } from 'sportunity/src/theme';

class FilterSubAccounts extends PureComponent {

  state = {
    isOpen: false,
  }

  onSelectSubAccount = (option) => {
    let subAccountId;

    this.props.subAccounts && this.props.subAccounts.forEach(subAccount => {
      if (subAccount.pseudo === option) {
        subAccountId = subAccount.id;
      }
    })

    if (this.props.viewer.me.pseudo === option) {
      subAccountId = this.props.viewer.me.id
    }

    let optionIndex = this.props.selectedSubAccounts && this.props.selectedSubAccounts.findIndex(subAccount => subAccount === subAccountId) ;

    if (optionIndex >= 0)
      this.props.removeSubAccountFilter(subAccountId)
    else
      this.props.addSubAccountFilter(subAccountId);

  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })

  render(){
    const { isOpen } = this.state;
    const { viewer, subAccounts, selectedSubAccounts, clearSubAccountFilter } = this.props;
    
    let selectedSubAccountsLabels = selectedSubAccounts && selectedSubAccounts.length > 0 ? selectedSubAccounts.map(selectedSubAccount => {
      let pseudo = '';
      if (viewer.me.id === selectedSubAccount)
        pseudo = viewer.me.pseudo;
      else {
        subAccounts && subAccounts.forEach(subAccount => {
          if (subAccount.id === selectedSubAccount) {
            pseudo = subAccount.pseudo ;
          }
        })
      }
      return pseudo;
    }) : [];
    
    return(
      <View>
        {subAccounts && subAccounts.length > 0 &&
            <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
                <View style={buttonStyle.headerCol}>
                    <Text style={buttonStyle.headerText}>
                        {viewer.me.profileType === 'PERSON' ? I18n.t('myChildren') : I18n.t('myTeams')}
                    </Text>
                    <Text style={buttonStyle.select}>
                    {selectedSubAccountsLabels.length > 0
                      ? selectedSubAccountsLabels.join(', ')
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
        {subAccounts && subAccounts.length > 0 && selectedSubAccountsLabels.length > 0 &&
            <FiltersListItem
              caption={I18n.t('clear')}
              itemStyle={buttonStyle.footerViewStyle}
              captionStyle={buttonStyle.footerCaptionStyle}
              onPress={clearSubAccountFilter}
            />
        }
        {
            isOpen && subAccounts && subAccounts.length > 0 &&
              <FilterModal
                isModalVisible={isOpen}
                onRequestClose={() => this.setState({isOpen: false})}
                title={viewer.me.profileType === 'PERSON' ? I18n.t('myChildren') : I18n.t('myTeams')}
                displayValidationButton={true}>
                    <MultipleChoice
                        options={subAccounts.map(subAccount => subAccount.pseudo)}
                        selectedOptions={selectedSubAccountsLabels}
                        maxSelectedOptions={10}
                        onSelection={(option)=>this.onSelectSubAccount(option)}
                        style={{padding: 10}}
                    />
              </FilterModal>
        }
      </View>
    )
  }
}

export default FilterSubAccounts;

I18n.fallbacks = true
I18n.translations = translations;
