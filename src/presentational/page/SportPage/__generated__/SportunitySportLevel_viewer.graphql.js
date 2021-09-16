/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportList_sport$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunitySportLevel_viewer$ref: FragmentReference;
export type SportunitySportLevel_viewer = {|
  +id: string,
  +sport?: ?{|
    +$fragmentRefs: SportList_sport$ref
  |},
  +$refType: SportunitySportLevel_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SportunitySportLevel_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "querySport",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "sportId",
      "type": "ID",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "querySport",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sport",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "sportId",
              "type": "ID"
            }
          ],
          "concreteType": "Sport",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SportList_sport",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e0abde99abeefd18c0ed315e0481b795';
module.exports = node;
