/**
 * @flow
 * @relayHash 78028855542579a97978548cb9500dae
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type readNotificationsInput = {
  clientMutationId?: ?string
};
export type ReadNotificationsMutationVariables = {|
  input: readNotificationsInput
|};
export type ReadNotificationsMutationResponse = {|
  +readNotifications: ?{|
    +viewer: ?{|
      +me: ?{|
        +numberOfUnreadNotifications: ?number
      |}
    |},
    +clientMutationId: ?string,
  |}
|};
export type ReadNotificationsMutation = {|
  variables: ReadNotificationsMutationVariables,
  response: ReadNotificationsMutationResponse,
|};
*/


/*
mutation ReadNotificationsMutation(
  $input: readNotificationsInput!
) {
  readNotifications(input: $input) {
    viewer {
      me {
        numberOfUnreadNotifications
        id
      }
      id
    }
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "readNotificationsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "readNotificationsInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "numberOfUnreadNotifications",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "clientMutationId",
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
  "name": "ReadNotificationsMutation",
  "id": null,
  "text": "mutation ReadNotificationsMutation(\n  $input: readNotificationsInput!\n) {\n  readNotifications(input: $input) {\n    viewer {\n      me {\n        numberOfUnreadNotifications\n        id\n      }\n      id\n    }\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ReadNotificationsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "readNotifications",
        "storageKey": null,
        "args": v1,
        "concreteType": "readNotificationsPayload",
        "plural": false,
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
                  v2
                ]
              }
            ]
          },
          v3
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ReadNotificationsMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "readNotifications",
        "storageKey": null,
        "args": v1,
        "concreteType": "readNotificationsPayload",
        "plural": false,
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
                  v2,
                  v4
                ]
              },
              v4
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
(node/*: any*/).hash = '4f828756ae39d825c967dabe229f45ba';
module.exports = node;
