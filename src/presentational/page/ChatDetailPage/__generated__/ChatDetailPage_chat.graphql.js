/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type UserItem_user$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ChatDetailPage_chat$ref: FragmentReference;
export type ChatDetailPage_chat = {|
  +id: string,
  +users: ?$ReadOnlyArray<?{|
    +id: string,
    +pseudo: string,
    +$fragmentRefs: UserItem_user$ref,
  |}>,
  +sportunity: ?{|
    +id: string,
    +title: string,
  |},
  +circle: ?{|
    +id: string,
    +name: ?string,
  |},
  +read: ?boolean,
  +messages: ?{|
    +pageInfo: {|
      +hasPreviousPage: boolean
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +text: string,
        +author: ?{|
          +id: string,
          +firstName: ?string,
          +lastName: ?string,
          +pseudo: string,
          +avatar: ?string,
        |},
        +created: any,
      |}
    |}>,
  |},
  +$refType: ChatDetailPage_chat$ref,
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
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ChatDetailPage_chat",
  "type": "Chat",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "messageCount",
      "type": "Int",
      "defaultValue": 20
    }
  ],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "users",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": true,
      "selections": [
        v0,
        v1,
        {
          "kind": "FragmentSpread",
          "name": "UserItem_user",
          "args": null
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
        }
      ]
    },
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
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "last",
          "variableName": "messageCount",
          "type": "Int"
        }
      ],
      "concreteType": "MessageConnection",
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
              "name": "hasPreviousPage",
              "args": null,
              "storageKey": null
            }
          ]
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
                  "name": "text",
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
                  "selections": [
                    v0,
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "firstName",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "lastName",
                      "args": null,
                      "storageKey": null
                    },
                    v1,
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "avatar",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "created",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b34570c99c02f68d85093c598822e8c2';
module.exports = node;
