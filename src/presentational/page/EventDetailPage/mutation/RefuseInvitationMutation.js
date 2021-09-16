import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation RefuseInvitationMutation($input: updateSportunityInput!) {
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
      const newItem = payload.getLinkedRecord('edge').getLinkedRecord('node');
      let currentItem = store.get(input.sportunityID);
      
      currentItem.setValue('status', newItem.getValue('status'))
      currentItem.setLinkedRecords(newItem.getLinkedRecords('participants'), 'participants')
      currentItem.setLinkedRecords(newItem.getLinkedRecords('waiting'), 'waiting')
      currentItem.setLinkedRecords(newItem.getLinkedRecords('willing'), 'willing')
      currentItem.setLinkedRecords(newItem.getLinkedRecords('canceling'), 'canceling')
      currentItem.setLinkedRecords(newItem.getLinkedRecords('invited'), 'invited')
      onCompleted()
    },
    onError
  })
}

export default {commit}