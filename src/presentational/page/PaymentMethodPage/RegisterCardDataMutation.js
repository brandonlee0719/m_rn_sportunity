import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
// TODO paymentMethods
const mutation = graphql`
  mutation RegisterCardDataMutation($input: registerCardDataInput!) {
    registerCardData(input: $input) {
      viewer {
        me {
          id
          paymentMethods {
            id
            cardType
            cardMask
            expirationDate
          }
        }
      },
      paymentMethodId,
      clientMutationId
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input: {
        cardRegistrationId: input.cardRegistration.cardRegistrationId,
        registrationData: input.token,
      }
    },
    onCompleted: (response, errors) => {
      if (errors && errors.length > 0) {
        onError(errors);
      }
      else {
        onCompleted()
      }
    },
    onError
  })
}

export default {commit}
