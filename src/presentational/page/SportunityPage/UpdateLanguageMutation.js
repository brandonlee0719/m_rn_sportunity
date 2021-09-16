import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateLanguageMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id
        appLanguage
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
    onCompleted,
    onError
  })
}

export default {commit}