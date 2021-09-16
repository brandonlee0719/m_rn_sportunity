import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation SetDefaultFilterMutation($input: setDefaultFilterInput!) {
    setDefaultFilter(input: $input) {
      clientMutationId,
      viewer {
        me {
          id
          defaultSavedFilter {
            id
            filterName
            status
            statuses
            page
            circles (last: 20) { 
              edges {
                node {
                  id
                  name
                  owner {
                    id
                    pseudo
                    avatar
                  }
                }
              }
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
            location {
              lat,
              lng,
              radius,
            }
            dates {
              from
              to
            }
            price {
              from
              to
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
      input: {
        filterID: input.filterIDVar
      }
    },
    updater: (store) => {
      const payload = store.getRootField('setDefaultFilter');
      const newItem = payload.getLinkedRecord('viewer').getLinkedRecord('me');
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecord(newItem.getLinkedRecord('defaultSavedFilter'), 'defaultSavedFilter')
      onCompleted()
    },
    onError
  })
}

export default {commit}
