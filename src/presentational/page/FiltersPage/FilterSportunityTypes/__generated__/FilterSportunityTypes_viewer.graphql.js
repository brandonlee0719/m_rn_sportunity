/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type FilterSportunityTypes_viewer$ref: FragmentReference;
export type FilterSportunityTypes_viewer = {|
  +sportunityTypes: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?{|
      +FR: ?string,
      +EN: ?string,
    |},
  |}>,
  +$refType: FilterSportunityTypes_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FilterSportunityTypes_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunityTypes",
      "storageKey": "sportunityTypes(sportType:\"COLLECTIVE\")",
      "args": [
        {
          "kind": "Literal",
          "name": "sportType",
          "value": "COLLECTIVE",
          "type": "SportTypeEnum"
        }
      ],
      "concreteType": "SportunityType",
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "EN",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '632001742be9acf18a1dbf3b746ac005';
module.exports = node;
