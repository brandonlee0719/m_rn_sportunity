import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation DeleteSportunityMutation($input: deleteSportunityInput!) {
    deleteSportunity(input: $input) {
      clientMutationId,
      edge {
        node {
          id
          status
          cancel_date
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
    updater: (store) => {
      onCompleted()
    },
    onError
  })
}

export default {commit}