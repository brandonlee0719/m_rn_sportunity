/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type VoteForManOfTheGame_viewer$ref: FragmentReference;
export type VoteForManOfTheGame_viewer = {|
  +me: ?{|
    +id: string
  |},
  +statisticPreferences: ?{|
    +private: ?boolean
  |},
  +$refType: VoteForManOfTheGame_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "VoteForManOfTheGame_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "voteForManOfTheGameUserId",
      "type": "String",
      "defaultValue": null
    }
  ],
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
        }
      ]
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
          "variableName": "voteForManOfTheGameUserId",
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '66ef9e1940fa5b34a7d909a8e9ef23b4';
module.exports = node;
