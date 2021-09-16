import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation SportListMutation($input: upUserInput!) {
    upUser(input: $input) {
      clientMutationId,
      user {
        id 
        isPublicProfileComplete
        sports {
          sport{
            id,
            name{
              id,
              EN,
              FR
            },
            logo,
            positions{
              id,
              EN,
              FR
            },
            certificates{
              id,
              name{
                id,
                EN,
                FR
              }
            },
            levels{
              id,
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
          positions{
            id
            EN,
            FR
          },
          certificates{
            validation
            certificate{
              id,
              name{
                id,
                EN,
                FR
              }
            }
          },
          levels{
            id,
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

      currentItem.setLinkedRecords(newItem.getLinkedRecords('sports'), 'sports')
      onCompleted()
    },
    onError
  })
}

export default {commit}

