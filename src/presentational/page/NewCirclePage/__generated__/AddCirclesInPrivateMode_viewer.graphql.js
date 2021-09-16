/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type NewCircleInvitations_user$ref = any;
type NewCircleInvitations_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddCirclesInPrivateMode_viewer$ref: FragmentReference;
export type AddCirclesInPrivateMode_viewer = {|
  +me: ?{|
    +id: string,
    +fees: ?number,
    +profileType: ?UserProfileType,
    +$fragmentRefs: NewCircleInvitations_user$ref,
  |},
  +$fragmentRefs: NewCircleInvitations_viewer$ref,
  +$refType: AddCirclesInPrivateMode_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AddCirclesInPrivateMode_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "NewCircleInvitations_viewer",
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
          "name": "NewCircleInvitations_user",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7be6116acec9c4f6a260fd0aa4a0f628';
module.exports = node;
