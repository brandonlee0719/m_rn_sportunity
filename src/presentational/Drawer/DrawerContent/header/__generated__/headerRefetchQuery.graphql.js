/**
 * @flow
 * @relayHash 0494e84649ae290895fb8d0907a3fdff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type header_viewer$ref = any;
export type headerRefetchQueryVariables = {|
  query: boolean,
  userToken?: ?string,
|};
export type headerRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: header_viewer$ref
  |}
|};
export type headerRefetchQuery = {|
  variables: headerRefetchQueryVariables,
  response: headerRefetchQueryResponse,
|};
*/


/*
query headerRefetchQuery(
  $query: Boolean!
  $userToken: String
) {
  viewer {
    ...header_viewer_58Ys0
    id
  }
}

fragment header_viewer_58Ys0 on Viewer {
  superMe(superToken: $userToken) @include(if: $query) {
    id
    pseudo
    avatar
    profileType
    isSubAccount
    subAccounts {
      id
      pseudo
      avatar
      token
      unreadChats
      numberOfUnreadNotifications
    }
    userPreferences {
      areSubAccountsActivated
    }
  }
  authorizedAccounts(userToken: $userToken) @include(if: $query) {
    id
    pseudo
    avatar
    profileType
    unreadChats
    numberOfUnreadNotifications
    accounts {
      id
      pseudo
      avatar
      token
      unreadChats
      numberOfUnreadNotifications
      authorization_level
      subAccounts {
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userToken",
    "type": "String",
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
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unreadChats",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numberOfUnreadNotifications",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "headerRefetchQuery",
  "id": null,
  "text": "query headerRefetchQuery(\n  $query: Boolean!\n  $userToken: String\n) {\n  viewer {\n    ...header_viewer_58Ys0\n    id\n  }\n}\n\nfragment header_viewer_58Ys0 on Viewer {\n  superMe(superToken: $userToken) @include(if: $query) {\n    id\n    pseudo\n    avatar\n    profileType\n    isSubAccount\n    subAccounts {\n      id\n      pseudo\n      avatar\n      token\n      unreadChats\n      numberOfUnreadNotifications\n    }\n    userPreferences {\n      areSubAccountsActivated\n    }\n  }\n  authorizedAccounts(userToken: $userToken) @include(if: $query) {\n    id\n    pseudo\n    avatar\n    profileType\n    unreadChats\n    numberOfUnreadNotifications\n    accounts {\n      id\n      pseudo\n      avatar\n      token\n      unreadChats\n      numberOfUnreadNotifications\n      authorization_level\n      subAccounts {\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "headerRefetchQuery",
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
            "name": "header_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
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
    "name": "headerRefetchQuery",
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
            "condition": "query",
            "selections": [
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
                  v2,
                  v3,
                  v4,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isSubAccount",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subAccounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubAccounts",
                    "plural": true,
                    "selections": [
                      v1,
                      v2,
                      v3,
                      v5,
                      v6,
                      v7
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "userPreferences",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SuperUserPreferences",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "areSubAccountsActivated",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
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
                  v4,
                  v6,
                  v7,
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
                      v3,
                      v5,
                      v6,
                      v7,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "authorization_level",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "subAccounts",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AuthorizedUserSubAccounts",
                        "plural": true,
                        "selections": [
                          v1
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
(node/*: any*/).hash = 'ac1b30e7aa317dcce0129cf59285f829';
module.exports = node;
