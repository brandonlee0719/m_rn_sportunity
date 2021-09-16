import { commitMutation, graphql } from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateUserProfileTypeMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId
      user {
        id
        profileType
      }
    }
  }
`;

function commit(input, { onSuccess: onCompleted, onFailure: onError }) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        userID: input.userIDVar,
        user: {
          profileType: input.profileTypeVar,
        },
      },
    },
    updater: store => {
      onCompleted();
    },
    onError,
  });
}

export default { commit };
