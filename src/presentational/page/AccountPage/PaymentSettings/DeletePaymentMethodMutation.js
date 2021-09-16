import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation DeletePaymentMethodMutation($input: deletePaymentMethodInput!) {
    deletePaymentMethod(input: $input) {
      clientMutationId,
      viewer {
        me {
          id,
          paymentMethods {
            id
            cardType
            cardMask
            expirationDate
          }
        }
      },
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input: {
        paymentMethodId: input.paymentMethodId
      }
    },
    updater: (store) => {
      const payload = store.getRootField('deletePaymentMethod');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('paymentMethods'), 'paymentMethods')
      onCompleted()
    },
    onError
  })
}

export default {commit}
