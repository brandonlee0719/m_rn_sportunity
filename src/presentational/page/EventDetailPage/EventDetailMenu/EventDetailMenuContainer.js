import React, { Component } from 'react';
import {
  graphql,
  createRefetchContainer,
  QueryRenderer,
} from 'react-relay';
import Icon from 'react-native-vector-icons/Entypo';
import Toast from 'react-native-simple-toast';
import I18n from 'react-native-i18n';
import { withNavigation } from 'react-navigation';

import environment from 'sportunity/src/createRelayEnvironment';
import store from '../../../../store';
import translations from 'sportunity/src/translations.js';
import EventDetailMenu from './EventDetailMenu';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import { colors } from '../../../../theme';

class EventDetail extends Component {
  componentDidMount() {
    setTimeout(() => this.props.relay.refetch({query: true}), 1000) 
  }
  render () {
    const {viewer} = this.props.query; 
    const {updateToken} = this.props; 

    if (viewer && viewer.sportunity)
      return (
        <EventDetailMenu viewer={viewer} sportunity={viewer.sportunity} user={viewer.me} updateToken={updateToken} navigation={this.props.navigation}/>
      );
    else 
      return null;
  }
};
// sportunityToastLoginCalendar
const EventDetailTemp = createRefetchContainer(
  withNavigation(EventDetail), 
  graphql`
    fragment EventDetailMenuContainer_query on Query
      @argumentDefinitions(
        sportunityId: {type: ID},
        sportunityChatId: {type: "String"},
        sportunityRelaunchId: {type: "String!"},
        query: {type: "Boolean!", defaultValue: false}
      )
      {
        viewer {
          id
          ...EventDetailMenu_viewer
          me @include(if: $query) {
            ...EventDetailMenu_user
          }
          sportunity(id: $sportunityId) @include(if: $query) {
            ...EventDetailMenu_sportunity
          }
        }
      }
  `,
  graphql`
    query EventDetailMenuContainerRefetchQuery($sportunityId: ID, $sportunityRelaunchId: String!, $query: Boolean!) {
      ...EventDetailMenuContainer_query @arguments(sportunityId: $sportunityId, sportunityRelaunchId: $sportunityRelaunchId, query: $query)
    }
  `
)

export default class extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => <Icon name="dots-three-horizontal" size={25} color={colors.snow} />,
    tabBarOnPress: () => {
      const { sportunityDetails: { isUserLoggedIn } } = store.getState();

      if (!isUserLoggedIn) {
        Toast.show(I18n.t('sportunityToastLoginCalendar'));
      } 
      else {
        navigation.navigate('eventMenu');
      }
    }
  });

  render() {
    const {navigation} = this.props;
    let sportunityChatId = navigation.getParam('id', null)
    let sportunityId = navigation.getParam('id', null)
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query EventDetailMenuContainerQuery($sportunityId: ID, $sportunityRelaunchId: String!, $query: Boolean!) {
            ...EventDetailMenuContainer_query @arguments(sportunityId: $sportunityId, sportunityRelaunchId: $sportunityRelaunchId, query: $query)
          }
        `}
        variables={{
          sportunityId: sportunityId,
          sportunityChatId: sportunityChatId,
          sportunityRelaunchId: sportunityId,
          query: false
        }}
        render={({error, props}) => {
          if (props) {
            return <EventDetailTemp query={props} {...this.props}/>;
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