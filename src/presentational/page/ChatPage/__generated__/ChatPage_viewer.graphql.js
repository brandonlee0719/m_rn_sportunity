/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ChatListView_chats$ref = any;
type ChatListView_me$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChatPage_viewer$ref: FragmentReference;
export type ChatPage_viewer = {|
  +me: ?{|
    +chats: ?{|
      +pageInfo: {|
        +hasNextPage: boolean,
        +hasPreviousPage: boolean,
      |},
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +read: ?boolean,
        |}
      |}>,
      +$fragmentRefs: ChatListView_chats$ref,
    |},
    +$fragmentRefs: ChatListView_me$ref,
  |},
  +$refType: ChatPage_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ChatPage_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 8
    }
  ],
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
          "kind": "LinkedField",
          "alias": null,
          "name": "chats",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "first",
              "variableName": "count",
              "type": "Int"
            }
          ],
          "concreteType": "ChatConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "pageInfo",
              "storageKey": null,
              "args": null,
              "concreteType": "PageInfo",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "hasNextPage",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "hasPreviousPage",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "FragmentSpread",
              "name": "ChatListView_chats",
              "args": null
            },
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
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "id",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "read",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "ChatListView_me",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b546e6fff2d8dd498b63eec2aebccfcf';
module.exports = node;
