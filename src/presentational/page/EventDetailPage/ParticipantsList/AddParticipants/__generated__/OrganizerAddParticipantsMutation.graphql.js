/**
 * @flow
 * @relayHash c47620e46cb7a0f8d5d58c01cb4303f7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type cancelBookinStatus = "PENDING" | "REFUSED_BY_ORGANIZER" | "REPLACED" | "%future added value";
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
export type organizerAddParticipantsInput = {
  sportunityID: string,
  participants: $ReadOnlyArray<?ParticipantListToAdd>,
  putParticipantsInCircle?: ?string,
  clientMutationId?: ?string,
};
export type ParticipantListToAdd = {
  participantId?: ?string,
  participantPseudo?: ?string,
  participantEmail?: ?string,
};
export type OrganizerAddParticipantsMutationVariables = {|
  input: organizerAddParticipantsInput
|};
export type OrganizerAddParticipantsMutationResponse = {|
  +organizerAddParticipants: ?{|
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
      |}
    |},
  |}
|};
export type OrganizerAddParticipantsMutation = {|
  variables: OrganizerAddParticipantsMutationVariables,
  response: OrganizerAddParticipantsMutationResponse,
|};
*/


/*
mutation OrganizerAddParticipantsMutation(
  $input: organizerAddParticipantsInput!
) {
  organizerAddParticipants(input: $input) {
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
    "type": "organizerAddParticipantsInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v3 = [
  v1,
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
v4 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "organizerAddParticipants",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "organizerAddParticipantsInput!"
      }
    ],
    "concreteType": "organizerAddParticipantsPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
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
              v1,
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participants",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v3
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "waiting",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v3
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "willing",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v3
              },
              {
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
                    "selections": v3
                  },
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cancelation_date",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
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
                    "selections": v3
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "answer",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "OrganizerAddParticipantsMutation",
  "id": null,
  "text": "mutation OrganizerAddParticipantsMutation(\n  $input: organizerAddParticipantsInput!\n) {\n  organizerAddParticipants(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        id\n        status\n        participants {\n          id\n          pseudo\n          avatar\n        }\n        waiting {\n          id\n          pseudo\n          avatar\n        }\n        willing {\n          id\n          pseudo\n          avatar\n        }\n        canceling {\n          canceling_user {\n            id\n            pseudo\n            avatar\n          }\n          status\n          cancelation_date\n        }\n        invited {\n          user {\n            id\n            pseudo\n            avatar\n          }\n          answer\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizerAddParticipantsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v4
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizerAddParticipantsMutation",
    "argumentDefinitions": v0,
    "selections": v4
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd6416e8a75417fc2ea6ad2c4a5c43eba';
module.exports = node;
