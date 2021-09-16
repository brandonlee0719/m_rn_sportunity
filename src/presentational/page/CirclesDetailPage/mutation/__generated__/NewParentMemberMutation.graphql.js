/**
 * @flow
 * @relayHash e9f3d9619a0f55cf020d8aac5c99ab4b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addParentMemberInput = {
  circleId: string,
  parent1Id?: ?string,
  parent1Email?: ?string,
  parent2Id?: ?string,
  parent2Email?: ?string,
  childPseudo?: ?string,
  clientMutationId?: ?string,
};
export type NewParentMemberMutationVariables = {|
  input: addParentMemberInput
|};
export type NewParentMemberMutationResponse = {|
  +addParentMember: ?{|
    +edge: ?{|
      +node: ?{|
        +id: string,
        +memberCount: number,
        +members: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
          +email: ?any,
          +firstName: ?string,
          +lastName: ?string,
          +avatar: ?string,
          +lastConnexionDate: ?any,
        |}>,
        +memberParents: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
          +lastConnexionDate: ?any,
        |}>,
      |}
    |}
  |}
|};
export type NewParentMemberMutation = {|
  variables: NewParentMemberMutationVariables,
  response: NewParentMemberMutationResponse,
|};
*/


/*
mutation NewParentMemberMutation(
  $input: addParentMemberInput!
) {
  addParentMember(input: $input) {
    edge {
      node {
        id
        memberCount
        members {
          id
          pseudo
          email
          firstName
          lastName
          avatar
          lastConnexionDate
        }
        memberParents {
          id
          pseudo
          avatar
          lastConnexionDate
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
    "type": "addParentMemberInput!",
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastConnexionDate",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addParentMember",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "addParentMemberInput!"
      }
    ],
    "concreteType": "addParentMemberPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edge",
        "storageKey": null,
        "args": null,
        "concreteType": "CircleEdge",
        "plural": false,
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
                "name": "memberCount",
                "args": null,
                "storageKey": null
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
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "email",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "firstName",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lastName",
                    "args": null,
                    "storageKey": null
                  },
                  v3,
                  v4
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "memberParents",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1,
                  v2,
                  v3,
                  v4
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
  "name": "NewParentMemberMutation",
  "id": null,
  "text": "mutation NewParentMemberMutation(\n  $input: addParentMemberInput!\n) {\n  addParentMember(input: $input) {\n    edge {\n      node {\n        id\n        memberCount\n        members {\n          id\n          pseudo\n          email\n          firstName\n          lastName\n          avatar\n          lastConnexionDate\n        }\n        memberParents {\n          id\n          pseudo\n          avatar\n          lastConnexionDate\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewParentMemberMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v5
  },
  "operation": {
    "kind": "Operation",
    "name": "NewParentMemberMutation",
    "argumentDefinitions": v0,
    "selections": v5
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '010c9a0c9c427b62754d0edb528a40e1';
module.exports = node;
