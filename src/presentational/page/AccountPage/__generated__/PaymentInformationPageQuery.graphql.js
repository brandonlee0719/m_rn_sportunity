/**
 * @flow
 * @relayHash c84ed616d796eca5ece1d691f7c6dd07
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaymentInformationPage_viewer$ref = any;
export type PaymentInformationPageQueryVariables = {||};
export type PaymentInformationPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PaymentInformationPage_viewer$ref
  |}
|};
export type PaymentInformationPageQuery = {|
  variables: PaymentInformationPageQueryVariables,
  response: PaymentInformationPageQueryResponse,
|};
*/


/*
query PaymentInformationPageQuery {
  viewer {
    ...PaymentInformationPage_viewer
    id
  }
}

fragment PaymentInformationPage_viewer on Viewer {
  ...AccountForm_viewer
  me {
    id
    firstName
    lastName
    nationality
    email
    birthday
    mangoId
    shouldDeclareVAT
    address {
      country
      ...AccountForm_address
    }
    isProfileComplete
    profileType
    paymentMethods {
      id
      cardType
      cardMask
      expirationDate
    }
    subAccounts {
      id
      pseudo
      firstName
      lastName
      nationality
      email
      birthday
      shouldDeclareVAT
      business {
        businessName
        businessEmail
        headquarterAddress {
          country
          city
          address
          zip
        }
        VATNumber
      }
      address {
        country
        city
        address
        zip
      }
      isProfileComplete
      profileType
      paymentMethods {
        id
        cardType
        cardMask
        expirationDate
      }
    }
    masterAccount {
      id
      pseudo
      firstName
      lastName
      nationality
      email
      birthday
      shouldDeclareVAT
      business {
        businessName
        businessEmail
        headquarterAddress {
          country
          city
          address
          zip
        }
        VATNumber
      }
      address {
        country
        city
        address
        zip
      }
      isProfileComplete
      profileType
      paymentMethods {
        id
        cardType
        cardMask
        expirationDate
      }
    }
  }
}

fragment AccountForm_viewer on Viewer {
  me {
    id
    mangoId
    firstName
    lastName
    email
    nationality
    birthday
    shouldDeclareVAT
    business {
      businessName
      businessEmail
      headquarterAddress {
        country
        city
        address
        zip
      }
      VATNumber
    }
    profileType
    isProfileComplete
  }
}

fragment AccountForm_address on AddressModel {
  country
  city
  address
  zip
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "shouldDeclareVAT",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nationality",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "birthday",
  "args": null,
  "storageKey": null
},
v7 = [
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
    "name": "city",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "address",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "zip",
    "args": null,
    "storageKey": null
  }
],
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "business",
  "storageKey": null,
  "args": null,
  "concreteType": "Business",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "businessName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "businessEmail",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "headquarterAddress",
      "storageKey": null,
      "args": null,
      "concreteType": "AddressModel",
      "plural": false,
      "selections": v7
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "VATNumber",
      "args": null,
      "storageKey": null
    }
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isProfileComplete",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "AddressModel",
  "plural": false,
  "selections": v7
},
v12 = {
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
},
v13 = [
  v6,
  v1,
  v2,
  v3,
  v5,
  v4,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  },
  v0,
  v8,
  v11,
  v10,
  v9,
  v12
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PaymentInformationPageQuery",
  "id": null,
  "text": "query PaymentInformationPageQuery {\n  viewer {\n    ...PaymentInformationPage_viewer\n    id\n  }\n}\n\nfragment PaymentInformationPage_viewer on Viewer {\n  ...AccountForm_viewer\n  me {\n    id\n    firstName\n    lastName\n    nationality\n    email\n    birthday\n    mangoId\n    shouldDeclareVAT\n    address {\n      country\n      ...AccountForm_address\n    }\n    isProfileComplete\n    profileType\n    paymentMethods {\n      id\n      cardType\n      cardMask\n      expirationDate\n    }\n    subAccounts {\n      id\n      pseudo\n      firstName\n      lastName\n      nationality\n      email\n      birthday\n      shouldDeclareVAT\n      business {\n        businessName\n        businessEmail\n        headquarterAddress {\n          country\n          city\n          address\n          zip\n        }\n        VATNumber\n      }\n      address {\n        country\n        city\n        address\n        zip\n      }\n      isProfileComplete\n      profileType\n      paymentMethods {\n        id\n        cardType\n        cardMask\n        expirationDate\n      }\n    }\n    masterAccount {\n      id\n      pseudo\n      firstName\n      lastName\n      nationality\n      email\n      birthday\n      shouldDeclareVAT\n      business {\n        businessName\n        businessEmail\n        headquarterAddress {\n          country\n          city\n          address\n          zip\n        }\n        VATNumber\n      }\n      address {\n        country\n        city\n        address\n        zip\n      }\n      isProfileComplete\n      profileType\n      paymentMethods {\n        id\n        cardType\n        cardMask\n        expirationDate\n      }\n    }\n  }\n}\n\nfragment AccountForm_viewer on Viewer {\n  me {\n    id\n    mangoId\n    firstName\n    lastName\n    email\n    nationality\n    birthday\n    shouldDeclareVAT\n    business {\n      businessName\n      businessEmail\n      headquarterAddress {\n        country\n        city\n        address\n        zip\n      }\n      VATNumber\n    }\n    profileType\n    isProfileComplete\n  }\n}\n\nfragment AccountForm_address on AddressModel {\n  country\n  city\n  address\n  zip\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PaymentInformationPageQuery",
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
            "name": "PaymentInformationPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PaymentInformationPageQuery",
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
              v2,
              v3,
              v4,
              v5,
              v6,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
              v8,
              v9,
              v10,
              v11,
              v12,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subAccounts",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": v13
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "masterAccount",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": false,
                "selections": v13
              }
            ]
          },
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2fb652f3fffd36f013479d7c67ac6434';
module.exports = node;
