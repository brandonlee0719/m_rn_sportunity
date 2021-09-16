/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SelectTemplate_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type NewActivityStep1_viewer$ref: FragmentReference;
export type NewActivityStep1_viewer = {|
  +me: ?{|
    +id: string
  |},
  +$fragmentRefs: SelectTemplate_viewer$ref,
  +$refType: NewActivityStep1_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NewActivityStep1_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "me",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "SelectTemplate_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '62aa2d0ce30edc9cfcc80d875ededeb9';
module.exports = node;
