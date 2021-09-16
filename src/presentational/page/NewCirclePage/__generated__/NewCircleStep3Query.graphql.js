/**
 * @flow
 * @relayHash bb380ff3a45426805144b2847948866b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NewCircleStep3_viewer$ref = any;
export type NewCircleStep3QueryVariables = {||};
export type NewCircleStep3QueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: NewCircleStep3_viewer$ref
  |}
|};
export type NewCircleStep3Query = {|
  variables: NewCircleStep3QueryVariables,
  response: NewCircleStep3QueryResponse,
|};
*/


/*
query NewCircleStep3Query {
  viewer {
    ...NewCircleStep3_viewer
    id
  }
}

fragment NewCircleStep3_viewer on Viewer {
  id
  me {
    id
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
  "name": "NewCircleStep3Query",
  "id": null,
  "text": "query NewCircleStep3Query {\n  viewer {\n    ...NewCircleStep3_viewer\n    id\n  }\n}\n\nfragment NewCircleStep3_viewer on Viewer {\n  id\n  me {\n    id\n    profileType\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewCircleStep3Query",
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
            "name": "NewCircleStep3_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewCircleStep3Query",
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
(node/*: any*/).hash = '83444366b18182457794043db43963a2';
module.exports = node;
