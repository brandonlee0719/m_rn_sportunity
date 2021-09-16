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

class PublicCircleFilter extends Component {

    constructor() {
        super();
        this.state = {
            count: 10,
            sportFilter: { name: '', language: 'EN' }
        }
    }

  componentDidMount = () => {
    const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        querySports: true,
        count: this.state.count
    });
      
    this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
    );
  }

  filterSports = (text) => {
    const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        sportFilter: { name: text, language: this.props.language.toUpperCase() },
        querySports: true,
        count: this.state.count
    });

    this.setState({sportFilter: { name: text, language: this.props.language.toUpperCase() }})
      
    this.props.relay.refetch(
        refetchVariables,
        null,
        null,
        {force: false}
    );
  }

  loadMore = () => {
    const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        count: 10000,
        querySports: true
    });

    this.setState({count: 10000})
      
    this.props.relay.refetch(
        refetchVariables,
        null,
        null,
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

PublicCircleFilter.propTypes = {
  searchText: PropTypes.string.isRequired,
  updateSearchText: PropTypes.func.isRequired,
  viewer: PropTypes.object.isRequired,
};

const dispatchToProps = (dispatch) => ({
  updateSearchText: bindActionCreators(updateSearchText, dispatch),
});

const stateToPropsPublicCirclesFilterSport = (state) => ({
  from: 'public-circles-filter',
  searchText: state.sportunitySport.searchText,
  language: state.sportunityLocale.language,
});

const ReduxContainerPublicCirclesFilterSport = connect(
  stateToPropsPublicCirclesFilterSport,
  dispatchToProps
)(PublicCircleFilter);

const PublicCirclesFilterTemp = createRefetchContainer(ReduxContainerPublicCirclesFilterSport, {
  /* TODO manually deal with:
  ...MeSportList_sports
  */
  viewer: graphql`
    fragment PublicCirclesFilter_viewer on Viewer @argumentDefinitions(
        querySports: {type: "Boolean!", defaultValue: false},
        count: {type: "Int", defaultValue: 10},
        sportFilter: {type: "SportFilter"}
      ){
      id,
      me {
        id,
        sports {
          ...SportList_sports
        }
      },
      sports (first: $count, filter: $sportFilter) @include(if: $querySports) {
        ...SportList_allSports
      }
    }
  `
  }, 
  graphql`
    query PublicCirclesFilterRefetchQuery (
      $querySports: Boolean!,
      $count: Int, 
      $sportFilter: SportFilter) {
        viewer {
          ...PublicCirclesFilter_viewer @arguments(
            querySports: $querySports, 
            count: $count, 
            sportFilter: $sportFilter
          )
        }
      }
  `
)

export default class extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: I18n.t('selectSport')
    }
  }

  render() {
    return (
      <QueryRenderer
        environment={environment}
        variables={{}}
        query={graphql`
          query PublicCirclesFilterQuery{
            viewer {
              ...PublicCirclesFilter_viewer
            }
          }
        `}
        render={({error, props}) => {
          if (props) {
            return <PublicCirclesFilterTemp query={props} viewer={props.viewer} {...this.props}/>;
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