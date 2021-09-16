import { commitMutation, graphql } from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation SetDefaultStatisticFilterMutation(
    $input: setDefaultStatisticFilterInput!
  ) {
    setDefaultStatisticFilter(input: $input) {
      clientMutationId
      user {
        id
        defaultStatisticFilter {
          id
          name
          date_begin
          date_end
          circleList(first: 10) {
            edges {
              node {
                id
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
      const payload = store.getRootField('setDefaultStatisticFilter');
      const newItem = payload.getLinkedRecord('user');
      const currentItem = store.get(params.userId);
      const newDefaultStatisticFilter = newItem.getLinkedRecord('defaultStatisticFilter');

      if (newDefaultStatisticFilter) {
        currentItem.setLinkedRecord(newDefaultStatisticFilter, 'defaultStatisticFilter');
      }
      onCompleted();
    },
    onError,
  });
}

export default { commit };
