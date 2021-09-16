import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation MemberPaysMemberShipFeesMutation($input: memberSubscribeToPaymentModelInput!) {
    memberSubscribes(input: $input) {
      clientMutationId,
      secure3DURL,
      viewer {
        me {
          id
          numberOfFormsToFill
          numberOfPaymentModelsToPay
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
