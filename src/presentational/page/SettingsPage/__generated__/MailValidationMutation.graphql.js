/**
 * @flow
 * @relayHash 4784db9d1fa2c62779c40e989195a0e1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type askNewValidationMailInput = {
  pseudo?: ?string,
  email?: ?string,
  clientMutationId?: ?string,
};
export type MailValidationMutationVariables = {|
  input: askNewValidationMailInput
|};
export type MailValidationMutationResponse = {|
  +askNewValidationMail: ?{|
    +clientMutationId: ?string
  |}
|};
export type MailValidationMutation = {|
  variables: MailValidationMutationVariables,
  response: MailValidationMutationResponse,
|};
*/


/*
mutation MailValidationMutation(
  $input: askNewValidationMailInput!
) {
  askNewValidationMail(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "askNewValidationMailInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "askNewValidationMail",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "askNewValidationMailInput!"
      }
    ],
    "concreteType": "askNewValidationMailPayload",
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
  "name": "MailValidationMutation",
  "id": null,
  "text": "mutation MailValidationMutation(\n  $input: askNewValidationMailInput!\n) {\n  askNewValidationMail(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MailValidationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "MailValidationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '33aaf139cfd052e07482db639542fa7b';
module.exports = node;
