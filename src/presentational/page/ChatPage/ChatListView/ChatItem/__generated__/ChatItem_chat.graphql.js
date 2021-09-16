/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Message_messages$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChatItem_chat$ref: FragmentReference;
export type ChatItem_chat = {|
  +id: string,
  +read: ?boolean,
  +messages: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +created: any,
        +author: ?{|
          +id: string,
          +pseudo: string,
          +avatar: ?string,
        |},
      |}
    |}>,
    +$fragmentRefs: Message_messages$ref,
  |},
  +circle: ?{|
    +id: string,
    +name: ?string,
    +owner: ?{|
      +id: string,
      +pseudo: string,
      +avatar: ?string,
    |},
  |},
  +sportunity: ?{|
    +id: string,
    +title: string,
    +sport: ?{|
      +sport: ?{|
        +logo: string
      |}
    |},
  |},
  +users: ?$ReadOnlyArray<?{|
    +id: string,
    +pseudo: string,
    +avatar: ?string,
  |}>,
  +$refType: ChatItem_chat$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  v0,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "ChatItem_chat",
  "type": "Chat",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "read",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "messages",
      "storageKey": "messages(last:20)",
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 20,
          "type": "Int"
        }
      ],
      "concreteType": "MessageConnection",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Message_messages",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "MessageEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Message",
              "plural": false,
              "selections": [
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "created",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "author",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "User",
                  "plural": false,
                  "selections": v1
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "circle",
      "storageKey": null,
      "args": null,
      "concreteType": "Circle",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "owner",
          "storageKey": null,
          "args": null,
          "concreteType": "User",
          "plural": false,
          "selections": v1
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sportunity",
      "storageKey": null,
      "args": null,
      "concreteType": "Sportunity",
      "plural": false,
      "selections": [
        v0,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "users",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": v1
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f9a03869244dbe1977b475eed2c89131';
module.exports = node;
