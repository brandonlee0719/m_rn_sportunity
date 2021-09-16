/**
 * @flow
 * @relayHash c99de886bcf1a3cab7086c90bb277114
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DrawerChatContainer_user$ref = any;
export type unreadChatsSubscriptionInput = {
  clientSubscriptionId?: ?string
};
export type unreadChatsSubscriptionVariables = {|
  input: unreadChatsSubscriptionInput
|};
export type unreadChatsSubscriptionResponse = {|
  +unreadChatsSubscription: ?{|
    +user: ?{|
      +unreadChats: ?number,
      +$fragmentRefs: DrawerChatContainer_user$ref,
    |}
  |}
|};
export type unreadChatsSubscription = {|
  variables: unreadChatsSubscriptionVariables,
  response: unreadChatsSubscriptionResponse,
|};
*/


/*
subscription unreadChatsSubscription(
  $input: unreadChatsSubscriptionInput!
) {
  unreadChatsSubscription(input: $input) {
    user {
      unreadChats
      ...DrawerChatContainer_user
      id
    }
  }
}

fragment DrawerChatContainer_user on User {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "unreadChatsSubscriptionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "unreadChatsSubscriptionInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unreadChats",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "unreadChatsSubscription",
  "id": null,
  "text": "subscription unreadChatsSubscription(\n  $input: unreadChatsSubscriptionInput!\n) {\n  unreadChatsSubscription(input: $input) {\n    user {\n      unreadChats\n      ...DrawerChatContainer_user\n      id\n    }\n  }\n}\n\nfragment DrawerChatContainer_user on User {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "unreadChatsSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unreadChatsSubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "unreadChatsSubscriptionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "FragmentSpread",
                "name": "DrawerChatContainer_user",
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
    "name": "unreadChatsSubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unreadChatsSubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "unreadChatsSubscriptionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
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
(node/*: any*/).hash = '2d0ae71e3ad167276a9da7a029baa9a9';
module.exports = node;
