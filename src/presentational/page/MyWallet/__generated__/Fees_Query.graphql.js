/**
 * @flow
 * @relayHash 8a487f4f4fef7fb7a25fbe9f0d192a60
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Fees_viewer$ref = any;
export type Fees_QueryVariables = {|
  count?: ?number,
  cursor?: ?string,
  users?: ?$ReadOnlyArray<?string>,
  doQuery: boolean,
|};
export type Fees_QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Fees_viewer$ref
  |}
|};
export type Fees_Query = {|
  variables: Fees_QueryVariables,
  response: Fees_QueryResponse,
|};
*/


/*
query Fees_Query(
  $count: Int
  $cursor: String
  $users: [String]
  $doQuery: Boolean!
) {
  viewer {
    ...Fees_viewer_KxHQe
    id
  }
}

fragment Fees_viewer_KxHQe on Viewer {
  me {
    id
  }
  users(first: $count, after: $cursor, ids: $users) @include(if: $doQuery) {
    edges {
      node {
        id
        pseudo
        avatar
        circlesUserIsIn(circlesWithFeesOnly: true, first: $count) {
          edges {
            node {
              id
              name
              owner {
                id
                pseudo
                avatar
                paymentModelFees
              }
              askedInformation {
                id
                name
                type
                filledByOwner
              }
              membersInformation {
                id
                information
                user {
                  id
                }
                value
              }
              paymentModels {
                id
                name
                price {
                  cents
                  currency
                }
                conditions {
                  id
                  name
                  price {
                    cents
                    currency
                  }
                  conditions {
                    askedInformation {
                      id
                      type
                    }
                    askedInformationComparator
                    askedInformationComparatorValue
                    askedInformationComparatorDate
                    askedInformationComparatorValueString
                  }
                }
                memberSubscriptions {
                  user {
                    id
                  }
                  amount {
                    cents
                    currency
                  }
                  beginning_date
                  ending_date
                }
                paymentViaBankWireAllowed
                memberToPayFees
                inAppPaymentAllowed
              }
            }
          }
        }
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
    "name": "users",
    "type": "[String]",
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
  v1
],
v3 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "count",
  "type": "Int"
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor",
    "type": "String"
  },
  v3,
  {
    "kind": "Variable",
    "name": "ids",
    "variableName": "users",
    "type": "[String]"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v2
},
v10 = [
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
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": v10
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "Fees_Query",
  "id": null,
  "text": "query Fees_Query(\n  $count: Int\n  $cursor: String\n  $users: [String]\n  $doQuery: Boolean!\n) {\n  viewer {\n    ...Fees_viewer_KxHQe\n    id\n  }\n}\n\nfragment Fees_viewer_KxHQe on Viewer {\n  me {\n    id\n  }\n  users(first: $count, after: $cursor, ids: $users) @include(if: $doQuery) {\n    edges {\n      node {\n        id\n        pseudo\n        avatar\n        circlesUserIsIn(circlesWithFeesOnly: true, first: $count) {\n          edges {\n            node {\n              id\n              name\n              owner {\n                id\n                pseudo\n                avatar\n                paymentModelFees\n              }\n              askedInformation {\n                id\n                name\n                type\n                filledByOwner\n              }\n              membersInformation {\n                id\n                information\n                user {\n                  id\n                }\n                value\n              }\n              paymentModels {\n                id\n                name\n                price {\n                  cents\n                  currency\n                }\n                conditions {\n                  id\n                  name\n                  price {\n                    cents\n                    currency\n                  }\n                  conditions {\n                    askedInformation {\n                      id\n                      type\n                    }\n                    askedInformationComparator\n                    askedInformationComparatorValue\n                    askedInformationComparatorDate\n                    askedInformationComparatorValueString\n                  }\n                }\n                memberSubscriptions {\n                  user {\n                    id\n                  }\n                  amount {\n                    cents\n                    currency\n                  }\n                  beginning_date\n                  ending_date\n                }\n                paymentViaBankWireAllowed\n                memberToPayFees\n                inAppPaymentAllowed\n              }\n            }\n          }\n        }\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "Fees_Query",
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
            "name": "Fees_viewer",
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
                "name": "users",
                "variableName": "users",
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
    "name": "Fees_Query",
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
            "selections": v2
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
                "name": "users",
                "storageKey": null,
                "args": v4,
                "concreteType": "UserConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UserEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": false,
                        "selections": [
                          v1,
                          v5,
                          v6,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "circlesUserIsIn",
                            "storageKey": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "circlesWithFeesOnly",
                                "value": true,
                                "type": "Boolean"
                              },
                              v3
                            ],
                            "concreteType": "CircleConnection",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "edges",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "CircleEdge",
                                "plural": true,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "Circle",
                                    "plural": false,
                                    "selections": [
                                      v1,
                                      v7,
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "owner",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "User",
                                        "plural": false,
                                        "selections": [
                                          v1,
                                          v5,
                                          v6,
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "paymentModelFees",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "askedInformation",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "askedInformation",
                                        "plural": true,
                                        "selections": [
                                          v1,
                                          v7,
                                          v8,
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "filledByOwner",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "membersInformation",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "membersInformation",
                                        "plural": true,
                                        "selections": [
                                          v1,
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "information",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          v9,
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "value",
                                            "args": null,
                                            "storageKey": null
                                          }
                                        ]
                                      },
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "paymentModels",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "CirclePaymentModel",
                                        "plural": true,
                                        "selections": [
                                          v1,
                                          v7,
                                          v11,
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "conditions",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "CirclePaymentModelCondition",
                                            "plural": true,
                                            "selections": [
                                              v1,
                                              v7,
                                              v11,
                                              {
                                                "kind": "LinkedField",
                                                "alias": null,
                                                "name": "conditions",
                                                "storageKey": null,
                                                "args": null,
                                                "concreteType": "PaymentModelConditionList",
                                                "plural": true,
                                                "selections": [
                                                  {
                                                    "kind": "LinkedField",
                                                    "alias": null,
                                                    "name": "askedInformation",
                                                    "storageKey": null,
                                                    "args": null,
                                                    "concreteType": "askedInformation",
                                                    "plural": false,
                                                    "selections": [
                                                      v1,
                                                      v8
                                                    ]
                                                  },
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "askedInformationComparator",
                                                    "args": null,
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "askedInformationComparatorValue",
                                                    "args": null,
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "askedInformationComparatorDate",
                                                    "args": null,
                                                    "storageKey": null
                                                  },
                                                  {
                                                    "kind": "ScalarField",
                                                    "alias": null,
                                                    "name": "askedInformationComparatorValueString",
                                                    "args": null,
                                                    "storageKey": null
                                                  }
                                                ]
                                              }
                                            ]
                                          },
                                          {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "memberSubscriptions",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "memberSubscriptions",
                                            "plural": true,
                                            "selections": [
                                              v9,
                                              {
                                                "kind": "LinkedField",
                                                "alias": null,
                                                "name": "amount",
                                                "storageKey": null,
                                                "args": null,
                                                "concreteType": "Price",
                                                "plural": false,
                                                "selections": v10
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "name": "beginning_date",
                                                "args": null,
                                                "storageKey": null
                                              },
                                              {
                                                "kind": "ScalarField",
                                                "alias": null,
                                                "name": "ending_date",
                                                "args": null,
                                                "storageKey": null
                                              }
                                            ]
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "paymentViaBankWireAllowed",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "memberToPayFees",
                                            "args": null,
                                            "storageKey": null
                                          },
                                          {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "inAppPaymentAllowed",
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
                "name": "users",
                "args": v4,
                "handle": "connection",
                "key": "Viewer_users",
                "filters": [
                  "ids"
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
(node/*: any*/).hash = '04ff9c0d916fdc4e8369f09d6b004370';
module.exports = node;
