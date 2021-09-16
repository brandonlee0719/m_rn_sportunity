const {
  requestSubscription,
  graphql,
} = require('react-relay');

import environment from 'sportunity/src/createRelayEnvironment';

const subscription = graphql`
  subscription unreadChatsSubscription($input: unreadChatsSubscriptionInput!) {
    unreadChatsSubscription(input: $input) {
      user {
        unreadChats
        ...DrawerChatContainer_user
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