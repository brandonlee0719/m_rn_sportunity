/**
 * @flow
 * @relayHash d6ed5e56ffaae885648e96ae7e09dac9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MyWallet_viewer$ref = any;
export type MyWalletQueryVariables = {||};
export type MyWalletQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: MyWallet_viewer$ref
  |}
|};
export type MyWalletQuery = {|
  variables: MyWalletQueryVariables,
  response: MyWalletQueryResponse,
|};
*/


/*
query MyWalletQuery {
  viewer {
    ...MyWallet_viewer
    id
  }
}

fragment MyWallet_viewer on Viewer {
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
  amountOnWallet {
    amountOnWallet {
      cents
      currency
    }
    lockedAmount {
      cents
      currency
    }
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
    "kind": "Literal",
    "name": "first",
    "value": 3,
    "type": "Int"
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cents",
  "args": null,
  "storageKey": null
},
v6 = [
  v0,
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
],
v7 = [
  v5,
  v4
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MyWalletQuery",
  "id": null,
  "text": "query MyWalletQuery {\n  viewer {\n    ...MyWallet_viewer\n    id\n  }\n}\n\nfragment MyWallet_viewer on Viewer {\n  ...Transactions_viewer\n  ...Fees_viewer\n  id\n  me {\n    id\n    pseudo\n    isProfileComplete\n    paymentMethods {\n      id\n    }\n    bankAccount {\n      id\n    }\n    subAccounts {\n      id\n      pseudo\n    }\n  }\n  amountOnWallet {\n    amountOnWallet {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n\nfragment Transactions_viewer on Viewer {\n  me {\n    id\n  }\n  transactions(first: 3) {\n    count\n    edges {\n      node {\n        id\n        amount {\n          currency\n          cents\n        }\n        from {\n          id\n          pseudo\n          avatar\n        }\n        to {\n          id\n          pseudo\n          avatar\n        }\n        kind\n        reason {\n          sportunity {\n            title\n            id\n          }\n        }\n        creation_date\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Fees_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MyWalletQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MyWalletQuery",
    "argumentDefinitions": [],
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
            "kind": "LinkedField",
            "alias": null,
            "name": "transactions",
            "storageKey": "transactions(first:3)",
            "args": v3,
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
                      v0,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "amount",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Price",
                        "plural": false,
                        "selections": [
                          v4,
                          v5
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
                        "selections": v6
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "to",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": v6
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
                              v0
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
            "args": v3,
            "handle": "connection",
            "key": "Viewer_transactions",
            "filters": [
              "filter"
            ]
          },
          v0,
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
                "selections": v7
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lockedAmount",
                "storageKey": null,
                "args": null,
                "concreteType": "LockedAmountOnWallet",
                "plural": false,
                "selections": v7
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
(node/*: any*/).hash = '5b2eb97e4ed2fd5518c3ce1d381c267b';
module.exports = node;
