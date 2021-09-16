/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type levels_sport$ref: FragmentReference;
export type levels_sport = {|
  +allLevelSelected: ?boolean,
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
  +$refType: levels_sport$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
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
  "name": "levels_sport",
  "type": "SportunitySport",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "allLevelSelected",
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "EN",
          "storageKey": null,
          "args": null,
          "concreteType": "SportLevel",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "FR",
          "storageKey": null,
          "args": null,
          "concreteType": "SportLevel",
          "plural": false,
          "selections": v0
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb9a82521371975e2e9187072d4a0bd0';
module.exports = node;
