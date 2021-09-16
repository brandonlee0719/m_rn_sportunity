/**
 * @flow
 * @relayHash 79b6e6dd4e9cfdf564bb401beff9e33f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type readChatInput = {
  chatId?: ?string,
  clientMutationId?: ?string,
};
export type ReadChatMutationVariables = {|
  input: readChatInput
|};
export type ReadChatMutationResponse = {|
  +readChat: ?{|
    +clientMutationId: ?string
  |}
|};
export type ReadChatMutation = {|
  variables: ReadChatMutationVariables,
  response: ReadChatMutationResponse,
|};
*/


/*
mutation ReadChatMutation(
  $input: readChatInput!
) {
  readChat(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "readChatInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "readChat",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "readChatInput!"
      }
    ],
    "concreteType": "readChatPayload",
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
  "name": "ReadChatMutation",
  "id": null,
  "text": "mutation ReadChatMutation(\n  $input: readChatInput!\n) {\n  readChat(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReadChatMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ReadChatMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9bc17c88ff2c8330040182ef643f0f86';
module.exports = node;
