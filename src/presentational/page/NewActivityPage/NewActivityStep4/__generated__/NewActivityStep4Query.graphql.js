/**
 * @flow
 * @relayHash 969addfcfa83f89aeec26eda5def2c4a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewActivityStep4_viewer$ref = any;
export type NewActivityStep4QueryVariables = {||};
export type NewActivityStep4QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewActivityStep4_viewer$ref
  |}
|};
export type NewActivityStep4Query = {|
  variables: NewActivityStep4QueryVariables,
  response: NewActivityStep4QueryResponse,
|};
*/


/*
query NewActivityStep4Query {
  viewer {
    ...NewActivityStep4_viewer
    id
  }
}

fragment NewActivityStep4_viewer on Viewer {
  ...PlaceList_viewer
  me {
    id
    fees
    profileType
  }
}

fragment PlaceList_viewer on Viewer {
  id
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
  "name": "NewActivityStep4Query",
  "id": null,
  "text": "query NewActivityStep4Query {\n  viewer {\n    ...NewActivityStep4_viewer\n    id\n  }\n}\n\nfragment NewActivityStep4_viewer on Viewer {\n  ...PlaceList_viewer\n  me {\n    id\n    fees\n    profileType\n  }\n}\n\nfragment PlaceList_viewer on Viewer {\n  id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewActivityStep4Query",
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
            "name": "NewActivityStep4_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewActivityStep4Query",
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
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a12dbd189a9be84b72f6083f42bd539b';
module.exports = node;
