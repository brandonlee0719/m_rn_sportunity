/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ButtonFeedback_viewer$ref = any;
type ButtonSportunity_viewer$ref = any;
type EventStatistics_viewer$ref = any;
type ParticipantsList_viewer$ref = any;
type PriceView_viewer$ref = any;
type StatisticFillingModal_viewer$ref = any;
type TopContent_viewer$ref = any;
type VoteForManOfTheGame_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type EventDetailInfo_viewer$ref: FragmentReference;
export type EventDetailInfo_viewer = {|
  +relaunchInviteds?: ?{|
    +id: string
  |},
  +authorizedAccounts?: ?{|
    +id: ?string,
    +avatar: ?string,
    +pseudo: ?string,
    +accounts: ?$ReadOnlyArray<?{|
      +id: ?string,
      +avatar: ?string,
      +token: ?string,
      +pseudo: ?string,
    |}>,
  |},
  +superMe?: ?{|
    +id: ?string,
    +pseudo: ?string,
    +avatar: ?string,
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: ?string,
      +avatar: ?string,
      +pseudo: ?string,
      +token: ?string,
    |}>,
  |},
  +$fragmentRefs: VoteForManOfTheGame_viewer$ref & PriceView_viewer$ref & ButtonSportunity_viewer$ref & ParticipantsList_viewer$ref & ButtonFeedback_viewer$ref & StatisticFillingModal_viewer$ref & EventStatistics_viewer$ref & TopContent_viewer$ref,
  +$refType: EventDetailInfo_viewer$ref,
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "EventDetailInfo_viewer",
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
    },
    {
      "kind": "LocalArgument",
      "name": "superToken",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "querySuperMe",
      "type": "Boolean",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "userToken",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "queryAuthorizedAccounts",
      "type": "Boolean",
      "defaultValue": false
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "StatisticFillingModal_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "VoteForManOfTheGame_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ButtonSportunity_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ParticipantsList_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ButtonFeedback_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PriceView_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "EventStatistics_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "TopContent_viewer",
      "args": null
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "querySuperMe",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "superMe",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "superToken",
              "variableName": "superToken",
              "type": "String"
            }
          ],
          "concreteType": "SuperUser",
          "plural": false,
          "selections": [
            v0,
            v1,
            v2,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "subAccounts",
              "storageKey": null,
              "args": null,
              "concreteType": "SubAccounts",
              "plural": true,
              "selections": [
                v0,
                v2,
                v1,
                v3
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryAuthorizedAccounts",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "authorizedAccounts",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "userToken",
              "variableName": "userToken",
              "type": "String"
            }
          ],
          "concreteType": "AuthorizedAccounts",
          "plural": false,
          "selections": [
            v0,
            v2,
            v1,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "accounts",
              "storageKey": null,
              "args": null,
              "concreteType": "AuthorizedAccountsList",
              "plural": true,
              "selections": [
                v0,
                v2,
                v3,
                v1
              ]
            }
          ]
        }
      ]
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
            v0
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '125d16a7436f4f3734333f6cab989bcb';
module.exports = node;
