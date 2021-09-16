import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation RemoveCircleMemberMutation($input: removeCircleMemberInput!, $circleId: ID) {
    removeCircleMember(input: $input) {
      viewer {
        ...CirclesDetailPage_viewer @arguments (circleId: $circleId)
      }
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input,
      circleId: input.circleId
    },
    updater: (store) => {
     /* const payload = store.getRootField('removeCircleMember');
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

export default class RemoveCircleMember extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `,
  };

  getMutation() {
    return Relay.QL`mutation{ removeCircleMember }`;
  }

  getFatQuery() {
    return Relay.QL`
    fragment on removeCircleMemberPayload {
      edge,
      clientMutationId,
      viewer {
        circles,
        me {
          circles
          circlesUserIsIn
        }
        circle
      }
    }
    `;
  }


  getConfigs() {
    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        viewer: this.props.viewer.id,
      },
    }];
  }

  getVariables() {
    const variables = { circleId: this.props.circle.id };
    
    if (this.props.user.id) 
      variables.userId = this.props.user.id;
    else if(this.props.user.pseudo)
      variables.pseudo =  this.props.user.pseudo;
    else if(this.props.user.email)
      variables.email =  this.props.user.email;

    return variables;
  }

  // getOptimisticResponse() {

  //   const viewerPayload = { id: this.props.viewer.id };
    
  //   return {
  //     viewer: viewerPayload,
  //     edge: { node: { id : this.props.circle.id } },
  //   };

  // }
}*/