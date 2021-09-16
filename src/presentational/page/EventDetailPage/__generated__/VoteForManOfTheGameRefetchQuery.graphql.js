/**
 * @flow
 * @relayHash 1cc62fe466f82ecb96e52c6128927e8e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type VoteForManOfTheGame_viewer$ref = any;
export type VoteForManOfTheGameRefetchQueryVariables = {|
  voteForManOfTheGameUserId?: ?string
|};
export type VoteForManOfTheGameRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: VoteForManOfTheGame_viewer$ref
  |}
|};
export type VoteForManOfTheGameRefetchQuery = {|
  variables: VoteForManOfTheGameRefetchQueryVariables,
  response: VoteForManOfTheGameRefetchQueryResponse,
|};
*/


/*
query VoteForManOfTheGameRefetchQuery(
  $voteForManOfTheGameUserId: String
) {
  viewer {
    ...VoteForManOfTheGame_viewer_2KEiC
    id
  }
}

fragment VoteForManOfTheGame_viewer_2KEiC on Viewer {
  me {
    id
  }
  statisticPreferences(userID: $voteForManOfTheGameUserId) {
    private
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "voteForManOfTheGameUserId",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "VoteForManOfTheGameRefetchQuery",
  "id": null,
  "text": "query VoteForManOfTheGameRefetchQuery(\n  $voteForManOfTheGameUserId: String\n) {\n  viewer {\n    ...VoteForManOfTheGame_viewer_2KEiC\n    id\n  }\n}\n\nfragment VoteForManOfTheGame_viewer_2KEiC on Viewer {\n  me {\n    id\n  }\n  statisticPreferences(userID: $voteForManOfTheGameUserId) {\n    private\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "VoteForManOfTheGameRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "VoteForManOfTheGame_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "voteForManOfTheGameUserId",
                "variableName": "voteForManOfTheGameUserId",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "VoteForManOfTheGameRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "userID",
                "variableName": "voteForManOfTheGameUserId",
                "type": "String"
              }
            ],
            "concreteType": "StatisticPreferences",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "private",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2182da26ac0bf789b3f486422ae7cbcd';
module.exports = node;
