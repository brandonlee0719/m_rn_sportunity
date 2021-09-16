/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ButtonFeedback_viewer$ref = any;
type ButtonSportunity_viewer$ref = any;
type PriceModal_viewer$ref = any;
type PriceView_viewer$ref = any;
type SearchModule_viewer$ref = any;
type StatisticFillingModal_viewer$ref = any;
type VoteForManOfTheGame_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailMembers_viewer$ref: FragmentReference;
export type EventDetailMembers_viewer = {|
  +relaunchInviteds?: ?{|
    +id: string
  |},
  +$fragmentRefs: VoteForManOfTheGame_viewer$ref & PriceView_viewer$ref & ButtonSportunity_viewer$ref & SearchModule_viewer$ref & ButtonFeedback_viewer$ref & StatisticFillingModal_viewer$ref & PriceModal_viewer$ref,
  +$refType: EventDetailMembers_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "EventDetailMembers_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "sportunityRelaunchId",
      "type": "String!",
      "defaultValue": ""
    },
    {
      "kind": "LocalArgument",
      "name": "queryRelaunch",
      "type": "Boolean",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "VoteForManOfTheGame_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PriceView_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ButtonSportunity_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SearchModule_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ButtonFeedback_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "StatisticFillingModal_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PriceModal_viewer",
      "args": null
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryRelaunch",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "relaunchInviteds",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "sportunityID",
              "variableName": "sportunityRelaunchId",
              "type": "String!"
            }
          ],
          "concreteType": "Sportunity",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8d5c1eb2aba18e44b39e05f83a164a6a';
module.exports = node;
