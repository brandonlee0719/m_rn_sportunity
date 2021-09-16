import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

import NotificationsListView from './NotificationsListView';

const mutation = graphql`
  mutation ReadNotificationMutation($input: readNotificationInput!) {
    readNotification(input: $input) {
      clientMutationId,
      viewer {
        me {
          numberOfUnreadNotifications
        }
      }
    } 
  }
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input: {
        notificationId: input.notificationIdVar
      }
    },
    updater: (store) => {
      const payload = store.getRootField('readNotification');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.user.id);
      if (currentItem) {
        currentItem.setValue(newItem.getValue('numberOfUnreadNotifications'), 'numberOfUnreadNotifications')

        let currentNotif = store.get(input.notificationIdVar);
        
        if (currentNotif)
          currentNotif.setValue(true, 'isRead')
      }

      onCompleted()
    },
    onError
  })
}

export default {commit}

