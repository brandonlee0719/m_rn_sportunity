/**
 * @flow
 * @relayHash f7008706dbce79ffe1352fdd294e8b39
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FriendsInvitationModal_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
export type FriendsInvitationModalRefetchQueryVariables = {|
  pseudo?: ?string,
  requestUsersAutocompletion: boolean,
  userType?: ?UserProfileType,
|};
export type FriendsInvitationModalRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: FriendsInvitationModal_viewer$ref
  |}
|};
export type FriendsInvitationModalRefetchQuery = {|
  variables: FriendsInvitationModalRefetchQueryVariables,
  response: FriendsInvitationModalRefetchQueryResponse,
|};
*/


/*
query FriendsInvitationModalRefetchQuery(
  $pseudo: String
  $requestUsersAutocompletion: Boolean!
  $userType: UserProfileType
) {
  viewer {
    ...FriendsInvitationModal_viewer_OArRu
    id
  }
}

fragment FriendsInvitationModal_viewer_OArRu on Viewer {
  users(pseudo: $pseudo, first: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FriendsInvitationModalRefetchQuery",
  "id": null,
  "text": "query FriendsInvitationModalRefetchQuery(\n  $pseudo: String\n  $requestUsersAutocompletion: Boolean!\n  $userType: UserProfileType\n) {\n  viewer {\n    ...FriendsInvitationModal_viewer_OArRu\n    id\n  }\n}\n\nfragment FriendsInvitationModal_viewer_OArRu on Viewer {\n  users(pseudo: $pseudo, first: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {\n    edges {\n      node {\n        id\n        pseudo\n        avatar\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FriendsInvitationModalRefetchQuery",
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
            "name": "FriendsInvitationModal_viewer",
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
    "name": "FriendsInvitationModalRefetchQuery",
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
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  },
                  {
                    "kind": "Variable",
                    "name": "pseudo",
                    "variableName": "pseudo",
                    "type": "String"
                  },
                  {
                    "kind": "Variable",
                    "name": "userType",
                    "variableName": "userType",
                    "type": "UserProfileType"
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
(node/*: any*/).hash = '55e4bf09187a6b33a6fce03526db82ec';
module.exports = node;
