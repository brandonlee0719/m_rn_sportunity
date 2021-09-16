/**
 * @flow
 * @relayHash 7c6ef957cdc04a803641ed45f75de57b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DrawerNotificationContainer_user$ref = any;
type DrawerNotificationContainer_viewer$ref = any;
export type DrawerNotificationContainerRefetchQueryVariables = {|
  query: boolean,
  superToken?: ?string,
  userToken?: ?string,
|};
export type DrawerNotificationContainerRefetchQueryResponse = {|
  +viewer: ?{|
    +me: ?{|
      +$fragmentRefs: DrawerNotificationContainer_user$ref
    |},
    +$fragmentRefs: DrawerNotificationContainer_viewer$ref,
  |}
|};
export type DrawerNotificationContainerRefetchQuery = {|
  variables: DrawerNotificationContainerRefetchQueryVariables,
  response: DrawerNotificationContainerRefetchQueryResponse,
|};
*/


/*
query DrawerNotificationContainerRefetchQuery(
  $query: Boolean!
  $superToken: String
  $userToken: String
) {
  viewer {
    me {
      ...DrawerNotificationContainer_user_1Qr5xf
      id
    }
    ...DrawerNotificationContainer_viewer_4jGBmo
    id
  }
}

fragment DrawerNotificationContainer_user_1Qr5xf on User {
  id
  numberOfUnreadNotifications
  numberOfFormsToFill
  numberOfPaymentModelsToPay
}

fragment DrawerNotificationContainer_viewer_4jGBmo on Viewer {
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
  "name": "numberOfUnreadNotifications",
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
  "name": "unreadChats",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DrawerNotificationContainerRefetchQuery",
  "id": null,
  "text": "query DrawerNotificationContainerRefetchQuery(\n  $query: Boolean!\n  $superToken: String\n  $userToken: String\n) {\n  viewer {\n    me {\n      ...DrawerNotificationContainer_user_1Qr5xf\n      id\n    }\n    ...DrawerNotificationContainer_viewer_4jGBmo\n    id\n  }\n}\n\nfragment DrawerNotificationContainer_user_1Qr5xf on User {\n  id\n  numberOfUnreadNotifications\n  numberOfFormsToFill\n  numberOfPaymentModelsToPay\n}\n\nfragment DrawerNotificationContainer_viewer_4jGBmo on Viewer {\n  superMe(superToken: $superToken) @include(if: $query) {\n    id\n    pseudo\n    avatar\n    profileType\n    isSubAccount\n    subAccounts {\n      id\n      pseudo\n      avatar\n      token\n      unreadChats\n      numberOfUnreadNotifications\n    }\n    userPreferences {\n      areSubAccountsActivated\n    }\n  }\n  authorizedAccounts(userToken: $userToken) @include(if: $query) {\n    id\n    pseudo\n    avatar\n    profileType\n    unreadChats\n    numberOfUnreadNotifications\n    accounts {\n      id\n      pseudo\n      avatar\n      token\n      unreadChats\n      numberOfUnreadNotifications\n      authorization_level\n      subAccounts {\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DrawerNotificationContainerRefetchQuery",
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
                "name": "DrawerNotificationContainer_user",
                "args": [
                  v1
                ]
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "DrawerNotificationContainer_viewer",
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
    "name": "DrawerNotificationContainerRefetchQuery",
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
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "numberOfFormsToFill",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "numberOfPaymentModelsToPay",
                "args": null,
                "storageKey": null
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
                      v8,
                      v3
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
                  v8,
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
                      v2,
                      v4,
                      v5,
                      v7,
                      v8,
                      v3,
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
(node/*: any*/).hash = '5683a91a50940ee593acb5f9bc32ebe3';
module.exports = node;
