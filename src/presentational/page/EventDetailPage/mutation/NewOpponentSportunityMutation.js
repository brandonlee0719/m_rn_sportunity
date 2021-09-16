import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation NewOpponentSportunityMutation($input: newOpponentSportunityInput!) {
    newOpponentSportunity(input: $input) {
      clientMutationId,
      viewer {
        id
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
      // TODO
      /*const payload = store.getRootField('newOpponentSportunity');
      const newSportunity = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let sportunity = store.get(input.sportunityId);

      sportunity.setLinkedRecord(newSportunity.getLinkedRecord('survey'), 'survey')*/
      onCompleted()
    },
    onError
  })
}

export default {commit}
