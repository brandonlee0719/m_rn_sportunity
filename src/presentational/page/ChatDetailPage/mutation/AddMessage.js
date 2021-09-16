import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation AddMessageMutation($input: addMsgInput!) {
    addMsg(input: $input) {
      clientMutationId,
      edge {
        node {
          read,
          messageCount,
          messages (last: 20) {
            edges {
              node {
                id
                text 
                author {
                  id,
                  firstName,
                  lastName,
                  pseudo,
                  avatar
                }
                created
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
      const payload = store.getRootField('addMsg');
      const newItem = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let currentItem = store.get(input.chatId);

      //currentItem.setLinkedRecords(newItem.getLinkedRecords('messages'), 'messages')
      //currentItem.setValue(newItem.getValue('messageCount'), 'messageCount');
      // currentItem.setValue(newItem.getValue('read'), 'read');
      onCompleted()
    },
    onError
  })
}

export default {commit}
