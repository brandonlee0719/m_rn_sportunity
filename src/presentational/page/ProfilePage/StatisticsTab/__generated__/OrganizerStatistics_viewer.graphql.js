/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OrganizerStatistics_viewer$ref: FragmentReference;
export type OrganizerStatistics_viewer = {|
  +id: string,
  +me: ?{|
    +id: string
  |},
  +statisticPreferences?: ?{|
    +private: ?boolean,
    +userStats: ?{|
      +stat0: ?{|
        +id: string,
        +name: ?string,
      |},
      +stat1: ?{|
        +id: string,
        +name: ?string,
      |},
      +stat2: ?{|
        +id: string,
        +name: ?string,
      |},
      +stat3: ?{|
        +id: string,
        +name: ?string,
      |},
      +stat4: ?{|
        +id: string,
        +name: ?string,
      |},
      +stat5: ?{|
        +id: string,
        +name: ?string,
      |},
      +statManOfTheGame: ?{|
        +id: string,
        +name: ?string,
      |},
    |},
  |},
  +circlesStatistics?: ?$ReadOnlyArray<?{|
    +statisticName: ?{|
      +id: string,
      +name: ?string,
    |},
    +participant: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +value: ?number,
  |}>,
  +sportunitiesStatistics?: ?$ReadOnlyArray<?{|
    +sportunityType: ?{|
      +id: string,
      +name: ?{|
        +EN: ?string,
        +FR: ?string,
      |},
    |},
    +sportunityTypeStatus: ?{|
      +id: string,
      +name: ?{|
        +EN: ?string,
        +FR: ?string,
      |},
    |},
    +value: ?number,
  |}>,
  +$refType: OrganizerStatistics_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "Variable",
  "name": "userID",
  "variableName": "id",
  "type": "String"
},
v2 = [
  v1
],
v3 = [
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "value",
  "args": null,
  "storageKey": null
},
v5 = [
  v0,
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
      }
    ]
  }
];
return {
  "kind": "Fragment",
  "name": "OrganizerStatistics_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
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
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "userId",
      "type": "String!",
      "defaultValue": "_"
    },
    {
      "kind": "LocalArgument",
      "name": "dateInterval",
      "type": "StringIntervalInput",
      "defaultValue": "_ "
    }
  ],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        v0
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
          "args": v2,
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
                  "selections": v3
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "stat1",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "StatisticName",
                  "plural": false,
                  "selections": v3
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "stat2",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "StatisticName",
                  "plural": false,
                  "selections": v3
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "stat3",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "StatisticName",
                  "plural": false,
                  "selections": v3
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "stat4",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "StatisticName",
                  "plural": false,
                  "selections": v3
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "stat5",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "StatisticName",
                  "plural": false,
                  "selections": v3
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "statManOfTheGame",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "StatisticName",
                  "plural": false,
                  "selections": v3
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
            v1
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
              "selections": v3
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
                v0,
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
            v4
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sportunitiesStatistics",
          "storageKey": null,
          "args": v2,
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
              "selections": v5
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "sportunityTypeStatus",
              "storageKey": null,
              "args": null,
              "concreteType": "SportunityTypeStatus",
              "plural": false,
              "selections": v5
            },
            v4
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '7ead35c2d0a7b048193396cbe575a9c6';
module.exports = node;
