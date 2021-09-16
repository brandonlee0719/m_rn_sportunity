/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BankAccount_bankAccount$ref = any;
type BankAccount_viewer$ref = any;
type PaymentMethodsList_paymentMethods$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentSettings_viewer$ref: FragmentReference;
export type PaymentSettings_viewer = {|
  +me: ?{|
    +id: string,
    +profileType: ?UserProfileType,
    +isProfileComplete: ?boolean,
    +paymentMethods: ?$ReadOnlyArray<?{|
      +id: string,
      +cardType: ?string,
      +cardMask: ?string,
      +expirationDate: ?string,
      +$fragmentRefs: PaymentMethodsList_paymentMethods$ref,
    |}>,
    +bankAccount: ?{|
      +id: string,
      +$fragmentRefs: BankAccount_bankAccount$ref,
    |},
  |},
  +$fragmentRefs: BankAccount_viewer$ref,
  +$refType: PaymentSettings_viewer$ref,
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
  "name": "PaymentSettings_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "BankAccount_viewer",
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
        v0,
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
          "kind": "LinkedField",
          "alias": null,
          "name": "paymentMethods",
          "storageKey": null,
          "args": null,
          "concreteType": "PaymentMethod",
          "plural": true,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cardType",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cardMask",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "expirationDate",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "FragmentSpread",
              "name": "PaymentMethodsList_paymentMethods",
              "args": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "bankAccount",
          "storageKey": null,
          "args": null,
          "concreteType": "BankAccount",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "FragmentSpread",
              "name": "BankAccount_bankAccount",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd596de9fac023267d1401edae7c6e3bd';
module.exports = node;
