/**
 * @flow
 * @relayHash a40a8ffc0203d97772d47be24c25e4c3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type registerCardDataInput = {
  cardRegistrationId: string,
  registrationData: string,
  clientMutationId?: ?string,
};
export type RegisterCardDataMutationVariables = {|
  input: registerCardDataInput
|};
export type RegisterCardDataMutationResponse = {|
  +registerCardData: ?{|
    +viewer: ?{|
      +me: ?{|
        +id: string,
        +paymentMethods: ?$ReadOnlyArray<?{|
          +id: string,
          +cardType: ?string,
          +cardMask: ?string,
          +expirationDate: ?string,
        |}>,
      |}
    |},
    +paymentMethodId: ?string,
    +clientMutationId: ?string,
  |}
|};
export type RegisterCardDataMutation = {|
  variables: RegisterCardDataMutationVariables,
  response: RegisterCardDataMutationResponse,
|};
*/


/*
mutation RegisterCardDataMutation(
  $input: registerCardDataInput!
) {
  registerCardData(input: $input) {
    viewer {
      me {
        id
        paymentMethods {
          id
          cardType
          cardMask
          expirationDate
        }
      }
      id
    }
    paymentMethodId
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "registerCardDataInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "registerCardDataInput!"
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
      "name": "paymentMethods",
      "storageKey": null,
      "args": null,
      "concreteType": "PaymentMethod",
      "plural": true,
      "selections": [
        v2,
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
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "paymentMethodId",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RegisterCardDataMutation",
  "id": null,
  "text": "mutation RegisterCardDataMutation(\n  $input: registerCardDataInput!\n) {\n  registerCardData(input: $input) {\n    viewer {\n      me {\n        id\n        paymentMethods {\n          id\n          cardType\n          cardMask\n          expirationDate\n        }\n      }\n      id\n    }\n    paymentMethodId\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RegisterCardDataMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerCardData",
        "storageKey": null,
        "args": v1,
        "concreteType": "registerCardDataPayload",
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
              v3
            ]
          },
          v4,
          v5
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterCardDataMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "registerCardData",
        "storageKey": null,
        "args": v1,
        "concreteType": "registerCardDataPayload",
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
              v3,
              v2
            ]
          },
          v4,
          v5
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '457bb10e497389876ca45727a638af16';
module.exports = node;
