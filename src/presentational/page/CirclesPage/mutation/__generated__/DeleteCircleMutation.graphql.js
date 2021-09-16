/**
 * @flow
 * @relayHash b07d889ecfac7081ba872809c736e7e6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteCircleInput = {
  circleId: string,
  clientMutationId?: ?string,
};
export type DeleteCircleMutationVariables = {|
  input: deleteCircleInput
|};
export type DeleteCircleMutationResponse = {|
  +deleteCircle: ?{|
    +viewer: ?{|
      +id: string
    |}
  |}
|};
export type DeleteCircleMutation = {|
  variables: DeleteCircleMutationVariables,
  response: DeleteCircleMutationResponse,
|};
*/


/*
mutation DeleteCircleMutation(
  $input: deleteCircleInput!
) {
  deleteCircle(input: $input) {
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
    "type": "deleteCircleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteCircle",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "deleteCircleInput!"
      }
    ],
    "concreteType": "deleteCirclePayload",
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
  "name": "DeleteCircleMutation",
  "id": null,
  "text": "mutation DeleteCircleMutation(\n  $input: deleteCircleInput!\n) {\n  deleteCircle(input: $input) {\n    viewer {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCircleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCircleMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa74df552c87149311f9dd4c303d912e';
module.exports = node;
