/**
 * @flow
 * @relayHash 2b218327b7e4eeb2d00cd113af5662a5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type WalletPage_viewer$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type WalletPageRefetchQueryVariables = {|
  queryAmountOnWallet: boolean,
  queryBankWireToWallet: boolean,
  amount: PriceInput,
|};
export type WalletPageRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: WalletPage_viewer$ref
  |}
|};
export type WalletPageRefetchQuery = {|
  variables: WalletPageRefetchQueryVariables,
  response: WalletPageRefetchQueryResponse,
|};
*/


/*
query WalletPageRefetchQuery(
  $queryAmountOnWallet: Boolean!
  $queryBankWireToWallet: Boolean!
  $amount: PriceInput!
) {
  viewer {
    ...WalletPage_viewer_3dJM61
    id
  }
}

fragment WalletPage_viewer_3dJM61 on Viewer {
  id
  me {
    id
    isProfileComplete
  }
  amountOnWallet @include(if: $queryAmountOnWallet) {
    amountOnWallet {
      cents
      currency
    }
    lockedAmount {
      cents
      currency
    }
  }
  bankwireToWallet(amount: $amount) @include(if: $queryBankWireToWallet) {
    wireReference
    bankAccountType
    ownerName
    ownerAddress
    IBAN
    BIC
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "queryAmountOnWallet",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "queryBankWireToWallet",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "amount",
    "type": "PriceInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
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
  "kind": "Request",
  "operationKind": "query",
  "name": "WalletPageRefetchQuery",
  "id": null,
  "text": "query WalletPageRefetchQuery(\n  $queryAmountOnWallet: Boolean!\n  $queryBankWireToWallet: Boolean!\n  $amount: PriceInput!\n) {\n  viewer {\n    ...WalletPage_viewer_3dJM61\n    id\n  }\n}\n\nfragment WalletPage_viewer_3dJM61 on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n  }\n  amountOnWallet @include(if: $queryAmountOnWallet) {\n    amountOnWallet {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n  bankwireToWallet(amount: $amount) @include(if: $queryBankWireToWallet) {\n    wireReference\n    bankAccountType\n    ownerName\n    ownerAddress\n    IBAN\n    BIC\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "WalletPageRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
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
            "kind": "FragmentSpread",
            "name": "WalletPage_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "amount",
                "variableName": "amount",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryAmountOnWallet",
                "variableName": "queryAmountOnWallet",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryBankWireToWallet",
                "variableName": "queryBankWireToWallet",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "WalletPageRefetchQuery",
    "argumentDefinitions": v0,
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
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
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lockedAmount",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LockedAmountOnWallet",
                    "plural": false,
                    "selections": v2
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb57d7cbb5d99d81a1bb0f7403048dc4';
module.exports = node;
