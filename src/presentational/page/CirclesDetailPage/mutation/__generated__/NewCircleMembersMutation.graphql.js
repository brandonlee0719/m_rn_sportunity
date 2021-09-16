/**
 * @flow
 * @relayHash 665cc2226645831ead1792ab7ff16ddf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addCircleMembersInput = {
  circleId: string,
  users?: ?$ReadOnlyArray<?string>,
  clientMutationId?: ?string,
};
export type NewCircleMembersMutationVariables = {|
  input: addCircleMembersInput
|};
export type NewCircleMembersMutationResponse = {|
  +addCircleMembers: ?{|
    +clientMutationId: ?string,
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
    |},
  |}
|};
export type NewCircleMembersMutation = {|
  variables: NewCircleMembersMutationVariables,
  response: NewCircleMembersMutationResponse,
|};
*/


/*
mutation NewCircleMembersMutation(
  $input: addCircleMembersInput!
) {
  addCircleMembers(input: $input) {
    clientMutationId
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
    "type": "addCircleMembersInput!",
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
    "name": "addCircleMembers",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "addCircleMembersInput!"
      }
    ],
    "concreteType": "addCircleMembersPayload",
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
  "name": "NewCircleMembersMutation",
  "id": null,
  "text": "mutation NewCircleMembersMutation(\n  $input: addCircleMembersInput!\n) {\n  addCircleMembers(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        id\n        memberCount\n        members {\n          id\n          pseudo\n          email\n          firstName\n          lastName\n          avatar\n          lastConnexionDate\n        }\n        memberParents {\n          id\n          pseudo\n          avatar\n          lastConnexionDate\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewCircleMembersMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v5
  },
  "operation": {
    "kind": "Operation",
    "name": "NewCircleMembersMutation",
    "argumentDefinitions": v0,
    "selections": v5
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '739bcc8252c92badf41db3048de80e4c';
module.exports = node;
