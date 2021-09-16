/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type InvitationModal_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Invitations_viewer$ref: FragmentReference;
export type Invitations_viewer = {|
  +id: string,
  +$fragmentRefs: InvitationModal_viewer$ref,
  +$refType: Invitations_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Invitations_viewer",
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
      "name": "InvitationModal_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3457685e073cd1fac609d036c5370dba';
module.exports = node;
