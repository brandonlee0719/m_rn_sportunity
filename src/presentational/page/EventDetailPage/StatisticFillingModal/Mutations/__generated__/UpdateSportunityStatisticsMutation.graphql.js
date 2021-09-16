/**
 * @flow
 * @relayHash f7c3717f55fa413489190ea5a002c457
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateSportunityStatisticsInput = {
  sportunityID: string,
  sportunityStatistics?: ?$ReadOnlyArray<?SportunityStatisticInput>,
  clientMutationId?: ?string,
};
export type SportunityStatisticInput = {
  statisticId?: ?string,
  participantId?: ?string,
  value?: ?number,
};
export type UpdateSportunityStatisticsMutationVariables = {|
  input: updateSportunityStatisticsInput
|};
export type UpdateSportunityStatisticsMutationResponse = {|
  +updateSportunityStatistic: ?{|
    +clientMutationId: ?string
  |}
|};
export type UpdateSportunityStatisticsMutation = {|
  variables: UpdateSportunityStatisticsMutationVariables,
  response: UpdateSportunityStatisticsMutationResponse,
|};
*/


/*
mutation UpdateSportunityStatisticsMutation(
  $input: updateSportunityStatisticsInput!
) {
  updateSportunityStatistic(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateSportunityStatisticsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateSportunityStatistic",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "updateSportunityStatisticsInput!"
      }
    ],
    "concreteType": "updateSportunityStatisticsPayload",
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
  "name": "UpdateSportunityStatisticsMutation",
  "id": null,
  "text": "mutation UpdateSportunityStatisticsMutation(\n  $input: updateSportunityStatisticsInput!\n) {\n  updateSportunityStatistic(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSportunityStatisticsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateSportunityStatisticsMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b96ede31af8f5bcc9c1c53360582d1ab';
module.exports = node;
