/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type EventDetailMembers_sportunity$ref = any;
type EventDetailMembers_user$ref = any;
type EventDetailMembers_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailMembersContainer_query$ref: FragmentReference;
export type EventDetailMembersContainer_query = {|
  +viewer: ?{|
    +id: string,
    +me?: ?{|
      +$fragmentRefs: EventDetailMembers_user$ref
    |},
    +sportunity?: ?{|
      +$fragmentRefs: EventDetailMembers_sportunity$ref
    |},
    +$fragmentRefs: EventDetailMembers_viewer$ref,
  |},
  +$refType: EventDetailMembersContainer_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "EventDetailMembersContainer_query",
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
          "name": "EventDetailMembers_viewer",
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
                  "name": "EventDetailMembers_user",
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
                  "name": "EventDetailMembers_sportunity",
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
(node/*: any*/).hash = 'bf0d7666a9f6f35185ae85e725f5585a';
module.exports = node;
