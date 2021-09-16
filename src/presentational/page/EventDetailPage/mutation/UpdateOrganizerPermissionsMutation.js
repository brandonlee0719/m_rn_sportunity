import {commitMutation, graphql} from 'react-relay';
import environment from 'sportunity/src/createRelayEnvironment';

const mutation = graphql`
  mutation UpdateOrganizerPermissionsMutation(
    $input: updateSportunityInput!
  ) {
    updateSportunity(input: $input) {
      clientMutationId
      edge {
        node {
          organizers {
            organizer {
              id
              pseudo
              avatar
              feedbacks {
                feedbacksList(last: 100) {
                  edges {
                    node {
                      author {
                        id
                      }
                    }
                  }
                }
              }
            }
            isAdmin
            role
            secondaryOrganizerType {
              id
              name {
                FR
                EN
                DE
                ES
              }
            }
            customSecondaryOrganizerType
            price {
              cents
              currency
            }
            permissions {
              chatAccess {
                view
                edit
              }
              memberAccess {
                view
                edit
              }
              carPoolingAccess {
                view
                edit
              }
              imageAccess {
                view
                edit
              }
              detailsAccess {
                view
                edit
              }
              compositionAccess {
                view
                edit
              }
            }
          }
        }
      }
    }
  }
`;

function commit(input, { onSuccess: onCompleted, onFailure: onError }) {
    return commitMutation(environment, {
        mutation,
        variables: {
            input: {
                sportunityID: input.sportunityID,
                sportunity: {
                    organizers: input.sportunity.organizers,
                },
            },
        },
        updater: store => {
            const payload = store.getRootField('updateSportunity');
            const newItem = payload.getLinkedRecord('edge').getLinkedRecord('node');
            const currentItem = store.get(input.sportunityID);
            currentItem.setLinkedRecords(
                newItem.getLinkedRecords('organizers'),
                'organizers',
            );
            onCompleted();
        },
        onError,
    });
}

export default { commit };
