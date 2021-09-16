/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AuthorizedUsersModal_user$ref = any;
export type ManagementAuthorizationLevels = "ADMIN" | "READER" | "WRITER" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorizedUsers_user$ref: FragmentReference;
export type AuthorizedUsers_user = {|
  +id: string,
  +authorized_managers: ?$ReadOnlyArray<?{|
    +user: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
    +authorization_level: ?ManagementAuthorizationLevels,
  |}>,
  +$fragmentRefs: AuthorizedUsersModal_user$ref,
  +$refType: AuthorizedUsers_user$ref,
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
  "name": "AuthorizedUsers_user",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "AuthorizedUsersModal_user",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '51617bca4cb8656ab7b34469215255d8';
module.exports = node;
