/**
 * @flow
 * @relayHash 1265641aee0ec2a45d089767d85b4850
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChoosePaymentMethod_viewer$ref = any;
export type ChoosePaymentMethodRefetchQueryVariables = {|
  id?: ?string,
  query: boolean,
|};
export type ChoosePaymentMethodRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ChoosePaymentMethod_viewer$ref
  |}
|};
export type ChoosePaymentMethodRefetchQuery = {|
  variables: ChoosePaymentMethodRefetchQueryVariables,
  response: ChoosePaymentMethodRefetchQueryResponse,
|};
*/


/*
query ChoosePaymentMethodRefetchQuery(
  $id: ID
  $query: Boolean!
) {
  viewer {
    ...ChoosePaymentMethod_viewer_1QsYUi
    id
  }
}

fragment ChoosePaymentMethod_viewer_1QsYUi on Viewer {
  id
  ...PriceView_viewer
  me {
    id
    firstName
    lastName
    address {
      country
    }
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
      ...PaymentMethodsList_paymentMethods
    }
  }
  sportunity(id: $id) {
    ...ConfirmBookingPageHeader_sportunity
    id
    price {
      cents
      currency
    }
    paymentStatus {
      user {
        id
      }
      status
      price {
        cents
        currency
      }
      id
    }
    ...Header_sportunity
    ...PriceView_sportunity
  }
  amountOnWallet @include(if: $query) {
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

fragment PriceView_viewer on Viewer {
  me {
    id
  }
}

fragment PaymentMethodsList_paymentMethods on PaymentMethod {
  id
  cardType
  cardMask
  expirationDate
}

fragment ConfirmBookingPageHeader_sportunity on Sportunity {
  title
  ...DateSportunity_sportunity
  sport_con: sport {
    sport {
      logo
      id
    }
  }
}

fragment Header_sportunity on Sportunity {
  id
  kind
  title
  beginning_date
  ending_date
  images
  sport {
    allLevelSelected
    sport {
      name {
        EN
        FR
        id
      }
      logo
      id
    }
    ...levels_sport
  }
  participants {
    id
    pseudo
  }
  participantRange {
    from
    to
  }
}

fragment PriceView_sportunity on Sportunity {
  kind
  price {
    currency
    cents
  }
  paymentStatus {
    user {
      id
    }
    status
    price {
      cents
      currency
    }
    id
  }
  invited_circles(last: 100) {
    edges {
      node {
        id
        name
        mode
        memberCount
        type
        owner {
          id
          avatar
          pseudo
        }
        members {
          id
          pseudo
        }
      }
    }
  }
  price_for_circle {
    circle {
      id
    }
    price {
      cents
      currency
    }
  }
}

fragment levels_sport on SportunitySport {
  allLevelSelected
  levels {
    id
    EN {
      name
      description
      skillLevel
    }
    FR {
      name
      description
      skillLevel
    }
  }
}

fragment DateSportunity_sportunity on Sportunity {
  beginning_date
  ending_date
  sport {
    sport {
      logo
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "query",
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
v3 = [
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
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "price",
  "storageKey": null,
  "args": null,
  "concreteType": "Price",
  "plural": false,
  "selections": v3
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logo",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = [
  v6,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v9 = [
  v1,
  v8
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ChoosePaymentMethodRefetchQuery",
  "id": null,
  "text": "query ChoosePaymentMethodRefetchQuery(\n  $id: ID\n  $query: Boolean!\n) {\n  viewer {\n    ...ChoosePaymentMethod_viewer_1QsYUi\n    id\n  }\n}\n\nfragment ChoosePaymentMethod_viewer_1QsYUi on Viewer {\n  id\n  ...PriceView_viewer\n  me {\n    id\n    firstName\n    lastName\n    address {\n      country\n    }\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n      ...PaymentMethodsList_paymentMethods\n    }\n  }\n  sportunity(id: $id) {\n    ...ConfirmBookingPageHeader_sportunity\n    id\n    price {\n      cents\n      currency\n    }\n    paymentStatus {\n      user {\n        id\n      }\n      status\n      price {\n        cents\n        currency\n      }\n      id\n    }\n    ...Header_sportunity\n    ...PriceView_sportunity\n  }\n  amountOnWallet @include(if: $query) {\n    amountOnWallet {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n\nfragment PriceView_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment PaymentMethodsList_paymentMethods on PaymentMethod {\n  id\n  cardType\n  cardMask\n  expirationDate\n}\n\nfragment ConfirmBookingPageHeader_sportunity on Sportunity {\n  title\n  ...DateSportunity_sportunity\n  sport_con: sport {\n    sport {\n      logo\n      id\n    }\n  }\n}\n\nfragment Header_sportunity on Sportunity {\n  id\n  kind\n  title\n  beginning_date\n  ending_date\n  images\n  sport {\n    allLevelSelected\n    sport {\n      name {\n        EN\n        FR\n        id\n      }\n      logo\n      id\n    }\n    ...levels_sport\n  }\n  participants {\n    id\n    pseudo\n  }\n  participantRange {\n    from\n    to\n  }\n}\n\nfragment PriceView_sportunity on Sportunity {\n  kind\n  price {\n    currency\n    cents\n  }\n  paymentStatus {\n    user {\n      id\n    }\n    status\n    price {\n      cents\n      currency\n    }\n    id\n  }\n  invited_circles(last: 100) {\n    edges {\n      node {\n        id\n        name\n        mode\n        memberCount\n        type\n        owner {\n          id\n          avatar\n          pseudo\n        }\n        members {\n          id\n          pseudo\n        }\n      }\n    }\n  }\n  price_for_circle {\n    circle {\n      id\n    }\n    price {\n      cents\n      currency\n    }\n  }\n}\n\nfragment levels_sport on SportunitySport {\n  allLevelSelected\n  levels {\n    id\n    EN {\n      name\n      description\n      skillLevel\n    }\n    FR {\n      name\n      description\n      skillLevel\n    }\n  }\n}\n\nfragment DateSportunity_sportunity on Sportunity {\n  beginning_date\n  ending_date\n  sport {\n    sport {\n      logo\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ChoosePaymentMethodRefetchQuery",
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
            "name": "ChoosePaymentMethod_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
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
    "name": "ChoosePaymentMethodRefetchQuery",
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
          v1,
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
                "name": "firstName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lastName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "address",
                "storageKey": null,
                "args": null,
                "concreteType": "AddressModel",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "country",
                    "args": null,
                    "storageKey": null
                  }
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": "ID"
              }
            ],
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "paymentStatus",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunityPaymentStatus",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "user",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
                  v4,
                  v1
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ending_date",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sport",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunitySport",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": [
                      v5,
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "EN",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "FR",
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
                    "name": "allLevelSelected",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "levels",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Translated",
                    "plural": true,
                    "selections": [
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "EN",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v7
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "FR",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SportLevel",
                        "plural": false,
                        "selections": v7
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "sport_con",
                "name": "sport",
                "storageKey": null,
                "args": null,
                "concreteType": "SportunitySport",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sport",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": [
                      v5,
                      v1
                    ]
                  }
                ]
              },
              v1,
              v4,
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
                "name": "kind",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "images",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participants",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v9
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "participantRange",
                "storageKey": null,
                "args": null,
                "concreteType": "IntInterval",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "from",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "to",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "invited_circles",
                "storageKey": "invited_circles(last:100)",
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
                          v1,
                          v6,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "mode",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "memberCount",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "type",
                            "args": null,
                            "storageKey": null
                          },
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
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "avatar",
                                "args": null,
                                "storageKey": null
                              },
                              v8
                            ]
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "members",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": true,
                            "selections": v9
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "price_for_circle",
                "storageKey": null,
                "args": null,
                "concreteType": "PriceForCircle",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "circle",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Circle",
                    "plural": false,
                    "selections": v2
                  },
                  v4
                ]
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
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
                    "selections": v3
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lockedAmount",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LockedAmountOnWallet",
                    "plural": false,
                    "selections": v3
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
(node/*: any*/).hash = '55d08b55b2b6eada4aa98a2c8bc2c4a6';
module.exports = node;
