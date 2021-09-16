/**
 * @flow
 * @relayHash 413c62c5f6b84c371e488646bf5df053
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SavedFilterList_viewer$ref = any;
export type SavedFilterListRefetchQueryVariables = {|
  ids?: ?$ReadOnlyArray<?string>
|};
export type SavedFilterListRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SavedFilterList_viewer$ref
  |}
|};
export type SavedFilterListRefetchQuery = {|
  variables: SavedFilterListRefetchQueryVariables,
  response: SavedFilterListRefetchQueryResponse,
|};
*/


/*
query SavedFilterListRefetchQuery(
  $ids: [String]
) {
  viewer {
    ...SavedFilterList_viewer_3pY7A9
    id
  }
}

fragment SavedFilterList_viewer_3pY7A9 on Viewer {
  sports(ids: $ids, last: 20) {
    edges {
      node {
        id
        name {
          EN
          FR
          id
        }
        logo
        levels {
          id
          EN {
            name
          }
          FR {
            name
          }
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
    "name": "ids",
    "type": "[String]",
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
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SavedFilterListRefetchQuery",
  "id": null,
  "text": "query SavedFilterListRefetchQuery(\n  $ids: [String]\n) {\n  viewer {\n    ...SavedFilterList_viewer_3pY7A9\n    id\n  }\n}\n\nfragment SavedFilterList_viewer_3pY7A9 on Viewer {\n  sports(ids: $ids, last: 20) {\n    edges {\n      node {\n        id\n        name {\n          EN\n          FR\n          id\n        }\n        logo\n        levels {\n          id\n          EN {\n            name\n          }\n          FR {\n            name\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SavedFilterListRefetchQuery",
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
            "name": "SavedFilterList_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "ids",
                "variableName": "ids",
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
    "name": "SavedFilterListRefetchQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "sports",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "ids",
                "variableName": "ids",
                "type": "[String]"
              },
              {
                "kind": "Literal",
                "name": "last",
                "value": 20,
                "type": "Int"
              }
            ],
            "concreteType": "SportConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "SportEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Sport",
                    "plural": false,
                    "selections": [
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "name",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "TranslatedString",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "EN",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "FR",
                            "args": null,
                            "storageKey": null
                          },
                          v1
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "logo",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "levels",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Translated",
                        "plural": true,
                        "selections": [
                          v1,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "EN",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v2
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "FR",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SportLevel",
                            "plural": false,
                            "selections": v2
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v1
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7135d244da235b57e4e133683d9e29b9';
module.exports = node;
