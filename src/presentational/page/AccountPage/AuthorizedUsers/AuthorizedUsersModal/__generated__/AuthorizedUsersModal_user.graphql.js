/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type ManagementAuthorizationLevels = "ADMIN" | "READER" | "WRITER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorizedUsersModal_user$ref: FragmentReference;
export type AuthorizedUsersModal_user = {|
  +id: string,
  +authorized_managers: ?$ReadOnlyArray<?{|
    +user: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +authorization_level: ?ManagementAuthorizationLevels,
  |}>,
  +$refType: AuthorizedUsersModal_user$ref,
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
  "name": "AuthorizedUsersModal_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "authorized_managers",
      "storageKey": null,
      "args": null,
      "concreteType": "AuthorizedManager",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "user",
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
          "name": "authorization_level",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '84c6f53b6d1357da9b4efad82f0bf46e';
module.exports = node;
