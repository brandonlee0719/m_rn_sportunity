import { commitMutation, graphql } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";

const mutation = graphql`
  mutation UpdateStatisticFilterMutation($input: updateStatisticFilterInput!) {
    updateStatisticFilter(input: $input) {
      clientMutationId
      user {
        id
        statisticFilters {
          id
          name
          date_begin
          date_end
          circleList (first: 10) {
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
      input: params.input,
    },
    updater: store => {
      const payload = store.getRootField('updateStatisticFilter');
      const newItem = payload.getLinkedRecord('user');
      const currentItem = store.get(params.userId);
      currentItem.setLinkedRecords(newItem.getLinkedRecords('statisticFilters'), 'statisticFilters');
      // onCompleted(newItem._dataID);
      onCompleted();
    },
    onError
  });
}

export default { commit };
