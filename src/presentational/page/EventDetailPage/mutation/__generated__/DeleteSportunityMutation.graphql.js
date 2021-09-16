/**
 * @flow
 * @relayHash c731b230df66ed9636345611aa1c9669
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteSportunityInput = {
  sportunityID: string,
  clientMutationId?: ?string,
};
export type DeleteSportunityMutationVariables = {|
  input: deleteSportunityInput
|};
export type DeleteSportunityMutationResponse = {|
  +deleteSportunity: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +id: string,
        +status: ?string,
        +cancel_date: ?any,
      |}
    |},
  |}
|};
export type DeleteSportunityMutation = {|
  variables: DeleteSportunityMutationVariables,
  response: DeleteSportunityMutationResponse,
|};
*/


/*
mutation DeleteSportunityMutation(
  $input: deleteSportunityInput!
) {
  deleteSportunity(input: $input) {
    clientMutationId
    edge {
      node {
        id
        status
        cancel_date
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
    "type": "deleteSportunityInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteSportunity",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "deleteSportunityInput!"
      }
    ],
    "concreteType": "deleteSportunityPayload",
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
        "name": "edge",
        "storageKey": null,
        "args": null,
        "concreteType": "SportunityEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "status",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cancel_date",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteSportunityMutation",
  "id": null,
  "text": "mutation DeleteSportunityMutation(\n  $input: deleteSportunityInput!\n) {\n  deleteSportunity(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        id\n        status\n        cancel_date\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteSportunityMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteSportunityMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58147e050fcf3076f2c49cfdc1d877ec';
module.exports = node;
