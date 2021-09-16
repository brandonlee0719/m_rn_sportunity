/**
 * @flow
 * @relayHash 4e0d3a668ca8048fe2131ecb7823de16
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddUserModal_viewer$ref = any;
export type AddUserModalRefetchQueryVariables = {|
  pseudo?: ?string,
  requestUsersAutocompletion: boolean,
|};
export type AddUserModalRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AddUserModal_viewer$ref
  |}
|};
export type AddUserModalRefetchQuery = {|
  variables: AddUserModalRefetchQueryVariables,
  response: AddUserModalRefetchQueryResponse,
|};
*/


/*
query AddUserModalRefetchQuery(
  $pseudo: String
  $requestUsersAutocompletion: Boolean!
) {
  viewer {
    ...AddUserModal_viewer_2uPm7b
    id
  }
}

fragment AddUserModal_viewer_2uPm7b on Viewer {
  users(pseudo: $pseudo, last: 10) @include(if: $requestUsersAutocompletion) {
    edges {
      node {
        id
        pseudo
        avatar
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "pseudo",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "requestUsersAutocompletion",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AddUserModalRefetchQuery",
  "id": null,
  "text": "query AddUserModalRefetchQuery(\n  $pseudo: String\n  $requestUsersAutocompletion: Boolean!\n) {\n  viewer {\n    ...AddUserModal_viewer_2uPm7b\n    id\n  }\n}\n\nfragment AddUserModal_viewer_2uPm7b on Viewer {\n  users(pseudo: $pseudo, last: 10) @include(if: $requestUsersAutocompletion) {\n    edges {\n      node {\n        id\n        pseudo\n        avatar\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddUserModalRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AddUserModal_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "pseudo",
                "variableName": "pseudo",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "requestUsersAutocompletion",
                "variableName": "requestUsersAutocompletion",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddUserModalRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "requestUsersAutocompletion",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "users",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 10,
                    "type": "Int"
                  },
                  {
                    "kind": "Variable",
                    "name": "pseudo",
                    "variableName": "pseudo",
                    "type": "String"
                  }
                ],
                "concreteType": "UserConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '3677c5217e792b687eef95ba8ef6a889';
module.exports = node;
