import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UnfollowMutation($input: unfollowUserInput!) {
    unfollowUser(input: $input) {
      clientMutationId,
      viewer {
        me {
          id
          followers {
            id
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
      const payload = store.getRootField('unfollowUser');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('followers'), 'followers')
      onCompleted()
    },
    onError
  })
}

export default {commit}
