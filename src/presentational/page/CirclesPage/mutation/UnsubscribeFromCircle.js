import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
  mutation UnsubscribeFromCircleMutation($input: removeCircleMemberInput!) {
    removeCircleMember(input: $input) {
      clientMutationId,
      edge {
        node {
          id
          memberCount
          members{
            id,
            pseudo,
            email,
            firstName,
            lastName,
            avatar,
            lastConnexionDate
          }
          memberParents {
            id
            pseudo
            avatar
            lastConnexionDate
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
