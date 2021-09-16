/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportunityItem_user$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityListView_user$ref: FragmentReference;
export type SportunityListView_user = {|
  +id: string,
  +profileType: ?UserProfileType,
  +description: ?string,
  +$fragmentRefs: SportunityItem_user$ref,
  +$refType: SportunityListView_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SportunityListView_user",
  "type": "User",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "profileType",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SportunityItem_user",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'dbf250e74540b5b4a0abc2486c7376f3';
module.exports = node;
