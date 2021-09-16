/**
 * @flow
 * @relayHash 2bdef2b1484b05f4093f870eff2bd23c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CircleKind = "PRIVATE" | "PUBLIC" | "%future added value";
export type CircleTypeEnum = "ADULTS" | "CHILDREN" | "CLUBS" | "COMPANIES" | "TEAMS" | "%future added value";
export type ValidationStatus = "PENDING" | "REJECTED" | "TO_BE_VALIDATED" | "VALIDATED" | "%future added value";
export type newCircleInput = {
  circle?: ?CircleInput,
  clientMutationId?: ?string,
};
export type CircleInput = {
  name: string,
  owner?: ?string,
  description?: ?string,
  mode?: ?CircleKind,
  type?: ?CircleTypeEnum,
  address?: ?AddressInput,
  sport?: ?CircleSportInput,
  isCircleUpdatableByMembers?: ?boolean,
  isCircleUsableByMembers?: ?boolean,
  isCircleAccessibleFromUrl?: ?boolean,
  isChatActive?: ?boolean,
  subCircles?: ?$ReadOnlyArray<?string>,
  circlesInPrivateMode?: ?$ReadOnlyArray<?string>,
  creation_status?: ?CircleStatusInput,
  circlePreferences?: ?CirclePreferencesInput,
};
export type AddressInput = {
  address: string,
  country: string,
  city: string,
  zip?: ?string,
};
export type CircleSportInput = {
  sport: string,
  levels?: ?$ReadOnlyArray<?string>,
};
export type CircleStatusInput = {
  status?: ?ValidationStatus,
  reason?: ?string,
};
export type CirclePreferencesInput = {
  isChildrenCircle?: ?boolean
};
export type NewCircleMutationVariables = {|
  input: newCircleInput
|};
export type NewCircleMutationResponse = {|
  +newCircle: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +id: string
      |}
    |},
    +edge: ?{|
      +node: ?{|
        +id: string
      |}
    |},
  |}
|};
export type NewCircleMutation = {|
  variables: NewCircleMutationVariables,
  response: NewCircleMutationResponse,
|};
*/


/*
mutation NewCircleMutation(
  $input: newCircleInput!
) {
  newCircle(input: $input) {
    clientMutationId
    viewer {
      me {
        id
      }
      id
    }
    edge {
      node {
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
    "type": "newCircleInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "newCircleInput!"
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
v4 = [
  v3
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "me",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": v4
},
v6 = {
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
      "selections": v4
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "NewCircleMutation",
  "id": null,
  "text": "mutation NewCircleMutation(\n  $input: newCircleInput!\n) {\n  newCircle(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        id\n      }\n      id\n    }\n    edge {\n      node {\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewCircleMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newCircle",
        "storageKey": null,
        "args": v1,
        "concreteType": "newCirclePayload",
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
              v5
            ]
          },
          v6
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewCircleMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "newCircle",
        "storageKey": null,
        "args": v1,
        "concreteType": "newCirclePayload",
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
              v5,
              v3
            ]
          },
          v6
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd0aa7082055812a06d6137f2b03faacb';
module.exports = node;
