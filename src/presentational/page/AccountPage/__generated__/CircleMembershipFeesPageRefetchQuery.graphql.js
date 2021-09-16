/**
 * @flow
 * @relayHash d0bd852439a3ee531b55a317e213c642
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CircleMembershipFeesPage_viewer$ref = any;
export type CircleMembershipFeesPageRefetchQueryVariables = {||};
export type CircleMembershipFeesPageRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CircleMembershipFeesPage_viewer$ref
  |}
|};
export type CircleMembershipFeesPageRefetchQuery = {|
  variables: CircleMembershipFeesPageRefetchQueryVariables,
  response: CircleMembershipFeesPageRefetchQueryResponse,
|};
*/


/*
query CircleMembershipFeesPageRefetchQuery {
  viewer {
    ...CircleMembershipFeesPage_viewer
    id
  }
}

fragment CircleMembershipFeesPage_viewer on Viewer {
  ...CircleUserReference_viewer
  me {
    id
    circlesUserIsIn(last: 100) {
      edges {
        node {
          id
          name
          owner {
            id
            pseudo
            paymentModelFees
            bankAccount {
              addressLine1
              addressLine2
              city
              postalCode
              country
              ownerName
              IBAN
              BIC
              id
            }
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
  }
}

fragment CircleUserReference_viewer on Viewer {
  id
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
  "kind": "Request",
  "operationKind": "query",
  "name": "CircleMembershipFeesPageRefetchQuery",
  "id": null,
  "text": "query CircleMembershipFeesPageRefetchQuery {\n  viewer {\n    ...CircleMembershipFeesPage_viewer\n    id\n  }\n}\n\nfragment CircleMembershipFeesPage_viewer on Viewer {\n  ...CircleUserReference_viewer\n  me {\n    id\n    circlesUserIsIn(last: 100) {\n      edges {\n        node {\n          id\n          name\n          owner {\n            id\n            pseudo\n            paymentModelFees\n            bankAccount {\n              addressLine1\n              addressLine2\n              city\n              postalCode\n              country\n              ownerName\n              IBAN\n              BIC\n              id\n            }\n          }\n          askedInformation {\n            id\n            name\n            type\n            filledByOwner\n          }\n          membersInformation {\n            id\n            information\n            user {\n              id\n            }\n            value\n          }\n          paymentModels {\n            id\n            name\n            price {\n              cents\n              currency\n            }\n            conditions {\n              id\n              name\n              price {\n                cents\n                currency\n              }\n              conditions {\n                askedInformation {\n                  id\n                  type\n                }\n                askedInformationComparator\n                askedInformationComparatorValue\n                askedInformationComparatorDate\n                askedInformationComparatorValueString\n              }\n            }\n            memberSubscriptions {\n              user {\n                id\n              }\n              amount {\n                cents\n                currency\n              }\n              beginning_date\n              ending_date\n            }\n            paymentViaBankWireAllowed\n            memberToPayFees\n            inAppPaymentAllowed\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment CircleUserReference_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CircleMembershipFeesPageRefetchQuery",
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
            "name": "CircleMembershipFeesPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CircleMembershipFeesPageRefetchQuery",
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
                                  },
                                  v0
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
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f606a69b353cead586c227bbd06c0c08';
module.exports = node;
