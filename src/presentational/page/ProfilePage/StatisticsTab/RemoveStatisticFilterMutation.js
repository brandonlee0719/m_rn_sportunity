import { commitMutation, graphql } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";

const mutation = graphql`
  mutation RemoveStatisticFilterMutation($input: removeStatisticFilterInput!) {
    removeStatisticFilter(input: $input) {
      clientMutationId
      user {
        id
        statisticFilters {
          id
          name
          date_begin
          date_end
          circleList(first: 10) {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

function commit(params, onCompleted, onError) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: params.input
    },
    updater: store => {
      onCompleted();
    },
    onError
  });
}

export default { commit };
