import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
// TODO sportunityTemplates
const mutation = graphql`
  mutation UpdateSportunityTemplateMutation($input: updateSportunityTemplateInput!) {
    updateSportunityTemplate(input: $input) {
      viewer {
        me {
          id 
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
     /* const payload = store.getRootField('updateSportunityTemplate');
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

export default class UpdateSportunityTemplateMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation {updateSportunityTemplate}`;
  }

  getVariables() {
    return {
      sportunityTemplateId: this.props.sportunityTemplateId,
      sportunityTemplate: {
        title: this.props.title,
        description: this.props.description,
        address: this.props.address,
        organizers: this.props.organizers,
        pendingOrganizers: this.props.pendingOrganizers,
        secondaryOrganizersPaymentMethod: this.props.secondaryOrganizersPaymentMethod,
        secondaryOrganizersPaymentByWallet: this.props.secondaryOrganizersPaymentByWallet,
        sport: this.props.sport,
        mode: this.props.mode,
        kind: this.props.kind,
        participantRange: this.props.participantRange,
        price: this.props.price,
        ageRestriction: this.props.ageRestriction,
        sexRestriction: this.props.sexRestriction,
        invited: this.props.invited,
        invited_circles: this.props.invited_circles,
        price_for_circle: this.props.price_for_circle,
        notification_preference: this.props.notification_preference,
        privacy_switch_preference: this.props.privacy_switch_preference,
        hide_participant_list: this.props.hide_participant_list,
        sportunityType: this.props.sportunityType,
        game_information: this.props.game_information
      },
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on updateSportunityTemplatePayload{
        viewer {
          me {
            sportunityTemplates 
          }
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