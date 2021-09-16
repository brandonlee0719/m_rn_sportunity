/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type NewCircleInvitationModal_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewCircleInvitations_viewer$ref: FragmentReference;
export type NewCircleInvitations_viewer = {|
  +id: string,
  +$fragmentRefs: NewCircleInvitationModal_viewer$ref,
  +$refType: NewCircleInvitations_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NewCircleInvitations_viewer",
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
      "name": "NewCircleInvitationModal_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3ad0601e972deb81db4047c7edbb787f';
module.exports = node;
