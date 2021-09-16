/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type NewCircleAdvancedSettingsModal_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewCircleView_viewer$ref: FragmentReference;
export type NewCircleView_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +profileType: ?UserProfileType,
  |},
  +$fragmentRefs: NewCircleAdvancedSettingsModal_viewer$ref,
  +$refType: NewCircleView_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "NewCircleView_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "profileType",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "NewCircleAdvancedSettingsModal_viewer",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ea574a2242eaef1b820e2d7ec9eb482';
module.exports = node;
