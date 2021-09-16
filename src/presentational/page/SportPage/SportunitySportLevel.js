import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import {
    createRefetchContainer,
    graphql,
    QueryRenderer,
  } from 'react-relay'; 
import {withNavigation} from 'react-navigation'
import environment from 'sportunity/src/createRelayEnvironment'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearchText } from 'sportunity/src/action/sportActions.js';
import MeSportList from 'sportunity/src/presentational/page/ProfilePage/SportsList.js';
import I18n from 'react-native-i18n';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'

import SportList from './SportList/SportList.js';

import styles from './style';

class SportunitySportLevel extends Component {
    constructor() {
        super();
        this.state = {
            count: 10,
            sportFilter: { name: '', language: 'EN' }
        }
    }

    filterSport = (sportId, callback) => {
        const refetchVariables = fragmentVariables => ({
            ...fragmentVariables,
            querySport: true,
            sportId: sportId
        });
    
        this.setState({count: 10000})
          
        this.props.relay.refetch(
            refetchVariables,
            null,
            () => setTimeout(() => callback(), 200),
            {force: false}
        );
    }

    render(){
        const { searchText, viewer, from, modal} = this.props;
        
        return(
            <View style={modal ? styles.modalContainer : styles.container}>
                <SportList
                    sportFilter={this.state.sportFilter}
                    filterSports={this.filterSports}
                    filterSport={this.filterSport}
                    loadMore={this.loadMore}
                    sport={viewer.sport || null}
                    sports={null}
                    allSports={viewer.sports || null}
                    viewer={viewer}
                    from={from}
                    searchText={searchText}
                    count={this.state.count}
                    {...this.props}
                />
            </View>
        )
    }
}

const dispatchToProps = (dispatch) => ({
  updateSearchText: bindActionCreators(updateSearchText, dispatch),
});

const stateToPropsSportunitySportLevels = (state) => ({
  from: 'new-activity-levels',
  searchText: state.sportunitySport.searchText,
  language: state.sportunityLocale.language,
});

const ReduxContainerSportunitySportLevel = connect(
  stateToPropsSportunitySportLevels,
  dispatchToProps
)(SportunitySportLevel);

const SportunitySportLevelTemp = createRefetchContainer(ReduxContainerSportunitySportLevel, {
    viewer: graphql`
      fragment SportunitySportLevel_viewer on Viewer @argumentDefinitions(
          querySport: {type: "Boolean!", defaultValue: false},
          sportId: {type: "ID"}
        ){
        id,
        sport (id: $sportId) @include (if: $querySport) {
          ...SportList_sport
        }
      }
    `,
  },
  graphql`
    query SportunitySportLevelRefetchQuery ($querySport: Boolean!, $sportId: ID) {
      viewer {
        ...SportunitySportLevel_viewer @arguments(querySport: $querySport, sportId: $sportId)
      }
    }
  `
);

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('selectSport')
    }
  }

  render() {
    let selectedSport = this.props.navigation.getParam('selectedSport', null)
    let sportName = this.props.navigation.getParam('sportName', null)
    return (
      <QueryRenderer
        environment={environment}
        variables={{
          querySport: false,
          sportId: null
        }}
        query={graphql`
          query SportunitySportLevelQuery ($querySport: Boolean!, $sportId: ID){
            viewer {
              ...SportunitySportLevel_viewer @arguments(querySport: $querySport, sportId: $sportId)
            }
          }
        `}
        render={({error, props}) => {
          if (props) {
            return <SportunitySportLevelTemp sportName={sportName} selectedSport={selectedSport} query={props} viewer={props.viewer} {...this.props}/>;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          } 
        }}
      />
    )
  }
}