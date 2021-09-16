/**
 * @flow
 * @relayHash 82bfc742b91f0faf3132b6d4d71fcea3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deletePaymentMethodInput = {
  paymentMethodId?: ?string,
  clientMutationId?: ?string,
};
export type DeletePaymentMethodMutationVariables = {|
  input: deletePaymentMethodInput
|};
export type DeletePaymentMethodMutationResponse = {|
  +deletePaymentMethod: ?{|
    +clientMutationId: ?string,
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
  |}
|};
export type DeletePaymentMethodMutation = {|
  variables: DeletePaymentMethodMutationVariables,
  response: DeletePaymentMethodMutationResponse,
|};
*/


/*
mutation DeletePaymentMethodMutation(
  $input: deletePaymentMethodInput!
) {
  deletePaymentMethod(input: $input) {
    clientMutationId
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
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "deletePaymentMethodInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "deletePaymentMethodInput!"
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
      "name": "paymentMethods",
      "storageKey": null,
      "args": null,
      "concreteType": "PaymentMethod",
      "plural": true,
      "selections": [
        v3,
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
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeletePaymentMethodMutation",
  "id": null,
  "text": "mutation DeletePaymentMethodMutation(\n  $input: deletePaymentMethodInput!\n) {\n  deletePaymentMethod(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n        paymentMethods {\n          id\n          cardType\n          cardMask\n          expirationDate\n        }\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeletePaymentMethodMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deletePaymentMethod",
        "storageKey": null,
        "args": v1,
        "concreteType": "deletePaymentMethodPayload",
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
    "name": "DeletePaymentMethodMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deletePaymentMethod",
        "storageKey": null,
        "args": v1,
        "concreteType": "deletePaymentMethodPayload",
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
(node/*: any*/).hash = '5c84299dbf655181d1185778b510b0b5';
module.exports = node;
