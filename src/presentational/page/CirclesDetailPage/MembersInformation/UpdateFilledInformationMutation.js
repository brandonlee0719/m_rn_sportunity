import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateFilledInformationMutation($input: updateFilledInformationInput!) {
    updateFilledInformation(input: $input) {
      clientMutationId,
      viewer {
        me {
          id
          numberOfFormsToFill
          numberOfPaymentModelsToPay
        }
      }
      edge {
        node {
          membersInformation {
            id,
            information,
            user {
                id,
            }
            value
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
      const payload = store.getRootField('updateFilledInformation');
      const newItem = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let currentItem = store.get(input.circleId);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('membersInformation'), 'membersInformation')
      onCompleted()
    },
    onError
  })
}

export default {commit}
