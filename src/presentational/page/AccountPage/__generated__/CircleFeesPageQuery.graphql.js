/**
 * @flow
 * @relayHash 717a69c94b122122e255c651b1e019ca
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CircleFeesPage_viewer$ref = any;
export type CircleFeesPageQueryVariables = {||};
export type CircleFeesPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: CircleFeesPage_viewer$ref
  |}
|};
export type CircleFeesPageQuery = {|
  variables: CircleFeesPageQueryVariables,
  response: CircleFeesPageQueryResponse,
|};
*/


/*
query CircleFeesPageQuery {
  viewer {
    ...CircleFeesPage_viewer
    id
  }
}

fragment CircleFeesPage_viewer on Viewer {
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
  "name": "CircleFeesPageQuery",
  "id": null,
  "text": "query CircleFeesPageQuery {\n  viewer {\n    ...CircleFeesPage_viewer\n    id\n  }\n}\n\nfragment CircleFeesPage_viewer on Viewer {\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CircleFeesPageQuery",
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
            "name": "CircleFeesPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CircleFeesPageQuery",
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
              v0
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
(node/*: any*/).hash = '1a99aaf42a1f94ac1df7a57e25a8486b';
module.exports = node;
