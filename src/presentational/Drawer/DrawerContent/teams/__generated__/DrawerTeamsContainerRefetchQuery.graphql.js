/**
 * @flow
 * @relayHash fe29f02b6507ec4a2bb7529b474bb2f4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DrawerTeamsContainer_me$ref = any;
type DrawerTeamsContainer_viewer$ref = any;
export type DrawerTeamsContainerRefetchQueryVariables = {|
  query: boolean,
  superToken?: ?string,
|};
export type DrawerTeamsContainerRefetchQueryResponse = {|
  +viewer: ?{|
    +me: ?{|
      +$fragmentRefs: DrawerTeamsContainer_me$ref
    |},
    +$fragmentRefs: DrawerTeamsContainer_viewer$ref,
  |}
|};
export type DrawerTeamsContainerRefetchQuery = {|
  variables: DrawerTeamsContainerRefetchQueryVariables,
  response: DrawerTeamsContainerRefetchQueryResponse,
|};
*/


/*
query DrawerTeamsContainerRefetchQuery(
  $query: Boolean!
  $superToken: String
) {
  viewer {
    me {
      ...DrawerTeamsContainer_me
      id
    }
    ...DrawerTeamsContainer_viewer_25OIK0
    id
  }
}

fragment DrawerTeamsContainer_me on User {
  id
}

fragment DrawerTeamsContainer_viewer_25OIK0 on Viewer {
  me {
    id
  }
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DrawerTeamsContainerRefetchQuery",
  "id": null,
  "text": "query DrawerTeamsContainerRefetchQuery(\n  $query: Boolean!\n  $superToken: String\n) {\n  viewer {\n    me {\n      ...DrawerTeamsContainer_me\n      id\n    }\n    ...DrawerTeamsContainer_viewer_25OIK0\n    id\n  }\n}\n\nfragment DrawerTeamsContainer_me on User {\n  id\n}\n\nfragment DrawerTeamsContainer_viewer_25OIK0 on Viewer {\n  me {\n    id\n  }\n  superMe(superToken: $superToken) @include(if: $query) {\n    id\n    pseudo\n    avatar\n    profileType\n    isSubAccount\n    subAccounts {\n      id\n      pseudo\n      avatar\n      token\n      unreadChats\n      numberOfUnreadNotifications\n    }\n    userPreferences {\n      areSubAccountsActivated\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DrawerTeamsContainerRefetchQuery",
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
                "name": "DrawerTeamsContainer_me",
                "args": null
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "DrawerTeamsContainer_viewer",
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
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DrawerTeamsContainerRefetchQuery",
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
                  v1,
                  v2,
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "profileType",
                    "args": null,
                    "storageKey": null
                  },
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "token",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "unreadChats",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "numberOfUnreadNotifications",
                        "args": null,
                        "storageKey": null
                      }
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
(node/*: any*/).hash = '079eebc6f28498b82249fb1ae8a6f695';
module.exports = node;
