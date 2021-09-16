import { commitMutation, graphql } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";

const mutation = graphql`
  mutation NewStatisticFilterMutation($input: newStatisticFilterInput!) {
    newStatisticFilter(input: $input) {
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
      const payload = store.getRootField('newStatisticFilter');
      const newItem = payload.getLinkedRecord('user');
      const currentItem = store.get(params.userId);
      const filters = newItem.getLinkedRecords('statisticFilters');

      const newFilter = filters[filters.length - 1];
      const newFilterId = newFilter.getValue('id');

      currentItem.setLinkedRecords(newItem.getLinkedRecords('statisticFilters'), 'statisticFilters');
      onCompleted(newFilterId);
    },
    onError
  });
}

export default { commit };
