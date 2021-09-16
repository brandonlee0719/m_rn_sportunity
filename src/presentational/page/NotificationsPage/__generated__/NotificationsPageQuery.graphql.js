/**
 * @flow
 * @relayHash ffed65506f7898f7bf2d75f43d0c825f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NotificationsPage_query$ref = any;
export type NotificationsPageQueryVariables = {||};
export type NotificationsPageQueryResponse = {|
  +$fragmentRefs: NotificationsPage_query$ref
|};
export type NotificationsPageQuery = {|
  variables: NotificationsPageQueryVariables,
  response: NotificationsPageQueryResponse,
|};
*/


/*
query NotificationsPageQuery {
  ...NotificationsPage_query
}

fragment NotificationsPage_query on Query {
  viewer {
    id
    me {
      id
      mangoId
      numberOfUnreadNotifications
      notifications(first: 20) {
        edges {
          node {
            id
            __typename
          }
          cursor
        }
        ...NotificationsListView_notifications
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
}

fragment NotificationsListView_notifications on NotificationConnection {
  edges {
    node {
      ...NotificationItemView_notification
      id
    }
  }
}

fragment NotificationItemView_notification on Notification {
  id
  title
  text
  link
  created
  image
  notificationType
  isRead
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NotificationsPageQuery",
  "id": null,
  "text": "query NotificationsPageQuery {\n  ...NotificationsPage_query\n}\n\nfragment NotificationsPage_query on Query {\n  viewer {\n    id\n    me {\n      id\n      mangoId\n      numberOfUnreadNotifications\n      notifications(first: 20) {\n        edges {\n          node {\n            id\n            __typename\n          }\n          cursor\n        }\n        ...NotificationsListView_notifications\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n  }\n}\n\nfragment NotificationsListView_notifications on NotificationConnection {\n  edges {\n    node {\n      ...NotificationItemView_notification\n      id\n    }\n  }\n}\n\nfragment NotificationItemView_notification on Notification {\n  id\n  title\n  text\n  link\n  created\n  image\n  notificationType\n  isRead\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NotificationsPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "NotificationsPage_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NotificationsPageQuery",
    "argumentDefinitions": [],
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
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "mangoId",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "numberOfUnreadNotifications",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "notifications",
                "storageKey": "notifications(first:20)",
                "args": v1,
                "concreteType": "NotificationConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "NotificationEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Notification",
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
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "text",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "link",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "created",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "image",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "notificationType",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "isRead",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "__typename",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
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
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "notifications",
                "args": v1,
                "handle": "connection",
                "key": "NotificationsPage_notifications",
                "filters": null
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
(node/*: any*/).hash = 'daa0f68f71f03785910e11295de809b4';
module.exports = node;
