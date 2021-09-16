/**
 * @flow
 * @relayHash 6e92058e4a93d2a6fee63fb20ae1f9bf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type InvitedCircleDetails_viewer$ref = any;
export type InvitedCircleDetailsRefetchQueryVariables = {|
  circleId?: ?string,
  query: boolean,
|};
export type InvitedCircleDetailsRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: InvitedCircleDetails_viewer$ref
  |}
|};
export type InvitedCircleDetailsRefetchQuery = {|
  variables: InvitedCircleDetailsRefetchQueryVariables,
  response: InvitedCircleDetailsRefetchQueryResponse,
|};
*/


/*
query InvitedCircleDetailsRefetchQuery(
  $circleId: ID
  $query: Boolean!
) {
  viewer {
    ...InvitedCircleDetails_viewer_1db08V
    id
  }
}

fragment InvitedCircleDetails_viewer_1db08V on Viewer {
  id
  ...AddMemberModal_viewer
  me {
    id
    pseudo
    email
    profileType
  }
  circle(id: $circleId) @include(if: $query) {
    id
    members {
      id
      pseudo
      avatar
    }
    memberCount
    type
    owner {
      id
    }
  }
}

fragment AddMemberModal_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "circleId",
    "type": "ID",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "Boolean!",
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pseudo",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InvitedCircleDetailsRefetchQuery",
  "id": null,
  "text": "query InvitedCircleDetailsRefetchQuery(\n  $circleId: ID\n  $query: Boolean!\n) {\n  viewer {\n    ...InvitedCircleDetails_viewer_1db08V\n    id\n  }\n}\n\nfragment InvitedCircleDetails_viewer_1db08V on Viewer {\n  id\n  ...AddMemberModal_viewer\n  me {\n    id\n    pseudo\n    email\n    profileType\n  }\n  circle(id: $circleId) @include(if: $query) {\n    id\n    members {\n      id\n      pseudo\n      avatar\n    }\n    memberCount\n    type\n    owner {\n      id\n    }\n  }\n}\n\nfragment AddMemberModal_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InvitedCircleDetailsRefetchQuery",
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
            "name": "InvitedCircleDetails_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circleId",
                "variableName": "circleId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "query",
                "variableName": "query",
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
    "name": "InvitedCircleDetailsRefetchQuery",
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
          v1,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "me",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "email",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "circle",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "circleId",
                    "type": "ID"
                  }
                ],
                "concreteType": "Circle",
                "plural": false,
                "selections": [
                  v1,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "members",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": true,
                    "selections": [
                      v1,
                      v2,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "avatar",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "memberCount",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "type",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "owner",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "User",
                    "plural": false,
                    "selections": [
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b06f51344331111977cbd7d1542fa128';
module.exports = node;
