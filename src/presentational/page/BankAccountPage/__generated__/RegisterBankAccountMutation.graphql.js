/**
 * @flow
 * @relayHash 4c9cb785d9d8b656b3e4ca8e8fdf484e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type registerBankAccountInput = {
  addressLine1: string,
  addressLine2?: ?string,
  city: string,
  postalCode: string,
  country: string,
  ownerName: string,
  IBAN: string,
  BIC?: ?string,
  clientMutationId?: ?string,
};
export type RegisterBankAccountMutationVariables = {|
  input: registerBankAccountInput
|};
export type RegisterBankAccountMutationResponse = {|
  +registerBankAccount: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string,
        +bankAccount: ?{|
          +id: string,
          +addressLine1: ?string,
          +addressLine2: ?string,
          +city: ?string,
          +postalCode: ?string,
          +country: ?string,
          +ownerName: ?string,
          +IBAN: ?string,
          +BIC: ?string,
        |},
      |}
    |},
  |}
|};
export type RegisterBankAccountMutation = {|
  variables: RegisterBankAccountMutationVariables,
  response: RegisterBankAccountMutationResponse,
|};
*/


/*
mutation RegisterBankAccountMutation(
  $input: registerBankAccountInput!
) {
  registerBankAccount(input: $input) {
    clientMutationId
    viewer {
      me {
        id
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
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "registerBankAccountInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "registerBankAccountInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "me",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v3,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "bankAccount",
      "storageKey": null,
      "args": null,
      "concreteType": "BankAccount",
      "plural": false,
      "selections": [
        v3,
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
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RegisterBankAccountMutation",
  "id": null,
  "text": "mutation RegisterBankAccountMutation(\n  $input: registerBankAccountInput!\n) {\n  registerBankAccount(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n        bankAccount {\n          id\n          addressLine1\n          addressLine2\n          city\n          postalCode\n          country\n          ownerName\n          IBAN\n          BIC\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterBankAccountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerBankAccount",
        "storageKey": null,
        "args": v1,
        "concreteType": "registerBankAccountPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v4
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterBankAccountMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerBankAccount",
        "storageKey": null,
        "args": v1,
        "concreteType": "registerBankAccountPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v4,
              v3
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '51fcfe327e6f6db6ed1c5be3e2e08722';
module.exports = node;
