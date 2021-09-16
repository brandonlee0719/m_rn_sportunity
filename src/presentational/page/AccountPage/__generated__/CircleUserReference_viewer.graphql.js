/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CircleUserReference_viewer$ref: FragmentReference;
export type CircleUserReference_viewer = {|
  +id: string,
  +circlePersonalReference?: ?string,
  +$refType: CircleUserReference_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CircleUserReference_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "circleId",
      "type": "String!",
      "defaultValue": ""
    },
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "Boolean!",
      "defaultValue": false
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
      "condition": "query",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "circlePersonalReference",
          "args": [
            {
              "kind": "Variable",
              "name": "circleId",
              "variableName": "circleId",
              "type": "String!"
            }
          ],
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ba17ca4e5f112631e85372b61688fd12';
module.exports = node;
