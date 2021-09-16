/**
 * @flow
 * @relayHash 10e15f93051be42d73d40347627dc5b0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type BankAccountPage_viewer$ref = any;
export type BankAccountPageQueryVariables = {||};
export type BankAccountPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: BankAccountPage_viewer$ref
  |}
|};
export type BankAccountPageQuery = {|
  variables: BankAccountPageQueryVariables,
  response: BankAccountPageQueryResponse,
|};
*/


/*
query BankAccountPageQuery {
  viewer {
    ...BankAccountPage_viewer
    id
  }
}

fragment BankAccountPage_viewer on Viewer {
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
  "name": "BankAccountPageQuery",
  "id": null,
  "text": "query BankAccountPageQuery {\n  viewer {\n    ...BankAccountPage_viewer\n    id\n  }\n}\n\nfragment BankAccountPage_viewer on Viewer {\n  me {\n    id\n    bankAccount {\n      id\n      ownerName\n      addressLine1\n      addressLine2\n      city\n      postalCode\n      country\n      IBAN\n      BIC\n    }\n    subAccounts {\n      id\n      pseudo\n      bankAccount {\n        id\n        ownerName\n        addressLine1\n        addressLine2\n        city\n        postalCode\n        country\n        IBAN\n        BIC\n      }\n    }\n    masterAccount {\n      id\n      pseudo\n      bankAccount {\n        id\n        ownerName\n        addressLine1\n        addressLine2\n        city\n        postalCode\n        country\n        IBAN\n        BIC\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BankAccountPageQuery",
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
            "name": "BankAccountPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "BankAccountPageQuery",
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
(node/*: any*/).hash = 'd235859fb3f85183e943403cfba2cb6e';
module.exports = node;
