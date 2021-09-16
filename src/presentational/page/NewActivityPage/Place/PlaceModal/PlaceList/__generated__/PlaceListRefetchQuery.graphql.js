/**
 * @flow
 * @relayHash 461b38cd7f12033621767562a8453f5e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PlaceList_viewer$ref = any;
export type PlaceListRefetchQueryVariables = {|
  query: boolean
|};
export type PlaceListRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: PlaceList_viewer$ref
  |}
|};
export type PlaceListRefetchQuery = {|
  variables: PlaceListRefetchQueryVariables,
  response: PlaceListRefetchQueryResponse,
|};
*/


/*
query PlaceListRefetchQuery(
  $query: Boolean!
) {
  viewer {
    ...PlaceList_viewer_1Qr5xf
    id
  }
}

fragment PlaceList_viewer_1Qr5xf on Viewer {
  id
  venues(last: 50) @include(if: $query) {
    edges {
      node {
        id
        name
        address {
          address
          country
          city
          zip
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PlaceListRefetchQuery",
  "id": null,
  "text": "query PlaceListRefetchQuery(\n  $query: Boolean!\n) {\n  viewer {\n    ...PlaceList_viewer_1Qr5xf\n    id\n  }\n}\n\nfragment PlaceList_viewer_1Qr5xf on Viewer {\n  id\n  venues(last: 50) @include(if: $query) {\n    edges {\n      node {\n        id\n        name\n        address {\n          address\n          country\n          city\n          zip\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PlaceListRefetchQuery",
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
            "name": "PlaceList_viewer",
            "args": [
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
    "name": "PlaceListRefetchQuery",
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
            "condition": "query",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "venues",
                "storageKey": "venues(last:50)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 50,
                    "type": "Int"
                  }
                ],
                "concreteType": "VenueConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "VenueEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Venue",
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
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "address",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "AddressModel",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "address",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "country",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "city",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "zip",
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
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5da00084ba1741220265b92fb31cc825';
module.exports = node;
