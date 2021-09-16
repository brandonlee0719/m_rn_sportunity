/**
 * @flow
 * @relayHash 11b068e076aeac20998e55edba655aff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type OrganizerStatistics_viewer$ref = any;
export type StringIntervalInput = {
  from: string,
  to: string,
};
export type OrganizerStatisticsRefetchQueryVariables = {|
  id?: ?string,
  circleId?: ?string,
  query: boolean,
  userId: string,
  dateInterval?: ?StringIntervalInput,
|};
export type OrganizerStatisticsRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: OrganizerStatistics_viewer$ref
  |}
|};
export type OrganizerStatisticsRefetchQuery = {|
  variables: OrganizerStatisticsRefetchQueryVariables,
  response: OrganizerStatisticsRefetchQueryResponse,
|};
*/


/*
query OrganizerStatisticsRefetchQuery(
  $id: String
  $circleId: String
  $query: Boolean!
  $dateInterval: StringIntervalInput
) {
  viewer {
    ...OrganizerStatistics_viewer_3Q1KMG
    id
  }
}

fragment OrganizerStatistics_viewer_3Q1KMG on Viewer {
  id
  me {
    id
  }
  statisticPreferences(userID: $id) @include(if: $query) {
    private
    userStats {
      stat0 {
        id
        name
      }
      stat1 {
        id
        name
      }
      stat2 {
        id
        name
      }
      stat3 {
        id
        name
      }
      stat4 {
        id
        name
      }
      stat5 {
        id
        name
      }
      statManOfTheGame {
        id
        name
      }
    }
  }
  circlesStatistics(userID: $id, circleID: $circleId, dateInterval: $dateInterval) @include(if: $query) {
    statisticName {
      id
      name
    }
    participant {
      id
      pseudo
      avatar
    }
    value
  }
  sportunitiesStatistics(userID: $id) @include(if: $query) {
    sportunityType {
      id
      name {
        EN
        FR
        id
      }
    }
    sportunityTypeStatus {
      id
      name {
        EN
        FR
        id
      }
    }
    value
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "circleId",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "dateInterval",
    "type": "StringIntervalInput",
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
  "kind": "Variable",
  "name": "userID",
  "variableName": "id",
  "type": "String"
},
v3 = [
  v2
],
v4 = [
  v1,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v6 = [
  v1,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "name",
    "storageKey": null,
    "args": null,
    "concreteType": "TranslatedString",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "EN",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "FR",
        "args": null,
        "storageKey": null
      },
      v1
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "OrganizerStatisticsRefetchQuery",
  "id": null,
  "text": "query OrganizerStatisticsRefetchQuery(\n  $id: String\n  $circleId: String\n  $query: Boolean!\n  $dateInterval: StringIntervalInput\n) {\n  viewer {\n    ...OrganizerStatistics_viewer_3Q1KMG\n    id\n  }\n}\n\nfragment OrganizerStatistics_viewer_3Q1KMG on Viewer {\n  id\n  me {\n    id\n  }\n  statisticPreferences(userID: $id) @include(if: $query) {\n    private\n    userStats {\n      stat0 {\n        id\n        name\n      }\n      stat1 {\n        id\n        name\n      }\n      stat2 {\n        id\n        name\n      }\n      stat3 {\n        id\n        name\n      }\n      stat4 {\n        id\n        name\n      }\n      stat5 {\n        id\n        name\n      }\n      statManOfTheGame {\n        id\n        name\n      }\n    }\n  }\n  circlesStatistics(userID: $id, circleID: $circleId, dateInterval: $dateInterval) @include(if: $query) {\n    statisticName {\n      id\n      name\n    }\n    participant {\n      id\n      pseudo\n      avatar\n    }\n    value\n  }\n  sportunitiesStatistics(userID: $id) @include(if: $query) {\n    sportunityType {\n      id\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    sportunityTypeStatus {\n      id\n      name {\n        EN\n        FR\n        id\n      }\n    }\n    value\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "OrganizerStatisticsRefetchQuery",
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
            "name": "OrganizerStatistics_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circleId",
                "variableName": "circleId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "dateInterval",
                "variableName": "dateInterval",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "userId",
                "variableName": "userId",
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
    "name": "OrganizerStatisticsRefetchQuery",
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
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "statisticPreferences",
                "storageKey": null,
                "args": v3,
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
                        "selections": v4
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "stat1",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "StatisticName",
                        "plural": false,
                        "selections": v4
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "stat2",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "StatisticName",
                        "plural": false,
                        "selections": v4
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "stat3",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "StatisticName",
                        "plural": false,
                        "selections": v4
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "stat4",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "StatisticName",
                        "plural": false,
                        "selections": v4
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "stat5",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "StatisticName",
                        "plural": false,
                        "selections": v4
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "statManOfTheGame",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "StatisticName",
                        "plural": false,
                        "selections": v4
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circlesStatistics",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "circleID",
                    "variableName": "circleId",
                    "type": "String"
                  },
                  {
                    "kind": "Variable",
                    "name": "dateInterval",
                    "variableName": "dateInterval",
                    "type": "StringIntervalInput"
                  },
                  v2
                ],
                "concreteType": "CirclesStatisticsOrganizer",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "statisticName",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "StatisticName",
                    "plural": false,
                    "selections": v4
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "participant",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
                      v1,
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
                  v5
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sportunitiesStatistics",
                "storageKey": null,
                "args": v3,
                "concreteType": "SportunitiesStatisticsOrganizer",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunityType",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityType",
                    "plural": false,
                    "selections": v6
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "sportunityTypeStatus",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SportunityTypeStatus",
                    "plural": false,
                    "selections": v6
                  },
                  v5
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
(node/*: any*/).hash = 'a96bd92f2a7234d13d8d70339f6cc211';
module.exports = node;
