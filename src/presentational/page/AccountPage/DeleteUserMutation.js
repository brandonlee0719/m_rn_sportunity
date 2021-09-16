
import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
    mutation DeleteUserMutation($input: deleteUserInput!) {
        deleteUser(input: $input) {
            clientMutationId
            viewer {
              me {
                id
                subAccounts {
                  id
                  pseudo
                  email
                  avatar
                  authorized_managers {
                    user {
                      id
                      avatar
                      pseudo
                    }
                  }
                }
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