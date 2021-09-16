/**
 * @flow
 * @relayHash 64e3d6d2e2cca443454ebeb8025ae330
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventDetailCarpooling_viewer$ref = any;
export type EventDetailCarpoolingRefetchQueryVariables = {|
  sportunityRelaunchId: string,
  queryRelaunch: boolean,
  superToken?: ?string,
  querySuperMe: boolean,
  userToken?: ?string,
  queryAuthorizedAccounts: boolean,
|};
export type EventDetailCarpoolingRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EventDetailCarpooling_viewer$ref
  |}
|};
export type EventDetailCarpoolingRefetchQuery = {|
  variables: EventDetailCarpoolingRefetchQueryVariables,
  response: EventDetailCarpoolingRefetchQueryResponse,
|};
*/


/*
query EventDetailCarpoolingRefetchQuery(
  $superToken: String
  $querySuperMe: Boolean!
  $userToken: String
  $queryAuthorizedAccounts: Boolean!
) {
  viewer {
    ...EventDetailCarpooling_viewer_aZ2Ke
    id
  }
}

fragment EventDetailCarpooling_viewer_aZ2Ke on Viewer {
  ...Carpooling_viewer
  authorizedAccounts(userToken: $userToken) @include(if: $queryAuthorizedAccounts) {
    id
    avatar
    pseudo
    accounts {
      id
      avatar
      token
      pseudo
    }
  }
  superMe(superToken: $superToken) @include(if: $querySuperMe) {
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

fragment Carpooling_viewer on Viewer {
  id
  me {
    id
    address {
      country
      city
      address
      zip
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityRelaunchId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryRelaunch",
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
    "name": "querySuperMe",
    "type": "Boolean!",
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
    "name": "queryAuthorizedAccounts",
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
  "name": "token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EventDetailCarpoolingRefetchQuery",
  "id": null,
  "text": "query EventDetailCarpoolingRefetchQuery(\n  $superToken: String\n  $querySuperMe: Boolean!\n  $userToken: String\n  $queryAuthorizedAccounts: Boolean!\n) {\n  viewer {\n    ...EventDetailCarpooling_viewer_aZ2Ke\n    id\n  }\n}\n\nfragment EventDetailCarpooling_viewer_aZ2Ke on Viewer {\n  ...Carpooling_viewer\n  authorizedAccounts(userToken: $userToken) @include(if: $queryAuthorizedAccounts) {\n    id\n    avatar\n    pseudo\n    accounts {\n      id\n      avatar\n      token\n      pseudo\n    }\n  }\n  superMe(superToken: $superToken) @include(if: $querySuperMe) {\n    id\n    pseudo\n    avatar\n    subAccounts {\n      id\n      avatar\n      pseudo\n      token\n    }\n  }\n}\n\nfragment Carpooling_viewer on Viewer {\n  id\n  me {\n    id\n    address {\n      country\n      city\n      address\n      zip\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventDetailCarpoolingRefetchQuery",
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
            "name": "EventDetailCarpooling_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "queryAuthorizedAccounts",
                "variableName": "queryAuthorizedAccounts",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryRelaunch",
                "variableName": "queryRelaunch",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "querySuperMe",
                "variableName": "querySuperMe",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportunityRelaunchId",
                "variableName": "sportunityRelaunchId",
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
    "name": "EventDetailCarpoolingRefetchQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "address",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "country",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "address",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "zip",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "querySuperMe",
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "subAccounts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubAccounts",
                    "plural": true,
                    "selections": [
                      v1,
                      v3,
                      v2,
                      v4
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryAuthorizedAccounts",
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
                  v3,
                  v2,
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
                      v3,
                      v4,
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '2635168db7b29bb10ed599931d5ca3d1';
module.exports = node;
