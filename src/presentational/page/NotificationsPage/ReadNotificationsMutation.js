import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation ReadNotificationsMutation($input: readNotificationsInput!) {
    readNotifications(input: $input) {
      viewer {
        me {
          numberOfUnreadNotifications
        }
      },
      clientMutationId
    }
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input: {
        clientMutationId: input.clientMutationId
      }      
    },
    updater: (store) => {
      const payload = store.getRootField('readNotifications');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.user.id);
      currentItem.setValue(newItem.getValue('numberOfUnreadNotifications'), 'numberOfUnreadNotifications')

      if (input && input.user && input.user.notifications && input.user.notifications.edges) {
        input.user.notifications.edges.forEach(edge => {
          let currentNotif = store.get(edge.node.id);
          currentNotif.setValue(true, 'isRead')
        })
      }

      onCompleted()
    },
    onError
  })
}

export default {commit}
