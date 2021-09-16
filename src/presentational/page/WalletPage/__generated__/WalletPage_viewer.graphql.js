/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type WalletPage_viewer$ref: FragmentReference;
export type WalletPage_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +isProfileComplete: ?boolean,
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
  +$refType: WalletPage_viewer$ref,
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
  "name": "WalletPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "queryAmountOnWallet",
      "type": "Boolean!",
      "defaultValue": false
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
          "name": "isProfileComplete",
          "args": null,
          "storageKey": null
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
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "ownerName",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "ownerAddress",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "IBAN",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "BIC",
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
(node/*: any*/).hash = '50aac4312cb025ca8b2276ee24ffe826';
module.exports = node;
