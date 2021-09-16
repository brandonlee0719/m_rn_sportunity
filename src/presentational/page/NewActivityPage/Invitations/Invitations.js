// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {createRefetchContainer, graphql} from 'react-relay';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import { metrics, colors, images } from 'sportunity/src/theme';
import InvitationsModal from './InvitationModal'
import { 
  updateInvitees,
  updateInvitedCircles, 
  updateInvitedCirclesAndPrices, 
  newInvitedCircle,
  removeInvitedCircle, 
  newInvitedCircleAndPrice, 
  removeInvitedCircleAndPrice,
  clearInvitedCircles
} from 'sportunity/src/action/newActivityActions';
import Invitee from './Invitee';
import I18n from 'react-native-i18n';
import translations from 'sportunity/src/translations.js';
import FormListItem from '../../../UI/FormListItem';

class Invitations extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      userOpenedModal: false
    }
  };

  componentWillReceiveProps = (nextProps) => {
    
    if (this.props.user && !isEqual(this.props.user.circles, nextProps.user.circles)) {

      let newInvitedCircleList = this.props.invitedCircles; 
      let newinvitedCircleAndPriceList = this.props.invitedCirclesAndPrices;
      if ((nextProps.user.circles && nextProps.user.circles.edges && nextProps.user.circles.edges.length > 0) ||
        (nextProps.user.circlesUserIsIn && nextProps.user.circlesUserIsIn.edges && nextProps.user.circlesUserIsIn.edges.length > 0) || 
        (nextProps.user.circlesFromClub && nextProps.user.circlesFromClub.edges && nextProps.user.circlesFromClub.edges.length > 0)
      ) {
        newInvitedCircleList.forEach((circle, index) => {
          let found;
          if (nextProps.user.circles && nextProps.user.circles.edges && nextProps.user.circles.edges.length > 0) {
            found = nextProps.user.circles.edges.find(c => c.node.id === circle.id);
          }
          
          if (!found && nextProps.user.circlesUserIsIn && nextProps.user.circlesUserIsIn.edges && nextProps.user.circlesUserIsIn.edges.length > 0) {
            found = nextProps.user.circlesUserIsIn.edges.find(c => c.node.id === circle.id);
          }
          
          if (!found && nextProps.user.circlesFromClub && nextProps.user.circlesFromClub.edges && nextProps.user.circlesFromClub.edges.length > 0) {
            found = nextProps.user.circlesFromClub.edges.find(c => c.node.id === circle.id);
          }
            this.props.updateInvitedCircles({index, value: found.node})
        })
        newinvitedCircleAndPriceList.forEach((circle, index) => {
          let found;
          if (nextProps.user.circles && nextProps.user.circles.edges && nextProps.user.circles.edges.length > 0) {
            found = nextProps.user.circles.edges.find(c => c.node.id === circle.circle.id);
          }
          
          if (!found && nextProps.user.circlesUserIsIn && nextProps.user.circlesUserIsIn.edges && nextProps.user.circlesUserIsIn.edges.length > 0) {
            found = nextProps.user.circlesUserIsIn.edges.find(c => c.node.id === circle.circle.id);
          }
          
          if (!found && nextProps.user.circlesFromClub && nextProps.user.circlesFromClub.edges && nextProps.user.circlesFromClub.edges.length > 0) {
            found = nextProps.user.circlesFromClub.edges.find(c => c.node.id === circle.circle.id);
          }
          
          this.props.updateInvitedCirclesAndPrices({index, value: {
            ...newinvitedCircleAndPriceList[index],
            circle: found.node
          }})
        })
      }
    }
    if (!this.state.userOpenedModal && !isEqual(this.props.sportunitySport, nextProps.sportunitySport) && nextProps.sportunitySport && nextProps.sportunitySport.sport) {
      this.props.clearInvitedCircles()
      
      const refetchVariables = fragmentVariables => ({
        ...fragmentVariables,
        filter: {
          sport: [{sportID: nextProps.sportunitySport.sport}]
        },
      }); 
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
        
      if (circleList.length > 0) this.addCircleInviteeAndPrice(circleList);
    }, 200)
  }

  addInvitee = (user, callback) => {
    const invitees = this.props.invitees || [];
    invitees.push(user); 
    this.props.updateInvitees(invitees);
    callback()
  };

  addCircleInvitee = (selectedCircles) => {
    this.props.invitedCircles.forEach((item,i) => {
      if (selectedCircles.findIndex(selectedCircle => selectedCircle.id === item.id) < 0) {
        // Tricky, but index may have changed if multiple circles are deleted at once
        setTimeout(() => {
          let {invitedCircles} = this.props;
          let index = invitedCircles.findIndex(invitedCircle => invitedCircle.id === item.id); 
          this.props.removeInvitedCircle(index)
        }, i*50)
      }
    })
    
    selectedCircles.forEach((item, index) => {
      if (this.props.invitedCircles.findIndex(invitedCircle => invitedCircle.id === item.id) < 0) {
        this.props.newInvitedCircle(item)
      }
    })
  }

  addCircleInviteeAndPrice = (selectedCircles) => {
    this.props.invitedCirclesAndPrices.forEach((item, i) => {
      if (selectedCircles.findIndex(selectedCircle => selectedCircle.id === item.circle.id) < 0) {
        // Tricky, but index may have changed if multiple circles are deleted at once
        setTimeout(() => {
          let {invitedCirclesAndPrices} = this.props;
          let index = invitedCirclesAndPrices.findIndex(invitedCircle => invitedCircle.circle.id === item.circle.id); 
          this.props.removeInvitedCircleAndPrice(index)
        }, i*50)
      }
    })
    
    selectedCircles.forEach((item, index) => {
      if (this.props.invitedCirclesAndPrices.findIndex(invitedCircle => invitedCircle.circle.id === item.id) < 0) {
        this.props.newInvitedCircleAndPrice({
          circle: item,
          price: {
            cents: this.props.pricePerParticipant,
            currency: this.props.userCurrency
          },
          participantByDefault: false ,
        })
      }
    })

    this.addCircleInvitee(selectedCircles);
  }

  deleteCircleInviteeAndPrice = (selectedCircle) => {
        setTimeout(() => {
          let {invitedCirclesAndPrices} = this.props;
          let index = invitedCirclesAndPrices.findIndex(invitedCircle => invitedCircle.circle.id === selectedCircle.id); 
          this.props.removeInvitedCircleAndPrice(index)

          let {invitedCircles} = this.props;
          let newIndex = invitedCircles.findIndex(invitedCircle => invitedCircle.id === selectedCircle.id); 
          this.props.removeInvitedCircle(newIndex)

        }, 50)
  }
  
  updateCircleInviteePrice = (circle, price) => {
    
    let {invitedCirclesAndPrices} = this.props;
    let index = invitedCirclesAndPrices.findIndex(item => item.circle.id === circle.id)
    invitedCirclesAndPrices[index].price.cents = price ;

    this.props.updateInvitedCirclesAndPrices({index: index, value: invitedCirclesAndPrices[index]})
  }

  updateCircleAutomaticallyParticipant = (circle, value) => {
    let {invitedCirclesAndPrices} = this.props;
    let index = invitedCirclesAndPrices.findIndex(item => item.circle.id === circle.id)
    
    invitedCirclesAndPrices[index].participantByDefault = value ;

    this.props.updateInvitedCirclesAndPrices({index: index, value: invitedCirclesAndPrices[index]})
  }

  deleteInvitee = (user) => {
    const prevInvitees = this.props.invitees || [];
    let invitees = prevInvitees.filter(v=>v.id!==user.id);
    this.props.updateInvitees(invitees);
  };

  render() {
    const { invitees, user, invitedCircles, isLoggedIn, invitedCirclesAndPrices,
      circlesInvitationModalVisible, friendsInvitationModalVisible, closeFriendsModal,
      closeCirclesModal } = this.props;
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
      
    const numInvitations = this.props.invitees ? this.props.invitees.length : 0;
    const numCircleInvitations = this.props.invitedCircles ? this.props.invitedCircles.length : 0 ;

    return (
      <View>
        <InvitationsModal
          addInvitee={this.addInvitee}
          addCircleInvitee={this.addCircleInviteeAndPrice}
          deleteCircleInviteeAndPrice = {this.deleteCircleInviteeAndPrice}
          deleteInvitee={this.deleteInvitee}
          invitees={invitees}
          friendsInvitationModalVisible={friendsInvitationModalVisible}
          circlesInvitationModalVisible={circlesInvitationModalVisible}
          closeFriendsModal={closeFriendsModal}
          closeCirclesModal={closeCirclesModal}
          onClose={() => this.setState({ showModal:false })}
          circles={circles}
          circlesCurrentUserIsIn={circlesCurrentUserIsIn}
          circlesFromClub={circlesFromClub}
          invitedCircles={invitedCirclesAndPrices}
          updateCircleInviteePrice={this.updateCircleInviteePrice}
          updateCircleAutomaticallyParticipant={this.updateCircleAutomaticallyParticipant}
          viewer={this.props.viewer}
          isLoggedIn={isLoggedIn}
          self={user} 
          navigation={this.props.navigation}  
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: metrics.borderRadius,
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    backgroundColor: colors.snow,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.1,
  },
  subContainer: {
    flex: 1,
  },
  text: {
    color: colors.darkBlue,
    marginBottom: metrics.baseMargin,
    fontWeight: '500',
  },
  select: {
    color: colors.skyBlue,
    fontWeight: '500',
  },
});

Invitations.propTypes = {
  pricePerParticipant: PropTypes.number,
  invitees: PropTypes.array.isRequired,
  invitedCircles: PropTypes.array.isRequired,
  invitedCirclesAndPrices: PropTypes.array,
  user: PropTypes.object,
  updateInvitees: PropTypes.func.isRequired,
  updateInvitedCircles: PropTypes.func.isRequired,
  updateInvitedCirclesAndPrices: PropTypes.func,
  newInvitedCircle: PropTypes.func,
  removeInvitedCircle: PropTypes.func,
  newInvitedCircleAndPrice: PropTypes.func,
  removeInvitedCircleAndPrice: PropTypes.func,
  clearInvitedCircles: PropTypes.func,
};

const stateToProps = (state) => ({
  invitees: state.sportunityNewActivity.invitees,
  invitedCircles: state.sportunityNewActivity.invitedCircles,
  invitedCirclesAndPrices: state.sportunityNewActivity.invitedCirclesAndPrices,
  pricePerParticipant: state.sportunityNewActivity.pricePerParticipant,
  userCountry: state.sportunityLocale.userCountry,
  userCurrency: state.sportunityLocale.userCurrency,
  sportunitySport: state.sportunityNewActivity.sportunitySport,
});

const mapDispatchToProps = {
  updateInvitees,
  updateInvitedCircles,
  updateInvitedCirclesAndPrices,
  newInvitedCircle,
  removeInvitedCircle,
  newInvitedCircleAndPrice,
  removeInvitedCircleAndPrice,
  clearInvitedCircles
}

const ReduxContainer = connect(
  stateToProps,
  mapDispatchToProps
)(Invitations);


export default createRefetchContainer(ReduxContainer, {
    user: graphql`
    fragment Invitations_user on User @argumentDefinitions (
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
      fragment Invitations_viewer on Viewer {
        id
        ...InvitationModal_viewer
      }
    `,
  },graphql`
    query InvitationsRefetchQuery ($filter: CirclesFilter) {
      viewer {
        me {
          ...Invitations_user @arguments (filter: $filter)
        }
      }
    }
  `
);

I18n.fallbacks = true
I18n.translations = translations;
