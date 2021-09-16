/**
 * @flow
 * @relayHash 31708c2dbff88e7a1b494afda6781da6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type WalletPage_viewer$ref = any;
export type WalletPageQueryVariables = {||};
export type WalletPageQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: WalletPage_viewer$ref
  |}
|};
export type WalletPageQuery = {|
  variables: WalletPageQueryVariables,
  response: WalletPageQueryResponse,
|};
*/


/*
query WalletPageQuery {
  viewer {
    ...WalletPage_viewer
    id
  }
}

fragment WalletPage_viewer on Viewer {
  id
  me {
    id
    isProfileComplete
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
  "name": "WalletPageQuery",
  "id": null,
  "text": "query WalletPageQuery {\n  viewer {\n    ...WalletPage_viewer\n    id\n  }\n}\n\nfragment WalletPage_viewer on Viewer {\n  id\n  me {\n    id\n    isProfileComplete\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "WalletPageQuery",
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
            "name": "WalletPage_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "WalletPageQuery",
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
                "name": "isProfileComplete",
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
(node/*: any*/).hash = '5426794e549bc803cd2677780a209208';
module.exports = node;
