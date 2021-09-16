/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AddParticipants_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ParticipantsList_user$ref: FragmentReference;
export type ParticipantsList_user = {|
  +id: string,
  +$fragmentRefs: AddParticipants_user$ref,
  +$refType: ParticipantsList_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ParticipantsList_user",
  "type": "User",
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
      "name": "AddParticipants_user",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '977ab40e997fd180a1d3a7e79891922e';
module.exports = node;
