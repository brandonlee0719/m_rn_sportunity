import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation CancelSportunityMutation($input: updateSportunityInput!) {
    updateSportunity(input: $input) {
      clientMutationId,
      edge {
        node {
          id
          status
          cancel_date
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
      const payload = store.getRootField('updateSportunity');
      const newItem = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let currentItem = store.get(input.sportunityID);
      
      currentItem.setValue('status', newItem.getValue('status'))
      currentItem.setValue('cancel_date', newItem.getValue('cancel_date'))
      onCompleted()
    },
    onError
  })
}

export default {commit}