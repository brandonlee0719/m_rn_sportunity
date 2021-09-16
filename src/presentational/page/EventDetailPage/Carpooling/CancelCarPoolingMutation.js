import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation CancelCarPoolingMutation($input: deleteCarPoolingInput!) {
    deleteCarPooling(input: $input) {
      clientMutationId,
      edge {
        node {
          id
          carPoolings {
            id,
            driver {
              id,
              pseudo,
              avatar
            },
            address {
              address,
              city,
              zip,
              country
            },
            starting_date,
            number_of_sits
            passengers {
              id,
              pseudo,
              avatar
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
      const payload = store.getRootField('deleteCarPooling');
      const carPoolings = payload.getLinkedRecord('edge').getLinkedRecord('node').getLinkedRecords('carPoolings');
      let sportunity = store.get(input.sportunityID);

      sportunity.setValue('carPoolings', carPoolings)
      onCompleted()
    },
    onError
  })
}

export default {commit}