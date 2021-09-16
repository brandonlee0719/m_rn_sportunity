import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateCicleMutation($input: updateCircleInput!) {
    updateCircle(input: $input) {
      edge {
        node {
          id
          name,
          mode,
          isCircleAccessibleFromUrl,
          isCircleUsableByMembers,
          circlePreferences {
            isChildrenCircle
          },
          sport {
            sport {
              id,
              logo
              name {
                  EN,
                  FR,
              }
            }
            levels {
              id,
              EN {
                  name,
                  skillLevel
              }
              FR {
                  name,
                  skillLevel
              }
            }
          },
          address {
            address,
            city,
            zip, 
            country
          },
          description,
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
     /* const payload = store.getRootField('updateCircle');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.circleId);

      currentItem.setLinkedRecord(newItem.getLinkedRecord('bankAccount'), 'bankAccount')*/
      onCompleted()
    },
    onError
  })
}

export default {commit}

