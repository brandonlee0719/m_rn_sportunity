/**
 * @flow
 * @relayHash 7fb12d888d3b4e6b065f939219d33513
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddChild_user$ref = any;
type AddChild_viewer$ref = any;
export type AddChildRefetchQueryVariables = {|
  superToken?: ?string,
  querySuperMe: boolean,
  pseudo?: ?string,
  requestUsersAutocompletion: boolean,
|};
export type AddChildRefetchQueryResponse = {|
  +viewer: ?{|
    +me: ?{|
      +$fragmentRefs: AddChild_user$ref
    |},
    +$fragmentRefs: AddChild_viewer$ref,
  |}
|};
export type AddChildRefetchQuery = {|
  variables: AddChildRefetchQueryVariables,
  response: AddChildRefetchQueryResponse,
|};
*/


/*
query AddChildRefetchQuery(
  $superToken: String
  $querySuperMe: Boolean!
  $pseudo: String
  $requestUsersAutocompletion: Boolean!
) {
  viewer {
    ...AddChild_viewer_24sM1C
    me {
      ...AddChild_user
      id
    }
    id
  }
}

fragment AddChild_viewer_24sM1C on Viewer {
  ...AddChildModal_viewer
  superMe(superToken: $superToken) @include(if: $querySuperMe) {
    id
    profileType
    isSubAccount
  }
  users(pseudo: $pseudo, first: 10) @include(if: $requestUsersAutocompletion) {
    edges {
      node {
        id
        pseudo
      }
    }
  }
}

fragment AddChild_user on User {
  id
  email
  pseudo
  subAccounts {
    id
    pseudo
    avatar
  }
}

fragment AddChildModal_viewer on Viewer {
  id
  ...CreateProfilePage_viewer
}

fragment CreateProfilePage_viewer on Viewer {
  id
  me {
    id
    pseudo
    email
    phoneNumber
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
    "name": "querySuperMe",
    "type": "Boolean!",
    "defaultValue": null
  },
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
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AddChildRefetchQuery",
  "id": null,
  "text": "query AddChildRefetchQuery(\n  $superToken: String\n  $querySuperMe: Boolean!\n  $pseudo: String\n  $requestUsersAutocompletion: Boolean!\n) {\n  viewer {\n    ...AddChild_viewer_24sM1C\n    me {\n      ...AddChild_user\n      id\n    }\n    id\n  }\n}\n\nfragment AddChild_viewer_24sM1C on Viewer {\n  ...AddChildModal_viewer\n  superMe(superToken: $superToken) @include(if: $querySuperMe) {\n    id\n    profileType\n    isSubAccount\n  }\n  users(pseudo: $pseudo, first: 10) @include(if: $requestUsersAutocompletion) {\n    edges {\n      node {\n        id\n        pseudo\n      }\n    }\n  }\n}\n\nfragment AddChild_user on User {\n  id\n  email\n  pseudo\n  subAccounts {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment AddChildModal_viewer on Viewer {\n  id\n  ...CreateProfilePage_viewer\n}\n\nfragment CreateProfilePage_viewer on Viewer {\n  id\n  me {\n    id\n    pseudo\n    email\n    phoneNumber\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddChildRefetchQuery",
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
            "name": "AddChild_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "pseudo",
                "variableName": "pseudo",
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
                "name": "requestUsersAutocompletion",
                "variableName": "requestUsersAutocompletion",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "superToken",
                "variableName": "superToken",
                "type": null
              }
            ]
          },
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
                "name": "AddChild_user",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddChildRefetchQuery",
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
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "phoneNumber",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v1,
                  v2,
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
          },
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
                          v2
                        ]
                      }
                    ]
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
(node/*: any*/).hash = '79d3af7442e4cdc1866275bb362800d8';
module.exports = node;
