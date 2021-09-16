/**
 * @flow
 * @relayHash 5eb5687550ace6d6bc874d41b53d0dbf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChatDetailPage_chat$ref = any;
type ChatDetailPage_viewer$ref = any;
export type ChatDetailPageRefetchQueryVariables = {|
  messageCount?: ?number,
  id?: ?string,
|};
export type ChatDetailPageRefetchQueryResponse = {|
  +viewer: ?{|
    +chats: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +$fragmentRefs: ChatDetailPage_chat$ref
        |}
      |}>
    |},
    +$fragmentRefs: ChatDetailPage_viewer$ref,
  |}
|};
export type ChatDetailPageRefetchQuery = {|
  variables: ChatDetailPageRefetchQueryVariables,
  response: ChatDetailPageRefetchQueryResponse,
|};
*/


/*
query ChatDetailPageRefetchQuery(
  $messageCount: Int
  $id: ID
) {
  viewer {
    ...ChatDetailPage_viewer_2X6arK
    chats(id: $id, first: 1) {
      edges {
        node {
          ...ChatDetailPage_chat_1uhm0r
          id
        }
      }
    }
    id
  }
}

fragment ChatDetailPage_viewer_2X6arK on Viewer {
  me {
    id
  }
  ...MessagesList_viewer
}

fragment ChatDetailPage_chat_1uhm0r on Chat {
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
  messages(last: $messageCount) {
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

fragment MessagesList_viewer on Viewer {
  me {
    id
    pseudo
    avatar
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "messageCount",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "messageCount",
  "variableName": "messageCount",
  "type": null
},
v2 = [
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
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
},
v6 = [
  v3,
  v4,
  v5
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ChatDetailPageRefetchQuery",
  "id": null,
  "text": "query ChatDetailPageRefetchQuery(\n  $messageCount: Int\n  $id: ID\n) {\n  viewer {\n    ...ChatDetailPage_viewer_2X6arK\n    chats(id: $id, first: 1) {\n      edges {\n        node {\n          ...ChatDetailPage_chat_1uhm0r\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment ChatDetailPage_viewer_2X6arK on Viewer {\n  me {\n    id\n  }\n  ...MessagesList_viewer\n}\n\nfragment ChatDetailPage_chat_1uhm0r on Chat {\n  id\n  users {\n    id\n    pseudo\n    ...UserItem_user\n  }\n  sportunity {\n    id\n    title\n  }\n  circle {\n    id\n    name\n  }\n  read\n  messages(last: $messageCount) {\n    pageInfo {\n      hasPreviousPage\n    }\n    edges {\n      node {\n        id\n        text\n        author {\n          id\n          firstName\n          lastName\n          pseudo\n          avatar\n        }\n        created\n      }\n    }\n  }\n}\n\nfragment UserItem_user on User {\n  id\n  pseudo\n  avatar\n}\n\nfragment MessagesList_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ChatDetailPageRefetchQuery",
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
            "name": "ChatDetailPage_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "id",
                "type": null
              },
              v1
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chats",
            "storageKey": null,
            "args": v2,
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
                        "kind": "FragmentSpread",
                        "name": "ChatDetailPage_chat",
                        "args": [
                          v1
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
    "name": "ChatDetailPageRefetchQuery",
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
            "selections": v6
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chats",
            "storageKey": null,
            "args": v2,
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
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "users",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "User",
                        "plural": true,
                        "selections": v6
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
                          v3,
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
                          v3,
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
                                  v3,
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
                                      v3,
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
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '035da5b34f867bb67ad54f1f08a23667';
module.exports = node;
