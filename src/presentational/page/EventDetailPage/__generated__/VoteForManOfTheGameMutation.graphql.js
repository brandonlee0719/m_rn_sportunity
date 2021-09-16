/**
 * @flow
 * @relayHash 416bca5cd301164ab44bffa69ebf2cf3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type voteForManOfTheGameInput = {
  sportunityID: string,
  participantID: string,
  clientMutationId?: ?string,
};
export type VoteForManOfTheGameMutationVariables = {|
  input: voteForManOfTheGameInput
|};
export type VoteForManOfTheGameMutationResponse = {|
  +voteForManOfTheGame: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +manOfTheGameVotes: ?$ReadOnlyArray<?{|
          +voter: ?{|
            +id: string
          |},
          +votedFor: ?{|
            +id: string,
            +pseudo: string,
            +avatar: ?string,
          |},
          +date: ?any,
        |}>
      |}
    |},
  |}
|};
export type VoteForManOfTheGameMutation = {|
  variables: VoteForManOfTheGameMutationVariables,
  response: VoteForManOfTheGameMutationResponse,
|};
*/


/*
mutation VoteForManOfTheGameMutation(
  $input: voteForManOfTheGameInput!
) {
  voteForManOfTheGame(input: $input) {
    clientMutationId
    edge {
      node {
        manOfTheGameVotes {
          voter {
            id
          }
          votedFor {
            id
            pseudo
            avatar
          }
          date
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
    "type": "voteForManOfTheGameInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "voteForManOfTheGameInput!"
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
  "name": "manOfTheGameVotes",
  "storageKey": null,
  "args": null,
  "concreteType": "manOfTheGameVotes",
  "plural": true,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "voter",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v3
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "votedFor",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v3,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "pseudo",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "avatar",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "date",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "VoteForManOfTheGameMutation",
  "id": null,
  "text": "mutation VoteForManOfTheGameMutation(\n  $input: voteForManOfTheGameInput!\n) {\n  voteForManOfTheGame(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        manOfTheGameVotes {\n          voter {\n            id\n          }\n          votedFor {\n            id\n            pseudo\n            avatar\n          }\n          date\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "VoteForManOfTheGameMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "voteForManOfTheGame",
        "storageKey": null,
        "args": v1,
        "concreteType": "voteForManOfTheGamePayload",
        "plural": false,
        "selections": [
          v2,
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
                  v4
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
    "name": "VoteForManOfTheGameMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "voteForManOfTheGame",
        "storageKey": null,
        "args": v1,
        "concreteType": "voteForManOfTheGamePayload",
        "plural": false,
        "selections": [
          v2,
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
                  v4,
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
(node/*: any*/).hash = '912200272d048b44b5a2e7613b797a2b';
module.exports = node;
