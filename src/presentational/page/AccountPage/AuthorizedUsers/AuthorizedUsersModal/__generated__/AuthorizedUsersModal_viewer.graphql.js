/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SearchModule_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AuthorizedUsersModal_viewer$ref: FragmentReference;
export type AuthorizedUsersModal_viewer = {|
  +id: string,
  +$fragmentRefs: SearchModule_viewer$ref,
  +$refType: AuthorizedUsersModal_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AuthorizedUsersModal_viewer",
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
      "name": "SearchModule_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2881870166366f44e8b5a80a36f41078';
module.exports = node;
