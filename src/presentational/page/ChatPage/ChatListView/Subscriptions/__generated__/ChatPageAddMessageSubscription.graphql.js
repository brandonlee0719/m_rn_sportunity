/**
 * @flow
 * @relayHash 0512b78b47808d41a9c8837de6d930d6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Message_messages$ref = any;
export type addMsgSubscriptionInput = {
  chatIds?: ?$ReadOnlyArray<?string>,
  clientSubscriptionId?: ?string,
};
export type ChatPageAddMessageSubscriptionVariables = {|
  input: addMsgSubscriptionInput
|};
export type ChatPageAddMessageSubscriptionResponse = {|
  +addMsgSubscription: ?{|
    +chat: ?{|
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
    |}
  |}
|};
export type ChatPageAddMessageSubscription = {|
  variables: ChatPageAddMessageSubscriptionVariables,
  response: ChatPageAddMessageSubscriptionResponse,
|};
*/


/*
subscription ChatPageAddMessageSubscription(
  $input: addMsgSubscriptionInput!
) {
  addMsgSubscription(input: $input) {
    chat {
      id
      read
      messages(last: 20) {
        ...Message_messages
        edges {
          node {
            id
            created
            author {
              id
              pseudo
              avatar
            }
          }
        }
      }
    }
  }
}

fragment Message_messages on MessageConnection {
  edges {
    node {
      id
      text
      author {
        id
        firstName
        lastName
        pseudo
      }
      created
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "addMsgSubscriptionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "addMsgSubscriptionInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
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
v4 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 20,
    "type": "Int"
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "created",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "ChatPageAddMessageSubscription",
  "id": null,
  "text": "subscription ChatPageAddMessageSubscription(\n  $input: addMsgSubscriptionInput!\n) {\n  addMsgSubscription(input: $input) {\n    chat {\n      id\n      read\n      messages(last: 20) {\n        ...Message_messages\n        edges {\n          node {\n            id\n            created\n            author {\n              id\n              pseudo\n              avatar\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment Message_messages on MessageConnection {\n  edges {\n    node {\n      id\n      text\n      author {\n        id\n        firstName\n        lastName\n        pseudo\n      }\n      created\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ChatPageAddMessageSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addMsgSubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "addMsgSubscriptionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": null,
            "concreteType": "Chat",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "messages",
                "storageKey": "messages(last:20)",
                "args": v4,
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
                          v2,
                          v5,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "author",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v2,
                              v6,
                              v7
                            ]
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
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ChatPageAddMessageSubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "addMsgSubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "addMsgSubscriptionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": null,
            "concreteType": "Chat",
            "plural": false,
            "selections": [
              v2,
              v3,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "messages",
                "storageKey": "messages(last:20)",
                "args": v4,
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
                          v2,
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
                              v2,
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
                              v6,
                              v7
                            ]
                          },
                          v5
                        ]
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
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd879c13b5a3810767f665d81553c4296';
module.exports = node;
