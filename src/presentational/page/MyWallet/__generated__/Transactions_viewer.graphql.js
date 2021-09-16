/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type TransactionKind = "CASH_IN" | "CASH_OUT" | "FEES" | "REFUND" | "TRANSFERT" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Transactions_viewer$ref: FragmentReference;
export type Transactions_viewer = {|
  +me: ?{|
    +id: string
  |},
  +transactions?: ?{|
    +count: ?number,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +amount: ?{|
          +currency: ?Currency,
          +cents: number,
        |},
        +from: ?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |},
        +to: ?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |},
        +kind: ?TransactionKind,
        +reason: ?{|
          +sportunity: ?{|
            +title: string
          |}
        |},
        +creation_date: ?any,
      |}
    |}>,
  |},
  +$refType: Transactions_viewer$ref,
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
  v0,
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
  "kind": "Fragment",
  "name": "Transactions_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "transactions"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 3
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
      "defaultValue": true
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
        v0
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "doQuery",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": "transactions",
          "name": "__Viewer_transactions_connection",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "filter",
              "variableName": "filter",
              "type": "TransactionFilter"
            }
          ],
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
                      "selections": v1
                    },
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "to",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "User",
                      "plural": false,
                      "selections": v1
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
                            }
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
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b9680bb7999b4313c379708cbe821d27';
module.exports = node;
