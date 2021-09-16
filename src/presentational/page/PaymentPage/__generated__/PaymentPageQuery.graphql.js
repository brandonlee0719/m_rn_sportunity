/**
 * @flow
 * @relayHash 6ad2b0619f7692986895abe74182a71f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaymentPage_viewer$ref = any;
export type PaymentPageQueryVariables = {||};
export type PaymentPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PaymentPage_viewer$ref
  |}
|};
export type PaymentPageQuery = {|
  variables: PaymentPageQueryVariables,
  response: PaymentPageQueryResponse,
|};
*/


/*
query PaymentPageQuery {
  viewer {
    ...PaymentPage_viewer
    id
  }
}

fragment PaymentPage_viewer on Viewer {
  me {
    id
    isProfileComplete
    bankAccount {
      id
      addressLine1
      addressLine2
      city
      postalCode
      country
      ownerName
      IBAN
      BIC
    }
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
  }
  amountOnWallet {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
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
  "name": "PaymentPageQuery",
  "id": null,
  "text": "query PaymentPageQuery {\n  viewer {\n    ...PaymentPage_viewer\n    id\n  }\n}\n\nfragment PaymentPage_viewer on Viewer {\n  me {\n    id\n    isProfileComplete\n    bankAccount {\n      id\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      ownerName\n      IBAN\n      BIC\n    }\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n  }\n  amountOnWallet {\n    amountOnWallet {\n      cents\n      currency\n    }\n    lockedAmount {\n      cents\n      currency\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PaymentPageQuery",
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
            "name": "PaymentPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PaymentPageQuery",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
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
                  v0,
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
                  v0,
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
                "selections": v1
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lockedAmount",
                "storageKey": null,
                "args": null,
                "concreteType": "LockedAmountOnWallet",
                "plural": false,
                "selections": v1
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c283d8faf76b0ea7cf1fe5efd07a0ad4';
module.exports = node;
