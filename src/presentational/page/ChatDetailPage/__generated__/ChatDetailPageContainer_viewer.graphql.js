/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ChatDetailPage_chat$ref = any;
type ChatDetailPage_viewer$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChatDetailPageContainer_viewer$ref: FragmentReference;
export type ChatDetailPageContainer_viewer = {|
  +chats?: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ChatDetailPage_chat$ref,
      |}
    |}>
  |},
  +$fragmentRefs: ChatDetailPage_viewer$ref,
  +$refType: ChatDetailPageContainer_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ChatDetailPageContainer_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "id",
      "type": "ID",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "queryChat",
      "type": "Boolean!",
      "defaultValue": false
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "ChatDetailPage_viewer",
      "args": null
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "queryChat",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "chats",
          "storageKey": null,
          "args": [
            {
              "kind": "Literal",
              "name": "first",
              "value": 1,
              "type": "Int"
            },
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "id",
              "type": "ID"
            }
          ],
          "concreteType": "ChatConnection",
          "plural": false,
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
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "id",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "FragmentSpread",
                      "name": "ChatDetailPage_chat",
                      "args": null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bfb94ded369bd56af467ccf4cacd9c4c';
module.exports = node;
