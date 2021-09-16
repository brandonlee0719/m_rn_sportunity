/**
 * @flow
 * @relayHash 2c3112297909022d03c78709e8c850d7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaymentPage_viewer$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type PaymentPageRefetchQueryVariables = {|
  queryAmountOnWallet: boolean,
  queryBankWireToWallet: boolean,
  amount: PriceInput,
|};
export type PaymentPageRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PaymentPage_viewer$ref
  |}
|};
export type PaymentPageRefetchQuery = {|
  variables: PaymentPageRefetchQueryVariables,
  response: PaymentPageRefetchQueryResponse,
|};
*/


/*
query PaymentPageRefetchQuery(
  $queryAmountOnWallet: Boolean!
  $queryBankWireToWallet: Boolean!
  $amount: PriceInput!
) {
  viewer {
    ...PaymentPage_viewer_3dJM61
    id
  }
}

fragment PaymentPage_viewer_3dJM61 on Viewer {
  me {
    id
    isProfileComplete
    bankAccount {
      id
      addressLine1
      addressLine2
      city
      postalCode
      country
      ownerName
      IBAN
      BIC
    }
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "ownerName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "IBAN",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "BIC",
  "args": null,
  "storageKey": null
},
v5 = [
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
  "name": "PaymentPageRefetchQuery",
  "id": null,
  "text": "query PaymentPageRefetchQuery(\n  $queryAmountOnWallet: Boolean!\n  $queryBankWireToWallet: Boolean!\n  $amount: PriceInput!\n) {\n  viewer {\n    ...PaymentPage_viewer_3dJM61\n    id\n  }\n}\n\nfragment PaymentPage_viewer_3dJM61 on Viewer {\n  me {\n    id\n    isProfileComplete\n    bankAccount {\n      id\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      ownerName\n      IBAN\n      BIC\n    }\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n  amountOnWallet @include(if: $queryAmountOnWallet) {\n    amountOnWallet {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n  bankwireToWallet(amount: $amount) @include(if: $queryBankWireToWallet) {\n    wireReference\n    bankAccountType\n    ownerName\n    ownerAddress\n    IBAN\n    BIC\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PaymentPageRefetchQuery",
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
            "name": "PaymentPage_viewer",
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
    "name": "PaymentPageRefetchQuery",
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
                  v1,
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
                  v2,
                  v3,
                  v4
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
                  v1,
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
          v1,
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
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "ownerAddress",
                    "args": null,
                    "storageKey": null
                  },
                  v3,
                  v4
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
                    "selections": v5
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lockedAmount",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LockedAmountOnWallet",
                    "plural": false,
                    "selections": v5
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
(node/*: any*/).hash = '7b1c160a690ee361041a5ace25ba93df';
module.exports = node;
