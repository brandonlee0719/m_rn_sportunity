/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type AskedInformationType = "ADDRESS" | "BOOLEAN" | "CUSTOM" | "DATE" | "DOCUMENT" | "NUMBER" | "PHONE_NUMBER" | "TEXT" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Fees_viewer$ref: FragmentReference;
export type Fees_viewer = {|
  +me: ?{|
    +id: string
  |},
  +users?: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +pseudo: string,
        +avatar: ?string,
        +circlesUserIsIn: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: ?string,
              +owner: ?{|
                +id: string,
                +pseudo: string,
                +avatar: ?string,
                +paymentModelFees: ?number,
              |},
              +askedInformation: ?$ReadOnlyArray<?{|
                +id: string,
                +name: ?string,
                +type: ?AskedInformationType,
                +filledByOwner: ?boolean,
              |}>,
              +membersInformation: ?$ReadOnlyArray<?{|
                +id: string,
                +information: ?string,
                +user: ?{|
                  +id: string
                |},
                +value: ?string,
              |}>,
              +paymentModels: ?$ReadOnlyArray<?{|
                +id: string,
                +name: ?string,
                +price: ?{|
                  +cents: number,
                  +currency: ?Currency,
                |},
                +conditions: ?$ReadOnlyArray<?{|
                  +id: string,
                  +name: ?string,
                  +price: ?{|
                    +cents: number,
                    +currency: ?Currency,
                  |},
                  +conditions: ?$ReadOnlyArray<?{|
                    +askedInformation: ?{|
                      +id: string,
                      +type: ?AskedInformationType,
                    |},
                    +askedInformationComparator: ?string,
                    +askedInformationComparatorValue: ?number,
                    +askedInformationComparatorDate: ?any,
                    +askedInformationComparatorValueString: ?string,
                  |}>,
                |}>,
                +memberSubscriptions: ?$ReadOnlyArray<?{|
                  +user: ?{|
                    +id: string
                  |},
                  +amount: ?{|
                    +cents: number,
                    +currency: ?Currency,
                  |},
                  +beginning_date: ?any,
                  +ending_date: ?any,
                |}>,
                +paymentViaBankWireAllowed: ?boolean,
                +memberToPayFees: ?boolean,
                +inAppPaymentAllowed: ?boolean,
              |}>,
            |}
          |}>
        |},
      |}
    |}>
  |},
  +$refType: Fees_viewer$ref,
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
  v0
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v1
},
v7 = [
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
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": v7
};
return {
  "kind": "Fragment",
  "name": "Fees_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "users"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 100
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
      "defaultValue": false
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
      "selections": v1
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "doQuery",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": "users",
          "name": "__Viewer_users_connection",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "ids",
              "variableName": "users",
              "type": "[String]"
            }
          ],
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
                    v0,
                    v2,
                    v3,
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
                        {
                          "kind": "Variable",
                          "name": "first",
                          "variableName": "count",
                          "type": "Int"
                        }
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
                                v0,
                                v4,
                                {
                                  "kind": "LinkedField",
                                  "alias": null,
                                  "name": "owner",
                                  "storageKey": null,
                                  "args": null,
                                  "concreteType": "User",
                                  "plural": false,
                                  "selections": [
                                    v0,
                                    v2,
                                    v3,
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
                                    v0,
                                    v4,
                                    v5,
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
                                    v0,
                                    {
                                      "kind": "ScalarField",
                                      "alias": null,
                                      "name": "information",
                                      "args": null,
                                      "storageKey": null
                                    },
                                    v6,
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
                                    v0,
                                    v4,
                                    v8,
                                    {
                                      "kind": "LinkedField",
                                      "alias": null,
                                      "name": "conditions",
                                      "storageKey": null,
                                      "args": null,
                                      "concreteType": "CirclePaymentModelCondition",
                                      "plural": true,
                                      "selections": [
                                        v0,
                                        v4,
                                        v8,
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
                                                v0,
                                                v5
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
                                        v6,
                                        {
                                          "kind": "LinkedField",
                                          "alias": null,
                                          "name": "amount",
                                          "storageKey": null,
                                          "args": null,
                                          "concreteType": "Price",
                                          "plural": false,
                                          "selections": v7
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
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '1b1a19a7865f5752fb7731e037ced293';
module.exports = node;
