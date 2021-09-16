/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ConfirmBookingPageHeader_sportunity$ref = any;
type Header_sportunity$ref = any;
type PaymentMethodsList_paymentMethods$ref = any;
type PriceView_sportunity$ref = any;
type PriceView_viewer$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type PaymentStatus = "Canceled" | "Done" | "Error" | "Locked" | "Pending" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChoosePaymentMethod_viewer$ref: FragmentReference;
export type ChoosePaymentMethod_viewer = {|
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
  +sportunity: ?{|
    +id: string,
    +price: ?{|
      +cents: number,
      +currency: ?Currency,
    |},
    +paymentStatus: ?$ReadOnlyArray<?{|
      +user: ?{|
        +id: string
      |},
      +status: ?PaymentStatus,
      +price: ?{|
        +cents: number,
        +currency: ?Currency,
      |},
    |}>,
    +$fragmentRefs: ConfirmBookingPageHeader_sportunity$ref & Header_sportunity$ref & PriceView_sportunity$ref,
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
  +$fragmentRefs: PriceView_viewer$ref,
  +$refType: ChoosePaymentMethod_viewer$ref,
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
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": v1
};
return {
  "kind": "Fragment",
  "name": "ChoosePaymentMethod_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID",
      "defaultValue": null
    },
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
      "kind": "FragmentSpread",
      "name": "PriceView_viewer",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunity",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "id",
          "type": "ID"
        }
      ],
      "concreteType": "Sportunity",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ConfirmBookingPageHeader_sportunity",
          "args": null
        },
        v0,
        v2,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "paymentStatus",
          "storageKey": null,
          "args": null,
          "concreteType": "SportunityPaymentStatus",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "user",
              "storageKey": null,
              "args": null,
              "concreteType": "User",
              "plural": false,
              "selections": [
                v0
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "status",
              "args": null,
              "storageKey": null
            },
            v2
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "Header_sportunity",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PriceView_sportunity",
          "args": null
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
(node/*: any*/).hash = 'c9ff4b9ba4f7ddbe7e4324db60be300b';
module.exports = node;
