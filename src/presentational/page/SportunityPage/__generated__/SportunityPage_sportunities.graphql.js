/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SportunityListView_sportunities$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SportunityPage_sportunities$ref: FragmentReference;
export type SportunityPage_sportunities = {|
  +count: ?number,
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string
    |}
  |}>,
  +$fragmentRefs: SportunityListView_sportunities$ref,
  +$refType: SportunityPage_sportunities$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "SportunityPage_sportunities",
  "type": "SportunityConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "SportunityListView_sportunities",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "count",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "SportunityEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Sportunity",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
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
(node/*: any*/).hash = 'f95aba590e4280d28900c8c1ab0847e8';
module.exports = node;
