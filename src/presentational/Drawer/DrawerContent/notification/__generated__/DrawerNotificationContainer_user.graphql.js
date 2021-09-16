/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrawerNotificationContainer_user$ref: FragmentReference;
export type DrawerNotificationContainer_user = {|
  +id: string,
  +numberOfUnreadNotifications: ?number,
  +numberOfFormsToFill: ?number,
  +numberOfPaymentModelsToPay: ?number,
  +$refType: DrawerNotificationContainer_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DrawerNotificationContainer_user",
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
      "name": "numberOfUnreadNotifications",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "numberOfFormsToFill",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "numberOfPaymentModelsToPay",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4777c9c0d976d8812bc8a4c6dae27815';
module.exports = node;
