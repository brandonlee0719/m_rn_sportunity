/**
 * @flow
 * @relayHash 2eb35c01ae5a89dc3c5804bed2bf104c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type unfollowUserInput = {
  userID?: ?string,
  clientMutationId?: ?string,
};
export type UnfollowMutationVariables = {|
  input: unfollowUserInput
|};
export type UnfollowMutationResponse = {|
  +unfollowUser: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string,
        +followers: ?$ReadOnlyArray<?{|
          +id: string
        |}>,
      |}
    |},
  |}
|};
export type UnfollowMutation = {|
  variables: UnfollowMutationVariables,
  response: UnfollowMutationResponse,
|};
*/


/*
mutation UnfollowMutation(
  $input: unfollowUserInput!
) {
  unfollowUser(input: $input) {
    clientMutationId
    viewer {
      me {
        id
        followers {
          id
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
    "type": "unfollowUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "unfollowUserInput!"
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
      "name": "followers",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": [
        v3
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UnfollowMutation",
  "id": null,
  "text": "mutation UnfollowMutation(\n  $input: unfollowUserInput!\n) {\n  unfollowUser(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n        followers {\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UnfollowMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unfollowUser",
        "storageKey": null,
        "args": v1,
        "concreteType": "unfollowUserPayload",
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
              v4
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UnfollowMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unfollowUser",
        "storageKey": null,
        "args": v1,
        "concreteType": "unfollowUserPayload",
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
              v4,
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
(node/*: any*/).hash = '7122921204407e0f2d6df021ad64f341';
module.exports = node;
