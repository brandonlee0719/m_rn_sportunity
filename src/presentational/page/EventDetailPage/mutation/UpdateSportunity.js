import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateSportunityMutation($input: updateSportunityInput!) {
    updateSportunity(input: $input) {
      clientMutationId,
      edge {
        node {
          id
          status,
          participants{
            id
            pseudo,
            avatar
          },
          waiting{
            id
            pseudo,
            avatar
          },
          willing {
            id
            pseudo,
            avatar
          }
          canceling {
            canceling_user{
              id
              pseudo,
              avatar
            },
            status,
            cancelation_date,
          },
          invited{
            user {
              id
              pseudo,
              avatar
            }
            answer
          }
          canUserVoteForManOfTheGame
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
          paymentStatus {
            user {
              id
            }
            status
            price {
              cents,
              currency
            }
          }
          price {
            cents
            currency
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
      const payload = store.getRootField('updateSportunity');
      const newSportunity = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let sportunity = store.get(input.sportunityID);

      sportunity.setValue('status', newSportunity.getValue('status'))
      sportunity.setLinkedRecords(newSportunity.getLinkedRecords('participants'), 'participants')
      sportunity.setLinkedRecords(newSportunity.getLinkedRecords('waiting'), 'waiting')
      sportunity.setLinkedRecords(newSportunity.getLinkedRecords('willing'), 'willing')
      sportunity.setLinkedRecords(newSportunity.getLinkedRecords('canceling'), 'canceling')
      sportunity.setLinkedRecords(newSportunity.getLinkedRecords('invited'), 'invited')
      sportunity.setLinkedRecords(newSportunity.getLinkedRecords('paymentStatus'), 'paymentStatus')
      sportunity.setLinkedRecords(newSportunity.getLinkedRecords('manOfTheGameVotes'), 'manOfTheGameVotes')
      sportunity.setValue(newSportunity.getValue('canUserVoteForManOfTheGame'), 'canUserVoteForManOfTheGame')
      sportunity.setLinkedRecord(newSportunity.getLinkedRecord('price'), 'price')

      onCompleted()
    },
    onError
  })
}

export default {commit}
