/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type EventDetailMenu_sportunity$ref = any;
type EventDetailMenu_user$ref = any;
type EventDetailMenu_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailMenuContainer_query$ref: FragmentReference;
export type EventDetailMenuContainer_query = {|
  +viewer: ?{|
    +id: string,
    +me?: ?{|
      +$fragmentRefs: EventDetailMenu_user$ref
    |},
    +sportunity?: ?{|
      +$fragmentRefs: EventDetailMenu_sportunity$ref
    |},
    +$fragmentRefs: EventDetailMenu_viewer$ref,
  |},
  +$refType: EventDetailMenuContainer_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "EventDetailMenuContainer_query",
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
          "name": "EventDetailMenu_viewer",
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
                  "name": "EventDetailMenu_user",
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
                  "name": "EventDetailMenu_sportunity",
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
(node/*: any*/).hash = 'b296e22637acc030721aff9034b5c542';
module.exports = node;
