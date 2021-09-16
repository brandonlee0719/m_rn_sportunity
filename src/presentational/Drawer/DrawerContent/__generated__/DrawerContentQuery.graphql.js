/**
 * @flow
 * @relayHash 437fb888b290b17eb41bf77e7a58f2d6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DrawerContent_query$ref = any;
export type DrawerContentQueryVariables = {||};
export type DrawerContentQueryResponse = {|
  +$fragmentRefs: DrawerContent_query$ref
|};
export type DrawerContentQuery = {|
  variables: DrawerContentQueryVariables,
  response: DrawerContentQueryResponse,
|};
*/


/*
query DrawerContentQuery {
  ...DrawerContent_query
}

fragment DrawerContent_query on Query {
  viewer {
    me {
      id
      mangoId
      profileType
      isProfileComplete
      birthday
      numberOfFormsToFill
      numberOfPaymentModelsToPay
      ...DrawerWalletContainer_me
      ...DrawerTeamsContainer_me
      ...DrawerNotificationContainer_user
      ...DrawerChatContainer_user
      ...header_me
    }
    ...DrawerTeamsContainer_viewer
    id
  }
}

fragment DrawerWalletContainer_me on User {
  id
  isProfileComplete
}

fragment DrawerTeamsContainer_me on User {
  id
}

fragment DrawerNotificationContainer_user on User {
  id
  numberOfUnreadNotifications
  numberOfFormsToFill
  numberOfPaymentModelsToPay
}

fragment DrawerChatContainer_user on User {
  id
}

fragment header_me on User {
  id
  pseudo
  avatar
}

fragment DrawerTeamsContainer_viewer on Viewer {
  me {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DrawerContentQuery",
  "id": null,
  "text": "query DrawerContentQuery {\n  ...DrawerContent_query\n}\n\nfragment DrawerContent_query on Query {\n  viewer {\n    me {\n      id\n      mangoId\n      profileType\n      isProfileComplete\n      birthday\n      numberOfFormsToFill\n      numberOfPaymentModelsToPay\n      ...DrawerWalletContainer_me\n      ...DrawerTeamsContainer_me\n      ...DrawerNotificationContainer_user\n      ...DrawerChatContainer_user\n      ...header_me\n    }\n    ...DrawerTeamsContainer_viewer\n    id\n  }\n}\n\nfragment DrawerWalletContainer_me on User {\n  id\n  isProfileComplete\n}\n\nfragment DrawerTeamsContainer_me on User {\n  id\n}\n\nfragment DrawerNotificationContainer_user on User {\n  id\n  numberOfUnreadNotifications\n  numberOfFormsToFill\n  numberOfPaymentModelsToPay\n}\n\nfragment DrawerChatContainer_user on User {\n  id\n}\n\nfragment header_me on User {\n  id\n  pseudo\n  avatar\n}\n\nfragment DrawerTeamsContainer_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DrawerContentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "DrawerContent_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DrawerContentQuery",
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
                "name": "profileType",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isProfileComplete",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "birthday",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "numberOfUnreadNotifications",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "pseudo",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "avatar",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v0
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4b8e20e8c00b48734ef9d0ff91c040a2';
module.exports = node;
