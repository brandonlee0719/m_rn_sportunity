import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';
// TODO defaultSavedCircleFilter
const mutation = graphql`
  mutation SaveDefaultCircleFilterMutation($input: setDefaultCircleFilterInput!) {
    setDefaultCircleFilter(input: $input) {
      clientMutationId,
      viewer {
        me {
          id
          defaultSavedCircleFilter {
            id
            filterName
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
            location {
              lat,
              lng,
              radius,
            }
            circleType
            memberType
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
      input: {
        filterID: input.filterIDVar
      }
    },
    updater: (store) => {
      const payload = store.getRootField('setDefaultCircleFilter');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecord(newItem.getLinkedRecord('defaultSavedCircleFilter'), 'defaultSavedCircleFilter')
      onCompleted()
    },
    onError
  })
}

export default {commit}
