/**
 * @flow
 * @relayHash 39556935bdd49e707919a4ad3af11eb3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteUserInput = {
  userId: string,
  clientMutationId?: ?string,
};
export type DeleteUserMutationVariables = {|
  input: deleteUserInput
|};
export type DeleteUserMutationResponse = {|
  +deleteUser: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string,
        +subAccounts: ?$ReadOnlyArray<?{|
          +id: string,
          +pseudo: string,
          +email: ?any,
          +avatar: ?string,
          +authorized_managers: ?$ReadOnlyArray<?{|
            +user: ?{|
              +id: string,
              +avatar: ?string,
              +pseudo: string,
            |}
          |}>,
        |}>,
      |}
    |},
  |}
|};
export type DeleteUserMutation = {|
  variables: DeleteUserMutationVariables,
  response: DeleteUserMutationResponse,
|};
*/


/*
mutation DeleteUserMutation(
  $input: deleteUserInput!
) {
  deleteUser(input: $input) {
    clientMutationId
    viewer {
      me {
        id
        subAccounts {
          id
          pseudo
          email
          avatar
          authorized_managers {
            user {
              id
              avatar
              pseudo
            }
          }
        }
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "deleteUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "deleteUserInput!"
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
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "me",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "subAccounts",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": [
        v3,
        v4,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "email",
          "args": null,
          "storageKey": null
        },
        v5,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "authorized_managers",
          "storageKey": null,
          "args": null,
          "concreteType": "AuthorizedManager",
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
              "selections": [
                v3,
                v5,
                v4
              ]
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteUserMutation",
  "id": null,
  "text": "mutation DeleteUserMutation(\n  $input: deleteUserInput!\n) {\n  deleteUser(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n        subAccounts {\n          id\n          pseudo\n          email\n          avatar\n          authorized_managers {\n            user {\n              id\n              avatar\n              pseudo\n            }\n          }\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteUser",
        "storageKey": null,
        "args": v1,
        "concreteType": "deleteUserPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v6
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteUserMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteUser",
        "storageKey": null,
        "args": v1,
        "concreteType": "deleteUserPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v6,
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b4c72b8abb3649d26542b28b08d3dcc0';
module.exports = node;
