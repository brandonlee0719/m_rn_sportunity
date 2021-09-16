/**
 * @flow
 * @relayHash 10b7ec7306080bf02e3fb8b6bb068a2a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AddUser_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
export type AddUserRefetchQueryVariables = {|
  pseudo?: ?string,
  requestUsersAutocompletion: boolean,
  userType?: ?UserProfileType,
  queryCircle: boolean,
  queryUserCircles: boolean,
  queryCirclesFromClub: boolean,
  queryCirclesUserIsIn: boolean,
|};
export type AddUserRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: AddUser_viewer$ref
  |}
|};
export type AddUserRefetchQuery = {|
  variables: AddUserRefetchQueryVariables,
  response: AddUserRefetchQueryResponse,
|};
*/


/*
query AddUserRefetchQuery(
  $pseudo: String
  $requestUsersAutocompletion: Boolean!
  $userType: UserProfileType
  $queryUserCircles: Boolean!
  $queryCirclesFromClub: Boolean!
  $queryCirclesUserIsIn: Boolean!
) {
  viewer {
    ...AddUser_viewer_1AYWRu
    id
  }
}

fragment AddUser_viewer_1AYWRu on Viewer {
  users(pseudo: $pseudo, last: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {
    edges {
      node {
        id
        avatar
        pseudo
      }
    }
  }
  me {
    id
    circles(last: 20) @include(if: $queryUserCircles) {
      edges {
        node {
          id
          name
          memberCount
          type
          members {
            id
            pseudo
            avatar
            profileType
          }
        }
      }
    }
    circlesFromClub(last: 200) @include(if: $queryCirclesFromClub) {
      edges {
        node {
          id
          name
          memberCount
          owner {
            id
            pseudo
            avatar
          }
          members {
            id
            pseudo
            avatar
            profileType
          }
          type
        }
      }
    }
    circlesUserIsIn(last: 100) @include(if: $queryCirclesUserIsIn) {
      edges {
        node {
          id
          name
          memberCount
          isCircleUsableByMembers
          owner {
            id
            pseudo
            avatar
          }
          members {
            id
            pseudo
            avatar
            profileType
          }
          type
          mode
        }
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
  },
  {
    "kind": "LocalArgument",
    "name": "queryCircle",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryUserCircles",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryCirclesFromClub",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryCirclesUserIsIn",
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
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
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v1,
    v4,
    v5
  ]
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v1,
    v4,
    v5,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profileType",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AddUserRefetchQuery",
  "id": null,
  "text": "query AddUserRefetchQuery(\n  $pseudo: String\n  $requestUsersAutocompletion: Boolean!\n  $userType: UserProfileType\n  $queryUserCircles: Boolean!\n  $queryCirclesFromClub: Boolean!\n  $queryCirclesUserIsIn: Boolean!\n) {\n  viewer {\n    ...AddUser_viewer_1AYWRu\n    id\n  }\n}\n\nfragment AddUser_viewer_1AYWRu on Viewer {\n  users(pseudo: $pseudo, last: 10, userType: $userType) @include(if: $requestUsersAutocompletion) {\n    edges {\n      node {\n        id\n        avatar\n        pseudo\n      }\n    }\n  }\n  me {\n    id\n    circles(last: 20) @include(if: $queryUserCircles) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n          type\n          members {\n            id\n            pseudo\n            avatar\n            profileType\n          }\n        }\n      }\n    }\n    circlesFromClub(last: 200) @include(if: $queryCirclesFromClub) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          members {\n            id\n            pseudo\n            avatar\n            profileType\n          }\n          type\n        }\n      }\n    }\n    circlesUserIsIn(last: 100) @include(if: $queryCirclesUserIsIn) {\n      edges {\n        node {\n          id\n          name\n          memberCount\n          isCircleUsableByMembers\n          owner {\n            id\n            pseudo\n            avatar\n          }\n          members {\n            id\n            pseudo\n            avatar\n            profileType\n          }\n          type\n          mode\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddUserRefetchQuery",
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
            "name": "AddUser_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "pseudo",
                "variableName": "pseudo",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCircle",
                "variableName": "queryCircle",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCirclesFromClub",
                "variableName": "queryCirclesFromClub",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCirclesUserIsIn",
                "variableName": "queryCirclesUserIsIn",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryUserCircles",
                "variableName": "queryUserCircles",
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
    "name": "AddUserRefetchQuery",
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
              v1,
              {
                "kind": "Condition",
                "passingValue": true,
                "condition": "queryCirclesUserIsIn",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circlesUserIsIn",
                    "storageKey": "circlesUserIsIn(last:100)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 100,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "CircleConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CircleEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Circle",
                            "plural": false,
                            "selections": [
                              v1,
                              v2,
                              v3,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "isCircleUsableByMembers",
                                "args": null,
                                "storageKey": null
                              },
                              v6,
                              v7,
                              v8,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "mode",
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
              },
              {
                "kind": "Condition",
                "passingValue": true,
                "condition": "queryCirclesFromClub",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circlesFromClub",
                    "storageKey": "circlesFromClub(last:200)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 200,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "CircleConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CircleEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Circle",
                            "plural": false,
                            "selections": [
                              v1,
                              v2,
                              v3,
                              v6,
                              v7,
                              v8
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
                "condition": "queryUserCircles",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circles",
                    "storageKey": "circles(last:20)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "last",
                        "value": 20,
                        "type": "Int"
                      }
                    ],
                    "concreteType": "CircleConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CircleEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Circle",
                            "plural": false,
                            "selections": [
                              v1,
                              v2,
                              v3,
                              v8,
                              v7
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
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
                    "name": "last",
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
                          v5,
                          v4
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
(node/*: any*/).hash = '3cdf23266a86c18af99b91217dc44a10';
module.exports = node;
