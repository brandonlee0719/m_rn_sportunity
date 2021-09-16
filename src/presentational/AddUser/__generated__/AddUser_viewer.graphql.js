/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddUser_viewer$ref: FragmentReference;
export type AddUser_viewer = {|
  +users?: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +avatar: ?string,
        +pseudo: string,
      |}
    |}>
  |},
  +me: ?{|
    +id: string,
    +circles?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +memberCount: number,
          +type: ?CircleTypeEnum,
          +members: ?$ReadOnlyArray<?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
            +profileType: ?UserProfileType,
          |}>,
        |}
      |}>
    |},
    +circlesFromClub?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +memberCount: number,
          +owner: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
          +members: ?$ReadOnlyArray<?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
            +profileType: ?UserProfileType,
          |}>,
          +type: ?CircleTypeEnum,
        |}
      |}>
    |},
    +circlesUserIsIn?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +memberCount: number,
          +isCircleUsableByMembers: ?boolean,
          +owner: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
          +members: ?$ReadOnlyArray<?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
            +profileType: ?UserProfileType,
          |}>,
          +type: ?CircleTypeEnum,
          +mode: CircleKind,
        |}
      |}>
    |},
  |},
  +$refType: AddUser_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v0,
    v3,
    v4
  ]
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "members",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": [
    v0,
    v3,
    v4,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profileType",
      "args": null,
      "storageKey": null
    }
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "AddUser_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
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
      "defaultValue": false
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
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryUserCircles",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryCirclesFromClub",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "queryCirclesUserIsIn",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
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
        v0,
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
                        v0,
                        v1,
                        v2,
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "isCircleUsableByMembers",
                          "args": null,
                          "storageKey": null
                        },
                        v5,
                        v6,
                        v7,
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
                        v0,
                        v1,
                        v2,
                        v5,
                        v6,
                        v7
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
                        v0,
                        v1,
                        v2,
                        v7,
                        v6
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
                    v0,
                    v4,
                    v3
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '562a78a7eb7aa8b23722b9f4a047d985';
module.exports = node;
