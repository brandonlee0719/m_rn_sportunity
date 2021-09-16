/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type DateSportunity_sportunity$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ConfirmBookingPageHeader_sportunity$ref: FragmentReference;
export type ConfirmBookingPageHeader_sportunity = {|
  +title: string,
  +sport_con: ?{|
    +sport: ?{|
      +logo: string
    |}
  |},
  +$fragmentRefs: DateSportunity_sportunity$ref,
  +$refType: ConfirmBookingPageHeader_sportunity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ConfirmBookingPageHeader_sportunity",
  "type": "Sportunity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "DateSportunity_sportunity",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": "sport_con",
      "name": "sport",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunitySport",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "sport",
          "storageKey": null,
          "args": null,
          "concreteType": "Sport",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "logo",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8f8342ce7ac2ee8bed9159adfa6553ed';
module.exports = node;
