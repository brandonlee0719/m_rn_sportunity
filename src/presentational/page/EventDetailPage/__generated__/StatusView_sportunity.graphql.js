/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type SportunityKind = "PRIVATE" | "PUBLIC" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatusView_sportunity$ref: FragmentReference;
export type StatusView_sportunity = {|
  +status: ?string,
  +kind: SportunityKind,
  +participantRange: ?{|
    +from: ?number
  |},
  +$refType: StatusView_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "StatusView_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "kind",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "participantRange",
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1d6ebe1f5580dc2dd89d7d5c0ef53828';
module.exports = node;
