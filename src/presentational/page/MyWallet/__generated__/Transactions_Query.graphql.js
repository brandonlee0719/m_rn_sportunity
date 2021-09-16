/**
 * @flow
 * @relayHash 1966b26ec762acdc05840e303f3c33ad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Transactions_viewer$ref = any;
export type TransactionKind = "CASH_IN" | "CASH_OUT" | "FEES" | "REFUND" | "TRANSFERT" | "%future added value";
export type TransactionStatus = "CANCELLED" | "CREATION" | "DONE" | "ERROR" | "TO_BE_DONE" | "TO_COME" | "%future added value";
export type TransactionFilter = {
  transactionStatus?: ?TransactionStatus,
  transactionKinds?: ?$ReadOnlyArray<?TransactionKind>,
  users?: ?$ReadOnlyArray<?string>,
};
export type Transactions_QueryVariables = {|
  count?: ?number,
  cursor?: ?string,
  filter?: ?TransactionFilter,
  doQuery: boolean,
|};
export type Transactions_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Transactions_viewer$ref
  |}
|};
export type Transactions_Query = {|
  variables: Transactions_QueryVariables,
  response: Transactions_QueryResponse,
|};
*/


/*
query Transactions_Query(
  $count: Int
  $cursor: String
  $filter: TransactionFilter
  $doQuery: Boolean!
) {
  viewer {
    ...Transactions_viewer_W9zit
    id
  }
}

fragment Transactions_viewer_W9zit on Viewer {
  me {
    id
  }
  transactions(first: $count, after: $cursor, filter: $filter) @include(if: $doQuery) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "filter",
    "type": "TransactionFilter",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "doQuery",
    "type": "Boolean!",
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
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "filter",
    "variableName": "filter",
    "type": "TransactionFilter"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count",
    "type": "Int"
  }
],
v3 = [
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "Transactions_Query",
  "id": null,
  "text": "query Transactions_Query(\n  $count: Int\n  $cursor: String\n  $filter: TransactionFilter\n  $doQuery: Boolean!\n) {\n  viewer {\n    ...Transactions_viewer_W9zit\n    id\n  }\n}\n\nfragment Transactions_viewer_W9zit on Viewer {\n  me {\n    id\n  }\n  transactions(first: $count, after: $cursor, filter: $filter) @include(if: $doQuery) {\n    count\n    edges {\n      node {\n        id\n        amount {\n          currency\n          cents\n        }\n        from {\n          id\n          pseudo\n          avatar\n        }\n        to {\n          id\n          pseudo\n          avatar\n        }\n        kind\n        reason {\n          sportunity {\n            title\n            id\n          }\n        }\n        creation_date\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "Transactions_Query",
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
            "name": "Transactions_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "doQuery",
                "variableName": "doQuery",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "filter",
                "variableName": "filter",
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
    "name": "Transactions_Query",
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
              v1
            ]
          },
          v1,
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "doQuery",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "transactions",
                "storageKey": null,
                "args": v2,
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
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "currency",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "cents",
                                "args": null,
                                "storageKey": null
                              }
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
                            "selections": v3
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "to",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": v3
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
                "args": v2,
                "handle": "connection",
                "key": "Viewer_transactions",
                "filters": [
                  "filter"
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
(node/*: any*/).hash = '6571cf0c572f808118c6ffaf7eadd290';
module.exports = node;
