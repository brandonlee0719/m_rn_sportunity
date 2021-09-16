/**
 * @flow
 * @relayHash 3466cfa55068702af560a693b43c393d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FilterSport_viewer$ref = any;
export type FilterSportQueryVariables = {||};
export type FilterSportQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: FilterSport_viewer$ref
  |}
|};
export type FilterSportQuery = {|
  variables: FilterSportQueryVariables,
  response: FilterSportQueryResponse,
|};
*/


/*
query FilterSportQuery {
  viewer {
    ...FilterSport_viewer
    id
  }
}

fragment FilterSport_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "FilterSportQuery",
  "id": null,
  "text": "query FilterSportQuery {\n  viewer {\n    ...FilterSport_viewer\n    id\n  }\n}\n\nfragment FilterSport_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FilterSportQuery",
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
            "name": "FilterSport_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FilterSportQuery",
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
(node/*: any*/).hash = '37ed202ad5255a06adb7816fe1e039b1';
module.exports = node;
