/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AddUser_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AddParticipants_viewer$ref: FragmentReference;
export type AddParticipants_viewer = {|
  +id: string,
  +$fragmentRefs: AddUser_viewer$ref,
  +$refType: AddParticipants_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AddParticipants_viewer",
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
      "name": "AddUser_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cdb2bb92ea0f52825d99a4d6149d8cc2';
module.exports = node;
