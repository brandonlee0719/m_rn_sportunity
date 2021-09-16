import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
/* TODO
edge,
      clientMutationId,
      viewer {
        id
        sportunities
      }
*/
const mutation = graphql`
  mutation NewSportunityMutation($input: newSportunityInput!) {
    newSportunity(input: $input) {
      clientMutationId
    }
  }
`;

function commit(input, onCompleted, onError) {
  
  return commitMutation(environment, {
    mutation, 
    variables: {
      input: {
        sportunity: input.sportunity
      }
    },
    updater: (store) => {
     /* const payload = store.getRootField('newSportunity');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.circleId);

      currentItem.setLinkedRecord(newItem.getLinkedRecord('bankAccount'), 'bankAccount')*/
      onCompleted()
    },
    onError,
    /*configs: [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: input.viewer.id,
      connectionName: 'SportunityConnection',
      edgeName: 'edge',
      rangeBehaviors: () => 'prepend',
    }]*/
    
  })
}

export default {commit}

/* import Relay from 'react-relay/classic';
export default class NewSportunityMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation Mutation{
      newSportunity
    }`;
  }
  getVariables() {
    return {
      sportunity: {
        title: this.props.title,
        description: this.props.description,
        address: this.props.address,
        venue: this.props.venue,
        infrastructure: this.props.infrastructure,
        slot: this.props.slot,
        organizers: this.props.organizers,
        pendingOrganizers: this.props.pendingOrganizers,
        sport: this.props.sport,
        participantRange: this.props.participantRange,
        mode: this.props.mode,
        ageRestriction: this.props.ageRestriction,
        sexRestriction: this.props.sexRestriction,
        // levelRestriction: this.props.levelRestriction,
        participants: this.props.participants,
        price: this.props.price,
        beginning_date: this.props.beginningDate,
        ending_date: this.props.endingDate,
        kind: this.props.kind,
        invited: this.props.invitees.map(pseudo=>({ pseudo, answer:'WAITING' })),
        invited_circles: this.props.invited_circles,
        price_for_circle: this.props.price_for_circle,
        paymentMethodId: this.props.paymentMethod,
        hide_participant_list: this.props.hideParticipantSwitchOn,
        notification_preference: this.props.notification_preference,
        sportunityType: this.props.sportunityType,
        game_information: this.props.game_information,
        privacy_switch_preference: this.props.privacy_switch_preference,
        repeat: this.props.repeat,
        //organizerPays: this.props.organizerPays,
      },
    };
  }
  getFatQuery() {
    return Relay.QL`
      fragment on newSportunityPayload @relay(pattern: true){
        edge,
        clientMutationId,
        viewer {
          id
          sportunities
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'SportunityConnection',
      edgeName: 'edge',
      rangeBehaviors: () => 'prepend',
    }];
  }

  static fragments = {
    viewer: () => Relay.QL`fragment on Viewer {
        id,
        sportunities (last: 10, filter:{status: Organized}) {
          edges
        }
      }
    `,
  };
}
*/