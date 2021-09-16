/**
 * @flow
 * @relayHash 43b8f46352f79a3645872863556f7a99
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewCircleSuccess_viewer$ref = any;
export type NewCircleSuccessRefetchQueryVariables = {|
  circleId?: ?string
|};
export type NewCircleSuccessRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewCircleSuccess_viewer$ref
  |}
|};
export type NewCircleSuccessRefetchQuery = {|
  variables: NewCircleSuccessRefetchQueryVariables,
  response: NewCircleSuccessRefetchQueryResponse,
|};
*/


/*
query NewCircleSuccessRefetchQuery(
  $circleId: ID
) {
  viewer {
    ...NewCircleSuccess_viewer_2razqW
    id
  }
}

fragment NewCircleSuccess_viewer_2razqW on Viewer {
  id
  circle: circle(id: $circleId) {
    id
    name
    publicShortCode
    owner {
      id
      pseudo
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
  "name": "NewCircleSuccessRefetchQuery",
  "id": null,
  "text": "query NewCircleSuccessRefetchQuery(\n  $circleId: ID\n) {\n  viewer {\n    ...NewCircleSuccess_viewer_2razqW\n    id\n  }\n}\n\nfragment NewCircleSuccess_viewer_2razqW on Viewer {\n  id\n  circle: circle(id: $circleId) {\n    id\n    name\n    publicShortCode\n    owner {\n      id\n      pseudo\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewCircleSuccessRefetchQuery",
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
            "name": "NewCircleSuccess_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "circleId",
                "variableName": "circleId",
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
    "name": "NewCircleSuccessRefetchQuery",
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
            "alias": "circle",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "publicShortCode",
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
                  v1,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "pseudo",
                    "args": null,
                    "storageKey": null
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
(node/*: any*/).hash = 'ea0f9b1b3c946082b4aec2b2099f0e1e';
module.exports = node;
