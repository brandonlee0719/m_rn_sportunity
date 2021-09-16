import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation ReadChatMutation($input: readChatInput!) {
    readChat(input: $input) {
      clientMutationId,
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
      let currentItem = store.get(input.chatId);
      if (currentItem)
        currentItem.setValue(true , 'read')
        
      onCompleted()
    },
    onError
  })
}

export default {commit}
