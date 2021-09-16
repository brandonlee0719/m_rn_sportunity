/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AdvancedSettingsModal_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdvancedSettings_viewer$ref: FragmentReference;
export type AdvancedSettings_viewer = {|
  +id: string,
  +$fragmentRefs: AdvancedSettingsModal_viewer$ref,
  +$refType: AdvancedSettings_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AdvancedSettings_viewer",
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
      "name": "AdvancedSettingsModal_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'dd3e1cfa25c1a42390a1fba37ebc55ae';
module.exports = node;
