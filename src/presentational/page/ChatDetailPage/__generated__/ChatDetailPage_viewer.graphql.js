/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MessagesList_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChatDetailPage_viewer$ref: FragmentReference;
export type ChatDetailPage_viewer = {|
  +me: ?{|
    +id: string
  |},
  +$fragmentRefs: MessagesList_viewer$ref,
  +$refType: ChatDetailPage_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ChatDetailPage_viewer",
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
      "name": "MessagesList_viewer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'cb570f68eb9700bdd9c6064303b33650';
module.exports = node;
