import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation NewUpdateSportunityMutation($input: updateSportunityInput!) {
    updateSportunity(input: $input) {
      clientMutationId
      edge {
        node {
          id
          ...EventDetailPageView_sportunity
        }
      }
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input
    },
    updater: (store) => {
     /* const payload = store.getRootField('updateSportunity');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.circleId);

      currentItem.setLinkedRecord(newItem.getLinkedRecord('bankAccount'), 'bankAccount')*/
      onCompleted()
    },
    onError
  })
}

export default {commit}


/*import Relay from 'react-relay/classic';
export default class UpdateSportunityMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation Mutation{
      updateSportunity
    }`;
  }

  getVariables() {
    return {
      sportunityID: this.props.sportunityId,
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
        sportunityType: this.props.sportunityType,
        game_information: this.props.game_information,
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
        privacy_switch_preference: this.props.privacy_switch_preference,
        modifyRepeatedSportunities: this.props.updateSerie,
        // repeat: this.props.repeat,
        // organizerPays: this.props.organizerPays,
      },
      notify_people: this.props.notifyPeople,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on updateSportunityPayload @relay(pattern: true){
        edge,
        clientMutationId,
        viewer {
          id
          sportunities
          sportunity
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
        fieldIDs: {
          viewer: this.props.viewer.id,
        },
    }];
  }

  static fragments = {
    viewer: () => Relay.QL`
    fragment on Viewer {
        id,
      }
    `,
  };
}
*/