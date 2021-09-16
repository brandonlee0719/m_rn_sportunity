/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ChatItem_chat$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChatListView_chats$ref: FragmentReference;
export type ChatListView_chats = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +$fragmentRefs: ChatItem_chat$ref
    |}
  |}>,
  +$refType: ChatListView_chats$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ChatListView_chats",
  "type": "ChatConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "ChatEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Chat",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "ChatItem_chat",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ab9b999585305458ed000d531cb6e9ab';
module.exports = node;
