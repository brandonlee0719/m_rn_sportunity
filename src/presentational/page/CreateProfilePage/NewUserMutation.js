import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
// TODO user & viewer
const mutation = graphql`
  mutation NewUserMutation($input: newUserInput!) {
    newUser(input: $input) {
      clientMutationId,
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
