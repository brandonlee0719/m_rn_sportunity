/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Invitee_viewer$ref: FragmentReference;
export type Invitee_viewer = {|
  +id: string,
  +userExists?: ?boolean,
  +$refType: Invitee_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Invitee_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "requestUserExists",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "pseudo",
      "type": "String",
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
      "condition": "requestUserExists",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "userExists",
          "args": [
            {
              "kind": "Variable",
              "name": "pseudo",
              "variableName": "pseudo",
              "type": "String"
            }
          ],
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ed9b19d6dc9bdea562225b143e5bbefa';
module.exports = node;
