import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
// TODO sportunityTemplates
const mutation = graphql`
  mutation DeleteSportunityTemplateMutation($input: removeSportunityTemplateInput!) {
    removeSportunityTemplate(input: $input) {
      viewer {
        id
        me {
          id
          sportunityTemplates {
            id,
          } 
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
     /* const payload = store.getRootField('removeSportunityTemplate');
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

export default class RemoveSportunityTemplateMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation {removeSportunityTemplate}`;
  }

  getVariables() {
    return {
      sportunityTemplateId: this.props.sportunityTemplateId,

    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on removeSportunityTemplatePayload{
        viewer {
          id
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
        me {
          sportunityTemplates {
            id
          }
        }
      }
    `,
  };
}
*/