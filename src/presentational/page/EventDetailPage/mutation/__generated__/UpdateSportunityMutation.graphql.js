/**
 * @flow
 * @relayHash a0baa2efbec8e04e41c59ffa4a435142
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CircleMemberStatus = "ACTIVE" | "INACTIVE" | "INJURED" | "OTHER" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type OrganizerRole = "COACH" | "VENUE" | "%future added value";
export type PaymentStatus = "Canceled" | "Done" | "Error" | "Locked" | "Pending" | "%future added value";
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type SportunityMode = "FCFS" | "ORGANIZER_PICK" | "RANDOM" | "%future added value";
export type SportunityNotificationPreference = "Automatically" | "Manually" | "Now" | "%future added value";
export type SportunityPrivacySwitchPreference = "Automatically" | "Manually" | "%future added value";
export type ValidationStatus = "PENDING" | "REJECTED" | "TO_BE_VALIDATED" | "VALIDATED" | "%future added value";
export type cancelBookinStatus = "PENDING" | "REFUSED_BY_ORGANIZER" | "REPLACED" | "%future added value";
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
export type UpdateSportunityMutationVariables = {|
  input: updateSportunityInput
|};
export type UpdateSportunityMutationResponse = {|
  +updateSportunity: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +id: string,
        +status: ?string,
        +participants: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |}>,
        +waiting: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |}>,
        +willing: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |}>,
        +canceling: ?$ReadOnlyArray<?{|
          +canceling_user: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
          +status: ?cancelBookinStatus,
          +cancelation_date: ?any,
        |}>,
        +invited: ?$ReadOnlyArray<?{|
          +user: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
          +answer: ?invitedUserAnswer,
        |}>,
        +canUserVoteForManOfTheGame: ?boolean,
        +manOfTheGameVotes: ?$ReadOnlyArray<?{|
          +voter: ?{|
            +id: string
          |},
          +votedFor: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
          +date: ?any,
        |}>,
        +paymentStatus: ?$ReadOnlyArray<?{|
          +user: ?{|
            +id: string
          |},
          +status: ?PaymentStatus,
          +price: ?{|
            +cents: number,
            +currency: ?Currency,
          |},
        |}>,
        +price: ?{|
          +cents: number,
          +currency: ?Currency,
        |},
      |}
    |},
  |}
|};
export type UpdateSportunityMutation = {|
  variables: UpdateSportunityMutationVariables,
  response: UpdateSportunityMutationResponse,
|};
*/


/*
mutation UpdateSportunityMutation(
  $input: updateSportunityInput!
) {
  updateSportunity(input: $input) {
    clientMutationId
    edge {
      node {
        id
        status
        participants {
          id
          pseudo
          avatar
        }
        waiting {
          id
          pseudo
          avatar
        }
        willing {
          id
          pseudo
          avatar
        }
        canceling {
          canceling_user {
            id
            pseudo
            avatar
          }
          status
          cancelation_date
        }
        invited {
          user {
            id
            pseudo
            avatar
          }
          answer
        }
        canUserVoteForManOfTheGame
        manOfTheGameVotes {
          voter {
            id
          }
          votedFor {
            id
            pseudo
            avatar
          }
          date
        }
        paymentStatus {
          user {
            id
          }
          status
          price {
            cents
            currency
          }
          id
        }
        price {
          cents
          currency
        }
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
v4 = [
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "canceling",
  "storageKey": null,
  "args": null,
  "concreteType": "Canceling",
  "plural": true,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "canceling_user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v4
    },
    v5,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "cancelation_date",
      "args": null,
      "storageKey": null
    }
  ]
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "participants",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v4
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "waiting",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v4
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "willing",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v4
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "invited",
  "storageKey": null,
  "args": null,
  "concreteType": "Invited",
  "plural": true,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v4
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "answer",
      "args": null,
      "storageKey": null
    }
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "canUserVoteForManOfTheGame",
  "args": null,
  "storageKey": null
},
v12 = [
  v3
],
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "manOfTheGameVotes",
  "storageKey": null,
  "args": null,
  "concreteType": "manOfTheGameVotes",
  "plural": true,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "voter",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v12
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "votedFor",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": v4
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }
  ]
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v12
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
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateSportunityMutation",
  "id": null,
  "text": "mutation UpdateSportunityMutation(\n  $input: updateSportunityInput!\n) {\n  updateSportunity(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        id\n        status\n        participants {\n          id\n          pseudo\n          avatar\n        }\n        waiting {\n          id\n          pseudo\n          avatar\n        }\n        willing {\n          id\n          pseudo\n          avatar\n        }\n        canceling {\n          canceling_user {\n            id\n            pseudo\n            avatar\n          }\n          status\n          cancelation_date\n        }\n        invited {\n          user {\n            id\n            pseudo\n            avatar\n          }\n          answer\n        }\n        canUserVoteForManOfTheGame\n        manOfTheGameVotes {\n          voter {\n            id\n          }\n          votedFor {\n            id\n            pseudo\n            avatar\n          }\n          date\n        }\n        paymentStatus {\n          user {\n            id\n          }\n          status\n          price {\n            cents\n            currency\n          }\n          id\n        }\n        price {\n          cents\n          currency\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSportunityMutation",
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
                  v6,
                  v3,
                  v7,
                  v8,
                  v9,
                  v5,
                  v10,
                  v11,
                  v13,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "paymentStatus",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityPaymentStatus",
                    "plural": true,
                    "selections": [
                      v14,
                      v5,
                      v15
                    ]
                  },
                  v15
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
    "name": "UpdateSportunityMutation",
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
                  v6,
                  v3,
                  v7,
                  v8,
                  v9,
                  v5,
                  v10,
                  v11,
                  v13,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "paymentStatus",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityPaymentStatus",
                    "plural": true,
                    "selections": [
                      v14,
                      v5,
                      v15,
                      v3
                    ]
                  },
                  v15
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
(node/*: any*/).hash = 'd68f5d1f0c6e0b27ab58a9831bb70689';
module.exports = node;
