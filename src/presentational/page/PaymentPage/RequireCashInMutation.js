import { commitMutation, graphql } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";

const mutation = graphql`
  mutation RequireCashInMutation($input: requireCashInInput!) {
    requireCashIn(input: $input) {
      clientMutationId
      secure3DURL
      viewer {
        me {
          id
        }
      }
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        userId: input.userId,
        amount: input.amount,
        paymentMethodId: input.paymentMethodId
      }
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
  });
}

export default { commit };
