/**
 * @flow
 * @relayHash 3d44f14c946943f06619d8c2b9fb3d4a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type requireCashOutInput = {
  userId: string,
  amount: PriceInput,
  clientMutationId?: ?string,
};
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type RequireCashOutMutationVariables = {|
  input: requireCashOutInput
|};
export type RequireCashOutMutationResponse = {|
  +requireCashOut: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string
      |}
    |},
  |}
|};
export type RequireCashOutMutation = {|
  variables: RequireCashOutMutationVariables,
  response: RequireCashOutMutationResponse,
|};
*/


/*
mutation RequireCashOutMutation(
  $input: requireCashOutInput!
) {
  requireCashOut(input: $input) {
    clientMutationId
    viewer {
      me {
        id
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
    "type": "requireCashOutInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "requireCashOutInput!"
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
    v3
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RequireCashOutMutation",
  "id": null,
  "text": "mutation RequireCashOutMutation(\n  $input: requireCashOutInput!\n) {\n  requireCashOut(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RequireCashOutMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "requireCashOut",
        "storageKey": null,
        "args": v1,
        "concreteType": "requireCashOutPayload",
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
    "name": "RequireCashOutMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "requireCashOut",
        "storageKey": null,
        "args": v1,
        "concreteType": "requireCashOutPayload",
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
(node/*: any*/).hash = 'd6872fc58b684b286e0a3c0c3c26fcde';
module.exports = node;
