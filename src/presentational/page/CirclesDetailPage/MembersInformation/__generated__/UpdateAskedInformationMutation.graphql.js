/**
 * @flow
 * @relayHash 5ab10afcae6a3e5b1cbb61a5c312cd7f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AskedInformationType = "ADDRESS" | "BOOLEAN" | "CUSTOM" | "DATE" | "DOCUMENT" | "NUMBER" | "PHONE_NUMBER" | "TEXT" | "%future added value";
export type updateAskedInformationInput = {
  circleId: string,
  askedInformation?: ?$ReadOnlyArray<?AskedInformation>,
  clientMutationId?: ?string,
};
export type AskedInformation = {
  id?: ?string,
  name: string,
  type: AskedInformationType,
  filledByOwner: boolean,
};
export type UpdateAskedInformationMutationVariables = {|
  input: updateAskedInformationInput
|};
export type UpdateAskedInformationMutationResponse = {|
  +updateAskedInformation: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +askedInformation: ?$ReadOnlyArray<?{|
          +id: string,
          +name: ?string,
          +type: ?AskedInformationType,
          +filledByOwner: ?boolean,
          +form: ?{|
            +id: string,
            +name: ?string,
          |},
        |}>
      |}
    |},
  |}
|};
export type UpdateAskedInformationMutation = {|
  variables: UpdateAskedInformationMutationVariables,
  response: UpdateAskedInformationMutationResponse,
|};
*/


/*
mutation UpdateAskedInformationMutation(
  $input: updateAskedInformationInput!
) {
  updateAskedInformation(input: $input) {
    clientMutationId
    edge {
      node {
        askedInformation {
          id
          name
          type
          filledByOwner
          form {
            id
            name
          }
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
    "type": "updateAskedInformationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateAskedInformationInput!"
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
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "askedInformation",
  "storageKey": null,
  "args": null,
  "concreteType": "askedInformation",
  "plural": true,
  "selections": [
    v3,
    v4,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "filledByOwner",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "form",
      "storageKey": null,
      "args": null,
      "concreteType": "CircleInformationFormOutput",
      "plural": false,
      "selections": [
        v3,
        v4
      ]
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateAskedInformationMutation",
  "id": null,
  "text": "mutation UpdateAskedInformationMutation(\n  $input: updateAskedInformationInput!\n) {\n  updateAskedInformation(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        askedInformation {\n          id\n          name\n          type\n          filledByOwner\n          form {\n            id\n            name\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateAskedInformationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateAskedInformation",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateAskedInformationPayload",
        "plural": false,
        "selections": [
          v2,
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
    "name": "UpdateAskedInformationMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateAskedInformation",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateAskedInformationPayload",
        "plural": false,
        "selections": [
          v2,
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
(node/*: any*/).hash = '0d475e9f1c56e01c392264d2c8c548d8';
module.exports = node;
