/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AuthorizedUsers_user$ref = any;
type AuthorizedUsers_viewer$ref = any;
type CalendarSync_user$ref = any;
type Statistics_user$ref = any;
type Statistics_viewer$ref = any;
type SubaccountsManagment_user$ref = any;
type SubaccountsManagment_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type AccountPage_viewer$ref: FragmentReference;
export type AccountPage_viewer = {|
  +me: ?{|
    +id: string,
    +firstName: ?string,
    +lastName: ?string,
    +nationality: ?string,
    +email: ?any,
    +birthday: ?any,
    +shouldDeclareVAT: ?boolean,
    +address: ?{|
      +country: string
    |},
    +isProfileComplete: ?boolean,
    +profileType: ?UserProfileType,
    +isSubAccount: ?boolean,
    +$fragmentRefs: Statistics_user$ref & AuthorizedUsers_user$ref & CalendarSync_user$ref & SubaccountsManagment_user$ref,
  |},
  +$fragmentRefs: Statistics_viewer$ref & AuthorizedUsers_viewer$ref & SubaccountsManagment_viewer$ref,
  +$refType: AccountPage_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AccountPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Statistics_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AuthorizedUsers_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SubaccountsManagment_viewer",
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
          "name": "nationality",
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
          "kind": "FragmentSpread",
          "name": "AuthorizedUsers_user",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "CalendarSync_user",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "SubaccountsManagment_user",
          "args": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "firstName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "lastName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Statistics_user",
          "args": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "email",
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
          "name": "shouldDeclareVAT",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "address",
          "storageKey": null,
          "args": null,
          "concreteType": "AddressModel",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "country",
              "args": null,
              "storageKey": null
            }
          ]
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
          "name": "profileType",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isSubAccount",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '22f1d70e1f1738ea302a9273b4c125a1';
module.exports = node;
