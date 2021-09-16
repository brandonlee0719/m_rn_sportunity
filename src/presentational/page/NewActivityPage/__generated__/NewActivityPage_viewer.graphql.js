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
type EventType_user$ref = any;
type EventType_viewer$ref = any;
type Invitations_user$ref = any;
type Invitations_viewer$ref = any;
type PlaceList_viewer$ref = any;
type Place_viewer$ref = any;
type Price_viewer$ref = any;
type Prices_viewer$ref = any;
type SelectTemplate_viewer$ref = any;
type Validate_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewActivityPage_viewer$ref: FragmentReference;
export type NewActivityPage_viewer = {|
  +me: ?{|
    +id: string,
    +fees: ?number,
    +profileType: ?UserProfileType,
    +$fragmentRefs: Invitations_user$ref & AdvancedSettings_user$ref & EventType_user$ref,
  |},
  +$fragmentRefs: Validate_viewer$ref & PlaceList_viewer$ref & CoOrganizerModal_viewer$ref & Prices_viewer$ref & Price_viewer$ref & Invitations_viewer$ref & AdvancedSettings_viewer$ref & EventType_viewer$ref & Place_viewer$ref & SelectTemplate_viewer$ref,
  +$refType: NewActivityPage_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NewActivityPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Invitations_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Validate_viewer",
      "args": null
    },
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
      "name": "PlaceList_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AdvancedSettings_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "EventType_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Place_viewer",
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
          "name": "Invitations_user",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "AdvancedSettings_user",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "EventType_user",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a7a8c529a353d74d4174048a9c1278f8';
module.exports = node;
