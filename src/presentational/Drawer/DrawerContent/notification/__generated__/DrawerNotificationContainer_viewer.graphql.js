/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type ManagementAuthorizationLevels = "ADMIN" | "READER" | "WRITER" | "%future added value";
export type UserProfileType = "BUSINESS" | "ORGANIZATION" | "PERSON" | "SOLETRADER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type DrawerNotificationContainer_viewer$ref: FragmentReference;
export type DrawerNotificationContainer_viewer = {|
  +superMe?: ?{|
    +id: ?string,
    +pseudo: ?string,
    +avatar: ?string,
    +profileType: ?UserProfileType,
    +isSubAccount: ?boolean,
    +subAccounts: ?$ReadOnlyArray<?{|
      +id: ?string,
      +pseudo: ?string,
      +avatar: ?string,
      +token: ?string,
      +unreadChats: ?number,
      +numberOfUnreadNotifications: ?number,
    |}>,
    +userPreferences: ?{|
      +areSubAccountsActivated: ?boolean
    |},
  |},
  +authorizedAccounts?: ?{|
    +id: ?string,
    +pseudo: ?string,
    +avatar: ?string,
    +profileType: ?UserProfileType,
    +unreadChats: ?number,
    +numberOfUnreadNotifications: ?number,
    +accounts: ?$ReadOnlyArray<?{|
      +id: ?string,
      +pseudo: ?string,
      +avatar: ?string,
      +token: ?string,
      +unreadChats: ?number,
      +numberOfUnreadNotifications: ?number,
      +authorization_level: ?ManagementAuthorizationLevels,
      +subAccounts: ?$ReadOnlyArray<?{|
        +id: ?string
      |}>,
    |}>,
  |},
  +$refType: DrawerNotificationContainer_viewer$ref,
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
  "name": "profileType",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unreadChats",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numberOfUnreadNotifications",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "DrawerNotificationContainer_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "query",
      "type": "Boolean!",
      "defaultValue": false
    },
    {
      "kind": "LocalArgument",
      "name": "superToken",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "userToken",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "query",
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
            v3,
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "isSubAccount",
              "args": null,
              "storageKey": null
            },
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
                v1,
                v2,
                v4,
                v5,
                v6
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "userPreferences",
              "storageKey": null,
              "args": null,
              "concreteType": "SuperUserPreferences",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "areSubAccountsActivated",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
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
            v1,
            v2,
            v3,
            v5,
            v6,
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
                v1,
                v2,
                v4,
                v5,
                v6,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "authorization_level",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "subAccounts",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "AuthorizedUserSubAccounts",
                  "plural": true,
                  "selections": [
                    v0
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c6b5ec05e1d06faca6f7447f025ac78';
module.exports = node;
