/**
 * @flow
 * @relayHash 6416377fae62d8fac278d6b089b7a027
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CircleMemberStatus = "ACTIVE" | "INACTIVE" | "INJURED" | "OTHER" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type SportunityMode = "FCFS" | "ORGANIZER_PICK" | "RANDOM" | "%future added value";
export type SportunityNotificationPreference = "Automatically" | "Manually" | "Now" | "%future added value";
export type SportunityPrivacySwitchPreference = "Automatically" | "Manually" | "%future added value";
export type ValidationStatus = "PENDING" | "REJECTED" | "TO_BE_VALIDATED" | "VALIDATED" | "%future added value";
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
export type updateSportunityInput = {
  sportunityID: string,
  sportunity?: ?SportunityUpdateInput,
  notify_people?: ?boolean,
  clientMutationId?: ?string,
};
export type SportunityUpdateInput = {
  title?: ?string,
  description?: ?string,
  address?: ?AddressInput,
  venue?: ?string,
  infrastructure?: ?string,
  slot?: ?string,
  organizers?: ?$ReadOnlyArray<?OrganizerInput>,
  pendingOrganizers?: ?$ReadOnlyArray<?PendingOrganizerInput>,
  secondaryOrganizersPaymentMethod?: ?string,
  secondaryOrganizersPaymentByWallet?: ?boolean,
  sport?: ?SportunitySportInput,
  nbShares?: ?number,
  price?: ?PriceInput,
  participantRange?: ?IntIntervalInput,
  mode?: ?SportunityMode,
  kind?: ?SportunityKind,
  randomDate?: ?string,
  ageRestriction?: ?IntIntervalInput,
  sexRestriction?: ?SexRestriction,
  beginning_date?: ?string,
  ending_date?: ?string,
  survey_dates?: ?$ReadOnlyArray<?SurveyDatesUpdateInput>,
  cancel_date?: ?string,
  fees?: ?number,
  participants?: ?string,
  canceling?: ?string,
  canceling_reason?: ?string,
  invited?: ?$ReadOnlyArray<?InvitedInput>,
  invited_circles?: ?$ReadOnlyArray<?string>,
  price_for_circle?: ?$ReadOnlyArray<?InvitedCircleInput>,
  creation_status?: ?SportunityStatusInput,
  paymentMethodId?: ?string,
  paymentByWallet?: ?boolean,
  notification_preference?: ?NotificationPreferenceUpdateInput,
  privacy_switch_preference?: ?PrivacySwitchPreferenceUpdateInput,
  modifyRepeatedSportunities?: ?boolean,
  hide_participant_list?: ?boolean,
  sportunityType?: ?string,
  sportunityTypeStatus?: ?string,
  score?: ?ScoreInput,
  game_information?: ?GameInformationUpdateInput,
  externalReference?: ?string,
};
export type AddressInput = {
  address: string,
  country: string,
  city: string,
  zip?: ?string,
};
export type OrganizerInput = {
  organizer: string,
  isAdmin: boolean,
  role: OrganizerRole,
  price?: ?PriceInput,
  secondaryOrganizerType?: ?string,
  customSecondaryOrganizerType?: ?string,
  permissions?: ?coOrganizersInputPermissions,
};
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type coOrganizersInputPermissions = {
  detailsAccess?: ?coOrganizersInputDetailsAccess,
  chatAccess?: ?coOrganizersInputChatAccess,
  memberAccess?: ?coOrganizersInputMemberAccess,
  carPoolingAccess?: ?coOrganizersInputCarPoolingAccess,
  imageAccess?: ?coOrganizersInputImageAccess,
  compositionAccess?: ?coOrganizersInputCompositionAccess,
};
export type coOrganizersInputDetailsAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputChatAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputMemberAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputCarPoolingAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputImageAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type coOrganizersInputCompositionAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type PendingOrganizerInput = {
  id?: ?string,
  circles: $ReadOnlyArray<?string>,
  isAdmin: boolean,
  role: OrganizerRole,
  price?: ?PriceInput,
  secondaryOrganizerType?: ?string,
  customSecondaryOrganizerType?: ?string,
  permissions?: ?pendingCoOrganizersInputPermissions,
};
export type pendingCoOrganizersInputPermissions = {
  detailsAccess?: ?pendingCoOrganizersInputDetailsAccess,
  chatAccess?: ?pendingCoOrganizersInputChatAccess,
  memberAccess?: ?pendingCoOrganizersInputMemberAccess,
  carPoolingAccess?: ?pendingCoOrganizersInputCarPoolingAccess,
  imageAccess?: ?pendingCoOrganizersInputImageAccess,
  compositionAccess?: ?pendingCoOrganizersInputCompositionAccess,
};
export type pendingCoOrganizersInputDetailsAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputChatAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputMemberAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputCarPoolingAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputImageAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type pendingCoOrganizersInputCompositionAccess = {
  view?: ?boolean,
  edit?: ?boolean,
};
export type SportunitySportInput = {
  sport: string,
  allLevelSelected?: ?boolean,
  levels?: ?$ReadOnlyArray<?string>,
  certificates?: ?$ReadOnlyArray<?string>,
  positions?: ?$ReadOnlyArray<?string>,
};
export type IntIntervalInput = {
  from: number,
  to: number,
};
export type SurveyDatesUpdateInput = {
  beginning_date?: ?string,
  ending_date?: ?string,
};
export type InvitedInput = {
  user?: ?string,
  pseudo?: ?string,
  answer: invitedUserAnswer,
};
export type InvitedCircleInput = {
  circle?: ?string,
  price?: ?PriceInput,
  participantByDefault?: ?boolean,
  excludedParticipantByDefault?: ?excludedParticipantByDefaultInput,
  excludedInvitees?: ?excludedInviteesInput,
};
export type excludedParticipantByDefaultInput = {
  excludedStatus?: ?$ReadOnlyArray<?CircleMemberStatus>,
  excludedMembers?: ?$ReadOnlyArray<?string>,
  excludeParents?: ?boolean,
};
export type excludedInviteesInput = {
  excludedStatus?: ?$ReadOnlyArray<?CircleMemberStatus>,
  excludedMembers?: ?$ReadOnlyArray<?string>,
  excludeParents?: ?boolean,
};
export type SportunityStatusInput = {
  status?: ?ValidationStatus,
  reason?: ?string,
};
export type NotificationPreferenceUpdateInput = {
  notification_type?: ?SportunityNotificationPreference,
  send_notification_x_days_before?: ?number,
};
export type PrivacySwitchPreferenceUpdateInput = {
  privacy_switch_type?: ?SportunityPrivacySwitchPreference,
  switch_privacy_x_days_before?: ?number,
};
export type ScoreInput = {
  currentTeam?: ?number,
  adversaryTeam?: ?number,
};
export type GameInformationUpdateInput = {
  opponent?: ?SportunityOpponentUpdateInput
};
export type SportunityOpponentUpdateInput = {
  organizer?: ?string,
  organizerEmail?: ?string,
  organizerPseudo?: ?string,
  event?: ?string,
  lookingForAnOpponent?: ?boolean,
  unknownOpponent?: ?boolean,
  invitedOpponents?: ?$ReadOnlyArray<?string>,
};
export type UpdateOrganizerPermissionsMutationVariables = {|
  input: updateSportunityInput
|};
export type UpdateOrganizerPermissionsMutationResponse = {|
  +updateSportunity: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +organizers: ?$ReadOnlyArray<?{|
          +organizer: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
            +feedbacks: ?{|
              +feedbacksList: ?{|
                +edges: ?$ReadOnlyArray<?{|
                  +node: ?{|
                    +author: ?{|
                      +id: string
                    |}
                  |}
                |}>
              |}
            |},
          |},
          +isAdmin: boolean,
          +role: OrganizerRole,
          +secondaryOrganizerType: ?{|
            +id: string,
            +name: ?{|
              +FR: ?string,
              +EN: ?string,
              +DE: ?string,
              +ES: ?string,
            |},
          |},
          +customSecondaryOrganizerType: ?string,
          +price: ?{|
            +cents: number,
            +currency: ?Currency,
          |},
          +permissions: ?{|
            +chatAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +memberAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +carPoolingAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +imageAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +detailsAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
            +compositionAccess: ?{|
              +view: ?boolean,
              +edit: ?boolean,
            |},
          |},
        |}>
      |}
    |},
  |}
|};
export type UpdateOrganizerPermissionsMutation = {|
  variables: UpdateOrganizerPermissionsMutationVariables,
  response: UpdateOrganizerPermissionsMutationResponse,
|};
*/


/*
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
                    id
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
              id
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
          id
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateSportunityInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateSportunityInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100,
    "type": "Int"
  }
],
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "author",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v3
  ]
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isAdmin",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "role",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "FR",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "EN",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "DE",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ES",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "customSecondaryOrganizerType",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cents",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "currency",
      "args": null,
      "storageKey": null
    }
  ]
},
v16 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "view",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "edit",
    "args": null,
    "storageKey": null
  }
],
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "permissions",
  "storageKey": null,
  "args": null,
  "concreteType": "coOrganizersPermissions",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "chatAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersChatAccess",
      "plural": false,
      "selections": v16
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "memberAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersMemberAccess",
      "plural": false,
      "selections": v16
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "carPoolingAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersCarPoolingAccess",
      "plural": false,
      "selections": v16
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "imageAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersImageAccess",
      "plural": false,
      "selections": v16
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "detailsAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersDetailsAccess",
      "plural": false,
      "selections": v16
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "compositionAccess",
      "storageKey": null,
      "args": null,
      "concreteType": "coOrganizersCompositionAccess",
      "plural": false,
      "selections": v16
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateOrganizerPermissionsMutation",
  "id": null,
  "text": "mutation UpdateOrganizerPermissionsMutation(\n  $input: updateSportunityInput!\n) {\n  updateSportunity(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        organizers {\n          organizer {\n            id\n            pseudo\n            avatar\n            feedbacks {\n              feedbacksList(last: 100) {\n                edges {\n                  node {\n                    author {\n                      id\n                    }\n                    id\n                  }\n                }\n              }\n            }\n          }\n          isAdmin\n          role\n          secondaryOrganizerType {\n            id\n            name {\n              FR\n              EN\n              DE\n              ES\n              id\n            }\n          }\n          customSecondaryOrganizerType\n          price {\n            cents\n            currency\n          }\n          permissions {\n            chatAccess {\n              view\n              edit\n            }\n            memberAccess {\n              view\n              edit\n            }\n            carPoolingAccess {\n              view\n              edit\n            }\n            imageAccess {\n              view\n              edit\n            }\n            detailsAccess {\n              view\n              edit\n            }\n            compositionAccess {\n              view\n              edit\n            }\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateOrganizerPermissionsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSportunity",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateSportunityPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "SportunityEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organizers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organizer",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organizer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          v3,
                          v4,
                          v5,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "feedbacks",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Feedbacks",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "feedbacksList",
                                "storageKey": "feedbacksList(last:100)",
                                "args": v6,
                                "concreteType": "FeedbackConnection",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "FeedbackEdge",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Feedback",
                                        "plural": false,
                                        "selections": [
                                          v7
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      v8,
                      v9,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "secondaryOrganizerType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v10,
                              v11,
                              v12,
                              v13
                            ]
                          }
                        ]
                      },
                      v14,
                      v15,
                      v17
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateOrganizerPermissionsMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSportunity",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateSportunityPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "SportunityEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Sportunity",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organizers",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Organizer",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "organizer",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          v3,
                          v4,
                          v5,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "feedbacks",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Feedbacks",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "feedbacksList",
                                "storageKey": "feedbacksList(last:100)",
                                "args": v6,
                                "concreteType": "FeedbackConnection",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "FeedbackEdge",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Feedback",
                                        "plural": false,
                                        "selections": [
                                          v7,
                                          v3
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      },
                      v8,
                      v9,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "secondaryOrganizerType",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AssistantType",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "name",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": false,
                            "selections": [
                              v10,
                              v11,
                              v12,
                              v13,
                              v3
                            ]
                          }
                        ]
                      },
                      v14,
                      v15,
                      v17,
                      v3
                    ]
                  },
                  v3
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '59191a97eb7061d869b3f5bd90644a26';
module.exports = node;
