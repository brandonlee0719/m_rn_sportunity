/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Statistics_viewer$ref: FragmentReference;
export type Statistics_viewer = {|
  +id: string,
  +statisticPreferences: ?{|
    +private: ?boolean,
    +isManOfTheGameActivated: ?boolean,
    +userStats: ?{|
      +stat0: ?{|
        +name: ?string
      |},
      +stat1: ?{|
        +name: ?string
      |},
      +stat2: ?{|
        +name: ?string
      |},
      +stat3: ?{|
        +name: ?string
      |},
      +stat4: ?{|
        +name: ?string
      |},
      +stat5: ?{|
        +name: ?string
      |},
    |},
  |},
  +$refType: Statistics_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "Statistics_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "userID",
      "type": "String",
      "defaultValue": ""
    }
  ],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
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
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "stat1",
              "storageKey": null,
              "args": null,
              "concreteType": "StatisticName",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "stat2",
              "storageKey": null,
              "args": null,
              "concreteType": "StatisticName",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "stat3",
              "storageKey": null,
              "args": null,
              "concreteType": "StatisticName",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "stat4",
              "storageKey": null,
              "args": null,
              "concreteType": "StatisticName",
              "plural": false,
              "selections": v0
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "stat5",
              "storageKey": null,
              "args": null,
              "concreteType": "StatisticName",
              "plural": false,
              "selections": v0
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '280612bc82ea5ab3476a44e238e735fe';
module.exports = node;
