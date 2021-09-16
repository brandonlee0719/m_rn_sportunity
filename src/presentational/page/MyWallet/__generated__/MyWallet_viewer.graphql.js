/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Fees_viewer$ref = any;
type Transactions_viewer$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type MyWallet_viewer$ref: FragmentReference;
export type MyWallet_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +pseudo: string,
    +isProfileComplete: ?boolean,
    +paymentMethods: ?$ReadOnlyArray<?{|
      +id: string
    |}>,
    +bankAccount: ?{|
      +id: string
    |},
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
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
  +$fragmentRefs: Transactions_viewer$ref & Fees_viewer$ref,
  +$refType: MyWallet_viewer$ref,
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = [
  v0
],
v3 = [
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
  "name": "MyWallet_viewer",
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
      "kind": "FragmentSpread",
      "name": "Transactions_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Fees_viewer",
      "args": null
    },
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
        v1,
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
          "selections": v2
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "bankAccount",
          "storageKey": null,
          "args": null,
          "concreteType": "BankAccount",
          "plural": false,
          "selections": v2
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "subAccounts",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": [
            v0,
            v1
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
              "selections": v3
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "lockedAmount",
              "storageKey": null,
              "args": null,
              "concreteType": "LockedAmountOnWallet",
              "plural": false,
              "selections": v3
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '078f56f203ddac1b356ac78771dad420';
module.exports = node;
