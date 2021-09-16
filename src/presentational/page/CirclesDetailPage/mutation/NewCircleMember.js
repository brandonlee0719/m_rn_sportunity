import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation NewCircleMemberMutation($input: addCircleMemberInput!, $queryDetails: Boolean!, $circleId: ID) {
    addCircleMember(input: $input) {
      clientMutationId,
      viewer {
        ...CirclesDetailPage_viewer @arguments (circleId: $circleId)
      }
      edge {
        node {
          id
          ...CirclesItem_circle @arguments(queryDetails: $queryDetails)
        }
      }
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input,
      queryDetails: true,
      circleId: input.circleId
    },
    updater: (store) => {
      onCompleted()
    },
    onError
  })
}

export default {commit}
