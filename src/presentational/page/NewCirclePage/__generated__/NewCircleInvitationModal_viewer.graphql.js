/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type InvitedCircle_viewer$ref = any;
type Invitee_viewer$ref = any;
type SearchModule_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewCircleInvitationModal_viewer$ref: FragmentReference;
export type NewCircleInvitationModal_viewer = {|
  +$fragmentRefs: Invitee_viewer$ref & InvitedCircle_viewer$ref & SearchModule_viewer$ref,
  +$refType: NewCircleInvitationModal_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NewCircleInvitationModal_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Invitee_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "InvitedCircle_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SearchModule_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'f078a9271ff20cc37c92379d22e75a52';
module.exports = node;
