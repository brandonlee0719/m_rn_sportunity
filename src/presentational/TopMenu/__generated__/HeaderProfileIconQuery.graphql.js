/**
 * @flow
 * @relayHash 739d65abb25b57f7cc4639d466882f2d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HeaderProfileIcon_viewer$ref = any;
export type HeaderProfileIconQueryVariables = {||};
export type HeaderProfileIconQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: HeaderProfileIcon_viewer$ref
  |}
|};
export type HeaderProfileIconQuery = {|
  variables: HeaderProfileIconQueryVariables,
  response: HeaderProfileIconQueryResponse,
|};
*/


/*
query HeaderProfileIconQuery {
  viewer {
    ...HeaderProfileIcon_viewer
    id
  }
}

fragment HeaderProfileIcon_viewer on Viewer {
  id
  me {
    id
    avatar
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
  "name": "HeaderProfileIconQuery",
  "id": null,
  "text": "query HeaderProfileIconQuery {\n  viewer {\n    ...HeaderProfileIcon_viewer\n    id\n  }\n}\n\nfragment HeaderProfileIcon_viewer on Viewer {\n  id\n  me {\n    id\n    avatar\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeaderProfileIconQuery",
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
            "name": "HeaderProfileIcon_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeaderProfileIconQuery",
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
                "name": "avatar",
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
(node/*: any*/).hash = 'f0ae62d66bd474acb70f9560bbf453e1';
module.exports = node;
