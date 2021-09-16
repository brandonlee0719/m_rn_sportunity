/**
 * @flow
 * @relayHash cd5e4a80bdbf853cf9cf1831f7d4ed23
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CircleMembershipFeesPage_viewer$ref = any;
export type updateUserSubscriptionInput = {
  userId?: ?string,
  clientSubscriptionId?: ?string,
};
export type UpdateUserSubscriptionSubscriptionVariables = {|
  input: updateUserSubscriptionInput
|};
export type UpdateUserSubscriptionSubscriptionResponse = {|
  +updateUserSubscription: ?{|
    +viewer: ?{|
      +$fragmentRefs: CircleMembershipFeesPage_viewer$ref
    |}
  |}
|};
export type UpdateUserSubscriptionSubscription = {|
  variables: UpdateUserSubscriptionSubscriptionVariables,
  response: UpdateUserSubscriptionSubscriptionResponse,
|};
*/


/*
subscription UpdateUserSubscriptionSubscription(
  $input: updateUserSubscriptionInput!
) {
  updateUserSubscription(input: $input) {
    viewer {
      ...CircleMembershipFeesPage_viewer
      id
    }
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
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateUserSubscriptionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateUserSubscriptionInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v2
  ]
},
v6 = [
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
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": v6
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "UpdateUserSubscriptionSubscription",
  "id": null,
  "text": "subscription UpdateUserSubscriptionSubscription(\n  $input: updateUserSubscriptionInput!\n) {\n  updateUserSubscription(input: $input) {\n    viewer {\n      ...CircleMembershipFeesPage_viewer\n      id\n    }\n  }\n}\n\nfragment CircleMembershipFeesPage_viewer on Viewer {\n  ...CircleUserReference_viewer\n  me {\n    id\n    circlesUserIsIn(last: 100) {\n      edges {\n        node {\n          id\n          name\n          owner {\n            id\n            pseudo\n            paymentModelFees\n            bankAccount {\n              addressLine1\n              addressLine2\n              city\n              postalCode\n              country\n              ownerName\n              IBAN\n              BIC\n              id\n            }\n          }\n          askedInformation {\n            id\n            name\n            type\n            filledByOwner\n          }\n          membersInformation {\n            id\n            information\n            user {\n              id\n            }\n            value\n          }\n          paymentModels {\n            id\n            name\n            price {\n              cents\n              currency\n            }\n            conditions {\n              id\n              name\n              price {\n                cents\n                currency\n              }\n              conditions {\n                askedInformation {\n                  id\n                  type\n                }\n                askedInformationComparator\n                askedInformationComparatorValue\n                askedInformationComparatorDate\n                askedInformationComparatorValueString\n              }\n            }\n            memberSubscriptions {\n              user {\n                id\n              }\n              amount {\n                cents\n                currency\n              }\n              beginning_date\n              ending_date\n            }\n            paymentViaBankWireAllowed\n            memberToPayFees\n            inAppPaymentAllowed\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment CircleUserReference_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateUserSubscriptionSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUserSubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateUserSubscriptionPayload",
        "plural": false,
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateUserSubscriptionSubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateUserSubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateUserSubscriptionPayload",
        "plural": false,
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
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "me",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": [
                  v2,
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
                              v2,
                              v3,
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "owner",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "User",
                                "plural": false,
                                "selections": [
                                  v2,
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
                                      v2
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
                                  v2,
                                  v3,
                                  v4,
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
                                  v2,
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "information",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  v5,
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
                                  v2,
                                  v3,
                                  v7,
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "conditions",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "CirclePaymentModelCondition",
                                    "plural": true,
                                    "selections": [
                                      v2,
                                      v3,
                                      v7,
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
                                              v2,
                                              v4
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
                                      v5,
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "amount",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Price",
                                        "plural": false,
                                        "selections": v6
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e10c26d3d5400651e2ae7baaa206e0b';
module.exports = node;
