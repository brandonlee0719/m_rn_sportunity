import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation VoteForManOfTheGameMutation($input: voteForManOfTheGameInput!) {
    voteForManOfTheGame(input: $input) {
      clientMutationId,
      edge {
        node {
          manOfTheGameVotes {
            voter {
              id
            }
            votedFor {
                id
                pseudo,
                avatar
            }
            date
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
      const payload = store.getRootField('voteForManOfTheGame');
      const newItem = payload.getLinkedRecord('edge').getLinkedRecord('node')
      let currentItem = store.get(input.sportunityID);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('manOfTheGameVotes'), 'manOfTheGameVotes')
      onCompleted()
    },
    onError
  })
}

export default {commit}

