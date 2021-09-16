/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ParticipantsStatisticsModal_sportunity$ref = any;
type SportunityStatisticsModal_sportunity$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatisticFillingModal_sportunity$ref: FragmentReference;
export type StatisticFillingModal_sportunity = {|
  +id: string,
  +title: string,
  +beginning_date: any,
  +ending_date: any,
  +$fragmentRefs: SportunityStatisticsModal_sportunity$ref & ParticipantsStatisticsModal_sportunity$ref,
  +$refType: StatisticFillingModal_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "StatisticFillingModal_sportunity",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "SportunityStatisticsModal_sportunity",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ParticipantsStatisticsModal_sportunity",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a1f3b400bc3958849d31fab16e625153';
module.exports = node;
