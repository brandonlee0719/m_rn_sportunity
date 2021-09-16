/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportList_allSports$ref: FragmentReference;
export type SportList_allSports = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +name: ?{|
        +id: string,
        +EN: ?string,
        +FR: ?string,
      |},
      +logo: string,
      +positions: ?$ReadOnlyArray<?{|
        +id: string,
        +EN: ?string,
        +FR: ?string,
      |}>,
      +certificates: ?$ReadOnlyArray<?{|
        +id: string,
        +name: ?{|
          +id: string,
          +EN: ?string,
          +FR: ?string,
        |},
      |}>,
      +levels: ?$ReadOnlyArray<?{|
        +id: string,
        +EN: ?{|
          +name: ?string,
          +description: ?string,
          +skillLevel: number,
        |},
        +FR: ?{|
          +name: ?string,
          +description: ?string,
          +skillLevel: number,
        |},
      |}>,
    |}
  |}>,
  +$refType: SportList_allSports$ref,
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
v1 = [
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "EN",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "FR",
    "args": null,
    "storageKey": null
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v1
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "SportList_allSports",
  "type": "SportConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "SportEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Sport",
          "plural": false,
          "selections": [
            v0,
            v2,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "logo",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "positions",
              "storageKey": null,
              "args": null,
              "concreteType": "TranslatedString",
              "plural": true,
              "selections": v1
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "certificates",
              "storageKey": null,
              "args": null,
              "concreteType": "Certificate",
              "plural": true,
              "selections": [
                v0,
                v2
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "levels",
              "storageKey": null,
              "args": null,
              "concreteType": "Translated",
              "plural": true,
              "selections": [
                v0,
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "EN",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SportLevel",
                  "plural": false,
                  "selections": v3
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "FR",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "SportLevel",
                  "plural": false,
                  "selections": v3
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
(node/*: any*/).hash = '90e7c2d2eb746caf97a679a46289acc1';
module.exports = node;
