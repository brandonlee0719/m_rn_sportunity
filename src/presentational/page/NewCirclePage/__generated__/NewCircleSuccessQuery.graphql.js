/**
 * @flow
 * @relayHash 7536fe970edea1c20e1179be46585529
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewCircleSuccess_viewer$ref = any;
export type NewCircleSuccessQueryVariables = {||};
export type NewCircleSuccessQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewCircleSuccess_viewer$ref
  |}
|};
export type NewCircleSuccessQuery = {|
  variables: NewCircleSuccessQueryVariables,
  response: NewCircleSuccessQueryResponse,
|};
*/


/*
query NewCircleSuccessQuery {
  viewer {
    ...NewCircleSuccess_viewer
    id
  }
}

fragment NewCircleSuccess_viewer on Viewer {
  id
  circle: circle {
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
  "name": "NewCircleSuccessQuery",
  "id": null,
  "text": "query NewCircleSuccessQuery {\n  viewer {\n    ...NewCircleSuccess_viewer\n    id\n  }\n}\n\nfragment NewCircleSuccess_viewer on Viewer {\n  id\n  circle: circle {\n    id\n    name\n    publicShortCode\n    owner {\n      id\n      pseudo\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewCircleSuccessQuery",
    "type": "Query",
    "metadata": null,
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
            "kind": "FragmentSpread",
            "name": "NewCircleSuccess_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewCircleSuccessQuery",
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
          v0,
          {
            "kind": "LinkedField",
            "alias": "circle",
            "name": "circle",
            "storageKey": null,
            "args": null,
            "concreteType": "Circle",
            "plural": false,
            "selections": [
              v0,
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
                  v0,
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
(node/*: any*/).hash = 'c399fdcd777694acb42a04b96b94134c';
module.exports = node;
