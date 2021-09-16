/**
 * @flow
 * @relayHash 896cf2820eb1119ab19d1f4ce2b55510
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewCircleInvitations_user$ref = any;
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleListTypeEnum = "CHILDREN_CIRCLES" | "CIRCLES_I_AM_IN" | "MY_CIRCLES" | "OTHER_TEAMS_CIRCLES" | "PUBLIC_CIRCLES" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type CirclesFilter = {
  location?: ?LocationConstraint,
  sport?: ?$ReadOnlyArray<?SportConstraint>,
  type?: ?CircleTypeEnum,
  code?: ?string,
  types?: ?$ReadOnlyArray<?CircleTypeEnum>,
  circleType?: ?$ReadOnlyArray<?CircleListTypeEnum>,
  nameCompletion?: ?string,
  modes?: ?$ReadOnlyArray<?CircleKind>,
  owners?: ?$ReadOnlyArray<?string>,
  isCircleUsableByMember?: ?boolean,
};
export type LocationConstraint = {
  lat?: ?number,
  lng?: ?number,
  radius?: ?number,
};
export type SportConstraint = {
  sportID?: ?string,
  level?: ?$ReadOnlyArray<?string>,
};
export type NewCircleInvitationsRefetchQueryVariables = {|
  filter?: ?CirclesFilter
|};
export type NewCircleInvitationsRefetchQueryResponse = {|
  +viewer: ?{|
    +me: ?{|
      +$fragmentRefs: NewCircleInvitations_user$ref
    |}
  |}
|};
export type NewCircleInvitationsRefetchQuery = {|
  variables: NewCircleInvitationsRefetchQueryVariables,
  response: NewCircleInvitationsRefetchQueryResponse,
|};
*/


/*
query NewCircleInvitationsRefetchQuery(
  $filter: CirclesFilter
) {
  viewer {
    me {
      ...NewCircleInvitations_user_Vt7Yj
      id
    }
    id
  }
}

fragment NewCircleInvitations_user_Vt7Yj on User {
  id
  profileType
  pseudo
  email
  circlesUserIsIn(last: 100, filter: $filter) {
    edges {
      cursor
      node {
        id
        name
        type
        owner {
          id
          pseudo
          avatar
        }
        isCircleUsableByMembers
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
        }
      }
    }
  }
  circlesFromClub(last: 100, filter: $filter) {
    edges {
      cursor
      node {
        id
        name
        type
        owner {
          id
          pseudo
          avatar
        }
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
        }
      }
    }
  }
  circles(last: 100) {
    edges {
      cursor
      node {
        id
        name
        type
        mode
        memberCount
        sport {
          sport {
            id
            name {
              FR
              id
            }
          }
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
    "name": "filter",
    "type": "CirclesFilter",
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
  "kind": "Literal",
  "name": "last",
  "value": 100,
  "type": "Int"
},
v4 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "CirclesFilter"
  },
  v3
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
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
      "name": "avatar",
      "args": null,
      "storageKey": null
    }
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sport",
  "storageKey": null,
  "args": null,
  "concreteType": "CircleSport",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sport",
      "storageKey": null,
      "args": null,
      "concreteType": "Sport",
      "plural": false,
      "selections": [
        v1,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "name",
          "storageKey": null,
          "args": null,
          "concreteType": "TranslatedString",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "FR",
              "args": null,
              "storageKey": null
            },
            v1
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NewCircleInvitationsRefetchQuery",
  "id": null,
  "text": "query NewCircleInvitationsRefetchQuery(\n  $filter: CirclesFilter\n) {\n  viewer {\n    me {\n      ...NewCircleInvitations_user_Vt7Yj\n      id\n    }\n    id\n  }\n}\n\nfragment NewCircleInvitations_user_Vt7Yj on User {\n  id\n  profileType\n  pseudo\n  email\n  circlesUserIsIn(last: 100, filter: $filter) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        isCircleUsableByMembers\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  circlesFromClub(last: 100, filter: $filter) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        owner {\n          id\n          pseudo\n          avatar\n        }\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n  circles(last: 100) {\n    edges {\n      cursor\n      node {\n        id\n        name\n        type\n        mode\n        memberCount\n        sport {\n          sport {\n            id\n            name {\n              FR\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewCircleInvitationsRefetchQuery",
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
                "name": "NewCircleInvitations_user",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "filter",
                    "type": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewCircleInvitationsRefetchQuery",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
                "args": null,
                "storageKey": null
              },
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesUserIsIn",
                "storageKey": null,
                "args": v4,
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
                      v5,
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
                          v6,
                          v7,
                          v8,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isCircleUsableByMembers",
                            "args": null,
                            "storageKey": null
                          },
                          v9,
                          v10
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesFromClub",
                "storageKey": null,
                "args": v4,
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
                      v5,
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
                          v6,
                          v7,
                          v8,
                          v9,
                          v10
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circles",
                "storageKey": "circles(last:100)",
                "args": [
                  v3
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
                      v5,
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
                          v6,
                          v7,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "mode",
                            "args": null,
                            "storageKey": null
                          },
                          v9,
                          v10
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '39cb55cf57d9c879521d4d68599ee9a2';
module.exports = node;
