/**
 * @flow
 * @relayHash 406d35d6e896a7412751afb6f0d676b8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewCircleView_viewer$ref = any;
export type NewCircleViewQueryVariables = {||};
export type NewCircleViewQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewCircleView_viewer$ref
  |}
|};
export type NewCircleViewQuery = {|
  variables: NewCircleViewQueryVariables,
  response: NewCircleViewQueryResponse,
|};
*/


/*
query NewCircleViewQuery {
  viewer {
    ...NewCircleView_viewer
    id
  }
}

fragment NewCircleView_viewer on Viewer {
  id
  me {
    id
    profileType
  }
  ...NewCircleAdvancedSettingsModal_viewer
}

fragment NewCircleAdvancedSettingsModal_viewer on Viewer {
  id
  me {
    profileType
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
  "name": "NewCircleViewQuery",
  "id": null,
  "text": "query NewCircleViewQuery {\n  viewer {\n    ...NewCircleView_viewer\n    id\n  }\n}\n\nfragment NewCircleView_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n  }\n  ...NewCircleAdvancedSettingsModal_viewer\n}\n\nfragment NewCircleAdvancedSettingsModal_viewer on Viewer {\n  id\n  me {\n    profileType\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewCircleViewQuery",
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
            "name": "NewCircleView_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewCircleViewQuery",
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
                "name": "profileType",
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
(node/*: any*/).hash = '859f86367b592f105596f4b601960c6e';
module.exports = node;
