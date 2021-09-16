import { commitMutation, graphql } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";

const mutation = graphql`
  mutation RequireCashOutMutation($input: requireCashOutInput!) {
    requireCashOut(input: $input) {
      clientMutationId
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
        amount: input.amount
      }
    },
    onCompleted,
    onError
  });
}

export default { commit };
