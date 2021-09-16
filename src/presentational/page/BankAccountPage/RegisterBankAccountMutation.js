import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation RegisterBankAccountMutation($input: registerBankAccountInput!) {
    registerBankAccount(input: $input) {
      clientMutationId,
      viewer {
        me {
          id
          bankAccount {
            id,
            addressLine1,
            addressLine2,
            city,
            postalCode,
            country,
            ownerName,
            IBAN,
            BIC
          }
        }
      },
    }
  }
`;

function commit(input, onCompleted, onError) {
  console.log("RegisterBankAccountMutation", input);
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        ...input.data
      }
    },
    updater: (store) => {
      try {
        const payload = store.getRootField('registerBankAccount');
        if (payload) {
          const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
          let currentItem = store.get(input.userID);

          currentItem.setLinkedRecord(newItem.getLinkedRecord('bankAccount'), 'bankAccount')
        }
      }
      catch (e) {
        console.log(e);
      }
      //onCompleted()
    },
    onCompleted: (response, errors) => {
      if (errors && errors.length > 0) {
        onError(errors);
      }
      else {
        onCompleted(response)
      }
    },
    onError
  })
}

export default {commit}

