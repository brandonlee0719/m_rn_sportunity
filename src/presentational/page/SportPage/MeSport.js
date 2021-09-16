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

class MeSport extends Component {
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
                loadMore={this.loadMore}
                sport={null}
                sports={viewer.me.sports}
                allSports={viewer.sports}
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

// ------------------ STATE TO PROPS ------------------------- //


const stateToPropsMeSport = (state) => ({
  from: 'profile',
  searchText: state.sportunitySport.searchText,
  language: state.sportunityLocale.language,
});

const ReduxContainerMeSport = connect(
  stateToPropsMeSport,
  dispatchToProps
)(MeSport);

const MeSportTemp = createRefetchContainer(ReduxContainerMeSport, {
  /* TODO manually deal with:
  ...MeSportList_sports
  */
  viewer: graphql`
    fragment MeSport_viewer on Viewer @argumentDefinitions(
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
  `}, 
  graphql`
    query MeSportRefetchQuery ($querySports: Boolean!, $count: Int, $sportFilter: SportFilter) {
      viewer {
        ...MeSport_viewer @arguments(querySports: $querySports, count: $count, sportFilter: $sportFilter)
      }
    }
  `);

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
          query MeSportQuery{
            viewer {
              ...MeSport_viewer
            }
          }
        `}
        render={({error, props}) => {
          if (props) {
            return <MeSportTemp query={props} viewer={props.viewer} {...this.props}/>;
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