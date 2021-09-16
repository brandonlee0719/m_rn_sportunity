/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PaymentMethodsList_paymentMethods$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SelectPaymentMethod_viewer$ref: FragmentReference;
export type SelectPaymentMethod_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +firstName: ?string,
    +lastName: ?string,
    +address: ?{|
      +country: string
    |},
    +paymentMethods: ?$ReadOnlyArray<?{|
      +id: string,
      +cardType: ?string,
      +cardMask: ?string,
      +expirationDate: ?string,
      +$fragmentRefs: PaymentMethodsList_paymentMethods$ref,
    |}>,
  |},
  +amountOnWallet?: ?{|
    +amountOnWallet: ?{|
      +cents: ?number,
      +currency: ?Currency,
    |},
    +lockedAmount: ?{|
      +cents: ?number,
      +currency: ?Currency,
    |},
  |},
  +$refType: SelectPaymentMethod_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cents",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "currency",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "SelectPaymentMethod_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    v0,
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
        }
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "query",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "amountOnWallet",
          "storageKey": null,
          "args": null,
          "concreteType": "AmountOnWallet",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "amountOnWallet",
              "storageKey": null,
              "args": null,
              "concreteType": "TotalAmountOnWallet",
              "plural": false,
              "selections": v1
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "lockedAmount",
              "storageKey": null,
              "args": null,
              "concreteType": "LockedAmountOnWallet",
              "plural": false,
              "selections": v1
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd0990caab49f6554f2717913a48a07dd';
module.exports = node;
