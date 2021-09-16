/**
 * @flow
 * @relayHash 0066e7dc0665786da3d5f45590f7a4ec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateFilledInformationInput = {
  circleId: string,
  answers?: ?$ReadOnlyArray<?Answers>,
  clientMutationId?: ?string,
};
export type Answers = {
  userId: string,
  filledInformation?: ?$ReadOnlyArray<?Information>,
};
export type Information = {
  id: string,
  value?: ?string,
  documentId?: ?string,
};
export type UpdateFilledInformationMutationVariables = {|
  input: updateFilledInformationInput
|};
export type UpdateFilledInformationMutationResponse = {|
  +updateFilledInformation: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string,
        +numberOfFormsToFill: ?number,
        +numberOfPaymentModelsToPay: ?number,
      |}
    |},
    +edge: ?{|
      +node: ?{|
        +membersInformation: ?$ReadOnlyArray<?{|
          +id: string,
          +information: ?string,
          +user: ?{|
            +id: string
          |},
          +value: ?string,
        |}>
      |}
    |},
  |}
|};
export type UpdateFilledInformationMutation = {|
  variables: UpdateFilledInformationMutationVariables,
  response: UpdateFilledInformationMutationResponse,
|};
*/


/*
mutation UpdateFilledInformationMutation(
  $input: updateFilledInformationInput!
) {
  updateFilledInformation(input: $input) {
    clientMutationId
    viewer {
      me {
        id
        numberOfFormsToFill
        numberOfPaymentModelsToPay
      }
      id
    }
    edge {
      node {
        membersInformation {
          id
          information
          user {
            id
          }
          value
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateFilledInformationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateFilledInformationInput!"
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "me",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    v3,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "numberOfFormsToFill",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "numberOfPaymentModelsToPay",
      "args": null,
      "storageKey": null
    }
  ]
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "membersInformation",
  "storageKey": null,
  "args": null,
  "concreteType": "membersInformation",
  "plural": true,
  "selections": [
    v3,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "information",
      "args": null,
      "storageKey": null
    },
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "value",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateFilledInformationMutation",
  "id": null,
  "text": "mutation UpdateFilledInformationMutation(\n  $input: updateFilledInformationInput!\n) {\n  updateFilledInformation(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n        numberOfFormsToFill\n        numberOfPaymentModelsToPay\n      }\n      id\n    }\n    edge {\n      node {\n        membersInformation {\n          id\n          information\n          user {\n            id\n          }\n          value\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateFilledInformationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateFilledInformation",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateFilledInformationPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v4
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "CircleEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Circle",
                "plural": false,
                "selections": [
                  v5
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateFilledInformationMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateFilledInformation",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateFilledInformationPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "viewer",
            "storageKey": null,
            "args": null,
            "concreteType": "Viewer",
            "plural": false,
            "selections": [
              v4,
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "CircleEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Circle",
                "plural": false,
                "selections": [
                  v5,
                  v3
                ]
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
(node/*: any*/).hash = '3b3f6fbd2097399fb2c40a5d7b4cacf7';
module.exports = node;
