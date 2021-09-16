import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateStatisticPreferencesMutation($input: updateStatisticPreferencesInput!) {
    updateStatisticPreferences(input: $input) {
        clientMutationId,
        statisticPreferences {
            private
            isManOfTheGameActivated
            userStats {
              stat0 {name}
              stat1 {name}
              stat2 {name}
              stat3 {name}
              stat4 {name}
              stat5 {name}
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
      const payload = store.getRootField('updateStatisticPreferences');
      const newItem = payload.getLinkedRecord('statisticPreferences');
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecord(newItem, 'statisticPreferences')
      onCompleted()
    },
    onError
  })
}

export default {commit}
