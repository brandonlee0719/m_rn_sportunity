import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateAskedInformationMutation($input: updateAskedInformationInput!) {
    updateAskedInformation(input: $input) {
      clientMutationId,
      edge {
        node {
          askedInformation {
            id,
            name,
            type,
            filledByOwner
            form {
              id
              name
            }
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
      const payload = store.getRootField('updateAskedInformation');
      const newItem = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let currentItem = store.get(input.circleId);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('askedInformation'), 'askedInformation')
      onCompleted()
    },
    onError
  })
}

export default {commit}
