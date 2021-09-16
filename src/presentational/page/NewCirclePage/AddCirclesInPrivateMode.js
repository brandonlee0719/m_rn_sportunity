import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql,
  QueryRenderer
} from 'react-relay'
import { withNavigation } from 'react-navigation';
import environment from 'sportunity/src/createRelayEnvironment';
import ActivityLoader from 'sportunity/src/presentational/ActivityIndicatorLoader/page'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

import NewCircleInvitations from './NewCircleInvitations';

class AddCirclesInPrivateMode extends Component {
  render() {
    const {
      viewer,
      navigation,
    } = this.props;

    if (!viewer) {
      return <ActivityLoader isAnimating={true}/>;
    }

    const isLoggedIn = viewer && viewer.me !== null;

    return(
      <NewCircleInvitations 
        user={viewer.me} 
        viewer={viewer} 
        isLoggedIn={isLoggedIn} 
        navigation={navigation}
      />
    )
  }
}

AddCirclesInPrivateMode.propTypes = {
  viewer: PropTypes.object.isRequired,
};

const AddCirclesInPrivateModeTemp = createFragmentContainer(withNavigation(AddCirclesInPrivateMode), {
  viewer: graphql`
    fragment AddCirclesInPrivateMode_viewer on Viewer{
      ...NewCircleInvitations_viewer,
      me {
        id,
        fees,
        profileType
        ...NewCircleInvitations_user
      }
    }
  `,
});

export default class extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AddCirclesInPrivateModeQuery{
            viewer {
              ...AddCirclesInPrivateMode_viewer
            }
          }
        `}
        variables={{
        }}
        render={({error, props}) => (
          <AddCirclesInPrivateModeTemp 
            viewer={props ? props.viewer : null} 
            query={props}
            {...this.props} 
          />
        )}
      />
    )
  }
}

I18n.fallbacks = true
I18n.translations = translations;
