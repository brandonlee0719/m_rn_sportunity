/**
 * @flow
 * @relayHash dbad543d89bcec00039913233e240282
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportunitySport_viewer$ref = any;
export type SportunitySportQueryVariables = {||};
export type SportunitySportQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SportunitySport_viewer$ref
  |}
|};
export type SportunitySportQuery = {|
  variables: SportunitySportQueryVariables,
  response: SportunitySportQueryResponse,
|};
*/


/*
query SportunitySportQuery {
  viewer {
    ...SportunitySport_viewer
    id
  }
}

fragment SportunitySport_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "SportunitySportQuery",
  "id": null,
  "text": "query SportunitySportQuery {\n  viewer {\n    ...SportunitySport_viewer\n    id\n  }\n}\n\nfragment SportunitySport_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SportunitySportQuery",
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
            "name": "SportunitySport_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SportunitySportQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'aa2076f0c49c13bb762dec51119a3671';
module.exports = node;
