/**
 * @flow
 * @relayHash 9ea35789d20ed789651c72768b3921f5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type newStatisticFilterInput = {
  name: string,
  date_begin?: ?string,
  date_end?: ?string,
  circleList?: ?$ReadOnlyArray<?string>,
  clientMutationId?: ?string,
};
export type NewStatisticFilterMutationVariables = {|
  input: newStatisticFilterInput
|};
export type NewStatisticFilterMutationResponse = {|
  +newStatisticFilter: ?{|
    +clientMutationId: ?string,
    +user: ?{|
      +id: string,
      +statisticFilters: ?$ReadOnlyArray<?{|
        +id: string,
        +name: ?string,
        +date_begin: ?any,
        +date_end: ?any,
        +circleList: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: ?string,
            |}
          |}>
        |},
      |}>,
    |},
  |}
|};
export type NewStatisticFilterMutation = {|
  variables: NewStatisticFilterMutationVariables,
  response: NewStatisticFilterMutationResponse,
|};
*/


/*
mutation NewStatisticFilterMutation(
  $input: newStatisticFilterInput!
) {
  newStatisticFilter(input: $input) {
    clientMutationId
    user {
      id
      statisticFilters {
        id
        name
        date_begin
        date_end
        circleList(first: 10) {
          edges {
            node {
              id
              name
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
    "type": "newStatisticFilterInput!",
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "newStatisticFilter",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "newStatisticFilterInput!"
      }
    ],
    "concreteType": "newStatisticFilterPayload",
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
            "name": "statisticFilters",
            "storageKey": null,
            "args": null,
            "concreteType": "StatisticFilter",
            "plural": true,
            "selections": [
              v1,
              v2,
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
                          v1,
                          v2
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
  "name": "NewStatisticFilterMutation",
  "id": null,
  "text": "mutation NewStatisticFilterMutation(\n  $input: newStatisticFilterInput!\n) {\n  newStatisticFilter(input: $input) {\n    clientMutationId\n    user {\n      id\n      statisticFilters {\n        id\n        name\n        date_begin\n        date_end\n        circleList(first: 10) {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewStatisticFilterMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v3
  },
  "operation": {
    "kind": "Operation",
    "name": "NewStatisticFilterMutation",
    "argumentDefinitions": v0,
    "selections": v3
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '94fcab6c08dcaf8987d61834f9e861f4';
module.exports = node;
