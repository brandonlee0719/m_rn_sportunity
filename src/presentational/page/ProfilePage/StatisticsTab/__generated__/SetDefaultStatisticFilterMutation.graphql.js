/**
 * @flow
 * @relayHash 100ae51b6d9ef96931feaa9f6585a10f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type setDefaultStatisticFilterInput = {
  filterID?: ?string,
  clientMutationId?: ?string,
};
export type SetDefaultStatisticFilterMutationVariables = {|
  input: setDefaultStatisticFilterInput
|};
export type SetDefaultStatisticFilterMutationResponse = {|
  +setDefaultStatisticFilter: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +id: string,
      +defaultStatisticFilter: ?{|
        +id: string,
        +name: ?string,
        +date_begin: ?any,
        +date_end: ?any,
        +circleList: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string
            |}
          |}>
        |},
      |},
    |},
  |}
|};
export type SetDefaultStatisticFilterMutation = {|
  variables: SetDefaultStatisticFilterMutationVariables,
  response: SetDefaultStatisticFilterMutationResponse,
|};
*/


/*
mutation SetDefaultStatisticFilterMutation(
  $input: setDefaultStatisticFilterInput!
) {
  setDefaultStatisticFilter(input: $input) {
    clientMutationId
    user {
      id
      defaultStatisticFilter {
        id
        name
        date_begin
        date_end
        circleList(first: 10) {
          edges {
            node {
              id
            }
          }
        }
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
    "type": "setDefaultStatisticFilterInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "setDefaultStatisticFilter",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "setDefaultStatisticFilterInput!"
      }
    ],
    "concreteType": "setDefaultStatisticFilterPayload",
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
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "defaultStatisticFilter",
            "storageKey": null,
            "args": null,
            "concreteType": "StatisticFilter",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "date_begin",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "date_end",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circleList",
                "storageKey": "circleList(first:10)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "concreteType": "CircleConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CircleEdge",
                    "plural": true,
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
                          v1
                        ]
                      }
                    ]
                  }
                ]
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
  "name": "SetDefaultStatisticFilterMutation",
  "id": null,
  "text": "mutation SetDefaultStatisticFilterMutation(\n  $input: setDefaultStatisticFilterInput!\n) {\n  setDefaultStatisticFilter(input: $input) {\n    clientMutationId\n    user {\n      id\n      defaultStatisticFilter {\n        id\n        name\n        date_begin\n        date_end\n        circleList(first: 10) {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SetDefaultStatisticFilterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "SetDefaultStatisticFilterMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f578301966781a3abd8428f00c642906';
module.exports = node;
