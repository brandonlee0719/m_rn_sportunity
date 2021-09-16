const {
  requestSubscription,
  graphql,
} = require('react-relay');

import environment from 'sportunity/src/createRelayEnvironment';

const subscription = graphql`
  subscription ChatPageAddMessageSubscription($input: addMsgSubscriptionInput!) {
    addMsgSubscription(input: $input) {
      chat {
        id
        read
        messages (last: 20) {
          ...Message_messages
          edges {
            node {
              id
              created
              author {
                id
                pseudo
                avatar
              }
            }
          }
        }
      }
    }
  }
`

export default (input) => requestSubscription(
  environment, 
  {
    subscription,
    variables: {
      input: {
        chatIds: input.chatIdsVar
      }
    }, // Variables
    onCompleted: (t) => {
      return true ;
    },
    onError: error => console.error(error),
    onNext: response => {
      return true ;
    },
    updater: store => {
      return ;
    }
  }
);