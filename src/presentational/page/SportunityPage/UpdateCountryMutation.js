import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateCountryMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      viewer {
        me {
          id
          appCountry
          appCurrency
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
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.userID);

      currentItem.setValue(newItem.getValue('appCountry'), 'appCountry')
      currentItem.setValue(newItem.getValue('appCurrency'), 'appCurrency')
      onCompleted()
    },
    onError
  })
}

export default {commit}
