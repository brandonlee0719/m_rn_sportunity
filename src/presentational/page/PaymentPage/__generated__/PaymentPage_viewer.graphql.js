/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentPage_viewer$ref: FragmentReference;
export type PaymentPage_viewer = {|
  +me: ?{|
    +id: string,
    +isProfileComplete: ?boolean,
    +bankAccount: ?{|
      +id: string,
      +addressLine1: ?string,
      +addressLine2: ?string,
      +city: ?string,
      +postalCode: ?string,
      +country: ?string,
      +ownerName: ?string,
      +IBAN: ?string,
      +BIC: ?string,
    |},
    +paymentMethods: ?$ReadOnlyArray<?{|
      +id: string,
      +cardType: ?string,
      +cardMask: ?string,
      +expirationDate: ?string,
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
  +bankwireToWallet?: ?{|
    +wireReference: ?string,
    +bankAccountType: ?string,
    +ownerName: ?string,
    +ownerAddress: ?string,
    +IBAN: ?string,
    +BIC: ?string,
  |},
  +$refType: PaymentPage_viewer$ref,
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ownerName",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "IBAN",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "BIC",
  "args": null,
  "storageKey": null
},
v4 = [
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
  "name": "PaymentPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "queryAmountOnWallet",
      "type": "Boolean!",
      "defaultValue": true
    },
    {
      "kind": "LocalArgument",
      "name": "queryBankWireToWallet",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "amount",
      "type": "PriceInput!",
      "defaultValue": "null"
    }
  ],
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
        v0,
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
          "name": "bankAccount",
          "storageKey": null,
          "args": null,
          "concreteType": "BankAccount",
          "plural": false,
          "selections": [
            v0,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "addressLine1",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "addressLine2",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "city",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "postalCode",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "country",
              "args": null,
              "storageKey": null
            },
            v1,
            v2,
            v3
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
            }
          ]
        }
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryBankWireToWallet",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "bankwireToWallet",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "amount",
              "variableName": "amount",
              "type": "PriceInput!"
            }
          ],
          "concreteType": "BankWireToWallet",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "wireReference",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "bankAccountType",
              "args": null,
              "storageKey": null
            },
            v1,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "ownerAddress",
              "args": null,
              "storageKey": null
            },
            v2,
            v3
          ]
        }
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryAmountOnWallet",
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
              "selections": v4
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "lockedAmount",
              "storageKey": null,
              "args": null,
              "concreteType": "LockedAmountOnWallet",
              "plural": false,
              "selections": v4
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ace4ddc2b642a8a3e1b6c4908f56b4d7';
module.exports = node;
