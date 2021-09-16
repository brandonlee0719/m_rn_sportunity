import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateUserMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id,
        userPreferences {
          areSubAccountsActivated
        }
        homePagePreference
        mangoId
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

      currentItem.setLinkedRecord(newItem.getLinkedRecord('userPreferences'), 'userPreferences')
      currentItem.setValue(newItem.getValue('homePagePreference'), 'homePagePreference')
      onCompleted()
    },
    onError
  })
}

export default {commit}
