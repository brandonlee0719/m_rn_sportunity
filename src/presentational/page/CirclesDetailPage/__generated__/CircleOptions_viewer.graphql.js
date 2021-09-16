/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AdminMembersInformation_viewer$ref = any;
type CircleSport_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CircleOptions_viewer$ref: FragmentReference;
export type CircleOptions_viewer = {|
  +id: string,
  +$fragmentRefs: AdminMembersInformation_viewer$ref & CircleSport_viewer$ref,
  +$refType: CircleOptions_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CircleOptions_viewer",
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
      "name": "AdminMembersInformation_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "CircleSport_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '193b512820269329b5bbef69a171f802';
module.exports = node;
