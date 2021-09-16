/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ParticipantsStatisticsModal_sportunity$ref: FragmentReference;
export type ParticipantsStatisticsModal_sportunity = {|
  +id: string,
  +title: string,
  +beginning_date: any,
  +ending_date: any,
  +$refType: ParticipantsStatisticsModal_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ParticipantsStatisticsModal_sportunity",
  "type": "Sportunity",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "beginning_date",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ending_date",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'aa484d1116082b6c9852e3c27e4cdcdd';
module.exports = node;
