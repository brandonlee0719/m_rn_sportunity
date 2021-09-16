/**
 * @flow
 * @relayHash be4b87d26f4971245dcf021fb1e039c9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type relaunchMembersForAskedInformationInput = {
  circleId: string,
  clientMutationId?: ?string,
};
export type RelaunchMembersMutationVariables = {|
  input: relaunchMembersForAskedInformationInput
|};
export type RelaunchMembersMutationResponse = {|
  +relaunchMembersForAskedInformation: ?{|
    +clientMutationId: ?string
  |}
|};
export type RelaunchMembersMutation = {|
  variables: RelaunchMembersMutationVariables,
  response: RelaunchMembersMutationResponse,
|};
*/


/*
mutation RelaunchMembersMutation(
  $input: relaunchMembersForAskedInformationInput!
) {
  relaunchMembersForAskedInformation(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "relaunchMembersForAskedInformationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "relaunchMembersForAskedInformation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "relaunchMembersForAskedInformationInput!"
      }
    ],
    "concreteType": "relaunchMembersForAskedInformationPayload",
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
  "name": "RelaunchMembersMutation",
  "id": null,
  "text": "mutation RelaunchMembersMutation(\n  $input: relaunchMembersForAskedInformationInput!\n) {\n  relaunchMembersForAskedInformation(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RelaunchMembersMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "RelaunchMembersMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f02d5f11e5a303b99d95a97db7cb782c';
module.exports = node;
