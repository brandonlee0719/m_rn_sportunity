/**
 * @flow
 * @relayHash 6b5688a0e63948b31523f744dbbc4358
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SelectPaymentMethod_viewer$ref = any;
export type SelectPaymentMethodQueryVariables = {|
  query: boolean
|};
export type SelectPaymentMethodQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SelectPaymentMethod_viewer$ref
  |}
|};
export type SelectPaymentMethodQuery = {|
  variables: SelectPaymentMethodQueryVariables,
  response: SelectPaymentMethodQueryResponse,
|};
*/


/*
query SelectPaymentMethodQuery(
  $query: Boolean!
) {
  viewer {
    ...SelectPaymentMethod_viewer_1Qr5xf
    id
  }
}

fragment SelectPaymentMethod_viewer_1Qr5xf on Viewer {
  id
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

fragment PaymentMethodsList_paymentMethods on PaymentMethod {
  id
  cardType
  cardMask
  expirationDate
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SelectPaymentMethodQuery",
  "id": null,
  "text": "query SelectPaymentMethodQuery(\n  $query: Boolean!\n) {\n  viewer {\n    ...SelectPaymentMethod_viewer_1Qr5xf\n    id\n  }\n}\n\nfragment SelectPaymentMethod_viewer_1Qr5xf on Viewer {\n  id\n  me {\n    id\n    firstName\n    lastName\n    address {\n      country\n    }\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n      ...PaymentMethodsList_paymentMethods\n    }\n  }\n  amountOnWallet @include(if: $query) {\n    amountOnWallet {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n\nfragment PaymentMethodsList_paymentMethods on PaymentMethod {\n  id\n  cardType\n  cardMask\n  expirationDate\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SelectPaymentMethodQuery",
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
            "name": "SelectPaymentMethod_viewer",
            "args": [
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
    "name": "SelectPaymentMethodQuery",
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
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "lockedAmount",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LockedAmountOnWallet",
                    "plural": false,
                    "selections": v2
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
(node/*: any*/).hash = '64aa222b6f693700dd262f3c6eacde7f';
module.exports = node;
