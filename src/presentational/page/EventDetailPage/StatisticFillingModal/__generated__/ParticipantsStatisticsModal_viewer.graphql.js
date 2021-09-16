/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ParticipantsStatisticsModal_viewer$ref: FragmentReference;
export type ParticipantsStatisticsModal_viewer = {|
  +id: string,
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
  +$refType: ParticipantsStatisticsModal_viewer$ref,
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
  "name": "ParticipantsStatisticsModal_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "participantsStatisticsModalId",
      "type": "String!",
      "defaultValue": ""
    },
    {
      "kind": "LocalArgument",
      "name": "queryParticipantsStatisticsModal",
      "type": "Boolean",
      "defaultValue": false
    }
  ],
  "selections": [
    v0,
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryParticipantsStatisticsModal",
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
              "variableName": "participantsStatisticsModalId",
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
(node/*: any*/).hash = 'b0a1fa35ef8a968878bb6a4a07fd2313';
module.exports = node;
