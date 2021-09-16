/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AccountForm_address$ref = any;
type AccountForm_viewer$ref = any;
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PaymentInformationPage_viewer$ref: FragmentReference;
export type PaymentInformationPage_viewer = {|
  +me: ?{|
    +id: string,
    +firstName: ?string,
    +lastName: ?string,
    +nationality: ?string,
    +email: ?any,
    +birthday: ?any,
    +mangoId: ?string,
    +shouldDeclareVAT: ?boolean,
    +address: ?{|
      +country: string,
      +$fragmentRefs: AccountForm_address$ref,
    |},
    +isProfileComplete: ?boolean,
    +profileType: ?UserProfileType,
    +paymentMethods: ?$ReadOnlyArray<?{|
      +id: string,
      +cardType: ?string,
      +cardMask: ?string,
      +expirationDate: ?string,
    |}>,
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: string,
      +pseudo: string,
      +firstName: ?string,
      +lastName: ?string,
      +nationality: ?string,
      +email: ?any,
      +birthday: ?any,
      +shouldDeclareVAT: ?boolean,
      +business: ?{|
        +businessName: ?string,
        +businessEmail: ?any,
        +headquarterAddress: ?{|
          +country: string,
          +city: string,
          +address: string,
          +zip: ?string,
        |},
        +VATNumber: ?string,
      |},
      +address: ?{|
        +country: string,
        +city: string,
        +address: string,
        +zip: ?string,
      |},
      +isProfileComplete: ?boolean,
      +profileType: ?UserProfileType,
      +paymentMethods: ?$ReadOnlyArray<?{|
        +id: string,
        +cardType: ?string,
        +cardMask: ?string,
        +expirationDate: ?string,
      |}>,
    |}>,
    +masterAccount: ?{|
      +id: string,
      +pseudo: string,
      +firstName: ?string,
      +lastName: ?string,
      +nationality: ?string,
      +email: ?any,
      +birthday: ?any,
      +shouldDeclareVAT: ?boolean,
      +business: ?{|
        +businessName: ?string,
        +businessEmail: ?any,
        +headquarterAddress: ?{|
          +country: string,
          +city: string,
          +address: string,
          +zip: ?string,
        |},
        +VATNumber: ?string,
      |},
      +address: ?{|
        +country: string,
        +city: string,
        +address: string,
        +zip: ?string,
      |},
      +isProfileComplete: ?boolean,
      +profileType: ?UserProfileType,
      +paymentMethods: ?$ReadOnlyArray<?{|
        +id: string,
        +cardType: ?string,
        +cardMask: ?string,
        +expirationDate: ?string,
      |}>,
    |},
  |},
  +$fragmentRefs: AccountForm_viewer$ref,
  +$refType: PaymentInformationPage_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
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
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nationality",
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
  "name": "birthday",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "country",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isProfileComplete",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v10 = {
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
v11 = [
  v7,
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
v12 = [
  v5,
  v1,
  v6,
  v2,
  v3,
  v4,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  },
  v0,
  {
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
        "selections": v11
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
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "address",
    "storageKey": null,
    "args": null,
    "concreteType": "AddressModel",
    "plural": false,
    "selections": v11
  },
  v8,
  v9,
  v10
];
return {
  "kind": "Fragment",
  "name": "PaymentInformationPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "AccountForm_viewer",
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
        v1,
        v2,
        v3,
        v4,
        v5,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "mangoId",
          "args": null,
          "storageKey": null
        },
        v6,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "address",
          "storageKey": null,
          "args": null,
          "concreteType": "AddressModel",
          "plural": false,
          "selections": [
            v7,
            {
              "kind": "FragmentSpread",
              "name": "AccountForm_address",
              "args": null
            }
          ]
        },
        v8,
        v9,
        v10,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "subAccounts",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": true,
          "selections": v12
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "masterAccount",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v12
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd46a0181ed2477467391eb4e3134c394';
module.exports = node;
