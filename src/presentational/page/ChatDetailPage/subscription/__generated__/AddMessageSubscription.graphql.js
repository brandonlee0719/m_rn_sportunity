/**
 * @flow
 * @relayHash f4d451f9ed30b0bb32518ea439730944
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChatDetailPage_chat$ref = any;
export type addMsgSubscriptionInput = {
  chatIds?: ?$ReadOnlyArray<?string>,
  clientSubscriptionId?: ?string,
};
export type AddMessageSubscriptionVariables = {|
  input: addMsgSubscriptionInput
|};
export type AddMessageSubscriptionResponse = {|
  +addMsgSubscription: ?{|
    +viewer: ?{|
      +id: string
    |},
    +chat: ?{|
      +$fragmentRefs: ChatDetailPage_chat$ref
    |},
  |}
|};
export type AddMessageSubscription = {|
  variables: AddMessageSubscriptionVariables,
  response: AddMessageSubscriptionResponse,
|};
*/


/*
subscription AddMessageSubscription(
  $input: addMsgSubscriptionInput!
) {
  addMsgSubscription(input: $input) {
    viewer {
      id
    }
    chat {
      ...ChatDetailPage_chat
      id
    }
  }
}

fragment ChatDetailPage_chat on Chat {
  id
  users {
    id
    pseudo
    ...UserItem_user
  }
  sportunity {
    id
    title
  }
  circle {
    id
    name
  }
  read
  messages(last: 20) {
    pageInfo {
      hasPreviousPage
    }
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
}

fragment UserItem_user on User {
  id
  pseudo
  avatar
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
  "kind": "LinkedField",
  "alias": null,
  "name": "viewer",
  "storageKey": null,
  "args": null,
  "concreteType": "Viewer",
  "plural": false,
  "selections": [
    v2
  ]
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "AddMessageSubscription",
  "id": null,
  "text": "subscription AddMessageSubscription(\n  $input: addMsgSubscriptionInput!\n) {\n  addMsgSubscription(input: $input) {\n    viewer {\n      id\n    }\n    chat {\n      ...ChatDetailPage_chat\n      id\n    }\n  }\n}\n\nfragment ChatDetailPage_chat on Chat {\n  id\n  users {\n    id\n    pseudo\n    ...UserItem_user\n  }\n  sportunity {\n    id\n    title\n  }\n  circle {\n    id\n    name\n  }\n  read\n  messages(last: 20) {\n    pageInfo {\n      hasPreviousPage\n    }\n    edges {\n      node {\n        id\n        text\n        author {\n          id\n          firstName\n          lastName\n          pseudo\n          avatar\n        }\n        created\n      }\n    }\n  }\n}\n\nfragment UserItem_user on User {\n  id\n  pseudo\n  avatar\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddMessageSubscription",
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
          v3,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": null,
            "concreteType": "Chat",
            "plural": false,
            "selections": [
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
  },
  "operation": {
    "kind": "Operation",
    "name": "AddMessageSubscription",
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
          v3,
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "users",
                "storageKey": null,
                "args": null,
                "concreteType": "User",
                "plural": true,
                "selections": [
                  v2,
                  v4,
                  v5
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
                  v2,
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
                  v2,
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
                              v4,
                              v5
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
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1bbb057e1db6af899e5071fd19b0f74b';
module.exports = node;
