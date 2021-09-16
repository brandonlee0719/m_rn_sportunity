import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PureComponent from 'sportunity/src/lib/PureComponent'
import { Alert, AsyncStorage, Text } from 'react-native';
import Relay from 'react-relay/classic';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFrom } from 'sportunity/src/action/profileActions';
import change from 'sportunity/src/action/changeSportunityFilterKind';
import { isEqual, cloneDeep } from 'lodash';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { withNavigation } from 'react-navigation';

import I18n from 'react-native-i18n';
import moment from 'moment';
import 'moment/min/locales.min';

import {
  graphql,
  createRefetchContainer, 
  QueryRenderer,
} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

class LoggedInPageView extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'test',
    };
  };


    constructor() {
      super();
      this.state = {
        actualToken: null
      }
    }
    componentDidMount = async () => {
      const { navigate } = this.props.navigation;
      const { viewer } = this.props.query

      let actualToken;
      try {
        actualToken = await AsyncStorage.getItem('token');
      } catch (err) {
        actualToken = '';
      }
      this.setState({actualToken})

      if (!this.props.from || (this.props.from.indexOf('event') < 0 && this.props.from.indexOf('circle') < 0))
        this.props.updateFrom('')

      if (viewer.me && viewer.me.homePagePreference === 'ORGANIZED') {
        this.props.changeKind('Organized')
        //navigate('sportunityList');
        this.props.navigation.actions.reset({
          key: null,
          index: 0,
          actions: [this.props.navigation.navigate('sportunityList')],
        });
      }
      else if (!viewer.me || !viewer.me.homePagePreference) {
        this.props.changeKind('Organized')
        //navigate('sportunityList');
        this.props.navigation.actions.reset({
          key: null,
          index: 0,
          actions: [this.props.navigation.navigate('sportunityList')],
        });
      }
      else {
        this.props.changeKind('Organized')
        //navigate('sportunityList');
        this.props.navigation.actions.reset({
          key: null,
          index: 0,
          actions: [this.props.navigation.navigate('sportunityList')],
        });
      }

      //this.props.relay.forceFetch();
      //Actions.refresh()
    }
    componentWillReceiveProps = (nextProps) => {
      const { viewer } = nextProps.query
      const { navigate } = this.props.navigation;
      
      if (viewer.me && viewer.me.homePagePreference !== this.props.selectedKind) {
        if (viewer.me.homePagePreference === 'ORGANIZED') {
          this.props.changeKind('Organized')
          //navigate('sportunityList');
          this.props.navigation.actions.reset({
            key: null,
            index: 0,
            actions: [this.props.navigation.navigate('sportunityList')],
          });
        }
        else {
          this.props.changeKind('Organized')
          //navigate('sportunityList');
          this.props.navigation.actions.reset({
            key: null,
            index: 0,
            actions: [this.props.navigation.navigate('sportunityList')],
          });
        }
        //this.props.relay.forceFetch();
        //Actions.refresh()
      }
      else {
        this.props.navigation.actions.reset({
          key: null,
          index: 0,
          actions: [this.props.navigation.navigate('sportunityList')],
        });
      }
    }

    render() {
      
      return null;
    }
  }




const stateToProps = (state) => ({
    selectedKind: state.sportunityList.selectedKind,
    from: state.sportunityProfile.from,
});

const dispatchToProps = (dispatch) => ({
    updateFrom: bindActionCreators(updateFrom, dispatch),
    changeKind: (kind) => dispatch(change(kind)),
});


const LoggedInPageT = createRefetchContainer(
  withNavigation(connect(stateToProps, dispatchToProps)(LoggedInPageView)),
  graphql`
  fragment LoggedInPage_query on Query {
    viewer {
      me{
        id,
        pseudo,
        homePagePreference
      }
    }
  }
  `,
);

export const LoggedInPage = ({ navigation }) => {
  return (
    <QueryRenderer
        environment={environment}
        query={graphql`
        query LoggedInPageQuery {
          ...LoggedInPage_query
        }
      `}
        variables={{}}
        render={({error, props}) => {
          if (props) {
            return <LoggedInPageT query={props} />;
          } else {
            return (
              <ActivityLoader isAnimating={true}/>
            )
          }
        }}
      />
    )
  };
  
  