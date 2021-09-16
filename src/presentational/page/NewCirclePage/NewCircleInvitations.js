import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import {createRefetchContainer, graphql} from 'react-relay';
import isEqual from 'lodash/isEqual';
import InvitationsModal from './NewCircleInvitationModal'
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';

class NewCircleInvitations extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    }
  };

  componentDidMount() {
    if (!this.props.sportunityId && 
        (this.props.user && this.props.user.circles && this.props.user.circles.edges && this.props.user.circles.edges.length > 0) ||
        (this.props.user && this.props.user.circlesUserIsIn && this.props.user.circlesUserIsIn.edges && this.props.user.circlesUserIsIn.edges.length > 0)) {
      
      this.setDefaultInvitations(this.props); 
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (!isEqual(this.props.sportunitySport, nextProps.sportunitySport) && nextProps.sportunitySport && nextProps.sportunitySport.sport) {
      
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        filter: {
          sport: [{sportID: nextProps.sportunitySport.sport}]
        },
      });
      
      this.props.relay.refetch(
        refetchVariables,
        null,
        () =>  setTimeout(() => {
            
            this.setDefaultInvitations(this.props)
          }, 100),
        {force: false}
      );
    }
  }

  setDefaultInvitations = (props) => {
    setTimeout(() => {
      let circleList = [];
      
      if (props.user && props.user.circles && props.user.circles.edges && props.user.circles.edges.length > 0)
        circleList = circleList.concat(props.user.circles.edges);

      if (props.sportunitySport && props.sportunitySport.sport) {
        circleList = circleList.filter(edge => edge.node.sport && edge.node.sport.sport && edge.node.sport.sport.id === props.sportunitySport.sport || !edge.node.sport);
      }
      
      if ((props.user && props.user.circlesUserIsIn && props.user.circlesUserIsIn.edges && props.user.circlesUserIsIn.edges.length > 0))
        circleList = circleList.concat(props.user.circlesUserIsIn.edges.filter(edge => edge.node.isCircleUsableByMembers))
        
        circleList = circleList
        .sort((a,b) => {
          if (a.node.memberCount < b.node.memberCount) return 1;
          if (a.node.memberCount > b.node.memberCount) return -1;
          else return 0; 
        })
        .filter(c => c.node.type === 'CHILDREN' || c.node.type === 'ADULTS')
        .filter((e,i) => i <= 2)
        .map(item => item.node)
        
    }, 200)
  }

  render() {
    const { user, isLoggedIn } = this.props;
    const circles = (user && user.circles) 
      ? user.circles.edges
        .map(edge => edge.node) 
      : [];
    const circlesCurrentUserIsIn = user && user.circlesUserIsIn && user.circlesUserIsIn.edges && user.circlesUserIsIn.edges.length > 0
      ? user.circlesUserIsIn.edges
        .filter(edge => edge.node.isCircleUsableByMembers)
        .map(edge => edge.node)
      : []
    const circlesFromClub = user && user.circlesFromClub && user.circlesFromClub.edges && user.circlesFromClub.edges.length > 0
        ? user.circlesFromClub.edges
          .map(edge => edge.node)
        : [];

    return (
      <View>
        <InvitationsModal
          onClose={() => this.setState({ showModal: false })}
          circles={circles}
          circlesCurrentUserIsIn={circlesCurrentUserIsIn}
          circlesFromClub={circlesFromClub}
          viewer={this.props.viewer}
          isLoggedIn={isLoggedIn}
          self={user} 
          navigation={this.props.navigation}  

          addInvitee={() => {}}
          addCircleInvitee={() => {}}
          deleteInvitee={() => {}}
          invitees={[]}
          updateCircleInviteePrice={() => {}}
          updateCircleAutomaticallyParticipant={() => {}}
        />
      </View>
    )
  }
}

NewCircleInvitations.propTypes = {
  user: PropTypes.object,
};

export default createRefetchContainer(NewCircleInvitations, {
    user: graphql`
    fragment NewCircleInvitations_user on User @argumentDefinitions (
      filter: {type: CirclesFilter}
    ) {
      id
      profileType
      pseudo,
      email,
      
      circlesUserIsIn (last: 100, filter: $filter) {
        edges {
          cursor,
          node {
            id,
            name,
            type
            owner {
              id
              pseudo
              avatar
            }
            isCircleUsableByMembers,
            memberCount
            sport {
              sport {
                id
                name {
                  FR
                }
              }
            }
          }
        }
      }
      circlesFromClub(last: 100, filter: $filter) {
        edges {
          cursor
          node {
            id
            name,
            type
            owner {
              id
              pseudo
              avatar
            }
            memberCount
            sport {
              sport {
                id
                name {
                  FR
                }
              }
            }
          }
        }
      }
      circles (last: 100) {
        edges {
          cursor,
          node {
            id,
            name,
            type
            mode,
            memberCount
            sport {
              sport {
                id
                name {
                  FR
                }
              }
            }
          }
        }
      }
    }
    `,
    viewer: graphql`
      fragment NewCircleInvitations_viewer on Viewer {
        id
        ...NewCircleInvitationModal_viewer
      }
    `,
  },graphql`
    query NewCircleInvitationsRefetchQuery ($filter: CirclesFilter) {
      viewer {
        me {
          ...NewCircleInvitations_user @arguments (filter: $filter)
        }
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;
