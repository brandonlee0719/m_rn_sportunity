/**
 * @flow
 * @relayHash c3db1a1c68138dd04acc66edf35282f3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PushController_viewer$ref = any;
export type PushControllerRefetchQueryVariables = {|
  superToken?: ?string,
  userToken?: ?string,
  query: boolean,
|};
export type PushControllerRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PushController_viewer$ref
  |}
|};
export type PushControllerRefetchQuery = {|
  variables: PushControllerRefetchQueryVariables,
  response: PushControllerRefetchQueryResponse,
|};
*/


/*
query PushControllerRefetchQuery(
  $userToken: String
  $query: Boolean!
) {
  viewer {
    ...PushController_viewer_4jGBmo
    id
  }
}

fragment PushController_viewer_4jGBmo on Viewer {
  me {
    id
  }
  authorizedAccounts(userToken: $userToken) @include(if: $query) {
    id
    avatar
    pseudo
    accounts {
      id
      avatar
      token
      pseudo
      subAccounts {
        id
        avatar
        pseudo
        token
      }
    }
  }
  superMe(superToken: $userToken) @include(if: $query) {
    id
    pseudo
    avatar
    subAccounts {
      id
      avatar
      pseudo
      token
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "superToken",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userToken",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "query",
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
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
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
  "name": "token",
  "args": null,
  "storageKey": null
},
v5 = [
  v1,
  v2,
  v3,
  v4
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PushControllerRefetchQuery",
  "id": null,
  "text": "query PushControllerRefetchQuery(\n  $userToken: String\n  $query: Boolean!\n) {\n  viewer {\n    ...PushController_viewer_4jGBmo\n    id\n  }\n}\n\nfragment PushController_viewer_4jGBmo on Viewer {\n  me {\n    id\n  }\n  authorizedAccounts(userToken: $userToken) @include(if: $query) {\n    id\n    avatar\n    pseudo\n    accounts {\n      id\n      avatar\n      token\n      pseudo\n      subAccounts {\n        id\n        avatar\n        pseudo\n        token\n      }\n    }\n  }\n  superMe(superToken: $userToken) @include(if: $query) {\n    id\n    pseudo\n    avatar\n    subAccounts {\n      id\n      avatar\n      pseudo\n      token\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PushControllerRefetchQuery",
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
            "name": "PushController_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "superToken",
                "variableName": "superToken",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "userToken",
                "variableName": "userToken",
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
    "name": "PushControllerRefetchQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1
            ]
          },
          v1,
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "authorizedAccounts",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "userToken",
                    "variableName": "userToken",
                    "type": "String"
                  }
                ],
                "concreteType": "AuthorizedAccounts",
                "plural": false,
                "selections": [
                  v1,
                  v2,
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "accounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AuthorizedAccountsList",
                    "plural": true,
                    "selections": [
                      v1,
                      v2,
                      v4,
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "subAccounts",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AuthorizedUserSubAccounts",
                        "plural": true,
                        "selections": v5
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "superMe",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "superToken",
                    "variableName": "userToken",
                    "type": "String"
                  }
                ],
                "concreteType": "SuperUser",
                "plural": false,
                "selections": [
                  v1,
                  v3,
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subAccounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubAccounts",
                    "plural": true,
                    "selections": v5
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
(node/*: any*/).hash = '4d907dd9785fc8f40cdc08d2e03f9a6d';
module.exports = node;
