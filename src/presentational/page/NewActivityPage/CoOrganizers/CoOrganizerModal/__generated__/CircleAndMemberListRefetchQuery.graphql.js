/**
 * @flow
 * @relayHash 3a34b36e5dcf4f264e564186d2889db9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CircleAndMemberList_viewer$ref = any;
export type CircleAndMemberListRefetchQueryVariables = {|
  queryCircle: boolean,
  circleId?: ?string,
|};
export type CircleAndMemberListRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CircleAndMemberList_viewer$ref
  |}
|};
export type CircleAndMemberListRefetchQuery = {|
  variables: CircleAndMemberListRefetchQueryVariables,
  response: CircleAndMemberListRefetchQueryResponse,
|};
*/


/*
query CircleAndMemberListRefetchQuery(
  $queryCircle: Boolean!
  $circleId: ID
) {
  viewer {
    ...CircleAndMemberList_viewer_4wfQJ8
    id
  }
}

fragment CircleAndMemberList_viewer_4wfQJ8 on Viewer {
  id
  circle(id: $circleId) @include(if: $queryCircle) {
    members {
      id
      pseudo
      avatar
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "queryCircle",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "circleId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CircleAndMemberListRefetchQuery",
  "id": null,
  "text": "query CircleAndMemberListRefetchQuery(\n  $queryCircle: Boolean!\n  $circleId: ID\n) {\n  viewer {\n    ...CircleAndMemberList_viewer_4wfQJ8\n    id\n  }\n}\n\nfragment CircleAndMemberList_viewer_4wfQJ8 on Viewer {\n  id\n  circle(id: $circleId) @include(if: $queryCircle) {\n    members {\n      id\n      pseudo\n      avatar\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CircleAndMemberListRefetchQuery",
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
            "name": "CircleAndMemberList_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circleId",
                "variableName": "circleId",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "queryCircle",
                "variableName": "queryCircle",
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
    "name": "CircleAndMemberListRefetchQuery",
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
            "kind": "Condition",
            "passingValue": true,
            "condition": "queryCircle",
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
                  v1
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
(node/*: any*/).hash = 'c90b39e838f6a7c21e634c4cfa790167';
module.exports = node;
