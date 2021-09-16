/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type HomePagePreference = "FIND" | "ORGANIZED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type SettingsPage_query$ref: FragmentReference;
export type SettingsPage_query = {|
  +viewer: ?{|
    +me?: ?{|
      +id: string,
      +pseudo: string,
      +homePagePreference: ?HomePagePreference,
    |}
  |},
  +$refType: SettingsPage_query$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SettingsPage_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "queryMe",
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
          "kind": "Condition",
          "passingValue": true,
          "condition": "queryMe",
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
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
                  "name": "homePagePreference",
                  "args": null,
                  "storageKey": null
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
(node/*: any*/).hash = '932286abcf204ee0d9d02843c416c402';
module.exports = node;
