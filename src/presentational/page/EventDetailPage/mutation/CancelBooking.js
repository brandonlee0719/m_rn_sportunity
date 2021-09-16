import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation CancelBookingMutation($input: updateSportunityInput!) {
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
      onCompleted()
    },
    onError
  })
}

export default {commit}
