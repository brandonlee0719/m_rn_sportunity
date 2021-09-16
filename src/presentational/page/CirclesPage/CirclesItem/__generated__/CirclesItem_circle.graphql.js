/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type CirclesItem_circle$ref: FragmentReference;
export type CirclesItem_circle = {|
  +id: string,
  +name: ?string,
  +memberCount: number,
  +mode: CircleKind,
  +isCircleUsableByMembers: ?boolean,
  +isCircleAccessibleFromUrl: ?boolean,
  +type: ?CircleTypeEnum,
  +owner: ?{|
    +id: string,
    +avatar: ?string,
    +pseudo: string,
  |},
  +coOwners: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +members: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +memberParents: ?$ReadOnlyArray<?{|
    +id: string
  |}>,
  +termsOfUses?: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
    +link: ?string,
    +content: ?string,
    +acceptedBy: ?$ReadOnlyArray<?{|
      +user: ?{|
        +id: string
      |}
    |}>,
  |}>,
  +$refType: CirclesItem_circle$ref,
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
v2 = [
  v0
];
return {
  "kind": "Fragment",
  "name": "CirclesItem_circle",
  "type": "Circle",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "queryDetails",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "memberCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "mode",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isCircleUsableByMembers",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isCircleAccessibleFromUrl",
      "args": null,
      "storageKey": null
    },
    v1,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "owner",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "avatar",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "pseudo",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "coOwners",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v2
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "members",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v2
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "memberParents",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v2
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryDetails",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "termsOfUses",
          "storageKey": null,
          "args": null,
          "concreteType": "CircleTermsOfUse",
          "plural": true,
          "selections": [
            v0,
            v1,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "link",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "content",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "acceptedBy",
              "storageKey": null,
              "args": null,
              "concreteType": "TermsOfUseAcceptedBy",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "user",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": false,
                  "selections": v2
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
(node/*: any*/).hash = '9f2e29c70a7b4f55f9457b385433be47';
module.exports = node;
