/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CreateProfilePage_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SubaccountsManagment_viewer$ref: FragmentReference;
export type SubaccountsManagment_viewer = {|
  +id: string,
  +$fragmentRefs: CreateProfilePage_viewer$ref,
  +$refType: SubaccountsManagment_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SubaccountsManagment_viewer",
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
(node/*: any*/).hash = '97db416444341c789bded954c27dce88';
module.exports = node;
