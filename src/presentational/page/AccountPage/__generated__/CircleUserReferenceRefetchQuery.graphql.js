/**
 * @flow
 * @relayHash e11171a2a79d816572088a45092a727a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CircleUserReference_viewer$ref = any;
export type CircleUserReferenceRefetchQueryVariables = {|
  circleId: string,
  query: boolean,
|};
export type CircleUserReferenceRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CircleUserReference_viewer$ref
  |}
|};
export type CircleUserReferenceRefetchQuery = {|
  variables: CircleUserReferenceRefetchQueryVariables,
  response: CircleUserReferenceRefetchQueryResponse,
|};
*/


/*
query CircleUserReferenceRefetchQuery(
  $circleId: String!
  $query: Boolean!
) {
  viewer {
    ...CircleUserReference_viewer_1db08V
    id
  }
}

fragment CircleUserReference_viewer_1db08V on Viewer {
  id
  circlePersonalReference(circleId: $circleId) @include(if: $query)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "circleId",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "Boolean!",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CircleUserReferenceRefetchQuery",
  "id": null,
  "text": "query CircleUserReferenceRefetchQuery(\n  $circleId: String!\n  $query: Boolean!\n) {\n  viewer {\n    ...CircleUserReference_viewer_1db08V\n    id\n  }\n}\n\nfragment CircleUserReference_viewer_1db08V on Viewer {\n  id\n  circlePersonalReference(circleId: $circleId) @include(if: $query)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CircleUserReferenceRefetchQuery",
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
            "name": "CircleUserReference_viewer",
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
    "name": "CircleUserReferenceRefetchQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "Condition",
            "passingValue": true,
            "condition": "query",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "circlePersonalReference",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "circleId",
                    "variableName": "circleId",
                    "type": "String!"
                  }
                ],
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
(node/*: any*/).hash = '898dfabed08995feeeee79ba75c2089e';
module.exports = node;
