import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation DeleteCircleMutation($input: deleteCircleInput!) {
    deleteCircle(input: $input) {
      viewer {
        id
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
     /* const payload = store.getRootField('deleteCircle');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.circleId);

      currentItem.setLinkedRecord(newItem.getLinkedRecord('bankAccount'), 'bankAccount')*/
      onCompleted()
    },
    onError
  })
}

export default {commit}


/*import Relay from 'react-relay/classic';

export default class DeleteCircle extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
      }
    `,
    circle: () => Relay.QL`
      fragment on Circle {
        id
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation{ deleteCircle }`;
  }

  getFatQuery() {
    return Relay.QL`
      fragment on deleteCirclePayload {
        edge,
        clientMutationId,
        viewer {
          me {
            circles
          }
        },
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'NODE_DELETE',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: '
      tion',
      deletedIDFieldName: 'edge{node{id}}',
    }];
  }

  getVariables() {
    return {
      circleId: this.props.circle.id,
    };
  }

  getOptimisticResponse() {

    const viewerPayload = { id: this.props.viewer.id };

    return {
      viewer: viewerPayload,
      edge: { node: { id : this.props.circle.id } },
    };

  }
}
*/