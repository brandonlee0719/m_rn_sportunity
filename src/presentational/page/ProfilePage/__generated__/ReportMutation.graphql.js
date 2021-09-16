/**
 * @flow
 * @relayHash ce95146028291cfd2c6cfdb35ca5d716
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type reportUserInput = {
  userID?: ?string,
  reason?: ?string,
  clientMutationId?: ?string,
};
export type ReportMutationVariables = {|
  input: reportUserInput
|};
export type ReportMutationResponse = {|
  +reportUser: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +id: string
    |},
  |}
|};
export type ReportMutation = {|
  variables: ReportMutationVariables,
  response: ReportMutationResponse,
|};
*/


/*
mutation ReportMutation(
  $input: reportUserInput!
) {
  reportUser(input: $input) {
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
    "type": "reportUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "reportUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "reportUserInput!"
      }
    ],
    "concreteType": "reportUserPayload",
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
  "name": "ReportMutation",
  "id": null,
  "text": "mutation ReportMutation(\n  $input: reportUserInput!\n) {\n  reportUser(input: $input) {\n    clientMutationId\n    viewer {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReportMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ReportMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fe9c0711368a99cbffe925368d9da347';
module.exports = node;
