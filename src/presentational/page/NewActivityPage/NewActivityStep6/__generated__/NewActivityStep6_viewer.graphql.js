/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AdvancedSettings_user$ref = any;
type AdvancedSettings_viewer$ref = any;
type CoOrganizerModal_viewer$ref = any;
type Price_viewer$ref = any;
type Prices_viewer$ref = any;
type SelectTemplate_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewActivityStep6_viewer$ref: FragmentReference;
export type NewActivityStep6_viewer = {|
  +me: ?{|
    +id: string,
    +fees: ?number,
    +profileType: ?UserProfileType,
    +$fragmentRefs: AdvancedSettings_user$ref,
  |},
  +$fragmentRefs: CoOrganizerModal_viewer$ref & Prices_viewer$ref & Price_viewer$ref & AdvancedSettings_viewer$ref & SelectTemplate_viewer$ref,
  +$refType: NewActivityStep6_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NewActivityStep6_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CoOrganizerModal_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Prices_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Price_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AdvancedSettings_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SelectTemplate_viewer",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
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
          "name": "fees",
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
          "kind": "FragmentSpread",
          "name": "AdvancedSettings_user",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8c4f82bf2a05af20b4b6aa80b5c38bcd';
module.exports = node;
