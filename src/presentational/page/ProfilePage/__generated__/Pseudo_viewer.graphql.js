/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Pseudo_viewer$ref: FragmentReference;
export type Pseudo_viewer = {|
  +userExists?: ?boolean,
  +me: ?{|
    +id: string
  |},
  +$refType: Pseudo_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Pseudo_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "pseudo",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "requestUserExists",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
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
(node/*: any*/).hash = '5128dac05c895c9099ee3b45ca884d25';
module.exports = node;
