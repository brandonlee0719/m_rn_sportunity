/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BottomContent_user$ref = any;
type TopContent_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityItem_user$ref: FragmentReference;
export type SportunityItem_user = {|
  +$fragmentRefs: TopContent_user$ref & BottomContent_user$ref,
  +$refType: SportunityItem_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SportunityItem_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TopContent_user",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BottomContent_user",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fb10438c8d8e24b06eaeff09196be0ed';
module.exports = node;
