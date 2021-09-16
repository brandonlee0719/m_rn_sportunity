/**
 * @flow
 * @relayHash e3657c5ab660c1618b5d5ad6ee72675e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EventShareIcon_viewer$ref = any;
export type EventShareIconQueryVariables = {|
  sportunityId?: ?string
|};
export type EventShareIconQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: EventShareIcon_viewer$ref
  |}
|};
export type EventShareIconQuery = {|
  variables: EventShareIconQueryVariables,
  response: EventShareIconQueryResponse,
|};
*/


/*
query EventShareIconQuery(
  $sportunityId: ID
) {
  viewer {
    ...EventShareIcon_viewer_4aKoRU
    id
  }
}

fragment EventShareIcon_viewer_4aKoRU on Viewer {
  id
  sportunity(id: $sportunityId) {
    id
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "sportunityId",
    "type": "ID",
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
  "name": "EventShareIconQuery",
  "id": null,
  "text": "query EventShareIconQuery(\n  $sportunityId: ID\n) {\n  viewer {\n    ...EventShareIcon_viewer_4aKoRU\n    id\n  }\n}\n\nfragment EventShareIcon_viewer_4aKoRU on Viewer {\n  id\n  sportunity(id: $sportunityId) {\n    id\n    title\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "EventShareIconQuery",
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
            "name": "EventShareIcon_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "sportunityId",
                "variableName": "sportunityId",
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
    "name": "EventShareIconQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "sportunity",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "sportunityId",
                "type": "ID"
              }
            ],
            "concreteType": "Sportunity",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
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
(node/*: any*/).hash = '212af97a621e8f9242f0ca01669362c3';
module.exports = node;
