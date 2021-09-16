import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateUserFeedbackMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id,
        feedbacks {
          feedbacksList (last: 1000) {
            edges {
              node {
                author {
                  id
                }
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
      const payload = store.getRootField('upUser');
      const newUser = payload.getLinkedRecord('user');
      let user = store.get(input.userID);

      user.setLinkedRecord(newUser.getLinkedRecord('feedbacks'), 'feedbacks')
      onCompleted()
    },
    onError
  })
}

export default {commit}