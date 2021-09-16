/**
 * @flow
 * @relayHash f4bc29375796e7180e7a5e870e846f6e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DrawerChatContainer_user$ref = any;
type DrawerChatContainer_viewer$ref = any;
export type DrawerChatContainerRefetchQueryVariables = {|
  query: boolean,
  superToken?: ?string,
  userToken?: ?string,
|};
export type DrawerChatContainerRefetchQueryResponse = {|
  +viewer: ?{|
    +me: ?{|
      +$fragmentRefs: DrawerChatContainer_user$ref
    |},
    +$fragmentRefs: DrawerChatContainer_viewer$ref,
  |}
|};
export type DrawerChatContainerRefetchQuery = {|
  variables: DrawerChatContainerRefetchQueryVariables,
  response: DrawerChatContainerRefetchQueryResponse,
|};
*/


/*
query DrawerChatContainerRefetchQuery(
  $query: Boolean!
  $superToken: String
  $userToken: String
) {
  viewer {
    me {
      ...DrawerChatContainer_user_1Qr5xf
      id
    }
    ...DrawerChatContainer_viewer_4jGBmo
    id
  }
}

fragment DrawerChatContainer_user_1Qr5xf on User {
  id
  unreadChats @include(if: $query)
}

fragment DrawerChatContainer_viewer_4jGBmo on Viewer {
  superMe(superToken: $superToken) @include(if: $query) {
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
    "name": "superToken",
    "type": "String",
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
  "kind": "Variable",
  "name": "query",
  "variableName": "query",
  "type": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unreadChats",
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
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numberOfUnreadNotifications",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DrawerChatContainerRefetchQuery",
  "id": null,
  "text": "query DrawerChatContainerRefetchQuery(\n  $query: Boolean!\n  $superToken: String\n  $userToken: String\n) {\n  viewer {\n    me {\n      ...DrawerChatContainer_user_1Qr5xf\n      id\n    }\n    ...DrawerChatContainer_viewer_4jGBmo\n    id\n  }\n}\n\nfragment DrawerChatContainer_user_1Qr5xf on User {\n  id\n  unreadChats @include(if: $query)\n}\n\nfragment DrawerChatContainer_viewer_4jGBmo on Viewer {\n  superMe(superToken: $superToken) @include(if: $query) {\n    id\n    pseudo\n    avatar\n    profileType\n    isSubAccount\n    subAccounts {\n      id\n      pseudo\n      avatar\n      token\n      unreadChats\n      numberOfUnreadNotifications\n    }\n    userPreferences {\n      areSubAccountsActivated\n    }\n  }\n  authorizedAccounts(userToken: $userToken) @include(if: $query) {\n    id\n    pseudo\n    avatar\n    profileType\n    unreadChats\n    numberOfUnreadNotifications\n    accounts {\n      id\n      pseudo\n      avatar\n      token\n      unreadChats\n      numberOfUnreadNotifications\n      authorization_level\n      subAccounts {\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DrawerChatContainerRefetchQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "DrawerChatContainer_user",
                "args": [
                  v1
                ]
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "DrawerChatContainer_viewer",
            "args": [
              v1,
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
    "name": "DrawerChatContainerRefetchQuery",
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
              v2,
              {
                "kind": "Condition",
                "passingValue": true,
                "condition": "query",
                "selections": [
                  v3
                ]
              }
            ]
          },
          v2,
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
                    "variableName": "superToken",
                    "type": "String"
                  }
                ],
                "concreteType": "SuperUser",
                "plural": false,
                "selections": [
                  v2,
                  v4,
                  v5,
                  v6,
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
                      v2,
                      v4,
                      v5,
                      v7,
                      v3,
                      v8
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
                  v2,
                  v4,
                  v5,
                  v6,
                  v3,
                  v8,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "accounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AuthorizedAccountsList",
                    "plural": true,
                    "selections": [
                      v2,
                      v4,
                      v5,
                      v7,
                      v3,
                      v8,
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
                          v2
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
(node/*: any*/).hash = '84ab36fb07e8a52f8a7109afe8ee93b4';
module.exports = node;
