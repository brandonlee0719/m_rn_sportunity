/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportList_sport$ref: FragmentReference;
export type SportList_sport = {|
  +id: string,
  +name: ?{|
    +id: string,
    +EN: ?string,
    +FR: ?string,
  |},
  +logo: string,
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
  +$refType: SportList_sport$ref,
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
  "name": "SportList_sport",
  "type": "Sport",
  "metadata": null,
  "argumentDefinitions": [],
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
      ]
    },
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
          "selections": v1
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "FR",
          "storageKey": null,
          "args": null,
          "concreteType": "SportLevel",
          "plural": false,
          "selections": v1
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '9fa90104d1412ff35538961677544117';
module.exports = node;
