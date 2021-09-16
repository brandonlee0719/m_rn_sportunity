/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventStatistics_viewer$ref: FragmentReference;
export type EventStatistics_viewer = {|
  +id: string,
  +me: ?{|
    +id: string,
    +pseudo: string,
    +email: ?any,
    +avatar: ?string,
  |},
  +sportunityStatistics?: ?$ReadOnlyArray<?{|
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
  +$refType: EventStatistics_viewer$ref,
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
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "EventStatistics_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "sportunityStatisticsId",
      "type": "String!",
      "defaultValue": ""
    },
    {
      "kind": "LocalArgument",
      "name": "querySportunityStatistics",
      "type": "Boolean",
      "defaultValue": false
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
        v0,
        v1,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "email",
          "args": null,
          "storageKey": null
        },
        v2
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "querySportunityStatistics",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sportunityStatistics",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "sportunityID",
              "variableName": "sportunityStatisticsId",
              "type": "String"
            }
          ],
          "concreteType": "Statistic",
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
              "selections": [
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                }
              ]
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
                v1,
                v2
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "value",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '406494473083286b4861cae11c4b26d0';
module.exports = node;
