/**
 * @flow
 * @relayHash dcac36d51daa664e9a799e736c3edab6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LanguagesPage_viewer$ref = any;
export type LanguagesPageQueryVariables = {||};
export type LanguagesPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: LanguagesPage_viewer$ref
  |}
|};
export type LanguagesPageQuery = {|
  variables: LanguagesPageQueryVariables,
  response: LanguagesPageQueryResponse,
|};
*/


/*
query LanguagesPageQuery {
  viewer {
    ...LanguagesPage_viewer
    id
  }
}

fragment LanguagesPage_viewer on Viewer {
  id
  languages {
    id
    code
    name
  }
  me {
    id
    languages {
      id
      code
      name
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
},
v1 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "languages",
  "storageKey": null,
  "args": null,
  "concreteType": "Language",
  "plural": true,
  "selections": [
    v0,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "code",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "LanguagesPageQuery",
  "id": null,
  "text": "query LanguagesPageQuery {\n  viewer {\n    ...LanguagesPage_viewer\n    id\n  }\n}\n\nfragment LanguagesPage_viewer on Viewer {\n  id\n  languages {\n    id\n    code\n    name\n  }\n  me {\n    id\n    languages {\n      id\n      code\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LanguagesPageQuery",
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
            "name": "LanguagesPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LanguagesPageQuery",
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
          v1,
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
              v1
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '50c34995b88879a6583a4ec1194239bc';
module.exports = node;
