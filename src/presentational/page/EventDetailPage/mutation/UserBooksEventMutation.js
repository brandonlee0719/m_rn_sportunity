import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UserBooksEventMutation($input: userBooksEventInput!) {
    userBooksEvent(input: $input) {
        clientMutationId,
        secure3DURL
        sportunity {
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
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input
    },
    updater: (store) => {
      const payload = store.getRootField('userBooksEvent');
      if (!payload) return 
      const newSportunity = payload.getLinkedRecord('sportunity')
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
    },
    onCompleted: (response, errors) => {
        if (errors && errors.length > 0) {
            onError(errors);
        }
        else {
            onCompleted(response)
        }
    },
    onError
  })
}

export default {commit}
