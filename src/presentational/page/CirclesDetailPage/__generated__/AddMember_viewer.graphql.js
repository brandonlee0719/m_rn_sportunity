/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SearchModule_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddMember_viewer$ref: FragmentReference;
export type AddMember_viewer = {|
  +id: string,
  +$fragmentRefs: SearchModule_viewer$ref,
  +$refType: AddMember_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AddMember_viewer",
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
      "name": "SearchModule_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '380420716c059f1ca7f643834166fa8b';
module.exports = node;
