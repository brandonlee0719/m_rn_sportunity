/**
 * @flow
 * @relayHash 6f3c53be17254521b229404d681ffe1b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OpponentModal_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
export type OpponentModalRefetchQueryVariables = {|
  pseudo?: ?string,
  email?: ?string,
  requestUsersAutocompletion: boolean,
  requestUsersByEmail: boolean,
  userType?: ?UserProfileType,
|};
export type OpponentModalRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: OpponentModal_viewer$ref
  |}
|};
export type OpponentModalRefetchQuery = {|
  variables: OpponentModalRefetchQueryVariables,
  response: OpponentModalRefetchQueryResponse,
|};
*/


/*
query OpponentModalRefetchQuery(
  $pseudo: String
  $email: String
  $requestUsersAutocompletion: Boolean!
  $requestUsersByEmail: Boolean!
) {
  viewer {
    ...OpponentModal_viewer_1Vu3F8
    id
  }
}

fragment OpponentModal_viewer_1Vu3F8 on Viewer {
  opponents(pseudo: $pseudo, first: 8) @include(if: $requestUsersAutocompletion) {
    edges {
      node {
        id
        avatar
        pseudo
      }
    }
  }
  users(email: $email, first: 10) @include(if: $requestUsersByEmail) {
    edges {
      node {
        id
        avatar
        pseudo
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
    "name": "email",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "requestUsersAutocompletion",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "requestUsersByEmail",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userType",
    "type": "UserProfileType",
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
v2 = [
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
            "name": "avatar",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pseudo",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "OpponentModalRefetchQuery",
  "id": null,
  "text": "query OpponentModalRefetchQuery(\n  $pseudo: String\n  $email: String\n  $requestUsersAutocompletion: Boolean!\n  $requestUsersByEmail: Boolean!\n) {\n  viewer {\n    ...OpponentModal_viewer_1Vu3F8\n    id\n  }\n}\n\nfragment OpponentModal_viewer_1Vu3F8 on Viewer {\n  opponents(pseudo: $pseudo, first: 8) @include(if: $requestUsersAutocompletion) {\n    edges {\n      node {\n        id\n        avatar\n        pseudo\n      }\n    }\n  }\n  users(email: $email, first: 10) @include(if: $requestUsersByEmail) {\n    edges {\n      node {\n        id\n        avatar\n        pseudo\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OpponentModalRefetchQuery",
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
            "name": "OpponentModal_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "email",
                "variableName": "email",
                "type": null
              },
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
              },
              {
                "kind": "Variable",
                "name": "requestUsersByEmail",
                "variableName": "requestUsersByEmail",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "userType",
                "variableName": "userType",
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
    "name": "OpponentModalRefetchQuery",
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
            "condition": "requestUsersByEmail",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "users",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "email",
                    "variableName": "email",
                    "type": "String"
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "concreteType": "UserConnection",
                "plural": false,
                "selections": v2
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "requestUsersAutocompletion",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "opponents",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 8,
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
                "selections": v2
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
(node/*: any*/).hash = '1e7533e848e6fab0f9780287fba020df';
module.exports = node;
