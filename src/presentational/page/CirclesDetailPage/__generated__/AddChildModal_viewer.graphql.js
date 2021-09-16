/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CreateProfilePage_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddChildModal_viewer$ref: FragmentReference;
export type AddChildModal_viewer = {|
  +id: string,
  +$fragmentRefs: CreateProfilePage_viewer$ref,
  +$refType: AddChildModal_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AddChildModal_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "CreateProfilePage_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '143962e4f1cb3380f12d2ad9d6fe2fd0';
module.exports = node;
