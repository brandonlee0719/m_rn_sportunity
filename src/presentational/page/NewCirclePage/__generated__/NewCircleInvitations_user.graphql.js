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
declare export opaque type NewCircleInvitations_user$ref: FragmentReference;
export type NewCircleInvitations_user = {|
  +id: string,
  +profileType: ?UserProfileType,
  +pseudo: string,
  +email: ?any,
  +circlesUserIsIn: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +name: ?string,
        +type: ?CircleTypeEnum,
        +owner: ?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |},
        +isCircleUsableByMembers: ?boolean,
        +memberCount: number,
        +sport: ?{|
          +sport: ?{|
            +id: string,
            +name: ?{|
              +FR: ?string
            |},
          |}
        |},
      |},
    |}>
  |},
  +circlesFromClub: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +name: ?string,
        +type: ?CircleTypeEnum,
        +owner: ?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |},
        +memberCount: number,
        +sport: ?{|
          +sport: ?{|
            +id: string,
            +name: ?{|
              +FR: ?string
            |},
          |}
        |},
      |},
    |}>
  |},
  +circles: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: ?{|
        +id: string,
        +name: ?string,
        +type: ?CircleTypeEnum,
        +mode: CircleKind,
        +memberCount: number,
        +sport: ?{|
          +sport: ?{|
            +id: string,
            +name: ?{|
              +FR: ?string
            |},
          |}
        |},
      |},
    |}>
  |},
  +$refType: NewCircleInvitations_user$ref,
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "last",
  "value": 100,
  "type": "Int"
},
v3 = [
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "CirclesFilter"
  },
  v2
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "owner",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v0,
    v1,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "avatar",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "memberCount",
  "args": null,
  "storageKey": null
},
v9 = {
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
        v0,
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
            }
          ]
        }
      ]
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "NewCircleInvitations_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "CirclesFilter",
      "defaultValue": null
    }
  ],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "profileType",
      "args": null,
      "storageKey": null
    },
    v1,
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
      "args": v3,
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
            v4,
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
                v5,
                v6,
                v7,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "isCircleUsableByMembers",
                  "args": null,
                  "storageKey": null
                },
                v8,
                v9
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
      "args": v3,
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
            v4,
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
                v5,
                v6,
                v7,
                v8,
                v9
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
        v2
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
            v4,
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
                v5,
                v6,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "mode",
                  "args": null,
                  "storageKey": null
                },
                v8,
                v9
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
(node/*: any*/).hash = '78a9a1dba0836df7165f36952f69b594';
module.exports = node;
