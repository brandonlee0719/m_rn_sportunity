/**
 * @flow
 * @relayHash 85ac75f26434b6f0636d30d3faad52d8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DrawerNotificationContainer_user$ref = any;
export type unreadNotificationsSubscriptionInput = {
  clientSubscriptionId?: ?string
};
export type unreadNotificationSubscriptionVariables = {|
  input: unreadNotificationsSubscriptionInput
|};
export type unreadNotificationSubscriptionResponse = {|
  +unreadNotificationsSubscription: ?{|
    +user: ?{|
      +unreadChats: ?number,
      +numberOfUnreadNotifications: ?number,
      +$fragmentRefs: DrawerNotificationContainer_user$ref,
    |}
  |}
|};
export type unreadNotificationSubscription = {|
  variables: unreadNotificationSubscriptionVariables,
  response: unreadNotificationSubscriptionResponse,
|};
*/


/*
subscription unreadNotificationSubscription(
  $input: unreadNotificationsSubscriptionInput!
) {
  unreadNotificationsSubscription(input: $input) {
    user {
      unreadChats
      numberOfUnreadNotifications
      ...DrawerNotificationContainer_user
      id
    }
  }
}

fragment DrawerNotificationContainer_user on User {
  id
  numberOfUnreadNotifications
  numberOfFormsToFill
  numberOfPaymentModelsToPay
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "unreadNotificationsSubscriptionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "unreadNotificationsSubscriptionInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unreadChats",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numberOfUnreadNotifications",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "unreadNotificationSubscription",
  "id": null,
  "text": "subscription unreadNotificationSubscription(\n  $input: unreadNotificationsSubscriptionInput!\n) {\n  unreadNotificationsSubscription(input: $input) {\n    user {\n      unreadChats\n      numberOfUnreadNotifications\n      ...DrawerNotificationContainer_user\n      id\n    }\n  }\n}\n\nfragment DrawerNotificationContainer_user on User {\n  id\n  numberOfUnreadNotifications\n  numberOfFormsToFill\n  numberOfPaymentModelsToPay\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "unreadNotificationSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unreadNotificationsSubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "unreadNotificationsSubscriptionPayload",
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
              v3,
              {
                "kind": "FragmentSpread",
                "name": "DrawerNotificationContainer_user",
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
    "name": "unreadNotificationSubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "unreadNotificationsSubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "unreadNotificationsSubscriptionPayload",
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
              v3,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "numberOfFormsToFill",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "numberOfPaymentModelsToPay",
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
(node/*: any*/).hash = '8854e5827d61ceae01bcdeefa191068f';
module.exports = node;
