/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportList_allSports$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FilterSport_viewer$ref: FragmentReference;
export type FilterSport_viewer = {|
  +id: string,
  +sports?: ?{|
    +$fragmentRefs: SportList_allSports$ref
  |},
  +$refType: FilterSport_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FilterSport_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "querySports",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    },
    {
      "kind": "LocalArgument",
      "name": "sportFilter",
      "type": "SportFilter",
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
      "condition": "querySports",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sports",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "filter",
              "variableName": "sportFilter",
              "type": "SportFilter"
            },
            {
              "kind": "Variable",
              "name": "first",
              "variableName": "count",
              "type": "Int"
            }
          ],
          "concreteType": "SportConnection",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "SportList_allSports",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '9535ceeb678aa6b146df9dd447224d6f';
module.exports = node;
