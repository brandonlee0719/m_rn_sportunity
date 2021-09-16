import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
// TODO me
const mutation = graphql`
  mutation LanguagesMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id,
        languages {
          id
          code
          name
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
      const newItem = payload.getLinkedRecord('user')
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('languages'), 'languages')
      onCompleted()
    },
    onError
  })
}

export default {commit}
