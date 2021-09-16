/**
 * @flow
 * @relayHash 1f632bcb69daca7cd37e20ba1cbec68f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewActivityStep5_viewer$ref = any;
export type NewActivityStep5QueryVariables = {||};
export type NewActivityStep5QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewActivityStep5_viewer$ref
  |}
|};
export type NewActivityStep5Query = {|
  variables: NewActivityStep5QueryVariables,
  response: NewActivityStep5QueryResponse,
|};
*/


/*
query NewActivityStep5Query {
  viewer {
    ...NewActivityStep5_viewer
    id
  }
}

fragment NewActivityStep5_viewer on Viewer {
  me {
    id
    fees
    profileType
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
  "name": "NewActivityStep5Query",
  "id": null,
  "text": "query NewActivityStep5Query {\n  viewer {\n    ...NewActivityStep5_viewer\n    id\n  }\n}\n\nfragment NewActivityStep5_viewer on Viewer {\n  me {\n    id\n    fees\n    profileType\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewActivityStep5Query",
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
            "name": "NewActivityStep5_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewActivityStep5Query",
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
              v0,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fees",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "profileType",
                "args": null,
                "storageKey": null
              }
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
(node/*: any*/).hash = '0ccfd9c53398867da9574c32d6963c8b';
module.exports = node;
