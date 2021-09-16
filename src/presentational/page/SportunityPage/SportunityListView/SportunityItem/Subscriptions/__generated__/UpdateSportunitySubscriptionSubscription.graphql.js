/**
 * @flow
 * @relayHash 5e89136387c74edd7d1eed22541508b6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateSportunitySubscriptionInput = {
  sportunityId?: ?string,
  clientSubscriptionId?: ?string,
};
export type UpdateSportunitySubscriptionSubscriptionVariables = {|
  input: updateSportunitySubscriptionInput,
  sportunityId?: ?string,
|};
export type UpdateSportunitySubscriptionSubscriptionResponse = {|
  +updateSportunitySubscription: ?{|
    +viewer: ?{|
      +sportunity: ?{|
        +participants: ?$ReadOnlyArray<?{|
          +id: string,
          +avatar: ?string,
          +pseudo: string,
        |}>,
        +waiting: ?$ReadOnlyArray<?{|
          +id: string,
          +avatar: ?string,
          +pseudo: string,
        |}>,
        +willing: ?$ReadOnlyArray<?{|
          +id: string,
          +avatar: ?string,
          +pseudo: string,
        |}>,
        +status: ?string,
      |}
    |},
    +sportunity: ?{|
      +participants: ?$ReadOnlyArray<?{|
        +id: string,
        +avatar: ?string,
        +pseudo: string,
      |}>,
      +waiting: ?$ReadOnlyArray<?{|
        +id: string,
        +avatar: ?string,
        +pseudo: string,
      |}>,
      +willing: ?$ReadOnlyArray<?{|
        +id: string,
        +avatar: ?string,
        +pseudo: string,
      |}>,
      +status: ?string,
    |},
  |}
|};
export type UpdateSportunitySubscriptionSubscription = {|
  variables: UpdateSportunitySubscriptionSubscriptionVariables,
  response: UpdateSportunitySubscriptionSubscriptionResponse,
|};
*/


/*
subscription UpdateSportunitySubscriptionSubscription(
  $input: updateSportunitySubscriptionInput!
  $sportunityId: ID
) {
  updateSportunitySubscription(input: $input) {
    viewer {
      sportunity(id: $sportunityId) {
        participants {
          id
          avatar
          pseudo
        }
        waiting {
          id
          avatar
          pseudo
        }
        willing {
          id
          avatar
          pseudo
        }
        status
        id
      }
      id
    }
    sportunity {
      participants {
        id
        avatar
        pseudo
      }
      waiting {
        id
        avatar
        pseudo
      }
      willing {
        id
        avatar
        pseudo
      }
      status
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
    "type": "updateSportunitySubscriptionInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportunityId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateSportunitySubscriptionInput!"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "sportunityId",
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
v4 = [
  v3,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "avatar",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "pseudo",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "participants",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v4
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "waiting",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v4
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "willing",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": true,
  "selections": v4
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v9 = [
  v5,
  v6,
  v7,
  v8
],
v10 = [
  v5,
  v6,
  v7,
  v8,
  v3
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "UpdateSportunitySubscriptionSubscription",
  "id": null,
  "text": "subscription UpdateSportunitySubscriptionSubscription(\n  $input: updateSportunitySubscriptionInput!\n  $sportunityId: ID\n) {\n  updateSportunitySubscription(input: $input) {\n    viewer {\n      sportunity(id: $sportunityId) {\n        participants {\n          id\n          avatar\n          pseudo\n        }\n        waiting {\n          id\n          avatar\n          pseudo\n        }\n        willing {\n          id\n          avatar\n          pseudo\n        }\n        status\n        id\n      }\n      id\n    }\n    sportunity {\n      participants {\n        id\n        avatar\n        pseudo\n      }\n      waiting {\n        id\n        avatar\n        pseudo\n      }\n      willing {\n        id\n        avatar\n        pseudo\n      }\n      status\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateSportunitySubscriptionSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSportunitySubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateSportunitySubscriptionPayload",
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
                "name": "sportunity",
                "storageKey": null,
                "args": v2,
                "concreteType": "Sportunity",
                "plural": false,
                "selections": v9
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
            "selections": v9
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateSportunitySubscriptionSubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateSportunitySubscription",
        "storageKey": null,
        "args": v1,
        "concreteType": "updateSportunitySubscriptionPayload",
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
                "name": "sportunity",
                "storageKey": null,
                "args": v2,
                "concreteType": "Sportunity",
                "plural": false,
                "selections": v10
              },
              v3
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
            "selections": v10
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e71a37742ee50c46b670754359f220b4';
module.exports = node;
