/**
 * @flow
 * @relayHash 2ef67176966689e5165de7adf87937a9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventDetailChat_viewer$ref = any;
export type EventDetailChatQueryVariables = {|
  sportunityId?: ?string,
  sportunityChatId?: ?string,
|};
export type EventDetailChatQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EventDetailChat_viewer$ref
  |}
|};
export type EventDetailChatQuery = {|
  variables: EventDetailChatQueryVariables,
  response: EventDetailChatQueryResponse,
|};
*/


/*
query EventDetailChatQuery(
  $sportunityId: ID
  $sportunityChatId: String
) {
  viewer {
    ...EventDetailChat_viewer_18ZcVo
    id
  }
}

fragment EventDetailChat_viewer_18ZcVo on Viewer {
  me {
    id
  }
  sportunity(id: $sportunityId) {
    id
    organizers {
      isAdmin
      organizer {
        id
      }
      permissions {
        detailsAccess {
          view
          edit
        }
        chatAccess {
          view
          edit
        }
        memberAccess {
          view
          edit
        }
        carPoolingAccess {
          view
          edit
        }
        imageAccess {
          view
          edit
        }
        compositionAccess {
          view
          edit
        }
      }
      id
    }
  }
  chat(sportunityId: $sportunityChatId) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityChatId",
    "type": "String",
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
v2 = [
  v1
],
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "view",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "edit",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "EventDetailChatQuery",
  "id": null,
  "text": "query EventDetailChatQuery(\n  $sportunityId: ID\n  $sportunityChatId: String\n) {\n  viewer {\n    ...EventDetailChat_viewer_18ZcVo\n    id\n  }\n}\n\nfragment EventDetailChat_viewer_18ZcVo on Viewer {\n  me {\n    id\n  }\n  sportunity(id: $sportunityId) {\n    id\n    organizers {\n      isAdmin\n      organizer {\n        id\n      }\n      permissions {\n        detailsAccess {\n          view\n          edit\n        }\n        chatAccess {\n          view\n          edit\n        }\n        memberAccess {\n          view\n          edit\n        }\n        carPoolingAccess {\n          view\n          edit\n        }\n        imageAccess {\n          view\n          edit\n        }\n        compositionAccess {\n          view\n          edit\n        }\n      }\n      id\n    }\n  }\n  chat(sportunityId: $sportunityChatId) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventDetailChatQuery",
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
            "name": "EventDetailChat_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "sportunityChatId",
                "variableName": "sportunityChatId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportunityId",
                "variableName": "sportunityId",
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
    "name": "EventDetailChatQuery",
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
            "selections": v2
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "sportunityId",
                "type": "ID"
              }
            ],
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "organizers",
                "storageKey": null,
                "args": null,
                "concreteType": "Organizer",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "isAdmin",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "organizer",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": v2
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "permissions",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "coOrganizersPermissions",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "detailsAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersDetailsAccess",
                        "plural": false,
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "chatAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersChatAccess",
                        "plural": false,
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "memberAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersMemberAccess",
                        "plural": false,
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "carPoolingAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersCarPoolingAccess",
                        "plural": false,
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "imageAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersImageAccess",
                        "plural": false,
                        "selections": v3
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "compositionAccess",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "coOrganizersCompositionAccess",
                        "plural": false,
                        "selections": v3
                      }
                    ]
                  },
                  v1
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "chat",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "sportunityId",
                "variableName": "sportunityChatId",
                "type": "String"
              }
            ],
            "concreteType": "Chat",
            "plural": false,
            "selections": v2
          },
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '584cf039e5a96738e966fd9f32ea3b24';
module.exports = node;
