/**
 * @flow
 * @relayHash dcfafc0dd4ff5373722e4519ed772834
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Currency = "CHF" | "EUR" | "USD" | "%future added value";
export type InfrastructureAuthorizationLevels = "CONSUMER" | "FULL_CONSUMER" | "%future added value";
export type ValidationStatus = "PENDING" | "REJECTED" | "TO_BE_VALIDATED" | "VALIDATED" | "%future added value";
export type updateVenueInput = {
  venueId?: ?string,
  venue?: ?VenueUpdateInput,
  clientMutationId?: ?string,
};
export type VenueUpdateInput = {
  name?: ?string,
  description?: ?string,
  address?: ?AddressInput,
  owner?: ?string,
  feedbacks?: ?$ReadOnlyArray<?FeedbackInput>,
  infrastructures?: ?$ReadOnlyArray<?InfrastructureInput>,
  logo?: ?string,
  price?: ?PriceInput,
  creation_status?: ?VenueStatusInput,
};
export type AddressInput = {
  address: string,
  country: string,
  city: string,
  zip?: ?string,
};
export type FeedbackInput = {
  text: string,
  rating: number,
  author: string,
  createdAt: string,
};
export type InfrastructureInput = {
  id?: ?string,
  name: string,
  sport?: ?$ReadOnlyArray<?string>,
  logo?: ?string,
  price?: ?PriceInput,
  authorized_managers?: ?$ReadOnlyArray<?InfrastructureAuthorizedManagerInput>,
};
export type PriceInput = {
  currency: Currency,
  cents: number,
};
export type InfrastructureAuthorizedManagerInput = {
  user?: ?string,
  circle?: ?string,
  authorization_level?: ?InfrastructureAuthorizationLevels,
};
export type VenueStatusInput = {
  status?: ?ValidationStatus,
  reason?: ?string,
};
export type UpdateVenueFeedbackMutationVariables = {|
  input: updateVenueInput
|};
export type UpdateVenueFeedbackMutationResponse = {|
  +updateVenue: ?{|
    +clientMutationId: ?string
  |}
|};
export type UpdateVenueFeedbackMutation = {|
  variables: UpdateVenueFeedbackMutationVariables,
  response: UpdateVenueFeedbackMutationResponse,
|};
*/


/*
mutation UpdateVenueFeedbackMutation(
  $input: updateVenueInput!
) {
  updateVenue(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateVenueInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateVenue",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "updateVenueInput!"
      }
    ],
    "concreteType": "updateVenuePayload",
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
  "name": "UpdateVenueFeedbackMutation",
  "id": null,
  "text": "mutation UpdateVenueFeedbackMutation(\n  $input: updateVenueInput!\n) {\n  updateVenue(input: $input) {\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateVenueFeedbackMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateVenueFeedbackMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b979b04fcd0eaa77b7b0a9b46a7faa2d';
module.exports = node;
