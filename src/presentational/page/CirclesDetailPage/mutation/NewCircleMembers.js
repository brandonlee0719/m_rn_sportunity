import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation NewCircleMembersMutation($input: addCircleMembersInput!) {
    addCircleMembers(input: $input) {
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
      const payload = store.getRootField('addCircleMembers');
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
