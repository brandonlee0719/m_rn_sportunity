/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type DrawerChatContainer_user$ref = any;
type DrawerChatContainer_viewer$ref = any;
type DrawerNotificationContainer_user$ref = any;
type DrawerNotificationContainer_viewer$ref = any;
type DrawerTeamsContainer_me$ref = any;
type DrawerTeamsContainer_viewer$ref = any;
type DrawerWalletContainer_me$ref = any;
type header_me$ref = any;
type header_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrawerContent_query$ref: FragmentReference;
export type DrawerContent_query = {|
  +viewer: ?{|
    +me: ?{|
      +id: string,
      +mangoId: ?string,
      +profileType: ?UserProfileType,
      +isProfileComplete: ?boolean,
      +birthday: ?any,
      +numberOfFormsToFill: ?number,
      +numberOfPaymentModelsToPay: ?number,
      +$fragmentRefs: DrawerWalletContainer_me$ref & DrawerTeamsContainer_me$ref & DrawerNotificationContainer_user$ref & DrawerChatContainer_user$ref & header_me$ref,
    |},
    +$fragmentRefs: DrawerTeamsContainer_viewer$ref & DrawerNotificationContainer_viewer$ref & DrawerChatContainer_viewer$ref & header_viewer$ref,
  |},
  +$refType: DrawerContent_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DrawerContent_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "viewer",
      "storageKey": null,
      "args": null,
      "concreteType": "Viewer",
      "plural": false,
      "selections": [
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
              "name": "numberOfPaymentModelsToPay",
              "args": null,
              "storageKey": null
            },
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
              "name": "isProfileComplete",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "birthday",
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
              "name": "mangoId",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DrawerWalletContainer_me",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DrawerTeamsContainer_me",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DrawerNotificationContainer_user",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DrawerChatContainer_user",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "header_me",
              "args": null
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "DrawerTeamsContainer_viewer",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "DrawerNotificationContainer_viewer",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "DrawerChatContainer_viewer",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "header_viewer",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7c7ff85c6393e4bbafacff8a030e1a52';
module.exports = node;
