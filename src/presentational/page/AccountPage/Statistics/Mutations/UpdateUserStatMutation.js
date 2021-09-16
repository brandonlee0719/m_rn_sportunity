import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateUserStatMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id,
        areStatisticsActivated
      },
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

      currentItem.setValue(newItem.getValue('areStatisticsActivated'), 'areStatisticsActivated')
      onCompleted()
    },
    onError
  })
}

export default {commit}
