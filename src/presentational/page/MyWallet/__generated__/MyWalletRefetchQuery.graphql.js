/**
 * @flow
 * @relayHash c3245f22b37addc0389d1c20af966378
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyWallet_viewer$ref = any;
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type MyWalletRefetchQueryVariables = {|
  queryAmountOnWallet: boolean,
  queryBankWireToWallet: boolean,
  amount: PriceInput,
|};
export type MyWalletRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: MyWallet_viewer$ref
  |}
|};
export type MyWalletRefetchQuery = {|
  variables: MyWalletRefetchQueryVariables,
  response: MyWalletRefetchQueryResponse,
|};
*/


/*
query MyWalletRefetchQuery(
  $queryAmountOnWallet: Boolean!
  $queryBankWireToWallet: Boolean!
  $amount: PriceInput!
) {
  viewer {
    ...MyWallet_viewer_3dJM61
    id
  }
}

fragment MyWallet_viewer_3dJM61 on Viewer {
  ...Transactions_viewer
  ...Fees_viewer
  id
  me {
    id
    pseudo
    isProfileComplete
    paymentMethods {
      id
    }
    bankAccount {
      id
    }
    subAccounts {
      id
      pseudo
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

fragment Transactions_viewer on Viewer {
  me {
    id
  }
  transactions(first: 3) {
    count
    edges {
      node {
        id
        amount {
          currency
          cents
        }
        from {
          id
          pseudo
          avatar
        }
        to {
          id
          pseudo
          avatar
        }
        kind
        reason {
          sportunity {
            title
            id
          }
        }
        creation_date
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Fees_viewer on Viewer {
  me {
    id
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = [
  v1
],
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3,
    "type": "Int"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v7 = [
  v1,
  v2,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v8 = [
  v6,
  v5
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MyWalletRefetchQuery",
  "id": null,
  "text": "query MyWalletRefetchQuery(\n  $queryAmountOnWallet: Boolean!\n  $queryBankWireToWallet: Boolean!\n  $amount: PriceInput!\n) {\n  viewer {\n    ...MyWallet_viewer_3dJM61\n    id\n  }\n}\n\nfragment MyWallet_viewer_3dJM61 on Viewer {\n  ...Transactions_viewer\n  ...Fees_viewer\n  id\n  me {\n    id\n    pseudo\n    isProfileComplete\n    paymentMethods {\n      id\n    }\n    bankAccount {\n      id\n    }\n    subAccounts {\n      id\n      pseudo\n    }\n  }\n  amountOnWallet @include(if: $queryAmountOnWallet) {\n    amountOnWallet {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n  bankwireToWallet(amount: $amount) @include(if: $queryBankWireToWallet) {\n    wireReference\n    bankAccountType\n    ownerName\n    ownerAddress\n    IBAN\n    BIC\n  }\n}\n\nfragment Transactions_viewer on Viewer {\n  me {\n    id\n  }\n  transactions(first: 3) {\n    count\n    edges {\n      node {\n        id\n        amount {\n          currency\n          cents\n        }\n        from {\n          id\n          pseudo\n          avatar\n        }\n        to {\n          id\n          pseudo\n          avatar\n        }\n        kind\n        reason {\n          sportunity {\n            title\n            id\n          }\n        }\n        creation_date\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Fees_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MyWalletRefetchQuery",
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
            "name": "MyWallet_viewer",
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
    "name": "MyWalletRefetchQuery",
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
              v2,
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
                "selections": v3
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "bankAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "BankAccount",
                "plural": false,
                "selections": v3
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
                  v1,
                  v2
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "transactions",
            "storageKey": "transactions(first:3)",
            "args": v4,
            "concreteType": "TransactionConnection",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "count",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "TransactionEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Transaction",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "amount",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Price",
                        "plural": false,
                        "selections": [
                          v5,
                          v6
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "from",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": v7
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "to",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": v7
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "kind",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "reason",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TransactionReason",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "sportunity",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Sportunity",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "title",
                                "args": null,
                                "storageKey": null
                              },
                              v1
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "creation_date",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "transactions",
            "args": v4,
            "handle": "connection",
            "key": "Viewer_transactions",
            "filters": [
              "filter"
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
                    "selections": v8
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lockedAmount",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LockedAmountOnWallet",
                    "plural": false,
                    "selections": v8
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
(node/*: any*/).hash = '53bbdff6a60e9e8f3835b4a07e83cdbf';
module.exports = node;
