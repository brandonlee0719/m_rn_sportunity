/**
 * @flow
 * @relayHash 50c2b867914a307faa511d501e4adaa3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HeaderChatIcon_viewer$ref = any;
export type HeaderChatIconQueryVariables = {||};
export type HeaderChatIconQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: HeaderChatIcon_viewer$ref
  |}
|};
export type HeaderChatIconQuery = {|
  variables: HeaderChatIconQueryVariables,
  response: HeaderChatIconQueryResponse,
|};
*/


/*
query HeaderChatIconQuery {
  viewer {
    ...HeaderChatIcon_viewer
    id
  }
}

fragment HeaderChatIcon_viewer on Viewer {
  id
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
  "name": "HeaderChatIconQuery",
  "id": null,
  "text": "query HeaderChatIconQuery {\n  viewer {\n    ...HeaderChatIcon_viewer\n    id\n  }\n}\n\nfragment HeaderChatIcon_viewer on Viewer {\n  id\n  me {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeaderChatIconQuery",
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
            "name": "HeaderChatIcon_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeaderChatIconQuery",
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
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8e947335687d3077163a684911a52f07';
module.exports = node;
