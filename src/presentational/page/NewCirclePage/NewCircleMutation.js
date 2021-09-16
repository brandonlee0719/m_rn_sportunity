import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
 
const mutation = graphql`
  mutation NewCircleMutation($input: newCircleInput!) {
    newCircle(input: $input) {
      clientMutationId,
      viewer {
        me {
          id
        }
      }
      edge {
        node {
          id
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
      const payload = store.getRootField('newCircle');
      const edge = payload.getLinkedRecord('edge')
      const node = edge.getLinkedRecord('node');
      const circleId = node.getValue('id');
      onCompleted({ circleId });
    },
    onError
  })
}

export default {commit}
