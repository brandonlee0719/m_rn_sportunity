/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CircleUserReference_viewer$ref = any;
export type AskedInformationType = "ADDRESS" | "BOOLEAN" | "CUSTOM" | "DATE" | "DOCUMENT" | "NUMBER" | "PHONE_NUMBER" | "TEXT" | "%future added value";
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type CircleMembershipFeesPage_viewer$ref: FragmentReference;
export type CircleMembershipFeesPage_viewer = {|
  +me: ?{|
    +id: string,
    +circlesUserIsIn: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +name: ?string,
          +owner: ?{|
            +id: string,
            +pseudo: string,
            +paymentModelFees: ?number,
            +bankAccount: ?{|
              +addressLine1: ?string,
              +addressLine2: ?string,
              +city: ?string,
              +postalCode: ?string,
              +country: ?string,
              +ownerName: ?string,
              +IBAN: ?string,
              +BIC: ?string,
            |},
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
  |},
  +$fragmentRefs: CircleUserReference_viewer$ref,
  +$refType: CircleMembershipFeesPage_viewer$ref,
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
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v0
  ]
},
v4 = [
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
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": v4
};
return {
  "kind": "Fragment",
  "name": "CircleMembershipFeesPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CircleUserReference_viewer",
      "args": null
    },
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
          "kind": "LinkedField",
          "alias": null,
          "name": "circlesUserIsIn",
          "storageKey": "circlesUserIsIn(last:100)",
          "args": [
            {
              "kind": "Literal",
              "name": "last",
              "value": 100,
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
                    v1,
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
                          "name": "paymentModelFees",
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
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "askedInformation",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "askedInformation",
                      "plural": true,
                      "selections": [
                        v0,
                        v1,
                        v2,
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
                        v3,
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
                        v1,
                        v5,
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
                            v1,
                            v5,
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
                                    v2
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
                            v3,
                            {
                              "kind": "LinkedField",
                              "alias": null,
                              "name": "amount",
                              "storageKey": null,
                              "args": null,
                              "concreteType": "Price",
                              "plural": false,
                              "selections": v4
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
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '2774703f42e55aef0d6849deaef92b91';
module.exports = node;
