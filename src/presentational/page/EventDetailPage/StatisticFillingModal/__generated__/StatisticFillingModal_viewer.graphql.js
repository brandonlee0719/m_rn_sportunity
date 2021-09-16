/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ParticipantsStatisticsModal_viewer$ref = any;
type SportunityStatisticsModal_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatisticFillingModal_viewer$ref: FragmentReference;
export type StatisticFillingModal_viewer = {|
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
  +$fragmentRefs: SportunityStatisticsModal_viewer$ref & ParticipantsStatisticsModal_viewer$ref,
  +$refType: StatisticFillingModal_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "StatisticFillingModal_viewer",
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
    {
      "kind": "FragmentSpread",
      "name": "SportunityStatisticsModal_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ParticipantsStatisticsModal_viewer",
      "args": null
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
(node/*: any*/).hash = 'af5da17caa0cc88189abb71dcc8074f1';
module.exports = node;
