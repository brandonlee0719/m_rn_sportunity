/**
 * @flow
 * @relayHash 0204ff2dd9666114f59642f67b71f67e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SportunitySport_viewer$ref = any;
export type SupportedLanguage = "DE" | "EN" | "ES" | "FR" | "%future added value";
export type SportFilter = {
  name?: ?string,
  language: SupportedLanguage,
};
export type SportunitySportRefetchQueryVariables = {|
  querySports: boolean,
  count?: ?number,
  sportFilter?: ?SportFilter,
|};
export type SportunitySportRefetchQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: SportunitySport_viewer$ref
  |}
|};
export type SportunitySportRefetchQuery = {|
  variables: SportunitySportRefetchQueryVariables,
  response: SportunitySportRefetchQueryResponse,
|};
*/


/*
query SportunitySportRefetchQuery(
  $querySports: Boolean!
  $count: Int
  $sportFilter: SportFilter
) {
  viewer {
    ...SportunitySport_viewer_9st2p
    id
  }
}

fragment SportunitySport_viewer_9st2p on Viewer {
  id
  sports(first: $count, filter: $sportFilter) @include(if: $querySports) {
    ...SportList_allSports
  }
}

fragment SportList_allSports on SportConnection {
  edges {
    node {
      id
      name {
        id
        EN
        FR
      }
      logo
      positions {
        id
        EN
        FR
      }
      certificates {
        id
        name {
          id
          EN
          FR
        }
      }
      levels {
        id
        EN {
          name
          description
          skillLevel
        }
        FR {
          name
          description
          skillLevel
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
    "name": "querySports",
    "type": "Boolean!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "sportFilter",
    "type": "SportFilter",
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
  v1,
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
  }
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "name",
  "storageKey": null,
  "args": null,
  "concreteType": "TranslatedString",
  "plural": false,
  "selections": v2
},
v4 = [
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
    "name": "description",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "skillLevel",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SportunitySportRefetchQuery",
  "id": null,
  "text": "query SportunitySportRefetchQuery(\n  $querySports: Boolean!\n  $count: Int\n  $sportFilter: SportFilter\n) {\n  viewer {\n    ...SportunitySport_viewer_9st2p\n    id\n  }\n}\n\nfragment SportunitySport_viewer_9st2p on Viewer {\n  id\n  sports(first: $count, filter: $sportFilter) @include(if: $querySports) {\n    ...SportList_allSports\n  }\n}\n\nfragment SportList_allSports on SportConnection {\n  edges {\n    node {\n      id\n      name {\n        id\n        EN\n        FR\n      }\n      logo\n      positions {\n        id\n        EN\n        FR\n      }\n      certificates {\n        id\n        name {\n          id\n          EN\n          FR\n        }\n      }\n      levels {\n        id\n        EN {\n          name\n          description\n          skillLevel\n        }\n        FR {\n          name\n          description\n          skillLevel\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SportunitySportRefetchQuery",
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
            "name": "SportunitySport_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "querySports",
                "variableName": "querySports",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "sportFilter",
                "variableName": "sportFilter",
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
    "name": "SportunitySportRefetchQuery",
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
            "condition": "querySports",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sports",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "filter",
                    "variableName": "sportFilter",
                    "type": "SportFilter"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "count",
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
                          v3,
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
                            "name": "positions",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TranslatedString",
                            "plural": true,
                            "selections": v2
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "certificates",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Certificate",
                            "plural": true,
                            "selections": [
                              v1,
                              v3
                            ]
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
                                "selections": v4
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "FR",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SportLevel",
                                "plural": false,
                                "selections": v4
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
(node/*: any*/).hash = '926b8f0beebaa9a3e375d628ef1c9058';
module.exports = node;
