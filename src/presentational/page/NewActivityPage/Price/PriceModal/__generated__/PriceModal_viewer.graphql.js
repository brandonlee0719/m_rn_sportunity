/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Prices_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PriceModal_viewer$ref: FragmentReference;
export type PriceModal_viewer = {|
  +id: string,
  +$fragmentRefs: Prices_viewer$ref,
  +$refType: PriceModal_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PriceModal_viewer",
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
      "name": "Prices_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '44977d673042e8eb5169134f03517e9a';
module.exports = node;
