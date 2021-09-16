/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AddUser_viewer$ref = any;
type CirclesPageView_viewer$ref = any;
type InvitedCircle_viewer$ref = any;
type Invitee_viewer$ref = any;
type SearchModule_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type InvitationModal_viewer$ref: FragmentReference;
export type InvitationModal_viewer = {|
  +$fragmentRefs: Invitee_viewer$ref & InvitedCircle_viewer$ref & CirclesPageView_viewer$ref & SearchModule_viewer$ref & AddUser_viewer$ref,
  +$refType: InvitationModal_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "InvitationModal_viewer",
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
      "name": "CirclesPageView_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SearchModule_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AddUser_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'eea8203a6da3848c24bebc247d6d34ba';
module.exports = node;
