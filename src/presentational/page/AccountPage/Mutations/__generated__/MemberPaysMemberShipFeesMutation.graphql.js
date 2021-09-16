/**
 * @flow
 * @relayHash 6c9bfa1ad0420c42470ae31534c03208
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type memberSubscribeToPaymentModelInput = {
  userId: string,
  paymentModelId: string,
  paymentMethodId?: ?string,
  paymentWithWallet?: ?boolean,
  amount: PriceInput,
  clientMutationId?: ?string,
};
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type MemberPaysMemberShipFeesMutationVariables = {|
  input: memberSubscribeToPaymentModelInput
|};
export type MemberPaysMemberShipFeesMutationResponse = {|
  +memberSubscribes: ?{|
    +clientMutationId: ?string,
    +secure3DURL: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string,
        +numberOfFormsToFill: ?number,
        +numberOfPaymentModelsToPay: ?number,
      |}
    |},
  |}
|};
export type MemberPaysMemberShipFeesMutation = {|
  variables: MemberPaysMemberShipFeesMutationVariables,
  response: MemberPaysMemberShipFeesMutationResponse,
|};
*/


/*
mutation MemberPaysMemberShipFeesMutation(
  $input: memberSubscribeToPaymentModelInput!
) {
  memberSubscribes(input: $input) {
    clientMutationId
    secure3DURL
    viewer {
      me {
        id
        numberOfFormsToFill
        numberOfPaymentModelsToPay
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
    "type": "memberSubscribeToPaymentModelInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "memberSubscribeToPaymentModelInput!"
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
  "name": "secure3DURL",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "me",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v4,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "numberOfFormsToFill",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "numberOfPaymentModelsToPay",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "MemberPaysMemberShipFeesMutation",
  "id": null,
  "text": "mutation MemberPaysMemberShipFeesMutation(\n  $input: memberSubscribeToPaymentModelInput!\n) {\n  memberSubscribes(input: $input) {\n    clientMutationId\n    secure3DURL\n    viewer {\n      me {\n        id\n        numberOfFormsToFill\n        numberOfPaymentModelsToPay\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MemberPaysMemberShipFeesMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "memberSubscribes",
        "storageKey": null,
        "args": v1,
        "concreteType": "memberSubscribeToPaymentModelPayload",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v5
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MemberPaysMemberShipFeesMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "memberSubscribes",
        "storageKey": null,
        "args": v1,
        "concreteType": "memberSubscribeToPaymentModelPayload",
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v5,
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ccd204f96b2b3c0cf11c6f00ceb0a147';
module.exports = node;
