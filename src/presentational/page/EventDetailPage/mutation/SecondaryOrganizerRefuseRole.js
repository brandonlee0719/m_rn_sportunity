import { commitMutation, graphql } from "react-relay";
import environment from "sportunity/src/createRelayEnvironment";

const mutation = graphql`
  mutation SecondaryOrganizerRefuseRoleMutation(
    $input: secondaryOrganizerRefuseRoleInput!
  ) {
    secondaryOrganizerRefuseRole(input: $input) {
      clientMutationId
      edge {
        node {
          organizers {
            isAdmin
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
            organizer {
              id
              pseudo
              sportunityNumber
              feedbacks {
                averageRating
                count
              }
              sports {
                levels {
                  EN {
                    name
                  }
                }
              }
              address {
                address
                country
                city
                zip
                position {
                  lat
                  lng
                }
              }
              pseudo
              avatar
              followers {
                id
              }
            }
            permissions {
              detailsAccess {
                view
                edit
              }
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
              compositionAccess {
                view
                edit
              }
            }
            ...ButtonFeedback_organizers
          }
          pendingOrganizers {
            id
            circles(last: 20) {
              edges {
                node {
                  id
                  members {
                    id
                  }
                  name
                  memberCount
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
              detailsAccess {
                view
                edit
              }
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
              compositionAccess {
                view
                edit
              }
            }
          }
          status
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
    updater: store => {
      const payload = store.getRootField("secondaryOrganizerRefuseRole");
      const newSportunity = payload
        .getLinkedRecord("edge")
        .getLinkedRecord("node");
      let sportunity = store.get(input.sportunityID);

      sportunity.setLinkedRecords(
        newSportunity.getLinkedRecords("organizers"),
        "organizers"
      );
      sportunity.setLinkedRecords(
        newSportunity.getLinkedRecords("pendingOrganizers"),
        "pendingOrganizers"
      );
      sportunity.setValue(newSportunity.getValue("status"), "status");
      onCompleted();
    },
    onError
  });
}

export default { commit };
