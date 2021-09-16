/**
 * @flow
 * @relayHash 5c8e55ee4fee4c5efd3c7efea996998b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type addMsgInput = {
  chatId?: ?string,
  message?: ?MessageInput,
  clientMutationId?: ?string,
};
export type MessageInput = {
  text: string,
  author: string,
};
export type AddMessageMutationVariables = {|
  input: addMsgInput
|};
export type AddMessageMutationResponse = {|
  +addMsg: ?{|
    +clientMutationId: ?string,
    +edge: ?{|
      +node: ?{|
        +read: ?boolean,
        +messageCount: ?number,
        +messages: ?{|
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
          |}>
        |},
      |}
    |},
  |}
|};
export type AddMessageMutation = {|
  variables: AddMessageMutationVariables,
  response: AddMessageMutationResponse,
|};
*/


/*
mutation AddMessageMutation(
  $input: addMsgInput!
) {
  addMsg(input: $input) {
    clientMutationId
    edge {
      node {
        read
        messageCount
        messages(last: 20) {
          edges {
            node {
              id
              text
              author {
                id
                firstName
                lastName
                pseudo
                avatar
              }
              created
            }
          }
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "addMsgInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "addMsgInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "read",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "messageCount",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
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
            v5,
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
                v5,
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
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddMessageMutation",
  "id": null,
  "text": "mutation AddMessageMutation(\n  $input: addMsgInput!\n) {\n  addMsg(input: $input) {\n    clientMutationId\n    edge {\n      node {\n        read\n        messageCount\n        messages(last: 20) {\n          edges {\n            node {\n              id\n              text\n              author {\n                id\n                firstName\n                lastName\n                pseudo\n                avatar\n              }\n              created\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddMessageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addMsg",
        "storageKey": null,
        "args": v1,
        "concreteType": "addMsgPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "ChatEdge",
            "plural": false,
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
                  v3,
                  v4,
                  v6
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AddMessageMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addMsg",
        "storageKey": null,
        "args": v1,
        "concreteType": "addMsgPayload",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "ChatEdge",
            "plural": false,
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
                  v3,
                  v4,
                  v6,
                  v5
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c9a49bd129d6b66e3e2303f31d3f6a0';
module.exports = node;
