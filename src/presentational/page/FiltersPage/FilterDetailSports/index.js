import PropTypes from 'prop-types';
import React, { Component } from 'react';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Text from 'react-native-text';
import { isEqual} from 'lodash';
import {
  createRefetchContainer,
  graphql,
} from 'react-relay';
import I18n from 'react-native-i18n';

import FiltersListItem from '../FiltersListItem';
import translations from 'sportunity/src/translations.js';
import { images } from 'sportunity/src/theme';
import styles from './style';
import { buttonStyle } from '../style'


class FilterDetailSports extends PureComponent {

  state = {
    isOpen: true,
  }

  openClose = bool => this.setState({ isOpen: bool })

  renderFromToLevel = (sports, filter) => {
    let levelFrom = sports[filter.sportID].levels.find(item => {
      return item.id === filter.level[0]
    })
    let levelTo = sports[filter.sportID].levels.find(item => {
      return item.id === filter.level[filter.level.length - 1]
    })
    return (
        I18n.t('from')+": " + levelFrom[this.props.language.toUpperCase()].name +" "+
        I18n.t('to')+": "+ levelTo[this.props.language.toUpperCase()].name
    )
  }

  normalizeSports = (sport) => {
    let normalized = []
    if (sport) {
      normalized[sport.id] = sport
      if (sport.levels.length) {
        sport.levels.forEach((level) => normalized[sport.id].levels[level.id] = level)
      }
    }
    return normalized
  }

  componentWillReceiveProps = (nextProps) => {
    if (!isEqual(this.props.filters, nextProps.filters)) {
      if (nextProps.filters.length > 0) {
        const refetchVariables = fragmentVariables => ({
          ...fragmentVariables,
          id: nextProps.filters.map(filter => filter.sportID)[0]
        });
    
        this.props.relay.refetch(
            refetchVariables,
            null,
            null,
            {force: false}
        );
      }
    }
  }

  componentDidMount = () => {
    if (this.props.filters.length > 0) {
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        id: this.props.filters.map(filter => filter.sportID)[0]
      });
  
      this.props.relay.refetch(
          refetchVariables,
          null,
          null,
          {force: false}
      );
    }
  }

  render(){

    const { isOpen } = this.state;
    const { viewer:{filterSport}, filters, onRemoveSportFilter, clearSportFilter, action } = this.props;
    let normalizedSports = this.normalizeSports(filterSport);
    
    return(
      <View>
          <TouchableOpacity style={buttonStyle.headerContainer} onPress={action}>
          <View style={buttonStyle.headerCol}>
              <Text style={buttonStyle.headerText}>
                  Sports
              </Text>
              {filters.length > 0
              ? filters.map((filter, index) => (
                  normalizedSports[filter.sportID] &&
                  <View key={index} style={{ 'flexDirection': 'row' }}>
                    <Text style={buttonStyle.select}>
                      {normalizedSports[filter.sportID].name[this.props.language.toUpperCase()] + '   '}
                    </Text>
                    <Text style={styles.select}>
                      {this.renderFromToLevel(normalizedSports, filter)}
                    </Text>
                  </View>
                ))
              : <Text style={buttonStyle.select}>
                  {I18n.t('select')}
              </Text>
              }
          </View>
          <Image
              style={buttonStyle.headerIcon}
              source={images.right_arrow_blue}
          />
        </TouchableOpacity>
        {filters.length > 0 ?
            <FiltersListItem
            caption={I18n.t('clear')}
            itemStyle={buttonStyle.footerViewStyle}
            captionStyle={buttonStyle.footerCaptionStyle}
            onPress={clearSportFilter}
            />
            : null
        }
      </View>
    )
  }
}

FilterDetailSports.propTypes = {
  filters: PropTypes.array.isRequired,
  onRemoveSportFilter: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
  language: state.sportunityLocale.language,
});

const dispatchToProps = (dispatch) => ({
});

const ReduxContainer = connect(
  stateToProps,
  dispatchToProps
)(FilterDetailSports);

export default createRefetchContainer(ReduxContainer, 
 {viewer: graphql`fragment FilterDetailSports_viewer on Viewer
  @argumentDefinitions(
    id: {type: "ID"},
  ){
    filterSport: sport (id: $id){
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
  }`},
  graphql`
    query FilterDetailSportsRefetchQuery 
    ($id: ID)
    {
        viewer {
            ...FilterDetailSports_viewer @arguments (
                id: $id, 
            )
        }
    }
  `
)

I18n.fallbacks = true
I18n.translations = translations;
