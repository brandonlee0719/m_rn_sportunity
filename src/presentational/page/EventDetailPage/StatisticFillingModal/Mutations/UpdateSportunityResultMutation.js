import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateSportunityResultMutation($input: updateSportunityInput!) {
    updateSportunity(input: $input) {
        clientMutationId,
        edge {
            node {
                sportunityTypeStatus {
                    id,
                    name {
                        FR, 
                        EN
                    }
                }
                score {
                    currentTeam,
                    adversaryTeam
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

      sportunity.setLinkedRecord(newSportunity.getLinkedRecord('sportunityTypeStatus'), 'sportunityTypeStatus')
      sportunity.setLinkedRecord(newSportunity.getLinkedRecord('score'), 'score')
      onCompleted()
    },
    onError
  })
}

export default {commit}

