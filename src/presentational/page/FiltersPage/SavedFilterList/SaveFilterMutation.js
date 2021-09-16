import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation SaveFilterMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id
        savedFilters {
          id
          filterName
          status
          statuses
          page
          users {
            id
            pseudo
          }
          subAccounts {
            id
            pseudo
          }
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
`;

function commit(input, onCompleted, onError) {
  return commitMutation(environment, {
    mutation, 
    variables: {
      input
    },
    updater: (store) => {
      const payload = store.getRootField('upUser');
      const newItem = payload.getLinkedRecord('user')
      let currentItem = store.get(input.userID);

      currentItem.setLinkedRecords(newItem.getLinkedRecords('savedFilters'), 'savedFilters')
      onCompleted()
    },
    onError
  })
}

export default {commit}

