/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TopContent_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityItem_viewer$ref: FragmentReference;
export type SportunityItem_viewer = {|
  +$fragmentRefs: TopContent_viewer$ref,
  +$refType: SportunityItem_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SportunityItem_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TopContent_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3dba5c58d1b0338a0734852e6bad9339';
module.exports = node;
