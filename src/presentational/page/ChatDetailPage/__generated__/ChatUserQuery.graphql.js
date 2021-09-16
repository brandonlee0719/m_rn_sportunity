/**
 * @flow
 * @relayHash 6c32dd5d66b5d94a2696d32b7d17a03e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ChatDetailPage_chat$ref = any;
type ChatDetailPage_viewer$ref = any;
export type ChatUserQueryVariables = {|
  id?: ?string
|};
export type ChatUserQueryResponse = {|
  +viewer: ?{|
    +chat: ?{|
      +id: string,
      +$fragmentRefs: ChatDetailPage_chat$ref,
    |},
    +$fragmentRefs: ChatDetailPage_viewer$ref,
  |}
|};
export type ChatUserQuery = {|
  variables: ChatUserQueryVariables,
  response: ChatUserQueryResponse,
|};
*/


/*
query ChatUserQuery(
  $id: String
) {
  viewer {
    ...ChatDetailPage_viewer
    chat(userId: $id) {
      id
      ...ChatDetailPage_chat
    }
    id
  }
}

fragment ChatDetailPage_viewer on Viewer {
  me {
    id
  }
  ...MessagesList_viewer
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
    "name": "id",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "id",
    "type": "String"
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
  "name": "pseudo",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatar",
  "args": null,
  "storageKey": null
},
v5 = [
  v2,
  v3,
  v4
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ChatUserQuery",
  "id": null,
  "text": "query ChatUserQuery(\n  $id: String\n) {\n  viewer {\n    ...ChatDetailPage_viewer\n    chat(userId: $id) {\n      id\n      ...ChatDetailPage_chat\n    }\n    id\n  }\n}\n\nfragment ChatDetailPage_viewer on Viewer {\n  me {\n    id\n  }\n  ...MessagesList_viewer\n}\n\nfragment ChatDetailPage_chat on Chat {\n  id\n  users {\n    id\n    pseudo\n    ...UserItem_user\n  }\n  sportunity {\n    id\n    title\n  }\n  circle {\n    id\n    name\n  }\n  read\n  messages(last: 20) {\n    pageInfo {\n      hasPreviousPage\n    }\n    edges {\n      node {\n        id\n        text\n        author {\n          id\n          firstName\n          lastName\n          pseudo\n          avatar\n        }\n        created\n      }\n    }\n  }\n}\n\nfragment UserItem_user on User {\n  id\n  pseudo\n  avatar\n}\n\nfragment MessagesList_viewer on Viewer {\n  me {\n    id\n    pseudo\n    avatar\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ChatUserQuery",
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
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": v1,
            "concreteType": "Chat",
            "plural": false,
            "selections": [
              v2,
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
    "name": "ChatUserQuery",
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
            "selections": v5
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": v1,
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
                "selections": v5
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
                              v3,
                              v4
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
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'adce50ff478ee087a9a5d1edc0c2bcb4';
module.exports = node;
