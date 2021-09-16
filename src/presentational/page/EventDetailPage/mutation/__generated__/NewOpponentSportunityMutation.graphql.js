/**
 * @flow
 * @relayHash bfe3bb1bc6a8b5a89fc3d93bcc9d46c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type newOpponentSportunityInput = {
  sportunityId: string,
  clientMutationId?: ?string,
};
export type NewOpponentSportunityMutationVariables = {|
  input: newOpponentSportunityInput
|};
export type NewOpponentSportunityMutationResponse = {|
  +newOpponentSportunity: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +id: string
    |},
  |}
|};
export type NewOpponentSportunityMutation = {|
  variables: NewOpponentSportunityMutationVariables,
  response: NewOpponentSportunityMutationResponse,
|};
*/


/*
mutation NewOpponentSportunityMutation(
  $input: newOpponentSportunityInput!
) {
  newOpponentSportunity(input: $input) {
    clientMutationId
    viewer {
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
    "type": "newOpponentSportunityInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "newOpponentSportunity",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "newOpponentSportunityInput!"
      }
    ],
    "concreteType": "newOpponentSportunityPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "NewOpponentSportunityMutation",
  "id": null,
  "text": "mutation NewOpponentSportunityMutation(\n  $input: newOpponentSportunityInput!\n) {\n  newOpponentSportunity(input: $input) {\n    clientMutationId\n    viewer {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewOpponentSportunityMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "NewOpponentSportunityMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4720570490b66bfc86a6d1181dcb6364';
module.exports = node;
