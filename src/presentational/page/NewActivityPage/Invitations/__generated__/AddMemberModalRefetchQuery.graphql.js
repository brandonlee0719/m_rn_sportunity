/**
 * @flow
 * @relayHash 7b604e8b8c405fa2e5fad577dc03dd44
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddMemberModal_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
export type AddMemberModalRefetchQueryVariables = {|
  pseudo?: ?string,
  requestUsersAutocompletion: boolean,
  userType?: ?UserProfileType,
|};
export type AddMemberModalRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AddMemberModal_viewer$ref
  |}
|};
export type AddMemberModalRefetchQuery = {|
  variables: AddMemberModalRefetchQueryVariables,
  response: AddMemberModalRefetchQueryResponse,
|};
*/


/*
query AddMemberModalRefetchQuery(
  $pseudo: String
  $requestUsersAutocompletion: Boolean!
  $userType: UserProfileType
) {
  viewer {
    ...AddMemberModal_viewer_OArRu
    id
  }
}

fragment AddMemberModal_viewer_OArRu on Viewer {
  id
  users(pseudo: $pseudo, first: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {
    edges {
      node {
        id
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
  "name": "AddMemberModalRefetchQuery",
  "id": null,
  "text": "query AddMemberModalRefetchQuery(\n  $pseudo: String\n  $requestUsersAutocompletion: Boolean!\n  $userType: UserProfileType\n) {\n  viewer {\n    ...AddMemberModal_viewer_OArRu\n    id\n  }\n}\n\nfragment AddMemberModal_viewer_OArRu on Viewer {\n  id\n  users(pseudo: $pseudo, first: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {\n    edges {\n      node {\n        id\n        pseudo\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddMemberModalRefetchQuery",
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
            "name": "AddMemberModal_viewer",
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
    "name": "AddMemberModalRefetchQuery",
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
(node/*: any*/).hash = '58406a0d1434173d2b7e1f34aea91d8c';
module.exports = node;
