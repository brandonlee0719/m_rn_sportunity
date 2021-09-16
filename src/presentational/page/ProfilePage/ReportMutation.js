import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation ReportMutation($input: reportUserInput!) {
    reportUser(input: $input) {
      clientMutationId,
      viewer {
        id,
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
