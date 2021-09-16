import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateSportunityTypeMutation($input: updateSportunityInput!) {
    updateSportunity(input: $input) {
        clientMutationId,
        edge {
            node {
                id
                sportunityType {
                    id,
                    name {
                        FR,
                        EN,
                    },
                    statuses {
                        id,
                        name {
                            FR,
                            EN
                        }
                    }
                    isScoreRelevant
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

      sportunity.setValue(newSportunity.getValue('sportunityType'), 'sportunityType')
      onCompleted()
    },
    onError
  })
}

export default {commit}
