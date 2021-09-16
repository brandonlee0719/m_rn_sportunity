/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type EventDetailCarpooling_sportunity$ref = any;
type EventDetailCarpooling_user$ref = any;
type EventDetailCarpooling_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailCarpoolingContainer_query$ref: FragmentReference;
export type EventDetailCarpoolingContainer_query = {|
  +viewer: ?{|
    +id: string,
    +me?: ?{|
      +$fragmentRefs: EventDetailCarpooling_user$ref
    |},
    +sportunity?: ?{|
      +$fragmentRefs: EventDetailCarpooling_sportunity$ref
    |},
    +$fragmentRefs: EventDetailCarpooling_viewer$ref,
  |},
  +$refType: EventDetailCarpoolingContainer_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "EventDetailCarpoolingContainer_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "sportunityId",
      "type": "ID",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "sportunityChatId",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "sportunityRelaunchId",
      "type": "String!",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
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
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "EventDetailCarpooling_viewer",
          "args": null
        },
        {
          "kind": "Condition",
          "passingValue": true,
          "condition": "query",
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
                {
                  "kind": "FragmentSpread",
                  "name": "EventDetailCarpooling_user",
                  "args": null
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "sportunity",
              "storageKey": null,
              "args": [
                {
                  "kind": "Variable",
                  "name": "id",
                  "variableName": "sportunityId",
                  "type": "ID"
                }
              ],
              "concreteType": "Sportunity",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "EventDetailCarpooling_sportunity",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3119645472f51bfcddb6453ea78e2d8d';
module.exports = node;
