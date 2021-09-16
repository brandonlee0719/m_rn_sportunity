/**
 * @flow
 * @relayHash 0634242cad2d4b32fb2346bf788d365b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Statistics_viewer$ref = any;
export type StatisticsRefetchQueryVariables = {|
  userID?: ?string
|};
export type StatisticsRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Statistics_viewer$ref
  |}
|};
export type StatisticsRefetchQuery = {|
  variables: StatisticsRefetchQueryVariables,
  response: StatisticsRefetchQueryResponse,
|};
*/


/*
query StatisticsRefetchQuery(
  $userID: String
) {
  viewer {
    ...Statistics_viewer_3iqrP
    id
  }
}

fragment Statistics_viewer_3iqrP on Viewer {
  id
  statisticPreferences(userID: $userID) {
    private
    isManOfTheGameActivated
    userStats {
      stat0 {
        name
        id
      }
      stat1 {
        name
        id
      }
      stat2 {
        name
        id
      }
      stat3 {
        name
        id
      }
      stat4 {
        name
        id
      }
      stat5 {
        name
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
    "name": "userID",
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
},
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  v1
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "StatisticsRefetchQuery",
  "id": null,
  "text": "query StatisticsRefetchQuery(\n  $userID: String\n) {\n  viewer {\n    ...Statistics_viewer_3iqrP\n    id\n  }\n}\n\nfragment Statistics_viewer_3iqrP on Viewer {\n  id\n  statisticPreferences(userID: $userID) {\n    private\n    isManOfTheGameActivated\n    userStats {\n      stat0 {\n        name\n        id\n      }\n      stat1 {\n        name\n        id\n      }\n      stat2 {\n        name\n        id\n      }\n      stat3 {\n        name\n        id\n      }\n      stat4 {\n        name\n        id\n      }\n      stat5 {\n        name\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "StatisticsRefetchQuery",
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
            "name": "Statistics_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "userID",
                "variableName": "userID",
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
    "name": "StatisticsRefetchQuery",
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "statisticPreferences",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "userID",
                "variableName": "userID",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isManOfTheGameActivated",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "userStats",
                "storageKey": null,
                "args": null,
                "concreteType": "userStats",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat0",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat1",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat2",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat3",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat4",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "stat5",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v2
                  }
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
(node/*: any*/).hash = '300ea5641eee9ce193b5f85bbb79860b';
module.exports = node;
