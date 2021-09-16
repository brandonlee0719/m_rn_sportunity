/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type OrganizerStatistics_viewer$ref = any;
type ParticipantStatistics_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatisticsTab_viewer$ref: FragmentReference;
export type StatisticsTab_viewer = {|
  +$fragmentRefs: OrganizerStatistics_viewer$ref & ParticipantStatistics_viewer$ref,
  +$refType: StatisticsTab_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "StatisticsTab_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "OrganizerStatistics_viewer",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ParticipantStatistics_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e997cce9868de8708bbdc24da714a331';
module.exports = node;
