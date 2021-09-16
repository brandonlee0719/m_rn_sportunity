/**
 * @flow
 * @relayHash 3c06ca5bdaec9af4a905876152ce1a1e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChatPage_viewer$ref = any;
export type ChatPageRefetchQueryVariables = {|
  count?: ?number
|};
export type ChatPageRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: ChatPage_viewer$ref
  |}
|};
export type ChatPageRefetchQuery = {|
  variables: ChatPageRefetchQueryVariables,
  response: ChatPageRefetchQueryResponse,
|};
*/


/*
query ChatPageRefetchQuery(
  $count: Int
) {
  viewer {
    ...ChatPage_viewer_yu5n1
    id
  }
}

fragment ChatPage_viewer_yu5n1 on Viewer {
  me {
    chats(first: $count) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      ...ChatListView_chats
      edges {
        node {
          id
          read
        }
      }
    }
    ...ChatListView_me
    id
  }
}

fragment ChatListView_chats on ChatConnection {
  edges {
    node {
      ...ChatItem_chat
      id
    }
  }
}

fragment ChatListView_me on User {
  id
  unreadChats
}

fragment ChatItem_chat on Chat {
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
  circle {
    id
    name
    owner {
      id
      pseudo
      avatar
    }
  }
  sportunity {
    id
    title
    sport {
      sport {
        logo
        id
      }
    }
  }
  users {
    id
    pseudo
    avatar
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
    "name": "count",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v4 = [
  v1,
  v2,
  v3
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ChatPageRefetchQuery",
  "id": null,
  "text": "query ChatPageRefetchQuery(\n  $count: Int\n) {\n  viewer {\n    ...ChatPage_viewer_yu5n1\n    id\n  }\n}\n\nfragment ChatPage_viewer_yu5n1 on Viewer {\n  me {\n    chats(first: $count) {\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n      }\n      ...ChatListView_chats\n      edges {\n        node {\n          id\n          read\n        }\n      }\n    }\n    ...ChatListView_me\n    id\n  }\n}\n\nfragment ChatListView_chats on ChatConnection {\n  edges {\n    node {\n      ...ChatItem_chat\n      id\n    }\n  }\n}\n\nfragment ChatListView_me on User {\n  id\n  unreadChats\n}\n\nfragment ChatItem_chat on Chat {\n  id\n  read\n  messages(last: 20) {\n    ...Message_messages\n    edges {\n      node {\n        id\n        created\n        author {\n          id\n          pseudo\n          avatar\n        }\n      }\n    }\n  }\n  circle {\n    id\n    name\n    owner {\n      id\n      pseudo\n      avatar\n    }\n  }\n  sportunity {\n    id\n    title\n    sport {\n      sport {\n        logo\n        id\n      }\n    }\n  }\n  users {\n    id\n    pseudo\n    avatar\n  }\n}\n\nfragment Message_messages on MessageConnection {\n  edges {\n    node {\n      id\n      text\n      author {\n        id\n        firstName\n        lastName\n        pseudo\n      }\n      created\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ChatPageRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ChatPage_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ChatPageRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
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
                          v1,
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
                                      v1,
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
                                          v1,
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
                                          v2,
                                          v3
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
                              v1,
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
                                "selections": v4
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
                              v1,
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
                                      },
                                      v1
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
                            "selections": v4
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "unreadChats",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fb20b5a0b3f665e176c35a67c384480e';
module.exports = node;
