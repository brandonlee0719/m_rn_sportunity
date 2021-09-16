/**
 * @flow
 * @relayHash b7bced23af73a8e4dcef494591787000
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateTutorialStepInput = {
  userID: string,
  tutorialSteps?: ?TutorialStepsInput,
  clientMutationId?: ?string,
};
export type TutorialStepsInput = {
  createFormStep?: ?boolean,
  setupMembersSubscriptionStep?: ?boolean,
  fulfilProfileStep?: ?boolean,
  addOfficialDocumentsStep?: ?boolean,
  createSubAccountStep?: ?boolean,
  shareAccessStep?: ?boolean,
  createCircleStep?: ?boolean,
  organizeStep?: ?boolean,
  setupStatisticsStep?: ?boolean,
  joinAPrivateCircleStep?: ?boolean,
  joinAPublicCircleStep?: ?boolean,
  giveAvailabilitiesStep?: ?boolean,
  bookSportunityStep?: ?boolean,
};
export type UpdateUserTutorialStepsMutationVariables = {|
  input: updateTutorialStepInput
|};
export type UpdateUserTutorialStepsMutationResponse = {|
  +updateTutorialStep: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +tutorialSteps: ?{|
        +createFormStep: ?boolean,
        +setupMembersSubscriptionStep: ?boolean,
        +fulfilProfileStep: ?boolean,
        +addOfficialDocumentsStep: ?boolean,
        +createSubAccountStep: ?boolean,
        +shareAccessStep: ?boolean,
        +createCircleStep: ?boolean,
        +organizeStep: ?boolean,
        +setupStatisticsStep: ?boolean,
        +joinAPrivateCircleStep: ?boolean,
        +joinAPublicCircleStep: ?boolean,
        +giveAvailabilitiesStep: ?boolean,
        +bookSportunityStep: ?boolean,
      |}
    |},
  |}
|};
export type UpdateUserTutorialStepsMutation = {|
  variables: UpdateUserTutorialStepsMutationVariables,
  response: UpdateUserTutorialStepsMutationResponse,
|};
*/


/*
mutation UpdateUserTutorialStepsMutation(
  $input: updateTutorialStepInput!
) {
  updateTutorialStep(input: $input) {
    clientMutationId
    user {
      tutorialSteps {
        createFormStep
        setupMembersSubscriptionStep
        fulfilProfileStep
        addOfficialDocumentsStep
        createSubAccountStep
        shareAccessStep
        createCircleStep
        organizeStep
        setupStatisticsStep
        joinAPrivateCircleStep
        joinAPublicCircleStep
        giveAvailabilitiesStep
        bookSportunityStep
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
    "type": "updateTutorialStepInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateTutorialStepInput!"
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
  "kind": "LinkedField",
  "alias": null,
  "name": "tutorialSteps",
  "storageKey": null,
  "args": null,
  "concreteType": "TutorialSteps",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createCircleStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createFormStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "fulfilProfileStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "addOfficialDocumentsStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "createSubAccountStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "shareAccessStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "setupMembersSubscriptionStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "organizeStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "setupStatisticsStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "joinAPrivateCircleStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "joinAPublicCircleStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "giveAvailabilitiesStep",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "bookSportunityStep",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateUserTutorialStepsMutation",
  "id": null,
  "text": "mutation UpdateUserTutorialStepsMutation(\n  $input: updateTutorialStepInput!\n) {\n  updateTutorialStep(input: $input) {\n    clientMutationId\n    user {\n      tutorialSteps {\n        createFormStep\n        setupMembersSubscriptionStep\n        fulfilProfileStep\n        addOfficialDocumentsStep\n        createSubAccountStep\n        shareAccessStep\n        createCircleStep\n        organizeStep\n        setupStatisticsStep\n        joinAPrivateCircleStep\n        joinAPublicCircleStep\n        giveAvailabilitiesStep\n        bookSportunityStep\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateUserTutorialStepsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateTutorialStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateTutorialStepPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateUserTutorialStepsMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateTutorialStep",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateTutorialStepPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v3,
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
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d0a8d921a41e2cd89a8d74d45ea03cc';
module.exports = node;
