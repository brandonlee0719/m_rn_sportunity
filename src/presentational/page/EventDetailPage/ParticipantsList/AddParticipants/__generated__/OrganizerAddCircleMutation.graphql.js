/**
 * @flow
 * @relayHash 011268f701e235bf058fc7923ea6d0dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type cancelBookinStatus = "PENDING" | "REFUSED_BY_ORGANIZER" | "REPLACED" | "%future added value";
export type invitedUserAnswer = "NO" | "WAITING" | "YES" | "%future added value";
export type organizerAddInvitedCirclesInput = {
  sportunityID: string,
  invitedCircles: $ReadOnlyArray<?string>,
  clientMutationId?: ?string,
};
export type OrganizerAddCircleMutationVariables = {|
  input: organizerAddInvitedCirclesInput
|};
export type OrganizerAddCircleMutationResponse = {|
  +organizerAddInvitedCircles: ?{|
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
        +invited_circles: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: ?string,
              +mode: CircleKind,
              +memberCount: number,
              +type: ?CircleTypeEnum,
              +owner: ?{|
                +id: string,
                +avatar: ?string,
                +pseudo: string,
              |},
              +members: ?$ReadOnlyArray<?{|
                +id: string,
                +pseudo: string,
              |}>,
            |}
          |}>
        |},
      |}
    |},
  |}
|};
export type OrganizerAddCircleMutation = {|
  variables: OrganizerAddCircleMutationVariables,
  response: OrganizerAddCircleMutationResponse,
|};
*/


/*
mutation OrganizerAddCircleMutation(
  $input: organizerAddInvitedCirclesInput!
) {
  organizerAddInvitedCircles(input: $input) {
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
        invited_circles(last: 100) {
          edges {
            node {
              id
              name
              mode
              memberCount
              type
              owner {
                id
                avatar
                pseudo
              }
              members {
                id
                pseudo
              }
            }
          }
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
    "type": "organizerAddInvitedCirclesInput!",
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v5 = [
  v1,
  v3,
  v4
],
v6 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "organizerAddInvitedCircles",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "organizerAddInvitedCirclesInput!"
      }
    ],
    "concreteType": "organizerAddInvitedCirclesPayload",
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
                "selections": v5
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "waiting",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v5
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "willing",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v5
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
                    "selections": v5
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
                    "selections": v5
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "invited_circles",
                "storageKey": "invited_circles(last:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  }
                ],
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Circle",
                        "plural": false,
                        "selections": [
                          v1,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "mode",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "memberCount",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "type",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "owner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v1,
                              v4,
                              v3
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "members",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": [
                              v1,
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
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "OrganizerAddCircleMutation",
  "id": null,
  "text": "mutation OrganizerAddCircleMutation(\n  $input: organizerAddInvitedCirclesInput!\n) {\n  organizerAddInvitedCircles(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        id\n        status\n        participants {\n          id\n          pseudo\n          avatar\n        }\n        waiting {\n          id\n          pseudo\n          avatar\n        }\n        willing {\n          id\n          pseudo\n          avatar\n        }\n        canceling {\n          canceling_user {\n            id\n            pseudo\n            avatar\n          }\n          status\n          cancelation_date\n        }\n        invited {\n          user {\n            id\n            pseudo\n            avatar\n          }\n          answer\n        }\n        invited_circles(last: 100) {\n          edges {\n            node {\n              id\n              name\n              mode\n              memberCount\n              type\n              owner {\n                id\n                avatar\n                pseudo\n              }\n              members {\n                id\n                pseudo\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizerAddCircleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v6
  },
  "operation": {
    "kind": "Operation",
    "name": "OrganizerAddCircleMutation",
    "argumentDefinitions": v0,
    "selections": v6
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '80ed4abdab274f9f0e17e085640529ea';
module.exports = node;
