/**
 * @flow
 * @relayHash 4b9d7b6c5365a2514de61cb3c82e0658
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type requireCashInInput = {
  userId: string,
  amount: PriceInput,
  paymentMethodId: string,
  clientMutationId?: ?string,
};
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type RequireCashInMutationVariables = {|
  input: requireCashInInput
|};
export type RequireCashInMutationResponse = {|
  +requireCashIn: ?{|
    +clientMutationId: ?string,
    +secure3DURL: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string
      |}
    |},
  |}
|};
export type RequireCashInMutation = {|
  variables: RequireCashInMutationVariables,
  response: RequireCashInMutationResponse,
|};
*/


/*
mutation RequireCashInMutation(
  $input: requireCashInInput!
) {
  requireCashIn(input: $input) {
    clientMutationId
    secure3DURL
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
    "type": "requireCashInInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "requireCashInInput!"
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
    v4
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RequireCashInMutation",
  "id": null,
  "text": "mutation RequireCashInMutation(\n  $input: requireCashInInput!\n) {\n  requireCashIn(input: $input) {\n    clientMutationId\n    secure3DURL\n    viewer {\n      me {\n        id\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RequireCashInMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "requireCashIn",
        "storageKey": null,
        "args": v1,
        "concreteType": "requireCashInPayload",
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
    "name": "RequireCashInMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "requireCashIn",
        "storageKey": null,
        "args": v1,
        "concreteType": "requireCashInPayload",
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
(node/*: any*/).hash = '1189b6da8d6fc253cb56921b6aaba146';
module.exports = node;
