/**
 * @flow
 * @relayHash a4bde84bf90698ad89b6ef270cfbf4cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type changePasswordInput = {
  pseudo?: ?string,
  email?: ?string,
  clientMutationId?: ?string,
};
export type ChangePasswordMutationVariables = {|
  input: changePasswordInput
|};
export type ChangePasswordMutationResponse = {|
  +changePassword: ?{|
    +clientMutationId: ?string
  |}
|};
export type ChangePasswordMutation = {|
  variables: ChangePasswordMutationVariables,
  response: ChangePasswordMutationResponse,
|};
*/


/*
mutation ChangePasswordMutation(
  $input: changePasswordInput!
) {
  changePassword(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "changePasswordInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "changePassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "changePasswordInput!"
      }
    ],
    "concreteType": "changePasswordPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ChangePasswordMutation",
  "id": null,
  "text": "mutation ChangePasswordMutation(\n  $input: changePasswordInput!\n) {\n  changePassword(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ChangePasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangePasswordMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0ce5601ea8953db27c53595eb6ee4ec1';
module.exports = node;
