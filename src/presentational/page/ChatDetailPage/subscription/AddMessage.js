const {
  requestSubscription,
  graphql,
} = require('react-relay');

import environment from 'sportunity/src/createRelayEnvironment';

const subscription = graphql`
  subscription AddMessageSubscription($input: addMsgSubscriptionInput!) {
    addMsgSubscription(input: $input) {
      viewer {
        id
      }
      chat {
        ...ChatDetailPage_chat
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
