/**
 * @flow
 * @relayHash 9d1cabe1172457c557886baaebb5fa83
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type readNotificationInput = {
  notificationId: string,
  clientMutationId?: ?string,
};
export type ReadNotificationMutationVariables = {|
  input: readNotificationInput
|};
export type ReadNotificationMutationResponse = {|
  +readNotification: ?{|
    +clientMutationId: ?string,
    +viewer: ?{|
      +me: ?{|
        +numberOfUnreadNotifications: ?number
      |}
    |},
  |}
|};
export type ReadNotificationMutation = {|
  variables: ReadNotificationMutationVariables,
  response: ReadNotificationMutationResponse,
|};
*/


/*
mutation ReadNotificationMutation(
  $input: readNotificationInput!
) {
  readNotification(input: $input) {
    clientMutationId
    viewer {
      me {
        numberOfUnreadNotifications
        id
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "readNotificationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "readNotificationInput!"
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
  "name": "numberOfUnreadNotifications",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ReadNotificationMutation",
  "id": null,
  "text": "mutation ReadNotificationMutation(\n  $input: readNotificationInput!\n) {\n  readNotification(input: $input) {\n    clientMutationId\n    viewer {\n      me {\n        numberOfUnreadNotifications\n        id\n      }\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReadNotificationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "readNotification",
        "storageKey": null,
        "args": v1,
        "concreteType": "readNotificationPayload",
        "plural": false,
        "selections": [
          v2,
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
                  v3
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
    "name": "ReadNotificationMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "readNotification",
        "storageKey": null,
        "args": v1,
        "concreteType": "readNotificationPayload",
        "plural": false,
        "selections": [
          v2,
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
                  v3,
                  v4
                ]
              },
              v4
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f41b7dbfc2ebf2d0f6cd2be6ba8213c';
module.exports = node;
