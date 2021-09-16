import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateCalendarMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id
        calendar {
          users {
            id
          }
          sportunities (last:1000) {
            edges {
              node {
                id
              }
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
      const payload = store.getRootField('upUser');
      const newItem = payload.getLinkedRecord('user')
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecord(newItem.getLinkedRecord('calendar'), 'calendar')
      onCompleted()
    },
    onError
  })
}

export default {commit}
