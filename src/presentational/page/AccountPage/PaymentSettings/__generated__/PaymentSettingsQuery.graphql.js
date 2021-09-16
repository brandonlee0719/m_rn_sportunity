/**
 * @flow
 * @relayHash 2e244b390284bc3d643cc0a9c6d89bec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaymentSettings_viewer$ref = any;
export type PaymentSettingsQueryVariables = {||};
export type PaymentSettingsQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PaymentSettings_viewer$ref
  |}
|};
export type PaymentSettingsQuery = {|
  variables: PaymentSettingsQueryVariables,
  response: PaymentSettingsQueryResponse,
|};
*/


/*
query PaymentSettingsQuery {
  viewer {
    ...PaymentSettings_viewer
    id
  }
}

fragment PaymentSettings_viewer on Viewer {
  ...BankAccount_viewer
  me {
    id
    profileType
    isProfileComplete
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
      ...PaymentMethodsList_paymentMethods
    }
    bankAccount {
      id
      ...BankAccount_bankAccount
    }
  }
}

fragment BankAccount_viewer on Viewer {
  me {
    id
    bankAccount {
      id
      ownerName
      addressLine1
      addressLine2
      city
      postalCode
      country
      IBAN
      BIC
    }
    subAccounts {
      id
      pseudo
      bankAccount {
        id
        ownerName
        addressLine1
        addressLine2
        city
        postalCode
        country
        IBAN
        BIC
      }
    }
    masterAccount {
      id
      pseudo
      bankAccount {
        id
        ownerName
        addressLine1
        addressLine2
        city
        postalCode
        country
        IBAN
        BIC
      }
    }
  }
}

fragment PaymentMethodsList_paymentMethods on PaymentMethod {
  id
  cardType
  cardMask
  expirationDate
}

fragment BankAccount_bankAccount on BankAccount {
  id
  ownerName
  addressLine1
  addressLine2
  city
  postalCode
  country
  IBAN
  BIC
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
      "name": "ownerName",
      "args": null,
      "storageKey": null
    },
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
v2 = [
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  },
  v1
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PaymentSettingsQuery",
  "id": null,
  "text": "query PaymentSettingsQuery {\n  viewer {\n    ...PaymentSettings_viewer\n    id\n  }\n}\n\nfragment PaymentSettings_viewer on Viewer {\n  ...BankAccount_viewer\n  me {\n    id\n    profileType\n    isProfileComplete\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n      ...PaymentMethodsList_paymentMethods\n    }\n    bankAccount {\n      id\n      ...BankAccount_bankAccount\n    }\n  }\n}\n\nfragment BankAccount_viewer on Viewer {\n  me {\n    id\n    bankAccount {\n      id\n      ownerName\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      IBAN\n      BIC\n    }\n    subAccounts {\n      id\n      pseudo\n      bankAccount {\n        id\n        ownerName\n        addressLine1\n        addressLine2\n        city\n        postalCode\n        country\n        IBAN\n        BIC\n      }\n    }\n    masterAccount {\n      id\n      pseudo\n      bankAccount {\n        id\n        ownerName\n        addressLine1\n        addressLine2\n        city\n        postalCode\n        country\n        IBAN\n        BIC\n      }\n    }\n  }\n}\n\nfragment PaymentMethodsList_paymentMethods on PaymentMethod {\n  id\n  cardType\n  cardMask\n  expirationDate\n}\n\nfragment BankAccount_bankAccount on BankAccount {\n  id\n  ownerName\n  addressLine1\n  addressLine2\n  city\n  postalCode\n  country\n  IBAN\n  BIC\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PaymentSettingsQuery",
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
            "name": "PaymentSettings_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PaymentSettingsQuery",
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
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v2
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "masterAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": v2
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
                "args": null,
                "storageKey": null
              },
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
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71c19173bc85528ea526e1a6624b5662';
module.exports = node;
