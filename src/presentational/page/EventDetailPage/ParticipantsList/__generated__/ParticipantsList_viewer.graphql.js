/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AddParticipants_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ParticipantsList_viewer$ref: FragmentReference;
export type ParticipantsList_viewer = {|
  +id: string,
  +$fragmentRefs: AddParticipants_viewer$ref,
  +$refType: ParticipantsList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ParticipantsList_viewer",
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
      "name": "AddParticipants_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a5fa436d2ae032c6affd2b9b8ca35c74';
module.exports = node;
