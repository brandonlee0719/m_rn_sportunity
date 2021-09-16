import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateUserManagersMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id,
        authorized_managers {
            user {
                id
                pseudo
                avatar
            }
            authorization_level
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
      const payload = store.getRootField('upUser');
      const newItem = payload.getLinkedRecord('user');
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('authorized_managers'), 'authorized_managers')
      onCompleted()
    },
    onError
  })
}

export default {commit}
