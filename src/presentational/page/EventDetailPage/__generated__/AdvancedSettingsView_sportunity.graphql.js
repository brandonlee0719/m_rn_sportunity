/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type SexRestriction = "FEMALE" | "MALE" | "NONE" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdvancedSettingsView_sportunity$ref: FragmentReference;
export type AdvancedSettingsView_sportunity = {|
  +ageRestriction: ?{|
    +from: ?number,
    +to: ?number,
  |},
  +sexRestriction: ?SexRestriction,
  +$refType: AdvancedSettingsView_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AdvancedSettingsView_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "ageRestriction",
      "storageKey": null,
      "args": null,
      "concreteType": "IntInterval",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "from",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "to",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sexRestriction",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd41d4aacf40f9ad9a2bec4d30e1aef58';
module.exports = node;
