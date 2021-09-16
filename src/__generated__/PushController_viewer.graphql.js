/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PushController_viewer$ref: FragmentReference;
export type PushController_viewer = {|
  +me: ?{|
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
      +subAccounts: ?$ReadOnlyArray<?{|
        +id: ?string,
        +avatar: ?string,
        +pseudo: ?string,
        +token: ?string,
      |}>,
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
  +$refType: PushController_viewer$ref,
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
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "token",
  "args": null,
  "storageKey": null
},
v4 = [
  v0,
  v1,
  v2,
  v3
];
return {
  "kind": "Fragment",
  "name": "PushController_viewer",
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
      "name": "userToken",
      "type": "String",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "superToken",
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
        v0
      ]
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "query",
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
            v1,
            v2,
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
                v3,
                v2,
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "subAccounts",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "AuthorizedUserSubAccounts",
                  "plural": true,
                  "selections": v4
                }
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "superMe",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "superToken",
              "variableName": "userToken",
              "type": "String"
            }
          ],
          "concreteType": "SuperUser",
          "plural": false,
          "selections": [
            v0,
            v2,
            v1,
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "subAccounts",
              "storageKey": null,
              "args": null,
              "concreteType": "SubAccounts",
              "plural": true,
              "selections": v4
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '1c48d3ca7dadb90f7c51eb5e70b8dbce';
module.exports = node;
