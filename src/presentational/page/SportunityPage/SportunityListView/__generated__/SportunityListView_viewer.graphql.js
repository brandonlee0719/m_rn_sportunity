/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportunityItem_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityListView_viewer$ref: FragmentReference;
export type SportunityListView_viewer = {|
  +id: string,
  +$fragmentRefs: SportunityItem_viewer$ref,
  +$refType: SportunityListView_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SportunityListView_viewer",
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
      "name": "SportunityItem_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cd8e9d58298dbdbb9e9f39855825cc7d';
module.exports = node;
