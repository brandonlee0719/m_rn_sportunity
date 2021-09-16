/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AuthorizedUsersModal_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorizedUsers_viewer$ref: FragmentReference;
export type AuthorizedUsers_viewer = {|
  +id: string,
  +$fragmentRefs: AuthorizedUsersModal_viewer$ref,
  +$refType: AuthorizedUsers_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AuthorizedUsers_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "AuthorizedUsersModal_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f2a0d60f619fb906e0efee44fa235ead';
module.exports = node;
