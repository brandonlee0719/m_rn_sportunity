import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Text from 'react-native-text';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import { isEqual} from 'lodash';
import I18n from 'react-native-i18n';
import Geocoder from 'react-native-geocoder';

import RoundedButton from '../../../Button/roundedButton'
import { styles } from './style';
import { buttonStyle } from '../style'
import FilterModal from '../FilterModal'
import FiltersListItem from '../FiltersListItem';
import translations from 'sportunity/src/translations.js';
import { metrics, colors, fonts, images } from 'sportunity/src/theme';

Geocoder.fallbackToGoogle("AIzaSyCjT33JyzdH2YAREwWrKjvJ5uBdI_7Ifpc");
const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]

class SavedFilterList extends PureComponent {

  state = {
    isOpen: false,
    filters: this.props.filters,
    displayChangeDefaultFilter: false,
    selectedDefaultFilter: null
  }

  componentDidMount = () => {
    if (this.props.filters.length > 0) {
      let sportIds = this.props.filters.map(filter => {
        if (filter.sport && filter.sport[0])
          return filter.sport[0].sport.id
        else return false
      }).filter(i => Boolean(i))

      if (sportIds.length > 0)
         this.props.relay.refetch({
          ids: sportIds
        })
        
    }

    this.state.filters.forEach((filter, index) => {
      if (filter.location && filter.location.lat && filter.location.lng) {
        let city
        Geocoder.geocodePosition({lat: filter.location.lat, lng: filter.location.lng}).then(results => {
          for (var a=0 ; a<results.length; a++) {
            if (results[a].locality)
              city = results[a].locality;
          }
          let filters = this.state.filters ;
          filters[index].city = city ;
          this.setState({filters})
        })
      }
    })

    if (this.props.defaultSavedFilter) {
      this.setState({
        selectedDefaultFilter: this.props.defaultSavedFilter
      })
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.filters && !isEqual(this.props.filters, nextProps.filters)) {
      // Querying sports
      if (nextProps.filters.length > 0) {
        let sportIds = this.props.filters.map(filter => {
          if (filter.sport[0])
            return filter.sport[0].sport.id
          else return false
        }).filter(i => Boolean(i))

        if (sportIds.length > 0)
// TODO needs manual handling
      this.props.relay.refetch({
            ids: sportIds
          })
      }
      // Setting address
      this.setState({filters: nextProps.filters}, () => {
        this.state.filters.forEach((filter, index) => {
          if (filter.location && filter.location.lat && filter.location.lng) {
            let city
            Geocoder.geocodePosition({lat: filter.location.lat, lng: filter.location.lng}).then(results => {
              for (var a=0 ; a<results.length; a++) {
                if (results[a].locality)
                  city = results[a].locality;
              }
              let filters = this.state.filters ;
              filters[index].city = city ;
              this.setState({filters})
            })
          }
        })
      })
    }
  }

  normalizeSports = (sports) => {
    let normalized = []
    sports = sports.edges.map((item) => item.node)
    sports.forEach((sport) => {
      normalized[sport.id] = sport
      if (sport.levels.length) {
        sport.levels.forEach((level) => normalized[sport.id].levels[level.id] = level)
      }
    })
    return normalized
  }

  openClose = bool => this.setState({ isOpen: !this.state.isOpen })
  
  _changeDefaultFilter = () => {
    if (this.state.displayChangeDefaultFilter) {
      this.props.setDefaultFilter(this.state.selectedDefaultFilter)
      setTimeout(() => this.setState({displayChangeDefaultFilter: false}), 150)
    }
    else
      this.setState({displayChangeDefaultFilter: true})
  }

  _onClickOnFilter = (filter, index) => {
    if (this.state.displayChangeDefaultFilter) {
      if (this.state.selectedDefaultFilter === filter.id)
        this.setState({
          selectedDefaultFilter: null
        })
      else
        this.setState({
          selectedDefaultFilter: filter.id
        })
    }
    else {
      this.props.onApplyFilter(filter, index); 
      this.openClose(true);
    }
  }

  render(){
    const { isOpen, filters, displayChangeDefaultFilter, selectedDefaultFilter } = this.state;
    const { viewer:{sports}, defaultSavedFilter, onRemoveFilter, onApplyFilter, appliedFilterName, removeAppliedSavedFilter, activeKind } = this.props;
    let normalizedSports = this.normalizeSports(sports);
    
    return(
      <View>
        {
          filters.length > 0 &&
            <TouchableOpacity style={buttonStyle.headerContainer} onPress={() => this.openClose(true)}>
                <View style={buttonStyle.headerCol}>
                    <Text style={buttonStyle.headerText}>
                        {I18n.t('savedFilters')}
                    </Text>
                    <Text style={buttonStyle.select}>
                        {appliedFilterName ? appliedFilterName : I18n.t('select')}
                    </Text>
                </View>
                <Image
                    style={buttonStyle.headerIcon}
                    source={images.right_arrow_blue}
                />
            </TouchableOpacity>
        }
        {appliedFilterName ?
            <FiltersListItem
            caption={I18n.t('clear')}
            itemStyle={buttonStyle.footerViewStyle}
            captionStyle={buttonStyle.footerCaptionStyle}
            onPress={removeAppliedSavedFilter}
            />
            : null
        }
        {
          isOpen && filters.length > 0 ?
            <FilterModal
              isModalVisible={isOpen}
              onRequestClose={() => this.setState({isOpen: false})}
              title={I18n.t('savedFilters')}
            >
              <View style={styles.container}>
                <View>
                  {filters.map((filter, index) => (
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      key={index}
                      onPress={() => this._onClickOnFilter(filter, index)}
                    >
                      <View style={styles.itemContainer}>
                          <Text style={styles.filterName} key={index}>
                          {filter.filterName}
                          </Text>
                          {defaultSavedFilter !== filter.id && !displayChangeDefaultFilter && 
                            <TouchableOpacity onPress={() => onRemoveFilter(index)}>
                              <Image
                                  style={styles.closeIcon}
                                  source={images.close_x}
                              />
                            </TouchableOpacity>
                          }
                          {selectedDefaultFilter && selectedDefaultFilter === filter.id && 
                            <Image source={images.check} style={styles.checkboxImage}/>
                          }
                      </View>

                      <View style={styles.itemContainer}>
                          <View style={styles.levelsPositionsContainer}>
                          {
                              filter.sport && filter.sport.length > 0 ? filter.sport.map((item, index) =>
                                  <Text style={styles.name} key={index}>
                                    {normalizedSports[item.sport.id] && normalizedSports[item.sport.id].name[this.props.language.toUpperCase()]}
                                  </Text>
                              ) : <Text style={styles.name}>{I18n.t('savedFilterNoSportSelected')}</Text>
                          }
                          </View>
                      </View>

                      <View style={styles.itemContainer}>
                          <View style={styles.levelsPositionsContainer}>
                          {
                              filter.city ?
                              <View>
                                  <Text style={styles.name}>
                                  {filter.city}
                                  </Text>
                              </View>
                              :
                              <Text style={styles.name}>{I18n.t('savedFilterNoLocationSelected')}</Text>
                          }

                          </View>
                      </View>


                      <View style={styles.itemContainer}>
                          <View style={styles.levelsPositionsContainer}>
                          {
                              filter.dates && filter.dates.from && filter.dates.to ?
                              <Text style={styles.name}>
                                  {I18n.t('from')+' : '}
                                  {`${new Date(filter.dates.from).getDate()} ${months[new Date(filter.dates.from).getMonth()]} ${new Date(filter.dates.from).getFullYear()} `}
                                  {' ' + I18n.t('to')+' : '}
                                  {`${new Date(filter.dates.to).getDate()} ${months[new Date(filter.dates.to).getMonth()]} ${new Date(filter.dates.to).getFullYear()} `}
                              </Text>
                              :
                              <Text style={styles.name}>{I18n.t('savedFilterNoDateSelected')}</Text>
                          }

                          </View>
                      </View>

                      </TouchableOpacity>
                  ))}
                </View>
                {activeKind === 'Organized' && 
                  <RoundedButton onPress={this._changeDefaultFilter}>
                    {displayChangeDefaultFilter 
                    ? I18n.t('validate')
                    : I18n.t('changeDefaultFilter')
                    }
                  </RoundedButton>                  
                }
              </View>
              
            </FilterModal>
            : null
        }
      </View>
    )
  }
}

SavedFilterList.propTypes = {
  filters: PropTypes.array.isRequired,
  onRemoveFilter: PropTypes.func.isRequired,
  onApplyFilter: PropTypes.func.isRequired,
};


export default createRefetchContainer(SavedFilterList, 
  {viewer: graphql`fragment SavedFilterList_viewer on Viewer
    @argumentDefinitions(
      ids: {type: "[String]"},
    )
    {
      sports (ids: $ids, last: 20){
        edges {
          node {
            id,
            name {
              EN,
              FR
            },
            logo,
            levels {
              id
              EN {
                name,
              },
              FR {
                name,
              }
            }
          }
        }
      }
    }`
  },
  graphql`
  query SavedFilterListRefetchQuery 
  ($ids: [String])
  {
      viewer {
          ...SavedFilterList_viewer @arguments (
              ids: $ids, 
          )
      }
  }
`
)


I18n.fallbacks = true
I18n.translations = translations;
