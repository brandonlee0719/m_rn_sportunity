/**
 * @flow
 * @relayHash 4fff8a1b54e4f51d0180d870d0c7e849
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SelectPaymentMethod_viewer$ref = any;
export type SelectPaymentMethodRefetchQueryVariables = {|
  query: boolean
|};
export type SelectPaymentMethodRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SelectPaymentMethod_viewer$ref
  |}
|};
export type SelectPaymentMethodRefetchQuery = {|
  variables: SelectPaymentMethodRefetchQueryVariables,
  response: SelectPaymentMethodRefetchQueryResponse,
|};
*/


/*
query SelectPaymentMethodRefetchQuery(
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
  "name": "SelectPaymentMethodRefetchQuery",
  "id": null,
  "text": "query SelectPaymentMethodRefetchQuery(\n  $query: Boolean!\n) {\n  viewer {\n    ...SelectPaymentMethod_viewer_1Qr5xf\n    id\n  }\n}\n\nfragment SelectPaymentMethod_viewer_1Qr5xf on Viewer {\n  id\n  me {\n    id\n    firstName\n    lastName\n    address {\n      country\n    }\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n      ...PaymentMethodsList_paymentMethods\n    }\n  }\n  amountOnWallet @include(if: $query) {\n    amountOnWallet {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n\nfragment PaymentMethodsList_paymentMethods on PaymentMethod {\n  id\n  cardType\n  cardMask\n  expirationDate\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SelectPaymentMethodRefetchQuery",
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
    "name": "SelectPaymentMethodRefetchQuery",
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
(node/*: any*/).hash = '16ede359c6c167ad54d76bc6868312f7';
module.exports = node;
