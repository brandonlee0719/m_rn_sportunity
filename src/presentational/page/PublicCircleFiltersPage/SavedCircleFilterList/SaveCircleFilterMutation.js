import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation SaveCircleFilterMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id
        basicCircleSavedFiltersCreated,
        savedCircleFilters {
          id
          filterName
          location {
            lat
            lng
            radius
          }
          sport {
            sport {
              id,
              name {
                EN,
                FR
              },
              logo
              levels {
                id
                EN {
                  name,
                  description,
                  skillLevel
                },
                FR {
                  name,
                  description,
                  skillLevel
                }
              }
            },
            levels {
              id
              EN {
                name,
                description,
                skillLevel
              },
              FR {
                name,
                description,
                skillLevel
              }
            }
          }
          circleType
          memberTypes
          modes
          owners {
            id
            pseudo
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
      const newItem = payload.getLinkedRecord('user');
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('savedCircleFilters'), 'savedCircleFilters')
      currentItem.setValue(newItem.getValue('basicCircleSavedFiltersCreated'), 'basicCircleSavedFiltersCreated');
      onCompleted()
    },
    onError
  })
}

export default {commit}
