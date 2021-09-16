import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation NewParentMemberMutation($input: addParentMemberInput!) {
    addParentMember(input: $input) {
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
      const payload = store.getRootField('addParentMember');

      const newItem = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let currentItem = store.get(input.circleId);

      currentItem.setValue(newItem.getValue('memberCount'), 'memberCount')
      currentItem.setLinkedRecords(newItem.getLinkedRecords('members'), 'members');
      currentItem.setLinkedRecords(newItem.getLinkedRecords('memberParents'), 'memberParents');
      onCompleted()
    },
    onError
  })
}

export default {commit}



/*import Relay from 'react-relay/classic';
export default class AddParentMember extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation Mutation{
      addParentMember
    }`;
  }
  getVariables() {
    let variables = {
      circleId: this.props.circle.id,
      parent1Email: this.props.parent1EmailVar,
      parent2Email: this.props.parent2EmailVar,
      childPseudo: this.props.childPseudoVar
    }
    return variables;
  }
  getFatQuery() {
    return Relay.QL`
    fragment on addParentMemberPayload{
      edge,
      clientMutationId,
      viewer {
        circles,
        me {
          circles
        }
        circle,
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

  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
      }
    `,
    circle: () => Relay.QL`
      fragment on Circle {
        id
      }
    `,
  };
}
*/